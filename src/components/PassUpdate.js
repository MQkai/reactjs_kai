// // import React from 'react'
// // import 'bootstrap/dist/css/bootstrap.min.css';


// // const PassUpdate = () =>  {
// //   return (
// //     <div className="container ">

// //         <div className="box-Width-500 mx-auto my-5 ">
// //             <div className="form-group mx-auto shadow  ">
// //                 <legend className="text-center my-4 font-weight-bold text-primary h3  ">新しいパスワード入力してください。</legend>
// //                 <div className="mb-3 mx-5 mt-4">
// //                     <label className="form-label  " for="">新しいパスワード:</label>
// //                     <input type="password" id="OldPassWord" className="form-control" placeholder="新しいパスワード"/>
// //                 </div>
// //                 <div className="mb-3 mx-5">
// //                     <label className="form-label  " for="">もう一度 パスワード 入力してください。:</label>
// //                     <input type="password" id="NewPassWord" className="form-control " placeholder="新しパスワード"/>
// //                 </div>
// //                 <div className="row d-flex justify-content-center mt-5">
// //                     <button type="button submit" className="btn btn-success col-4 mb-5 ">保存</button>
// //                 </div>
                
// //             </div>
// //         </div>
// //     </div>
// //   )
// // }

// // export default PassUpdate;
// import React, { useState } from "react";
// import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from "react-router-dom";
// // import { ButtonToolbar } from "react-bootstrap";

// const PassUpdate = () => {
    
//     const username = sessionStorage.getItem("getUsernameFromMyPages");
//     const [password, setPassword] = useState('');
//     const [newpassword, setnewPassword] = useState('');
//     const [confirmpassword, setConfirmpassword] = useState('');
//     const passChangeSuccess = useNavigate()
//     const backToMyPages = useNavigate();
//     const handleSubmit = async (e) => {
//         const item = {
//             username,
//             password,
//             newpassword,
//             confirmpassword
//         }
//         console.log(item)
//         e.preventDefault();
//         axios.post("http://localhost:8080/passchange", item,
//             {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             }
//         )
//             .then(res => {                
//                 if (res.data === 'Password updated successfully') {
//                     //useNavigate を使ってhome　ページを遷移し　、メッセージはstate　に一回保存して、homeページを使えるように。
//                     passChangeSuccess('/', { state: { message: 'パスワード変更できました！' } });   
//                 }
//             }
//             )
//             .catch(error => {
                
//                 console.error("error");
//             })

//     };
//     //MyPages を戻す
//     const handleBack = () => {
//         backToMyPages('/MyPages',{state: {username:username}});
//     }

//     return (
//         <div className="container ">
//             <title>パスワード変更</title>
//             <form onSubmit={handleSubmit}>
//                 <div className="box-Width-500 mx-auto my-5 ">
//                     <div className="form-group mx-auto shadow  ">
//                         <legend className="text-center my-4 font-weight-bold text-primary h3 ">
//                             パスワード変更
//                         </legend>

//                         <div className="mb-3 mx-5 mt-4">
//                             <label className="form-label  " for="">ユーザ ー名:</label>
//                             <input type="text" id="username" className="form-control" placeholder="ユーザ ID" value={username} disabled />
//                         </div>
//                         <div className="mb-3 mx-5 mt-4">
//                             <label className="form-label  " for="">パスワード: </label>
//                             <input type="password" value={password} name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="パスワードを入力してください" />
//                         </div>
//                         <div className="mb-3 mx-5 mt-4">
//                             <label className="form-label  " for="">新しいパスワード: </label>
//                             <input type="password" value={newpassword} name="newpassword" className="form-control" onChange={(e) => setnewPassword(e.target.value)} placeholder="新しいパスワード" />
//                         </div>
//                         <div className="mb-3 mx-5">
//                             <label className="form-label  " for="">もう一度パスワードを入力してください</label>
//                             <input type="password" value={confirmpassword} name="confirmPassword" className="form-control " placeholder="新しいパスワードと同じパスワード入力してください。" onChange={(e) => setConfirmpassword(e.target.value)} />
//                         </div>
//                         <div className="row d-flex justify-content-around mt-5">
//                             <button
//                             onClick={handleBack}
//                             type="button"
//                             className="btn btn-warning col-4 mb-5 "
//                             >
//                                 戻す
//                             </button>
//                             <button
//                                 type="button submit" className="btn btn-success col-4 mb-5  ">
//                                 保存
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };
// export default PassUpdate;

