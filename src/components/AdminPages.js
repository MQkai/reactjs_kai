import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/AdminPages.css";

const AdminPages = () =>  {
  return (
    <div>
        <h1 class="text-center mt-5 text-primary font-weight-bold ">ようこそ TIN さん!</h1>
    <button type="button submit" class="btn btn-info mt-4 float-right mr-5">パスワード変更</button>
    <div class="clear-fix"></div>
    <div class="table-reponsive">
        <table class="table table-striped table-hover align-middle mt-3">
            <thead>
                <tr class="align-middle">
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
                <tr class="align-middle">
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
                    <td class="note"> i belive i can fly asd asd a sd asd asd asd asd asd asd as das das d sdas dsaaaaaaaaaaaaaaaaaaaaaaa </td>
                    <td class="d-flex justify-content-around">
                      <button type="button submit" class="btn btn-success">編集</button>
                      <button type="button submit" class="btn btn-danger">削除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button type="button submit " class="btn lg-btn btn-success d-block mx-auto my-4">ログアウト</button>
    </div>
    </div>
  )
}

export default AdminPages;
