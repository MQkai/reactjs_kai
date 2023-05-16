import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [inputFailed, setInputFailed] = useState(false)

  const registerOk = useNavigate()


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
  const today = new Date();
  const selectedBirthday = new Date(post.birthday);
  const selectedVisa = new Date(post.visa_date);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(post);
    // console.log(post);
    //check

    if (
      !post.username ||
      !/^(?=.*\d)(?=.*[A-Za-z])[A-Za-z][A-Za-z\d]{5,19}$/.test(post.username) ||
      /\W/.test(post.username) ||
      post.username.length < 6 ||
      post.username.length > 20
    ) {
      setInputFailed(true);
    }


    if (
      !post.password ||
      !/^(?=.*\d)(?=.*[A-Za-z])[A-Za-z\d]{5,19}$/.test(post.password) ||
      /\W/.test(post.password) ||
      post.password.length < 6 ||
      post.password.length > 20
    ) {
      setInputFailed(true);
    }


    if (
      !post.name ||
      !/^[A-Z\s]*$/.test(post.name) ||
      /\d/.test(post.name)
    ) {
      setInputFailed(true);
    }

    if (!post.sex) {
      setInputFailed(true);
    }

    if (!post.birthday || selectedBirthday > today) {
      setInputFailed(true);
    }


    if (
      !post.visa_ID ||
      !/^(?=.*[A-Z])(?=.*\d)[A-Z\d]{12}$/.test(post.visa_ID)
    ) {
      setInputFailed(true);
    }

    if (!post.address || !/^[\u3040-\u309F\u30A0-\u30FFー0-9]+$/u.test(post.address)) {
      setInputFailed(true);
    }

    if (!post.visa_date || selectedVisa < today) {
      setInputFailed(true);
    }

    if (!post.visa_type) {
      setInputFailed(true);
    }

    if (!post.country) {
      setInputFailed(true);
    }
    if (!post.status) {
      setInputFailed(true);
    }


    // server call
    axios
      .post("http://localhost:8080/register", post, {
        //get dùng param để ,Post dell dung aram
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.information === "存在しました") {

          setErrormes(true);
        }
        else if (res.data.information === "Insertできました") {
          // passChangeSuccess('/', { state: { message: 'パスワード変更できました！' } });
          registerOk("/", { state: { message: '新規登録完了' } });

        }
      })
      .catch((err) => {
        alert(err);
      });
  }
  const [errormes, setErrormes] = useState(false)
  const h = () => {

    setErrormes(false)
  }

  return (

    <div onClick={h} className="R-main container my-5 shadow">
      {(errormes && (<h3 className="text-center alert alert-danger" > asdasdsadasdsadsadsadasd</h3>))}
      <title>新規登録</title>
      <h1 className="text-center text-primary py-3">新規登録</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group px-5 py-2">
          <label className="pb-1">ユーザ ID:半角英数字６字以上20字以下</label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="例：AMRIT12"
            value={post.username}
            onChange={handleInput}
          />
        </div>
        {inputFailed && (
          !post.username
        ) && (
            <h6 className=" text-center text-danger">
              ユーザIDを入力してください
            </h6>
          )}
        {inputFailed && (
          !/^(?=.*\d)(?=.*[A-Za-z])[A-Za-z][A-Za-z\d]{5,19}$/.test(post.username) ||
          /\W/.test(post.username) ||
          post.username.length < 6 ||
          post.username.length > 20
        ) && post.username && (
            <h6 className=" text-center text-danger">
              ユーザIDは半角英数字6文字以上20文字以下で入力してください
            </h6>
          )}

        <div className="form-group px-5 py-2">
          <label className="pb-1">  パスワード:6字以上20字以下で入力してください</label>
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
        {inputFailed && (
          !post.password
        ) && (
            <h6 className=" text-center text-danger ">
              パスワードを入力してください
            </h6>
          )}
        {inputFailed && (
          !post.password ||
          !/^(?=.*\d)(?=.*[A-Za-z])[A-Za-z\d]{5,19}$/.test(post.password) ||
          /\W/.test(post.password) ||
          post.password.length < 6 ||
          post.password.length > 20
        ) && post.password && (
            <h6 className=" text-center text-danger ">
              パスワードは半角英数字6文字以上20文字以下で入力してください
            </h6>
          )}

        <div className="form-group px-5 py-2">
          <label className="pb-1">氏名:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="例：AMRIT KUTTA"
            value={post.name.toUpperCase()}
            onChange={handleInput}
          />

          {inputFailed && (
            !post.name

          ) && (
              <h6 className="pt-1 text-center text-danger ">
                氏名は入力してください
              </h6>
            )}
          {inputFailed && (!/[A-Z\u4E00-\u9FFF\u3005\u3007\u303B]+$/.test(post.name) && post.name.length >= 1 && !/[0-9]+$/.test(post.name)) && (<h6 className="text-center text-danger">
            氏名は大文字英語(半角スペース必須）と<br></br>
            2文字以上入力してください。 </h6>)}
          {inputFailed && (/[0-9]+$/.test(post.name)) && (<h6 className="text-center text-danger"> 数字入力してはいけない </h6>)}
        </div>

        <div className="form-check row ">
          <p className=" R-p ml-3 mb-2 d-inline">性別：</p>
          <div className="form-check col-4 d-inline ">
            <input
              className="mr-4 "
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
              className="mr-4 "
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
        {inputFailed && !post.sex && (
          <h6 className="pt-1 text-center text-danger ">
            性別を選択してください
          </h6>
        )}
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
        {inputFailed && !post.birthday && (
          <h6 className=" text-center text-danger ">
            生年月日を選択してください
          </h6>
        )}

        {inputFailed && (!post.birthday || selectedBirthday > today) && post.birthday && (
          <h6 className=" text-center text-danger ">
            正しく生年月日を選択してください
          </h6>
        )}

        <div className="form-group px-5 py-2">
          <label className="pb-1">在留カード番号:半角英数字大文字のみ</label>
          <input
            type="text"
            className="form-control"
            name="visa_ID"
            placeholder="例：FE1234567890"
            value={post.visa_ID.toUpperCase()}
            onChange={handleInput}
            maxLength="12"
          />
        </div>
        {inputFailed && !post.visa_ID && (
          <h6 className=" text-center text-danger ">
            在留カード番号を入力してください
          </h6>

        )}


        {inputFailed && (
          !post.visa_ID ||
          !/^(?=.*[A-Z])(?=.*\d)[A-Z\d]{12}$/.test(post.visa_ID)
        ) && post.visa_ID && (
            <h6 className=" text-center text-danger ">
              在留カード番号は大文字英数字12文字で入力してください
            </h6>
          )}



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
        {inputFailed && (!post.visa_date) && (
          <h6 className=" text-center text-danger ">
            ビザ期限を選択してください
          </h6>
        )}
        {inputFailed && selectedVisa < today && (<h6 className="text-center text-danger">このビザは期限切れです。<br></br>正しいビザ期限を選択してください</h6>)}
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
          </select>
        </div>
        {inputFailed && !post.visa_type && (
          <h6 className=" text-center text-danger" >
            ビザ資格を選択してください
          </h6>
        )}


        <div>
          <label className="my-2 ms-5">国籍：</label>
          <select
            className="R-select form-select ms-5 mb-2 mt-1 "
            name="country"
            value={post.country}
            onChange={handleInput}

          >
            <option value="" disabled selected>国籍選択してください。 </option>
            <option value="ベトナム">ベトナム</option>
            <option value="ドイツ">ドイツ</option>
            <option value="ネパール ">ネパール </option>
            <option value="中国 ">中国 </option>
          </select>
        </div>
        {inputFailed && !post.country && (
          <h6 className=" text-center text-danger" >
            国籍を選択してください
          </h6>
        )}



        <div className="form-group px-5 py-2">
          <label className="pb-1">住所：</label>
          <input
            type="text"
            className="form-control"
            name="address"
            placeholder="例：埼玉県蕨市指南町３丁目１１２番地"
            value={post.address}
            onChange={handleInput}
          />
        </div>
        {inputFailed && !post.address && (<h6 className="text-center text-danger">住所を入力してください</h6>)}
        {inputFailed && !/[0-9\u4E00-\u9FFF\u3005\u3007\u303B]+$/.test(post.address) && post.address.length >= 1 && (<h6 className="text-center text-danger">住所は漢字で入力してください。</h6>)}


        <div className="row d-flex justify-content-around mt-3">
          <button
            onClick={() => { navigate('/') }}
            type="button"
            className="btn btn-warning col-4 mb-3 "
          >
            戻す
          </button>
          <button
            type=" submit" className="btn btn-success col-4 mb-3  ">
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