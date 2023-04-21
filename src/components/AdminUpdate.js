import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/AdminUpdate.css"

const AdminUpdate = () => {
    return (
        <div class="container my-5 shadow">
            <h1 class="text-center text-primary py-3">データ変換</h1>
            <div class="form-group">
                <label for="name">氏名:</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="氏名"/>
            </div>
            <div class="form-check row py-3">
                <p class=" ml-3 mb-2 d-inline">性別：</p>
                <div class="form-check col-4 d-inline ">
                    <input class="mr-4 mt-2" type="radio" id="sex" name="sex" value="男"/>
                        <label class="form-check-input " for="sex">男</label>
                </div>
                <div class="form-check col-4 d-inline">
                    <input class="mr-4 mt-2" type="radio" id="sex" name="sex" value="女"/>
                        <label class="form-check-input " for="sex">女</label>
                </div>
            </div>
            <div class="form-group">
                <label for="birthday">生年月日：</label>
                <input type="date" class="form-control" id="birthday" name="birthday" placeholder="生年月日"/>
            </div>
            <div class="form-group">
                <label for="visa_Id">在留カード番号：</label>
                <input type="text" class="form-control" id="visa_Id" name="visa_Id" placeholder="在留カード番号"/>
            </div>
            <div class="form-group">
                <label for="visa_date">ビザ期限：</label>
                <input type="date" class="form-control" id="visa_date" name="visa_date" placeholder="ビザ期限"/>
            </div>
            <div >
                <label class="ml-2 mb-3" for="visa">ビザ資格：</label>
                <select class="form-select " name="visa_type" id="visa_type" >
                    <option selected > ビザ資格</option>
                    <option value="留学">留学</option>
                    <option value="家族滞在">家族滞在</option>
                    <option value="特定活動 ">特定活動 </option>
                    <option value="他">他</option>
                </select>
            </div>

            <div class="form-group">
                <label for="country">国籍：</label>
                <input type="text" class="form-control" id="country" name="country" placeholder="国籍"/>
            </div>
            <div class="form-group">
                <label for="address">住所：</label>
                <input type="text" class="form-control" id="address" name="address" placeholder="住所"/>
            </div>
            <div class="form-group">
                <label for="note" class="form-label">ノート：</label>
                <textarea class="form-control" id="note" rows="3"></textarea>
            </div>
            <button type="button submit" class="btn btn-success mx-auto d-block mb-4">保存</button>

        </div>
    )
}

export default AdminUpdate;