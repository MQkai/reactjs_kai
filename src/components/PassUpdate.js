import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/PassUpdate.css"

const PassUpdate = () =>  {
  return (
    <div class="container ">

        <div class="box  ">
            <div class="form-group mx-auto shadow ">
                <legend class="text-center mt-4 font-weight-bold text-primary h3 ">パスワード変換</legend>
                <div class="mb-3 mx-5 mt-4">
                    <label class="form-label  " for="">新しパスワード:</label>
                    <input type="password" id="OldPassWord" class="form-control" placeholder="新しパスワード"/>
                </div>
                <div class="mb-3 mx-5">
                    <label class="form-label  " for="">もう一度:</label>
                    <input type="password" id="NewPassWord" class="form-control " placeholder="もう一度"/>
                </div>
                <div class="row d-flex justify-content-center mt-5">
                    <button type="button submit" class="btn btn-success col-4 mb-5 ">保存</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default PassUpdate;