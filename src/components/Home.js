import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Home.css";

const HOME = () => {
  
  const GoToRegister = () => {
    const ClickBtn = <Link to="/Register">Register</Link>;
    ClickBtn.click;
  }


  return (
    <div className="container-flued ">
      <div className="row">
        <div className="col-6 box">
          <h1 className="text-center  text-primary font-weight-bold ">ようこそへ</h1>
          <h5 className="text-center pt-3 ">お会いできて嬉しいです！</h5>
          <p className="text-center font-weight-bold">こちらビザ管理システムです。皆のビザの管理もっと簡単になるように！</p>
        </div>
        <div className="col-6 box ">
          <div className="form-group ml-5 mt-3 shadow ">
            <legend className="title text-center mt-4 font-weight-bold text-primary h3 ">ログイン</legend>
            <div className="mb-3 mx-5">
              <label className="form-label  " for="">ユーザ ID:</label>
              <input type="text" id="UserId" className="form-control" placeholder="ユーザ　ID" />
            </div>
            <div className="mb-3 mx-5">
              <label className="form-label  " for="">パスワード:</label>
              <input type="password" id="PassWord" className="form-control " placeholder="パスワード" />
            </div>
            <div className="row d-flex justify-content-center">
              <button type="button submit" className="btn btn-primary col-4 ">ログイン</button>
            </div>
            <div className="border-top border-1 mx-4 mt-3 row d-flex justify-content-center  ">
              <div className="mt-3 content">アカウントまだありません?</div>
              <button onClick={GoToRegister}
              type="button submit" 
              className="col-4 p-1 ml-3 my-2 btn btn-success">登録</button>
            </div>
            <div className="d-flex justify-content-center">
              <p className="mt-3 content ">パスワード忘れた場合は <Link to="/ForgetPass">こちら</Link> </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="like_button_container"></div>
      <Link to="/">home</Link>
      <Link to="/Register">Register</Link>
      <Link to="/C">C</Link> */}
    </div>
    
  );
};

export default HOME;
