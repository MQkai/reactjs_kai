import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import PassUpdate from "./PassUpdate";



const HOME = (props) => {
  //location使う
  const location = useLocation()
  //message の状態useStateに設定する
  const [message, setMessage] = useState(null);
  useEffect(() => {
    //
    if (location.state && location.state.message) {
      setMessage(location.state.message);
    }
    if (location.state && location.state.messageRegisterSuccess){
      setMessage(location.state.messageRegisterSuccess)
    }
  }, [location]);


  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [loginFailed, setLoginFailed] = useState(false)
  const [userIdInputFailed, setUserIdInputFailed] = useState(false)
  const [passwordInputFailed, setPasswordInputFailed] = useState(false)


  const navigate = useNavigate();
  const login = () => {
    const item = { username, password };
    axios.post("http://localhost:8080/login", item, {//get dùng param để ,Post dell dung aram
      headers: {
        'Content-Type': 'application/json'
      }
    })

      .then(res => {
        console.log(res.data)
        if (res.data.role === "USER") {
          sessionStorage.setItem("username", res.data.username)
          navigate('/MyPages', { state: { message: 'ログインできました！' } });
        } if (res.data.role === "ADMIN") {
          console.log(res.data)
          sessionStorage.setItem("username", res.data.username);
          navigate("/AdminPages");
        }else if ((!username || username === "") && (!password || password === "")) {
          setUserIdInputFailed(true);
          setPasswordInputFailed(true);
        }
        else if (!username || username === "" ) {
          setUserIdInputFailed(true);
        }else if(!password || password === "") {
          setPasswordInputFailed(true);
        }
        else if (  res.data.status === "DEFEATED"){
          setLoginFailed(true);}
      })
      .catch(error => {
        alert("エラー発生しました。サバ接続したかどうか確認してください。")
      })

  }
  const handlePageClick = () => {
    setLoginFailed(false);
    setUserIdInputFailed(false);
    setPasswordInputFailed(false);
    setMessage(null);
  }
  //Register　遷移
  const goToRegister = useNavigate();
  return (
    <div
      onClick={handlePageClick}
      className=" Home-main container-flued ">
      {message && (<h3 className="Home-alert alert alert-success text-center ">{message}</h3>)}
      {loginFailed && (
        <h3 className="Home-alert alert alert-danger text-center ">
          アカウント存在しません。。
        </h3>
      )}

      <title>ホームページ</title>
      <div className=" row">
        <div className=" col-6 Home-box1">
          <h1 className=" Home-h1 text-center  text-primary font-weight-bold ">ようこそへ</h1>
          <h5 className=" h5 text-center pt-3 ">お会いできて嬉しいです！</h5>
          <p className="p text-center font-weight-bold">こちらビザ管理システムです。皆のビザの管理もっと簡単になるように！</p>
        </div>
        <div className=" col-4 Home-box2 ">
          <div className=" form-group ml-5 mt-3 shadow ">
            <legend className=" Home-title text-center mt-4  text-primary h3 ">ログイン</legend>
            <div className=" mb-3 mx-5">
              <label className=" form-label  " for="">ユーザ ID:</label>
              {userIdInputFailed && (
                <h6 className=" text-center text-danger ">
                  ユーザ ID入力してください。
                </h6>
              )}
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                value={username}
                className=" form-control form-control"
                placeholder="ユーザID" />
            </div>
            <div className=" mb-3 mx-5">
              <label className=" form-label  " for="">パスワード:</label>
              {passwordInputFailed && (
                <h6 className="text-center text-danger ">
                  パスワード入力してください。
                </h6>
              )}
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password" id="PassWord"
                className="  form-control "
                placeholder="パスワード" />
            </div>
            <div className=" row d-flex justify-content-center">
              <button
                onClick={login}
                className="btn btn btn-primary col-4 ">
                ログイン
              </button>
            </div>
            <div className=" border-top border-1 mx-4 mt-3 d-flex justify-content-between ">
              <div className=" mt-3 Home-content " >アカウントまだありません?</div>

              <button
                onClick={() => goToRegister("/Register")}
                className=" col-4 p-1 ml-3 my-2 Home-btn btn btn-success">
                登録
              </button>


            </div>
            <div className=" d-flex justify-content-center">
              <p className=" mt-3 d-inline-block  ">パスワード忘れた場合は <Link className="Home-Link" to="/ForgetPass">こちら</Link> </p>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
};

export default HOME;
