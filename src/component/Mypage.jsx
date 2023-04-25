import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Mypage() {
    const username = sessionStorage.getItem("loginUsername")
    const [userData,setUserData]=useState("");
    useEffect(() => {
      axios.get('http://localhost:8080/mypage/'+username, {
        headers: {
          'Content-Type': 'application/json'
        }})
    .then(response =>{
      if(response.data!==undefined){
          setUserData(response.data[0])
        }
    })
    .catch(e=>{

    })
    
    }, [1])
    
    if(userData===undefined){
      return(
        <>
        <h1>ユーザー名が存じませんません</h1>
        </>
      )
    }else{
      return(
        <>
        <h1>{userData.username}</h1>
    <table>
      <tbody>
      <tr>
        <td>ユーザー名：</td>
        <td>{userData.username}</td>
      </tr>
      <tr>
        <td>ビザID：：</td>
        <td>{userData.visa_id}</td>
      </tr>
      <tr>
        <td>名前：</td>
        <td>{userData.name}</td>
      </tr>
      <tr>
        <td>生年月日：</td>
        <td>{userData.birthday}</td>
      </tr>
      <tr>
        <td>性別：</td>
        <td>{userData.sex}</td>
      </tr>
      <tr>
        <td>国籍：</td>
        <td>{userData.country}</td>
      </tr>
      <tr>
        <td>住所：</td>
        <td>{userData.address}</td>
      </tr>
     <tr>
        <td>ビザ期限：</td>
        <td >{userData.visa_date}</td>
      </tr>
      <tr>
        <td>在留資格：</td>
        <td >{userData.visa_type}</td>
      </tr>
      </tbody>
    </table>
    </>
    )
  }
}

export default Mypage