import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
// import { ButtonToolbar } from "react-bootstrap";

const PassUpdate = () => {

    const username = sessionStorage.getItem("getUsernameFromMyPages");
    const [password, setPassword] = useState('');
    const [newpassword, setnewPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const passChangeSuccess = useNavigate()
    const backToMyPages = useNavigate();
    const [inputFailed, setInputFailed] = useState(false)


    const handleSubmit = async (e) => {
        const item = {
            username,
            password,
            newpassword,
            confirmpassword
        }
        console.log(item)
        e.preventDefault();
        setInputFailed(true)
        if(1<password.length<6) {
            setInputFailed(true)
        }if(1<newpassword.length<6){
            setInputFailed(true)
        }if(confirmpassword !== newpassword){
            setInputFailed(true)
        }else{
            //useNavigate を使ってhome　ページを遷移し　、メッセージはstate　に一回保存して、homeページを使えるように。
            passChangeSuccess('/', { state: { message: 'パスワード変更できました！' } });
            // if (res.data === 'Password updated successfully' && setInputFailed(false)) {
                
            // }
        }
        axios.post("http://localhost:8080/passchange", item,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(res => {
                
            }
            )
            .catch(error => {

                console.error("error");
            })

    };
    //MyPages を戻す
    const handleBack = () => {
        backToMyPages('/MyPages', { state: { username: username } });
    }

    return (
        <div className="container ">
            <title>パスワード変更</title>
            <form onSubmit={handleSubmit}>
                <div className="box-Width-500 mx-auto my-5 ">
                    <div className="form-group mx-auto shadow  ">
                        <legend className="text-center my-4 font-weight-bold text-primary h3 ">
                            パスワード変更
                        </legend>

                        <div className="mb-3 mx-5 mt-4">
                            <label className="form-label  " for="">ユーザ ー名:</label>
                            <input type="text" id="username" className="form-control"
                                placeholder="ユーザ ID" value={username} disabled />
                        </div>




                        <div className="mb-3 mx-5 mt-4">
                            <label className="form-label  " for="">パスワード: </label>
                            <input type="password" value={password} name="password" className="form-control"
                                onChange={(e) => setPassword(e.target.value)} placeholder="パスワードを入力してください" />
                            {inputFailed && !password && <h6 className="text-center text-danger"> パスワード入力してください</h6>}
                            {inputFailed && (password.length > 1 && password.length < 6) && (<h6 className="text-center text-danger"> パスワードは6字以上20字以下で入力してください</h6>) }
                        </div>

                        <div className="mb-3 mx-5 mt-4">
                            <label className="form-label  " for="">新しいパスワード: </label>
                            <input type="password" value={newpassword} name="newpassword" className="form-control"
                                onChange={(e) => setnewPassword(e.target.value)} placeholder="新しいパスワード" />
                                {inputFailed && !newpassword  && <h6 className="text-center text-danger"> パスワードは6字以上20字以下で入力してください</h6>}
                                {inputFailed && (newpassword.length > 1 && newpassword.length < 6) && (<h6 className="text-center text-danger"> 新しいパスワードは6字以上20字以下で入力してください</h6>) }
                        </div>
                        <div className="mb-3 mx-5">
                            <label className="form-label  " for="">もう一度パスワードを入力してください</label>
                            <input type="password" value={confirmpassword} name="confirmPassword" className="form-control"
                                placeholder="再度パスワードを入力してください。。"
                                onChange={(e) => setConfirmpassword(e.target.value)} />
                                {inputFailed && !confirmpassword  && <h6 className="text-center text-danger ">再度パスワードを入力してください。</h6>}
                                {inputFailed && (confirmpassword.length>1 && confirmpassword !== newpassword) && (<h6 className="text-center text-danger ">パスワードが一致しません。もう一度入力してください。。</h6>) }

                        </div>


                        <div className="row d-flex justify-content-around mt-5">
                            <button
                                onClick={handleBack}
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
    );
};
export default PassUpdate;