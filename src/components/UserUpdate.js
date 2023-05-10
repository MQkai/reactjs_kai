import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';



const UserUpdate = () => {
    //location使う
    const location = useLocation()
    //message の状態useStateに設定する
    const [message, setMessage] = useState(null);
    useEffect(() => {
        if (location.state && location.state.message) {
            setMessage(location.state.message);
        }
    }, [location]);

    const username = sessionStorage.getItem("username");
    const backToMyPages = useNavigate()

    const handleBack = () => {
        backToMyPages('/MyPages', { state: { username: username } });
    }

    //update
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [visa_id, setVisa_id] = useState('');
    const [visa_type, setVisa_type] = useState('');
    const [visa_date, setVisa_date] = useState('');
    const [country, setCountry] = useState('');
    const [sex, setSex] = useState('');
    const [address, setAddress] = useState('');
    const userAcc = sessionStorage.getItem('userAcc')
    const [userData, setUserData] = useState("");
    const handleSubmit = async (e) => {
        console.log('username :' + userAcc)
        e.preventDefault();
        axios.post("http://localhost:8080/update/" + userAcc,
            {
                username: userAcc,
                name: name,
                sex: sex,
                birthday: birthday,
                visa_id: visa_id,
                visa_date: visa_date,
                visa_type: visa_type,
                country: country,
                address: address
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                axios.get("http://localhost:8080/mypage/" + username)
                    .then(res => {
                        if (res.data !== undefined) {
                            setUserData(res.data[0])
                            backToMyPages('/MyPages')
                        }
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="Au-main box-Width-500 container my-5 shadow">
                <title>データ変更</title>
                <h1 className="text-center text-primary py-3 ">データ変更</h1>
                <div className="form-group pb-3 px-5 ">
                    <label className='pb-1' for="name">氏名:</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="氏名" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className="form-check row pb-2">
                    <p className=" R-p ml-3 mb-2 d-inline">性別：</p>
                    <div className="form-check col-4 d-inline ">
                        <input className="mr-4 mt-2" type="radio" name="sex" onChange={(e) => setSex(e.target.value)} value="男" />
                        <label className="pb-1 ms-3 " >男</label>
                    </div>
                    <div className="form-check col-4 d-inline">
                        <input className="mr-4 mt-2" type="radio" name="sex" onChange={(e) => setSex(e.target.value)} value="女" />
                        <label className="pb-1 ms-3 " >女</label>
                    </div>
                </div>
                <div className="form-group pb-3 px-5">
                    <label className='pb-1' for="birthday">生年月日：</label>
                    <input type="date" className="form-control" id="birthday" name="birthday" placeholder="生年月日"
                        onChange={(e) => setBirthday(e.target.value)} value={birthday}
                    />
                </div>
                <div className="form-group pb-3 px-5">
                    <label className='pb-1' for="visa_id">在留カード番号：</label>
                    <input type="text" className="form-control" id="visa_id" name="visa_id" placeholder="在留カード番号"
                        onChange={(e) => setVisa_id(e.target.value)} value={visa_id} />
                </div>
                <div className="form-group pb-3 px-5">
                    <label className='pb-1' for="visa_date">ビザ期限：</label>
                    <input type="date" className="form-control" id="visa_date" name="visa_date" placeholder="ビザ期限"
                        onChange={(e) => setVisa_date(e.target.value)} value={visa_date} />
                </div>
                <div >
                    <label className="my-2 ms-5" >ビザ資格：</label>
                    <select className="Au-select form-select ms-5 mb-2 mt-1 " name="visa_type" id="visa_type" onChange={(e) => setVisa_type(e.target.value)} value={visa_type}>
                        <option selected > ビザ資格</option>
                        <option value="留学">留学</option>
                        <option value="家族滞在">家族滞在</option>
                        <option value="特定活動 ">特定活動 </option>
                        <option value="他">他</option>
                    </select>
                </div>

                <div className="form-group pb-3 px-5">
                    <label className='pb-1' for="country">国籍：</label>
                    <input type="text" className="form-control" id="country" name="country" placeholder="国籍"
                        onChange={(e) => setCountry(e.target.value)} value={country} />
                </div>
                <div className="form-group pb-3 px-5">
                    <label className='pb-1' for="address">住所：</label>
                    <input type="text" className="form-control" id="address" name="address" placeholder="住所"
                        onChange={(e) => setAddress(e.target.value)} value={address} />
                </div>

                <div className="row d-flex justify-content-around mt-2">
                    <button
                        onClick={handleBack}
                        type="button"
                        className="btn btn-warning col-2 mb-2 "
                    >
                        戻す
                    </button>
                    <button
                        type="submit" className="btn btn-success col-2 mb-2  ">
                        保存
                    </button>
                </div>
                <div className='Au-p-footer my-2'>text</div>
            </div>
        </form>
    )
}

export default UserUpdate;