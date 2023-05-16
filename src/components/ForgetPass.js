
// import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';


// const ForgetPass = () => {
//     const [inputFailed, setInputFailed] = useState(false)

//     const navigate = useNavigate();
//     const passChangeSuccess = useNavigate()

//     const [post, setPost] = useState({
//         username: "",
//         birthday: "",
//         visa_id: "",
//         newpassword: "",
//         confirmnewpass: "",
//     });
//     const handleInput = (e) => {
//         const { name, value } = e.target;
//         setPost({ ...post, [name]: value });
//         //console.log(post);
//     };
//     const today = new Date();
//     const selectedBirthday = new Date(post.birthday);


//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log(post);

//         // setInputFailed(false);
//         // console.log(post);
//         //check 
//         if (
//             !post.username ||
//             !/^(?=.*\d)(?=.*[A-Za-z])[A-Za-z][A-Za-z\d]{5,19}$/.test(post.username) ||
//             /\W/.test(post.username) ||
//             post.username.length < 6 ||
//             post.username.length > 20
//         ) {
//             setInputFailed(true);
//         }

//         if (!post.visa_id || !/^[A-Z0-9]{12}$/.test(post.visa_id)) {
//             setInputFailed(true);
//         }
//         if (!post.birthday || selectedBirthday > today) {
//             setInputFailed(true);
//         }
//         if (!post.newpassword ||
//             !/^[A-Za-z0-9]+$/.test(post.newpassword) || post.newpassword.length < 6 || post.newpassword.length > 20) {
//             setInputFailed(true);
//         }
//         if (!post.confirmnewpass ||
//             !/^[A-Za-z0-9]+$/.test(post.confirmnewpass) || post.confirmnewpass.length < 6 || post.confirmnewpass.length > 20) {
//             setInputFailed(true);
//         }
//         //パスワード忘れ
//         axios
//             .post("http://localhost:8080/forgetPassword", post, {
//                 //get dùng param để ,Post dell dung aram
//                 headers: {
//                     "Content-Type": "application/json",
//                 }
//             })
//             .then((res) => {
//                 console.log(res)

//                 if (res.data === "OK") {
//                     passChangeSuccess('/', { state: { message: 'パスワード変更できました！' } });
//                 }
              
//             })
//             .catch((err) => {
//                 console.log(err)
//                 if(err.response.data === 'DATE変更できない'){
//                     console.log("errrrroeroeroeror")
//                 }

//             });

//     }

//     useEffect(() => {
//         if (inputFailed) {
//             return;
//         }
//         //server call
//         // navigate("/");


//         // ここに inputFailed が false の場合の処理を書く
//     }, [inputFailed]);
//     //Home　遷移
//     const goToHome = useNavigate();
//     return (
//         <div className="container ">
//             <title>パスワード忘れた方</title>
//             <form onSubmit={handleSubmit}>
//                 <div className="box-Width-500  mx-auto my-5 ">
//                     <div className="form-group mx-auto shadow ">
//                         <legend className="text-center mt-4 font-weight-bold text-primary h3 ">パスワード忘れた？</legend>
//                         <div className="form-group px-5 py-2">


//                             <label className="pb-1">ユーザ ID:半角英数字６字以上20字以下</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 name="username"
//                                 placeholder="例：AMRIT12"
//                                 value={post.username}
//                                 onChange={handleInput}
//                             />
//                         </div>
//                         {inputFailed && (
//                             !post.username ||
//                             !/^(?=.*\d)(?=.*[A-Za-z])[A-Za-z][A-Za-z\d]{5,19}$/.test(post.username) ||
//                             /\W/.test(post.username) ||
//                             post.username.length < 6 ||
//                             post.username.length > 20
//                         ) && (
//                                 <h6 className="text-center text-danger">
//                                     ユーザIDは6字以上20字以下で入力してください
//                                 </h6>
//                             )}

//                         <div className="form-group px-5 py-2">
//                             <label className="pb-1">在留カード番号：</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 name="visa_id"
//                                 placeholder="例：ADJWJWJSJW12"
//                                 value={post.visa_id}
//                                 onChange={handleInput}
//                             />

//                         </div>
//                         {inputFailed && (!post.visa_id || !/^[A-Z0-9]{12}$/.test(post.visa_id) || 
//                         /\W/.test(post.visa_id)) && (
//                             <h6 className="text-center text-danger ">
//                                 在留カード番号は大文字英数字12文字で入力してください
//                             </h6>
//                         )}
//                         <div className="mb-2 mx-5">
//                             <label className="form-label  " for="">生年月日：</label>
//                             <input type="date" id="birthday" name="birthday" className="form-control" 
//                             placeholder="生年月日" onChange={handleInput} />
//                         </div>
//                         {inputFailed && (!post.birthday) && (
//                             <h6 className="text-center text-danger ">
//                                 生年月日を選択してください
//                             </h6>
//                         )}
//                         {selectedBirthday > today && (
//                             <h6 className="text-center text-danger ">
//                                 正しい生年月日を選択下ください。
//                             </h6>
//                         )}


