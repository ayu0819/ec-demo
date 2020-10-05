// (1) useStateの呼び出し (4) onChange のために useCallback をimportに追加する (メモ化)
import React, {useCallback, useState} from 'react'
// (2) ↓で TextInputコンポネート を呼び出す (6)PrimaryButton 設定
import {PrimaryButton,TextInput} from '../components/UIkit'
// (8)signUpのimport
import {signUp} from '../reducks/users/operations'
import {useDispatch} from "react-redux";

const SignUp = () => {
  // (9)usedispatch を使って disptach にいれる
  const dispatch = useDispatch()

  // (3) ローカルstateの定数設定
  // useState を使って、signUpに必要な State を設定する
  // また、State は 初期値 出ないといけない
const [username, setUsername] = useState (""),
      [email, setEmail] = useState (""),
      [password, setPassword] = useState (""),
      [confirmPassword, setconfirmPassword] = useState ("");

  // (5) useCallback 設定による、onchange event の処理 set-- に値を設定させる
  // いわゆる イベントリスナー
      const inputUsername = useCallback((event) => {
        setUsername(event.target.value)
      },[setUsername])
  
      const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
      },[setEmail])
  
      const inputPassword = useCallback((event) => {
        setPassword(event.target.value)
      },[setPassword])
  
      const inputconfirmPassword = useCallback((event) => {
        setconfirmPassword(event.target.value)
      },[setconfirmPassword])

// (3) return と textinput の設定
// (4)プロパティ詳細の設定
    return(
        <div className="c-section-container">
            <h2 className="u-text__headline u-text-center">アカウント登録</h2>
            {/* 空白のdiv */}
            <div className="module-spacer--medium" />
      {/* 呼び出された textInput を使う    */}
      {/* 呼び出された TextInput に値を設定する (TextInput と同じプロパティ) */}
       <TextInput
        fullWidth={true} label={"ユーザー名"} multiline={false}
        required={true} rows={1} value={username} type={"text"} onChange={inputUsername}
      />
{/* ※"onChange" 子供のコンポネートに usurname を設定を変更する関数を渡す場合は "useCallback" でimport するとパフォーマンスがいい */}
      <TextInput
        fullWidth={true} label={"メールアドレス"} multiline={false}
        required={true} rows={1} value={email} type={"email"} onChange={inputEmail}
      />

      <TextInput
        fullWidth={true} label={"パスワード"} multiline={false}
        required={true} rows={1} value={password} type={"password"} onChange={inputPassword}
      />

      <TextInput
        fullWidth={true} label={"パスワード(確認用)"} multiline={false}
        required={true} rows={1} value={confirmPassword} type={"password"} onChange={inputconfirmPassword}
      />
      <div className="module-spacer--medium"></div>
      <div className="center">
        {/* (7) PrimaryButton を呼び出す */}
        <PrimaryButton
          label={"アカウントを登録する"}
          // (10) PrimaryButtonに username を引数に渡す
          onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
        />
      </div>
    </div>
     
    )
}

export default SignUp