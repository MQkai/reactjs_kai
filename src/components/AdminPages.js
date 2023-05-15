import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from 'react-bootstrap/Dropdown';

const AdminPages = () => {
  //location使う
  const location = useLocation()
  //message の状態useStateに設定する
  const [message, setMessage] = useState(null);
  useEffect(() => {
    if (location.state && location.state.message) {
      setMessage(location.state.message);
    }
  }, [location]);

  const [userData, setUserData] = useState([]);
  const navigate = useNavigate()
  const [errorMes, setErrorMess] = useState(false)
  // ログインる変数名を取得する
  //ADMINとして仮想変数を作成する
  // tao bien ao voi tai khoan dang dang nhap la admin
  // let username = "admin";
  const username = 'admin'
//ユーザのデータ一覧取得します
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
    if (timeDifference < 0) {
      result = "ビザの有効期限が切れました";
    }
    else if (day > 365) {
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
    axios.get("http://localhost:8080/update/" + str,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      .then(res => {
        if (res.data.length === 0) {
          //データ見つけない場合はエーラメッセージ出して、ユーザ一覧ページに残ります
          setErrorMess(true)
          navigate('/AdminPages')
        }
        else if (res.data.length !== 0) {
          console.log(res.data[0])
          sessionStorage.setItem('userAcc1', str)
          const data = {
            name: res.data[0].name,
            sex: res.data[0].sex,
            birthday: res.data[0].birthday,
            visa_id: res.data[0].visa_id,
            visa_date: res.data[0].visa_date,
            visa_type: res.data[0].visa_type,
            country: res.data[0].country,
            address: res.data[0].address

          };
          // object => string JSON に変更します
          const myJSON = JSON.stringify(data);
          //　string JSON　は 　sessionStorageに保存する
          sessionStorage.setItem('data', myJSON);
          goToAdminUpdate('/AdminUpdate')
        }

      })
      .catch(error => {
        console(error)
      })
  }

  //検索機能
  const [searchName, setSearchName] = useState("");

  //ユーザのアカウントの状態は active か、deleteか？確認する
  const [noteFilter, setNoteFilter] = useState("");
  const handleActiveFilter = () => {
    setNoteFilter("ACTIVE");
  };
  const handleAllFilter = () => {
    setNoteFilter("");
  }
  const handleDeleteFilter = () => {
    setNoteFilter("DELETE");
  };
  const handleClick = () => {
    setErrorMess(false)
    setMessage(null);
  }

  //遷移
  const goToAdminUpdate = useNavigate();
  const goToHome = useNavigate();

  return (
    <div onClick={handleClick}>
      <title> ユーザ一覧</title>
      {errorMes && <h3 className="mt-2 alert alert-danger text-center "> このアカウントはもう存在しません。 </h3>}
      {message && <h3 className="Home-alert alert alert-success text-center mt-1">{message}</h3>}
      <h1 className="text-center my-5 text-primary font-weight-bold ">
        ようこそ 管理者 さん!
      </h1>
      <div className="search-box d-flex justify-content-end me-5">

        <input className="form-control   ps-2 border border-rigth-0 border-primary" type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="ユーザの名前で検索..." />
        <FontAwesomeIcon className="pe-2 icon-search  " icon="fa-solid fa-magnifying-glass " />
      </div>

      <div className="clear-fix"></div>
      <div className="table-reponsive mx-3">
        <table className="text-wrap table table-striped table-hover align-middle mt-3">
          <thead>
            <tr className="align-middle">
              <th scope="col">番号</th>
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
              <th scope="col">
              <Dropdown className="dropdown">
                <Dropdown.Toggle  className="dropdown">
                スターテス
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleAllFilter}>All</Dropdown.Item>
                  <Dropdown.Item onClick={handleActiveFilter}>ACTIVE</Dropdown.Item>
                  <Dropdown.Item onClick={handleDeleteFilter}>DELETE</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </th>

              <th scope="col">修理</th>
            </tr>
          </thead>
          <tbody>
            {userData
              .filter((user) =>
                user.status.includes(noteFilter)
              )
              .filter((user) => user.name.includes(searchName))
              .map((index, key) => {
                return (<tr className="align-middle" key={key}>
                  <td>{key + 1}</td>
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