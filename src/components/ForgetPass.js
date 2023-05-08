// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';



// const ForgetPass = () => {

//         //PassUpdateまで遷移
//         const goToPassUpdate = useNavigate() 
    

//     return (
//         <div className="container ">

//             <div className="box-Width-500  mx-auto my-5 ">
//                 <div className="form-group mx-auto shadow ">
//                     <legend className="text-center mt-4 font-weight-bold text-primary h3 ">パスワード忘れた？</legend>
//                     <div className="mb-3 mx-5 mt-4">
//                         <label className="form-label  " for="">ユーザ ID:</label>
//                         <input type="text" id="UserId" className="form-control" placeholder="ユーザ　ID" />
//                     </div>
//                     <div className="mb-3 mx-5">
//                         <label className="form-label  " for="">生年月日：</label>
//                         <input type="date" id="birthday" name="birthday" className="form-control " placeholder="生年月日" />
//                     </div>
//                     <div className="row d-flex justify-content-center mt-5">
//                          <button  
//                              onClick={() => goToPassUpdate('/PassUpdate')} 
//                             className="btn btn-success col-4 mb-5 ">
//                             次進む
//                         </button>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ForgetPass;
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';


const ForgetPass = () => {
    const [username, setUsername] = useState('');
    const [visa_id, setVisa_id] = useState('');
    const [birthday, setBirthday] = useState('');
    const [newpassword, setnewPassword] = useState('');
    const [confirmnewpass, setConfirmnewpass] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        setBirthday(birthday.replace(/-/g, '/'));
        const item = {
            username,
            visa_id,
            birthday,
            newpassword,
            confirmnewpass
        }
        console.log(item)
        e.preventDefault();
        axios.post("http://localhost:8080/forgetPassword", item,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(res => {
                if (res.data === "OK") {
                    navigate("/")
                    console.error("変更ok")
                }
            }
            )
            .catch(error => {
                console.error("error");
            })

    };

    return (
        <div className="container ">
           <title>パスワード忘れた方</title>
            <form onSubmit={handleSubmit}>


                {errorMessage && <div>{setErrorMessage}</div>}

                <div className="box-Width-500  mx-auto my-5 ">
                    <div className="form-group mx-auto shadow ">
                        <legend className="text-center mt-4 font-weight-bold text-primary h3 ">パスワード忘れた？</legend>
                        <div className="mb-3 mx-5 mt-4">
                            <label className="form-label  " for="">ユーザ ー名:</label>
                            <input type="text" id="username" className="form-control" placeholder="ユーザ　ID" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group px-5 py-2">
                            <label className="pb-1">在留カード番号：</label>
                            <input type="text" className="form-control" name="visa_iD" placeholder="在留カード番号" onChange={(e) => setVisa_id(e.target.value)} />
                        </div>
                        <div className="mb-3 mx-5">
                            <label className="form-label  " for="">生年月日：</label>
                            <input type="date" id="birthday" name="birthday" className="form-control " placeholder="生年月日" onChange={(e) => setBirthday(e.target.value)} />
                        </div>
                        <div className="mb-3 mx-5">
                            <label className="form-label  " for="">新しいパスワード</label>
                            <input type="password" name="newpassword" className="form-control " placeholder="新しパスワード" onChange={(e) => setnewPassword(e.target.value)} />
                        </div>
                        <div className="mb-3 mx-5">
                            <label className="form-label  " for="">もう一度パスワードを入力してください</label>
                            <input type="password" name="confirmnewpass" className="form-control " placeholder="もう一度パスワード入力してください。" onChange={(e) => setConfirmnewpass(e.target.value)} />
                        </div>
                        {/* <div className="row d-flex justify-content-center mt-5">
                            <button
                                type="button-submit" className="btn btn-success col-4 mb-5 ">
                                保存
                            </button>
                        </div> */}
                        <div className="row d-flex justify-content-around mt-2">
                            <button
                            type="button"
                            className="btn btn-warning col-4 mb-5 "
                            >
                                戻す
                            </button>
                            <button
                                type="button submit" className="btn btn-success col-4 mb-5  ">
                                保存
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ForgetPass;