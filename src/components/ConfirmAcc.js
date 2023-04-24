import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const ConfirmAcc = () =>  {

    //遷移
    const goToPassUpdate = useNavigate()

  return (
    <div className="container ">

        <div className="box-Width-500 mx-auto my-5 ">
            <div className="form-group mx-auto shadow  ">
                <legend className="text-center my-4 font-weight-bold text-primary h3  ">アカウント　確認</legend>
                <div className="mb-3 mx-5 mt-4">
                    <label className="form-label  " for="">ユーザ　ID:</label>
                    <input type="text" id="username" className="form-control" placeholder="ユーザ　ID"/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label  " for="">パスワード:</label>
                    <input type="password" id="password" className="form-control " placeholder="パスワード"/>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <button 
                    onClick={()=>goToPassUpdate("/PassUpdate")}
                    className="btn btn-success col-4 mb-5 ">
                        次に進む
                        </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ConfirmAcc;