import {signInAction} from "./actions";
import {push} from 'connected-react-router';
import {auth, db, FirebaseTimestamp} from "../../firebase/index";
import { database } from "firebase";

// 関数の作成
export const listenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid

        db.collection("users").doc(uid).get()
          .then(snapshot => {
            const data = snapshot.data()

            dispatch(signInAction({
              isSignedIn: true,
              role: data.role,
              uid: uid,
              username: data.username
            }))
          })
      } else {
        dispatch(push("/signin"))
      }
    })
  }
}


export const signIn = (email, password) => {
    return async (dispatch) => {

if (email === "" || password === "") {
    alert("必須項目が未入力です")
    return false
  }
      
  auth.signInWithEmailAndPassword(email, password)
  .then(result => {
      const user = result.user

      if (user) {
          const uid = user.uid


          db.collection('users').doc(uid).get()
          .then(snapshot => {
              const data = snapshot.data()

              dispatch (signInAction({
                  isSignedIn: true,
                  role: database.role,
                  uid: uid,
                  username: data.username
              }))

              dispatch(push('/'))

          })
      }
  })
    }
}

// (1)signUpのオペレーションをexportする operations から 引数(素材)として username, email, password, confirmPassword を受け取る
export const signUp = (username, email, password, confirmPassword) => {
    // (2)thunkの形を作る
    return async (dispatch) => {
//    (3)validationの作成 空白があればエラーを吐き出す (後々はメソッドにまとめた方が良い)
      if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("必須項目が未入力です")
        return false
      }
  // (4)password と confirmPassword が同じかチェック
      if (password !== confirmPassword) {
        alert("パスワードが一致しません。もう一度お試しください")
        return false
      }
  
  // (5) firebase で設定した auth をreturnで呼び出す (firebaseを定数化した物)
  // パスワード認証用・ユーザーを作る(createUserWithEmailAndPassword)を設定
      return auth.createUserWithEmailAndPassword(email,password)
        .then(result => {
          const user = result.user
  
          // ユーザーが存在したら
          if (user) {
            const uid = user.uid
            // FirebaseTimestamp.now()現在のタイムを取得
            const timestamp = FirebaseTimestamp.now()
  
            const userInitialData = {
              created_at: timestamp,
              email: email,
              role: "customer",
              uid: uid,
              updated_at: timestamp,
              username: username
            }

            db.collection("users").doc(uid).set(userInitialData)
            .then(()=>{
              dispatch(push("/"))
            })
          }
        })
    }
  }