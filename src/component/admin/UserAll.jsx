import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UserAll() {
  const username = JSON.parse(sessionStorage.getItem("loginUsername")).username;
  const [userData,setUserData]=useState(Object);
  useEffect(() => {
    axios.post("http://localhost:8080/admin",{username},{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res=>{
      setUserData(res.data)
    })
    .catch(error =>{
      // return 
    })
    return 
  }, [0])
let RemDay = (str) =>{
  const today = new Date();
  const futureDate = new Date(str);
  const booleanDay = futureDate.getTime() - today.getTime()
  const timeDiff = Math.abs(booleanDay);
  const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  const yearDiff = Math.floor(dayDiff / 365);
  const monthDiff = Math.floor((dayDiff - (yearDiff * 365)) / 30);
  const remainingDays = dayDiff - (yearDiff * 365) - (monthDiff * 30);
  let remDay= `<span style="color:#${booleanDay>0? "37BC9B" : (monthDiff>0 ? "DA4453" : "F6BB42" ) };">${yearDiff>0 ? yearDiff+"年": ""}${monthDiff>0 ? monthDiff+"月": ""}${remainingDays>0 ? remainingDays+"日": "今日期限切れ"}</span>`;
  return(
    <div dangerouslySetInnerHTML={{__html: remDay}} />
  );
}

  return (
    <div>
      
      <Table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th> 
            <th>ユーザー名</th>
            <th>ビザ番号</th>
            <th>名前</th>
            <th>性別</th>
            <th>国籍</th>
            <th>住所</th>
            <th>ビザ期限</th>
            <th>日数</th>
            <th>在留資格</th>
            <th>状態</th>
            <th>行動</th>
          </tr>
        </thead>
        <tbody>
        {Object.keys(userData).map((key) => (
          <tr key={key}>
          <td>{userData[key].id}</td>
          <td>{userData[key].username}</td>
          <td>{userData[key].visa_id}</td>
          <td>{userData[key].name}</td>
          <td>{userData[key].sex}</td>
          <td>{userData[key].country}</td>
          <td>{userData[key].address}</td>
          <td>{userData[key].visa_date}</td>
          <td>{RemDay(userData[key].visa_date)}</td>
          <td>{userData[key].visa_type}</td>
          <td>{userData[key].status}</td>
          <td><Link to={"/user/"+userData[key].username}>編集</Link></td>
          </tr>
      ))}
        </tbody>
      </Table>
    </div>

  )
}

export default UserAll