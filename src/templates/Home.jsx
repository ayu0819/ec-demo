import React from 'react'
import {getUserId} from "../reducks/users/selectors"
import {getUsername} from "../reducks/users/selectors"
import {useSelector} from "react-redux"

const Home = () => {
    const selector = useSelector(state => state);
    const uid = getUserId(selector)
    const username = getUsername(selector)

  return ( 
  <div>
   <h2> This is Home Page </h2>
    <p>ユーザーID: {uid}</p>
    <p>ユーザー名: {username}</p>
   </div>
  )
}
export default Home