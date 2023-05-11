// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';


// const ForgetPass = () => {
//     const [username, setUsername] = useState('');
//     const [visa_id, setVisa_id] = useState('');
//     const [birthday, setBirthday] = useState('');
//     const [newpassword, setnewPassword] = useState('');
//     const [confirmnewpass, setConfirmnewpass] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const backHome = useNavigate()
//     const navigate = useNavigate()


//     const handleSubmit = async (e) => {
//         const formattedBirthday = birthday.replace(/-/g, '/');
//         const item = {
//             username,
//             visa_id,
//             birthday: formattedBirthday,
//             newpassword,
//             confirmnewpass
//         }
//         console.log(item)
//         e.preventDefault();
//         axios.post("http://localhost:8080/forgetPassword", item,
//             {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             }
//         )
//             .then(res => {
//                 console.log('ok')
//                 console.log(res)
//                 if (res.data === "OK") {
//                     navigate("/")
//                 }
//             }
//             )
//             .catch(error => {
//                 console.error("error");
//             })

//     };

//     const handleBack = () => {
//         backHome('/')
//     }
//     return (
//         <div className="container ">
//             <title>パスワード忘れた方</title>
//             <form onSubmit={handleSubmit}>
//                 {errorMessage && <div>{setErrorMessage}</div>}
//                 <div className="box-Width-500  mx-auto my-5 ">
//                     <div className="form-group mx-auto shadow ">
//                         <legend className="text-center mt-4 font-weight-bold text-primary h3 ">パスワード忘れた？</legend>
//                         <div className="mb-3 mx-5 mt-4">
//                             <label className="form-label  " for="">ユーザ ー名:</label>
//                             <input type="text" id="username" className="form-control" placeholder="ユーザ　ID" 
//                             onChange={(e) => setUsername(e.target.value)} />
//                         </div>
//                         <div className="form-group px-5 py-2">
//                             <label className="pb-1">在留カード番号：</label>
//                             <input type="text" className="form-control" name="visa_iD" placeholder="在留カード番号" onChange={(e) => setVisa_id(e.target.value)} />
//                         </div>
//                         <div className="mb-3 mx-5">
//                             <label className="form-label  " for="">生年月日：</label>
//                             <input type="date" id="birthday" name="birthday" className="form-control " placeholder="生年月日" onChange={(e) => setBirthday(e.target.value)} />
//                         </div>
//                         <div className="mb-3 mx-5">
//                             <label className="form-label  " for="">新しいパスワード</label>
//                             <input type="password" name="newpassword" className="form-control " placeholder="新しパスワード" onChange={(e) => setnewPassword(e.target.value)} />
//                         </div>
//                         <div className="mb-3 mx-5">
//                             <label className="form-label  " for="">もう一度パスワードを入力してください</label>
//                             <input type="password" name="confirmnewpass" className="form-control " placeholder="もう一度パスワード入力してください。" onChange={(e) => setConfirmnewpass(e.target.value)} />
//                         </div>
//                         <div className="row d-flex justify-content-around mt-2">
//                             <button
//                                 onClick={handleBack}

//                                 className="btn btn-warning col-4 mb-5 "
//                             >
//                                 戻す
//                             </button>
//                             <button
//                                 type="submit" className="btn btn-success col-4 mb-5  ">
//                                 保存
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default ForgetPass;
// 

