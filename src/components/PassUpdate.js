import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const PassUpdate = () =>  {
  return (
    <div className="container ">

        <div className="box-Width-500 mx-auto my-5 ">
            <div className="form-group mx-auto shadow  ">
                <legend className="text-center my-4 font-weight-bold text-primary h3  ">新しいパスワード入力してください。</legend>
                <div className="mb-3 mx-5 mt-4">
                    <label className="form-label  " for="">新しいパスワード:</label>
                    <input type="password" id="OldPassWord" className="form-control" placeholder="新しいパスワード"/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label  " for="">もう一度 パスワード 入力してください。:</label>
                    <input type="password" id="NewPassWord" className="form-control " placeholder="新しパスワード"/>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <button type="button submit" className="btn btn-success col-4 mb-5 ">保存</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default PassUpdate;