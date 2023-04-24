import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import style from "../css/test.module.css";
import { useNavigate } from 'react-router-dom';

const MyPages = () => {

  //遷移
  const goToHome = useNavigate()
  const goToUserUpdate = useNavigate()
  const goToConfirmAcc = useNavigate()

  return (
    <div>
      <h1 className="text-center mt-5 text-primary font-weight-bold ">ようこそ TIN さん!</h1>
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
              <td>Tran Quang Tin</td>
              <td>Men</td>
              <td>2023/01/01</td>
              <td>10歳</td>
              <td>FA091543216</td>
              <td>2030/01/01</td>
              <td>10日</td>
              <td>留学生</td>
              <td>ベトナム</td>
              <td>東京都浅草</td>
              <td className="text-wrap Mp-note"> i belive i can fly  </td>
              <td className=" d-flex justify-content-around">
                <button
                  onClick={() => goToUserUpdate("/UserUpdate")}
                  type="button submit"
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
};

export default MyPages;