//                         <div className="mb-3 mx-5">
//                             <label className="form-label  " for="">新しいパスワード</label>
//                             <input type="password" name="newpassword" className="form-control " placeholder="新しパスワード" onChange={handleInput} />
//                         </div>
//                         {inputFailed && (!post.newpassword ||
//                             !/^[A-Za-z0-9]+$/.test(post.newpassword) || post.newpassword.length < 6 || post.newpassword.length > 20) && (
//                                 <h6 className="pb-2 text-center text-danger ">
//                                     パスワードは6字以上20字以下で入力してください
//                                 </h6>
//                             )}
//                         <div className="mb-3 mx-5">
//                             <label className="form-label  " for="">もう一度パスワードを入力してください</label>
//                             <input type="password" name="confirmnewpass" className="form-control " placeholder="もう一度パスワード入力してください。" onChange={handleInput} />
//                         </div>
//                         {inputFailed && (post.confirmnewpass !== post.newpassword || !post.confirmnewpass) && (
//                             <h6 className="pb-3 text-center text-danger ">
//                                 新しいパスワードと同じパスワードを入力してください。
//                             </h6>
//                         )}
//                         <div className="row d-flex justify-content-around mt-2">
//                             <button
//                                 onClick={() => goToHome("/")}
//                                 className="btn btn-warning col-4 mb-5">
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
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';


const ForgetPass = () => {
    const [inputFailed, setInputFailed] = useState(false)
    const [datafailed, setdatafailed] = useState(false)



    const navigate = useNavigate();
    const passChangeSuccess = useNavigate()

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

        // setInputFailed(false);
        // console.log(post);
        //check 
        if (
            !post.username ||
            !/^(?=.*\d)(?=.*[A-Za-z])[A-Za-z][A-Za-z\d]{5,19}$/.test(post.username) ||
            /\W/.test(post.username) ||
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
        //パスワード忘れ
        axios
            .post("http://localhost:8080/forgetPassword", post, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((res) => {
                if (res.data === "OK") {
                    passChangeSuccess('/', { state: { message: 'パスワード変更できました！' } });
                }
            })
            .catch((err) => {
                console.log(err)
                if (err.response.status === 400) {
                    setdatafailed(true);
                }
            });

    }
    const [message, setMessage] = useState(null);
    const location = useLocation()

    useEffect(() => {
        if (location.state && location.state.message) {
            setMessage(location.state.message);
        }
    }, [location]);
    const handlePageClick = () => {
        setdatafailed(false);
        setMessage(null)
    }
    //Home　遷移
    const goToHome = useNavigate();
    return (
        <div className="container ">
            <title>パスワード忘れた方</title>
            <form onSubmit={handleSubmit}>

                <div
                    onClick={handlePageClick}
                    className=" Home-main container-flued ">
                    {message && <h3 className="Home-alert alert alert-success text-center ">{message}</h3>}
                    {datafailed && (
                        <h3 className="Home-alert alert alert-danger text-center ">
                            アカウント情報が間違いです。
                        </h3>
                    )}
                    {/* {datafailed && (!post.visa_id)(
                        <h3 className="Home-alert alert alert-danger text-center ">
                            ビザIDは間違いです。
                        </h3>
                    )}
                    {datafailed && (!post.birthday)(
                        <h3 className="Home-alert alert alert-danger text-center ">
                            生年月日は間違いです。
                        </h3>
                    )} */}

                </div>


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
                        </div>
                        {inputFailed && (
                            !post.username ||
                            !/^(?=.*\d)(?=.*[A-Za-z])[A-Za-z][A-Za-z\d]{5,19}$/.test(post.username) ||
                            /\W/.test(post.username) ||
                            post.username.length < 6 ||
                            post.username.length > 20
                        ) && (
                                <h6 className="text-center text-danger">
                                    ユーザIDは6字以上20字以下で入力してください
                                </h6>
                            )}

                        <div className="form-group px-5 py-2">
                            <label className="pb-1">在留カード番号：</label>
                            <input
                                type="text"
                                className="form-control"
                                name="visa_id"
                                placeholder="例：FE1234567890"
                                value={post.visa_id.toUpperCase()}
                                onChange={handleInput}
                                maxLength='12'
                            />

                        </div>
                        {inputFailed && (!post.visa_id || !/^[A-Z0-9]{12}$/.test(post.visa_id) ||
                            /\W/.test(post.visa_id)) && (
                                <h6 className="text-center text-danger ">
                                    在留カード番号は大文字英数字12文字で入力してください
                                </h6>
                            )}
                        <div className="mb-2 mx-5">
                            <label className="form-label  " for="">生年月日：</label>
                            <input type="date" id="birthday" name="birthday" className="form-control"
                                placeholder="生年月日" onChange={handleInput} />
                        </div>
                        {inputFailed && (!post.birthday) && (
                            <h6 className="text-center text-danger ">
                                生年月日を選択してください
                            </h6>
                        )}
                        {selectedBirthday > today && (
                            <h6 className="text-center text-danger ">
                                正しい生年月日を選択下ください。
                            </h6>
                        )}


                        <div className="mb-3 mx-5">
                            <label className="form-label  " for="">新しいパスワード</label>
                            <input type="password" name="newpassword" className="form-control " placeholder="新しパスワード" onChange={handleInput} />
                        </div>
                        {inputFailed && (!post.newpassword ||
                            !/^[A-Za-z0-9]+$/.test(post.newpassword) || post.newpassword.length < 6 || post.newpassword.length > 20) && (
                                <h6 className="pb-2 text-center text-danger ">
                                    パスワードは6字以上20字以下で入力してください
                                </h6>
                            )}
                        <div className="mb-3 mx-5">
                            <label className="form-label  " for="">もう一度パスワードを入力してください</label>
                            <input type="password" name="confirmnewpass" className="form-control " placeholder="もう一度パスワード入力してください。" onChange={handleInput} />
                        </div>
                        {inputFailed && (post.confirmnewpass !== post.newpassword || !post.confirmnewpass) && (
                            <h6 className="pb-3 text-center text-danger ">
                                新しいパスワードと同じパスワードを入力してください。
                            </h6>
                        )}
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