import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import style from "../css/test.module.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const MyPages = () => {

  //日付計算

  //遷移
  const goToHome = useNavigate()
  const goToUserUpdate = useNavigate()
  const goToConfirmAcc = useNavigate()

  // const [userData,setUserData] = useState();
  // let username = sessionStorage.getItem("username");
  const [loginSuccess, setLoginSuccess] = useState(true)
  const username = sessionStorage.getItem("username");
  const [userData, setUserData] = useState("");
  const navigate = useNavigate()
  // sessionStorage.getItem("username");
  useEffect(() => {
    axios.get("http://localhost:8080/mypage/" + username)
      .then(res => {
        if (res.data !== undefined) {
          sessionStorage.setItem('getUsernameFromMyPages',username)
          setUserData(res.data[0])
        }
      })
      .catch(error => {
        alert("error")
      })
  }, [0])

  //年齢計算
  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    return age;
  }

  //残り日
  const currentDate = new Date();
  const visa_date = new Date(userData.visa_date);
  const timeDifference = visa_date.getTime() - currentDate.getTime();
  const day = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  const year = Math.floor(day / 365);
  const month = Math.floor((day % 365) / 30);
  const RDay = day - (year * 365) - (month * 30);
  let result = '';

  if (day > 365) {
    result = `${year} 年 ${month}月 ${RDay}日`;
  } else if (day > 30.45) {
    result = `${month}月 ${RDay}日`;
  } else {
    result = `${RDay}日`;
  }

  
const handlePageClick =()=> {
  setLoginSuccess(false)
}



  if (userData === undefined) {
    navigate("/");
    return null
  } else {
    return (
      <div
      onClick={handlePageClick}
      >
        <title> ユーザ ページ</title>
        {loginSuccess && (
          <h3 className='alert alert-success text-center mt-2'>ログイン できました！！！</h3>
        )}
        <h1 className="text-center mt-2 text-primary font-weight-bold "> My Pages</h1>

        <div className="clear-fix "></div>
        <div className="table-reponsive col-4 mx-auto">
          <table className="text-wrap table table-striped table-hover align-middle mt-3 border">
            <thead>
              <tr>
                <th>氏名:</th>
                <td>{userData.name}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>性別:</th>
                <td>{userData.sex}</td>
              </tr>
              <tr>
                <th>生年月日:</th>
                <td>{userData.birthday}</td>
              </tr>
              <tr>
                <th>年齢:</th>
                <td>{calculateAge(userData.birthday)}</td>

              </tr>
              <tr>
                <th>在留カード番号:</th>
                <td>{userData.visa_id}</td>
              </tr>
              <tr>
                <th>ビザ期限:</th>
                <td>{userData.visa_date}</td>
              </tr>
              <tr>
                <th>残り日:</th>
                <td>{result}</td>
              </tr>
              <tr>
                <th>ビザ資格:</th>
                <td>{userData.visa_type}</td>
              </tr>
              <tr>
                <th>国籍:</th>
                <td>{userData.country}</td>
              </tr>
              <tr>
                <th>住所:</th>
                <td>{userData.address}</td>
              </tr>

            </tbody>
          </table>
          <div className="d-flex justify-content-around">

            <button
              onClick={() => goToUserUpdate("/")}
              className="btn btn-success text-bg-warning m-1">
              ログアウト
            </button>
            <button
              onClick={() => goToHome("/UserUpdate")}
              className="btn btn-success m-1">
              編集
            </button>

            <button
              onClick={() => goToConfirmAcc("/PassUpdate")}
              type="button submit"
              className=" btn btn-success m-1 bg-info">
              パスワード変更
            </button>
          </div>

          {/* <button type="button submit " className={style.hello}>ログアウト</button> */}
        </div>
      </div>

    );
  }
};

export default MyPages;