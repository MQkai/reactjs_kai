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
    const [error, setError] = useState(false)


    const handleSubmit = async (e) => {
        const item = {
            username,
            password,
            newpassword,
            confirmpassword
        }
        console.log(item)
        e.preventDefault();
        //prevent before handlein axios
        if (!password) {
            setInputFailed(true)
            return;
        }
        if (newpassword.length < 6) {
            setInputFailed(true)
            return;
        }
        if (confirmpassword !== newpassword) {
            setInputFailed(true)
            return;
        }

        axios.post("http://localhost:8080/passchange", item,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(res => {
                console.log(res)
                if (res.data === "Password updated successfully") {
                    passChangeSuccess('/', { state: { message: 'パスワード変更できました！' } });
                }
            }
            )
            .catch(error => {
                if (error.response.data === "username and password not match.") {
                    setError(true)
                }
            })

    };
    //MyPages を戻す
    const handleBack = () => {
        backToMyPages('/MyPages', { state: { username: username } });
    }
    const handleClick = () => {
        setError(false)
    }

    return (
        <div onClick={handleClick} className="container ">

            <title>パスワード変更</title>
            <form onSubmit={handleSubmit}>
                <div className="box-Width-500 mx-auto my-5 ">
                    <div className="form-group mx-auto shadow  ">
                        <legend className="text-center my-4 font-weight-bold text-primary h3 ">
                            パスワード変更
                        </legend>

                        <div className="mb-3 mx-5 mt-4">
                            <label className="form-label  " for="">ユーザ ID:</label>
                            <input type="text" id="username" className="form-control"
                                placeholder="ユーザ ID" value={username} disabled />
                        </div>




                        <div className="mb-3 mx-5 mt-4">
                            <label className="form-label  " for="">パスワード: </label>
                            <input type="password" value={password} name="password" className="form-control"
                                onChange={(e) => setPassword(e.target.value)} placeholder="パスワードを入力してください" />
                            {inputFailed && (!password) && (<h6 className="text-center text-danger"> パスワード入力してください</h6>)}
                            {error && (<h6 className="text-center text-danger"> パスワード致しません。</h6>)}
                        </div>

                        <div className="mb-3 mx-5 mt-4">
                            <label className="form-label  " for="">新しいパスワード: </label>
                            <input type="password" value={newpassword} name="newpassword" className="form-control"
                                onChange={(e) => setnewPassword(e.target.value)} placeholder="新しいパスワード" />
                            {inputFailed && (
                                !newpassword
                            ) && (
                                    <h6 className=" text-center text-danger ">
                                        パスワードを入力してください
                                    </h6>
                                )}
                            {inputFailed && (
                                !newpassword ||
                                !/^(?=.*\d)(?=.*[A-Za-z])[A-Za-z\d]{5,19}$/.test(newpassword) ||
                                /\W/.test(newpassword) ||
                                newpassword.length < 6 ||
                                newpassword.length > 20
                            ) && newpassword && (
                                    <h6 className=" text-center text-danger ">
                                        パスワードは半角英数字6文字以上20文字以下で入力してください
                                    </h6>
                                )}
                        </div>
                        <div className="mb-3 mx-5">
                            <label className="form-label  " for="">もう一度パスワードを入力してください</label>
                            <input type="password" value={confirmpassword} name="confirmPassword" className="form-control"
                                placeholder="再度パスワードを入力してください。。"
                                onChange={(e) => setConfirmpassword(e.target.value)} />
                            {inputFailed && !confirmpassword && <h6 className="text-center text-danger ">再度パスワードを入力してください。</h6>}
                            {inputFailed && (confirmpassword.length > 0 && confirmpassword !== newpassword) && (<h6 className="text-center text-danger ">パスワードが一致しません。もう一度入力してください。。</h6>)}

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