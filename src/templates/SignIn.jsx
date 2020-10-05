import React, {useCallback, useState} from 'react'
import {PrimaryButton,TextInput} from '../components/UIkit'
import {signIn} from '../reducks/users/operations'
import {useDispatch} from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();

  // email とpassword の stateの設定
const [email, setEmail] = useState (""),
      [password, setPassword] = useState ("")

  // onchange event の処理
      const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
      },[setEmail])
  
      const inputPassword = useCallback((event) => {
        setPassword(event.target.value)
      },[setPassword])

    return(
        <div className="c-section-container">
            <h2 className="u-text__headline u-text-center">サインイン</h2>
            {/* 空白のdiv */}
            <div className="module-spacer--medium" />

      <TextInput
        fullWidth={true} label={"メールアドレス"} multiline={false}
        required={true} rows={1} value={email} type={"email"} onChange={inputEmail}
      />

      <TextInput
        fullWidth={true} label={"パスワード"} multiline={false}
        required={true} rows={1} value={password} type={"password"} onChange={inputPassword}
      />

      <div className="module-spacer--medium"></div>
      <div className="center">
        <PrimaryButton
          label={"サインイン"}
          onClick={() => dispatch(signIn(email, password))}
        />
      </div>
    </div>
     
    )
}
export default SignIn