import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const ForgetPass = () => {
    const [inputFailed, setInputFailed] = useState(false)

    const navigate = useNavigate();

    const [post, setPost] = useState({
        username: "",
        birthday: "",
        visa_id: "",
        newpassword: "",
        confirmnewpass: "",
    });
    const handleInput = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
        //console.log(post);
    };
    const today = new Date();
    const selectedBirthday = new Date(post.birthday);


    function handleSubmit(e) {
        e.preventDefault();
        console.log(post);

        setInputFailed(false);
        // console.log(post);
        //check 
        if (
            !post.username ||
            !/^[A-Za-z0-9]+$/.test(post.username) ||
            post.username.length < 6 ||
            post.username.length > 20
        ) {
            setInputFailed(true);
        }

        if (!post.visa_id || !/^[A-Z0-9]{12}$/.test(post.visa_id)) {
            setInputFailed(true);
        }
        if (!post.birthday || selectedBirthday > today) {
            setInputFailed(true);
        }
        if (!post.newpassword ||
            !/^[A-Za-z0-9]+$/.test(post.newpassword) || post.newpassword.length < 6 || post.newpassword.length > 20) {
            setInputFailed(true);
        }
        if (!post.confirmnewpass ||
            !/^[A-Za-z0-9]+$/.test(post.confirmnewpass) || post.confirmnewpass.length < 6 || post.confirmnewpass.length > 20) {
            setInputFailed(true);
        }
        //server call
        // navigate("/");
        axios
            .post("http://localhost:8080/forgetPassword", post, {
                //get dùng param để ,Post dell dung aram
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((res) => {
                if (res.data === "OK") {
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log("error")
                    ("入力し"
                    )

            });
    }
    //Home　遷移
    const goToHome = useNavigate();
    return (
        <div className="container ">
            <title>パスワード忘れた方</title>
            <form onSubmit={handleSubmit}>
                <div className="box-Width-500  mx-auto my-5 ">
                    <div className="form-group mx-auto shadow ">
                        <legend className="text-center mt-4 font-weight-bold text-primary h3 ">パスワード忘れた？</legend>
                        <div className="form-group px-5 py-2">


                            <label className="pb-1">ユーザ ID:半角英数字６字以上20字以下</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                placeholder="例：AMRIT12"
                                value={post.username}
                                onChange={handleInput}
                            />
                            {inputFailed && (
                                !post.username ||
                                !/^[A-Za-z0-9]+$/.test(post.username) ||
                                post.username.length < 6 ||
                                post.username.length > 20
                            ) && (
                                    <h6 className="text-center text-danger">
                                        ユーザIDは6字以上20字以下で入力してください
                                    </h6>
                                )}
                        </div>

                        <div className="form-group px-5 py-2">
                            <label className="pb-1">在留カード番号：</label>
                            <input
                                type="text"
                                className="form-control"
                                name="visa_id"
                                placeholder="例：ADJWJWJSJW12"
                                value={post.visa_id}
                                onChange={handleInput}
                            />
                            {inputFailed && (!post.visa_id || !/^[A-Z0-9]{12}$/.test(post.visa_id)) && (
                                <h6 className="text-center text-danger ">
                                    在留カード番号は12字で入力してください
                                </h6>
                            )}
                        </div>





                        <div className="mb-3 mx-5">
                            <label className="form-label  " for="">生年月日：</label>
                            <input type="date" id="birthday" name="birthday" className="form-control " placeholder="生年月日" onChange={handleInput} />
                            {inputFailed && (!post.birthday || selectedBirthday > today) && (
                                <h6 className="text-center text-danger ">
                                    生年月日を選択してください
                                </h6>
                            )}
                        </div>


                        <div className="mb-3 mx-5">
                            <label className="form-label  " for="">新しいパスワード</label>
                            <input type="password" name="newpassword" className="form-control " placeholder="新しパスワード" onChange={handleInput} />
                            {inputFailed && (!post.newpassword ||
                                !/^[A-Za-z0-9]+$/.test(post.newpassword) || post.newpassword.length < 6 || post.newpassword.length > 20) && (
                                    <h6 className="text-center text-danger ">
                                        パスワードは6字以上20字以下で入力してください
                                    </h6>
                                )}

                        </div>

                        <div className="mb-3 mx-5">
                            <label className="form-label  " for="">もう一度パスワードを入力してください</label>
                            <input type="password" name="confirmnewpass" className="form-control " placeholder="もう一度パスワード入力してください。" onChange={handleInput} />
                            {inputFailed && (post.confirmnewpass !== post.newpassword || !post.confirmnewpass) && (
                                <h6 className="text-center text-danger ">
                                    新しいパスワードと同じパスワードを入力してください。
                                </h6>
                            )}

                        </div>
                        <div className="row d-flex justify-content-around mt-2">
                            <button
                                onClick={() => goToHome("/")}
                                className="btn btn-warning col-4 mb-5">
                                戻す
                            </button>
                            <button
                                type="submit" className="btn btn-success col-4 mb-5  ">
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