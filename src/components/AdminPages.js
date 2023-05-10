import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const AdminPages = () => {
  const [userData, setUserData] = useState([]);

  // ログインる変数名を取得する
  //ADMINとして仮想変数を作成する
  // tao bien ao voi tai khoan dang dang nhap la admin
  // let username = "admin";
  const username = 'admin'

  useEffect(() => {
    axios
      .post(
        "http://localhost:8080/admin",
        { username },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setUserData(res.data);
      });
  }, [0]);

  //年齢計算
  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    return age;
  };
  //残り日

  const remDay = (str) => {
    const currentDate = new Date();
    const visa_date = new Date(str);
    const timeDifference = visa_date.getTime() - currentDate.getTime();
    const day = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const year = Math.floor(day / 365);
    const month = Math.floor((day % 365) / 30);
    const RDay = day - year * 365 - month * 30;
    let result = "";

    if (day > 365) {
      result = `${year} 年 ${month}月 ${RDay}日`;
    } else if (day > 30.45) {
      result = `${month}月 ${RDay}日`;
    } else {
      result = `${RDay}日`;
    }
    return result;
  };

  //DELETE
  const handleDelete = (str) => {
    const loginUsername = username;
    const item = {
      loginUsername, "username": str
    }
    axios
      .post(
        "http://localhost:8080/delete", item,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res)
        if (res.data.status === "SUCCESS") {
          window.location.reload();
        }
      });
  }

  //update
  const handleUpdate = (str) => {
    console.log('aaaaa' + str)
    axios.get("http://localhost:8080/update/" + str, 
    {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
      .then(res => {
        console.log(res.data)
        sessionStorage.setItem('userAcc1', str)
        goToAdminUpdate('/AdminUpdate')
      })
      .catch(error => {
        console(error)
      })


  }

  //遷移
  const goToAdminUpdate = useNavigate();
  const goToHome = useNavigate();

  return (
    <div>
      <title> ユーザ一覧</title>
      <h1 className="text-center my-5 text-primary font-weight-bold ">
        ようこそ 管理者 さん!
      </h1>
      <div className="clear-fix"></div>
      <div className="table-reponsive mx-3">
        <table className="text-wrap table table-striped table-hover align-middle mt-3">
          <thead>
            <tr className="align-middle">
              <th scope="col">ID</th>
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
            {userData.map((index, key) => {
              return (<tr className="align-middle" key={key}>
                <td>{index.id}</td>
                <td>{index.name}</td>
                <td>{index.sex}</td>
                <td>{index.birthday}</td>
                <td>{calculateAge(index.birthday)}</td>
                <td>{index.visa_id}</td>
                <td>{index.visa_date}</td>
                <td>{remDay(index.visa_date)}</td>
                <td>{index.visa_type}</td>
                <td>{index.country}</td>
                <td className="text-wrap Ap-note" > {index.address}</td>
                <td>{index.status}</td>
                <td className="Ap-btn ">
                  <button
                    onClick={() => handleUpdate(index.username)}
                    className="Ap-btn mb-1 btn btn-success"
                  >
                    編集
                  </button>
                  <button className="Ap-btn btn btn-danger"
                    onClick={() => handleDelete(index.username)}
                  >削除</button>
                </td>
              </tr>)
            })}
          </tbody>
        </table>
        <button
          onClick={() => goToHome("/")}
          type="button submit "
          className="btn lg-btn btn-warning d-block mx-auto my-4"
        >
          ログアウト
        </button>
      </div>
    </div>
  );
};

export default AdminPages;