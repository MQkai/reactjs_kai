import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/ForgetPass.css"


const ForgetPass = () =>  {
  return (
    <div class="container ">

        <div class="box  ">
            <div class="form-group mx-auto shadow ">
                <legend class="text-center mt-4 font-weight-bold text-primary h3 ">パスワード忘れた？</legend>
                <div class="mb-3 mx-5 mt-4">
                    <label class="form-label  " for="">ユーザ ID:</label>
                    <input type="text" id="UserId" class="form-control" placeholder="ユーザ　ID"/>
                </div>
                <div class="mb-3 mx-5">
                    <label class="form-label  " for="">生年月日：</label>
                    <input type="date" id="birthday" name="birthday" class="form-control " placeholder="生年月日"/>
                </div>
                <div class="row d-flex justify-content-center mt-5">
                    <button type="button submit" class="btn btn-success col-4 mb-5 ">保存</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ForgetPass;