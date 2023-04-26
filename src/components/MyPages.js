import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import style from "../css/test.module.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const MyPages = () => {
  
  //遷移
  const goToHome = useNavigate()
  const goToUserUpdate = useNavigate()
  const goToConfirmAcc = useNavigate()

  // const [userData,setUserData] = useState();
  // let username = sessionStorage.getItem("username");

  const username = sessionStorage.getItem("username");
  const [userData, setUserData] = useState("");
  const navigate = useNavigate()
  sessionStorage.getItem("username");
  useEffect( () => {
    axios.get("http://localhost:8080/mypage/" + username)
    .then(res => {
      if(res.data!==undefined){
        setUserData(res.data[0])
      }
    })
      .catch(error=>{
          alert("err")
      })
  }, [1])
  if (userData === undefined ) {
    navigate("/");
    return null
  } else {
    return (
      <div>
        <h1 className="text-center mt-5 text-primary font-weight-bold "> {userData.name}</h1>
        <button
          onClick={() => goToConfirmAcc("/ConfirmAcc")}
          type="button submit"
          className=" Mp-btn-top btn btn-info my-3 me-5">
          パスワード変更
        </button>
        <div className="clear-fix"></div>
        <div className="table-reponsive">
          <table className="text-wrap table table-striped table-hover align-middle mt-3">
            <thead>
              <tr className="align-middle">
                <th scope="col">#</th>
                <th scope="col">氏名</th>
                <th scope="col">性別</th>
                <th scope="col">生年月日</th>
                <th scope="col">年齢</th>
                <th scope="col">在留カード番号</th>
                <th scope="col">ビザ期限</th>
                <th scope="col">残り日</th>
                <th scope="col">ビザ資格</th>
                <th scope="col">国籍</th>
                <th scope="col">住所</th>
                <th scope="col">ノート</th>
                <th scope="col">修理</th>
              </tr>
            </thead>

            <tbody>
              <tr className="align-middle">
                <th scope="row" >1</th>
                <td>{userData.name}</td>
                <td>{userData.sex}</td>
                <td>{userData.birthday}</td>
                <td>10歳</td>
                <td>{userData.visa_id}</td>
                <td>{userData.visa_date}</td>
                <td>10日</td>
                <td>{userData.visa_type}</td>
                <td>{userData.country}</td>
                <td>{userData.address}</td>
                <td className="text-wrap Mp-note"> {userData.note}  </td>
                <td className=" d-flex justify-content-around">
                  <button
                    onClick={() => goToUserUpdate("/UserUpdate")}
                    className="Mp-btn btn btn-success">
                    編集
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() => goToHome("/")}
            className="btn lg-btn btn-success d-block mx-auto my-4">
            ログアウト
          </button>
          {/* <button type="button submit " className={style.hello}>ログアウト</button> */}
        </div>
      </div>

    );
  }
};

export default MyPages;