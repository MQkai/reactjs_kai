import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    username: "",
    password: "",
    name: "",
    sex: "",
    birthday: "",
    visa_ID: "",
    visa_date: "",
    visa_type: "",
    country: "",
    address: "",
    status: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
    //console.log(post);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(post);
    // console.log(post);
    axios
      .post("http://localhost:8080/register", post, {
        //get dùng param để ,Post dell dung aram
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.information === "Insertできました") {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="R-main container my-5 shadow">
      <title>新規登録</title>
      <h1 className="text-center text-primary py-3">新規登録</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group px-5 py-2">
          <label className="pb-1">ユーザ ID:</label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="ユーザ ID"
            value={post.username}
            onChange={handleInput}
          />
        </div>
        <div className="form-group px-5 py-2">
          <label className="pb-1">パスワード:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="パスワード"
            value={post.password}
            onChange={handleInput}
          />
        </div>
        <div className="form-group px-5 py-2">
          <label className="pb-1">氏名:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="氏名"
            value={post.name}
            onChange={handleInput}
          />
        </div>
        <div className="form-check row py-3">
          <p className=" R-p ml-3 mb-2 d-inline">性別：</p>
          <div className="form-check col-4 d-inline ">
            <input
              className="mr-4 mt-2"
              type="radio"
              name="sex"
              value="男"
              onChange={handleInput}
            />
            <label className="ms-3 " name="sex">
              男
            </label>
          </div>
          <div className="form-check col-4 d-inline">
            <input
              className="mr-4 mt-2"
              type="radio"
              name="sex"
              value="女 "
              onChange={handleInput}
            />
            <label className="ms-3" name="sex">
              女
            </label>
          </div>
        </div>
        <div className="form-group px-5 py-2">
          <label className="pb-1">生年月日：</label>
          <input
            type="date"
            className="form-control"
            name="birthday"
            placeholder="生年月日"
            value={post.birthday}
            onChange={handleInput}
          />
        </div>
        <div className="form-group px-5 py-2">
          <label className="pb-1">在留カード番号：</label>
          <input
            type="text"
            className="form-control"
            name="visa_ID"
            placeholder="在留カード番号"
            value={post.visa_ID}
            onChange={handleInput}
          />
        </div>
        <div className="form-group px-5 py-2">
          <label className="pb-1">ビザ期限：</label>
          <input
            type="date"
            className="form-control"
            name="visa_date"
            placeholder="ビザ期限"
            value={post.visa_date}
            onChange={handleInput}
          />
        </div>
        <div>
          <label className="my-2 ms-5">ビザ資格：</label>
          <select
            className="R-select form-select ms-5 mb-2 mt-1 "
            name="visa_type"
            value={post.visa_type}
            onChange={handleInput}

          >
            <option value="" disabled selected>ビザ資格選択してください。 </option>
            <option value="留学">留学</option>
            <option value="家族滞在">家族滞在</option>
            <option value="特定活動 ">特定活動 </option>
            {/* <option value="他">他</option> */}
          </select>
        </div>

        <div className="form-group px-5 py-2">
          <label className="pb-1">国籍：</label>
          <input
            type="text"
            className="form-control"
            name="country"
            placeholder="国籍"
            value={post.country}
            onChange={handleInput}
          />
        </div>
        <div className="form-group px-5 py-2">
          <label className="pb-1">住所：</label>
          <input
            type="text"
            className="form-control"
            name="address"
            placeholder="住所"
            value={post.address}
            onChange={handleInput}
          />
        </div>
       
        {/* <button
          type="submit"
          className="my-3 btn btn-success mx-auto d-block"
        >
          保存
        </button> */}
        <div className="row d-flex justify-content-around mt-2">
          <button
            type="button"
            className="btn btn-warning col-4 mb-3 "
          >
            戻す
          </button>
          <button
            type="button submit" className="btn btn-success col-4 mb-3  ">
            保存
          </button>
        </div>
        <p className="R-p-footer pb-4 px-3 h6">
          私のページの利用規約とプライバシー規約に同意いただける場合は保存ボータン押ししてください。
        </p>
      </form>
    </div>
  );
};

export default Register;