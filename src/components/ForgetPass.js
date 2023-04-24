import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';



const ForgetPass = () => {

        //PassUpdateまで遷移
        const goToPassUpdate = useNavigate() 
    

    return (
        <div className="container ">

            <div className="box-Width-500  mx-auto my-5 ">
                <div className="form-group mx-auto shadow ">
                    <legend className="text-center mt-4 font-weight-bold text-primary h3 ">パスワード忘れた？</legend>
                    <div className="mb-3 mx-5 mt-4">
                        <label className="form-label  " for="">ユーザ ID:</label>
                        <input type="text" id="UserId" className="form-control" placeholder="ユーザ　ID" />
                    </div>
                    <div className="mb-3 mx-5">
                        <label className="form-label  " for="">生年月日：</label>
                        <input type="date" id="birthday" name="birthday" className="form-control " placeholder="生年月日" />
                    </div>
                    <div className="row d-flex justify-content-center mt-5">
                         <button  
                             onClick={() => goToPassUpdate('/PassUpdate')} 
                            className="btn btn-success col-4 mb-5 ">
                            次進む
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ForgetPass;