import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const AdminPages = () => {
    const [userData,setUserData] = useState([]);
    axios.get("http://localhost:8080/admin", {//get dùng param để ,Post dell dung aram
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res.data)
    })



    //遷移
    const goToAdminUpdate = useNavigate();
    const goToHome = useNavigate();

    
    return (
        <div>
            <h1 className="text-center my-5 text-primary font-weight-bold ">ようこそ TIN さん!</h1>
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
                            <td className="Ap-note"> i belive i can fly  </td>
                            <td className="Ap-btn ">
                                <button
                                    onClick={()=> goToAdminUpdate("/AdminUpdate") }
                                    className="Ap-btn mb-1 btn btn-success">
                                    編集
                                </button>
                                <button

                                    className="Ap-btn btn btn-danger">
                                    削除
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button
                    onClick={() => goToHome("/")}
                    type="button submit "
                    className="btn lg-btn btn-success d-block mx-auto my-4">
                    ログアウト
                </button>
            </div>
        </div >
    )
}

export default AdminPages;
