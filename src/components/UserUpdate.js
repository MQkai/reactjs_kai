import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



const UserUpdate = () => {
    return (
        <div className="Au-main box-Width-500 container my-5 shadow">
            <h1 className="text-center text-primary py-3 ">データ変更</h1>
            <div className="form-group pb-3 px-5 ">
                <label className='pb-1' for="name">氏名:</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="氏名" />
            </div>
            <div className="form-check row pb-2">
                <p className=" R-p ml-3 mb-2 d-inline">性別：</p>
                <div className="form-check col-4 d-inline ">
                    <input className="mr-4 mt-2" type="radio" id="sex" name="sex" value="男" />
                    <label className="pb-1 ms-3 " >男</label>
                </div>
                <div className="form-check col-4 d-inline">
                    <input className="mr-4 mt-2" type="radio" id="sex" name="sex" value="女" />
                    <label className="pb-1 ms-3 " >女</label>
                </div>
            </div>
            <div className="form-group pb-3 px-5">
                <label className='pb-1' for="birthday">生年月日：</label>
                <input type="date" className="form-control" id="birthday" name="birthday" placeholder="生年月日" />
            </div>
            <div className="form-group pb-3 px-5">
                <label className='pb-1' for="visa_Id">在留カード番号：</label>
                <input type="text" className="form-control" id="visa_Id" name="visa_Id" placeholder="在留カード番号" />
            </div>
            <div className="form-group pb-3 px-5">
                <label className='pb-1' for="visa_date">ビザ期限：</label>
                <input type="date" className="form-control" id="visa_date" name="visa_date" placeholder="ビザ期限" />
            </div>
            <div >
                <label className="my-2 ms-5" >ビザ資格：</label>
                <select className="Au-select form-select ms-5 mb-2 mt-1 " name="visa_type" id="visa_type" >
                    <option selected > ビザ資格</option>
                    <option value="留学">留学</option>
                    <option value="家族滞在">家族滞在</option>
                    <option value="特定活動 ">特定活動 </option>
                    <option value="他">他</option>
                </select>
            </div>

            <div className="form-group pb-3 px-5">
                <label className='pb-1' for="country">国籍：</label>
                <input type="text" className="form-control" id="country" name="country" placeholder="国籍" />
            </div>
            <div className="form-group pb-3 px-5">
                <label className='pb-1' for="address">住所：</label>
                <input type="text" className="form-control" id="address" name="address" placeholder="住所" />
            </div>
            <div className="form-group pb-3 px-5">
                <label className='pb-1' for="note" >ノート：</label>
                <textarea className="form-control" id="note" rows="3"></textarea>
            </div>
            <button type="button submit" className="Au-btn btn btn-success mx-auto d-block ">保存</button>
            <div className='Au-p-footer my-2'>text</div>
        </div>
    )
}

export default UserUpdate;