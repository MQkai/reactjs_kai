import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useActionData, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';



const AdminUpdate = () => {
    const location = useLocation();
    const userdel = location.state;
    console.log(userdel)
    const [userData, setUserData] = useState("")

    const AdminPages = useNavigate()
    const [name, setName] = useState()
    const [sex, setSex] = useState()
    const [birthday, setBirthday] = useState()
    const [visa_id, setVisa_id] = useState()
    const [visa_date, setVisa_date] = useState()
    const [visa_type, setVisa_type] = useState()
    const [country, setCountry] = useState()
    const [address, setAddress] = useState()
    const userAcc1 = sessionStorage.getItem('userAcc1')

    const handleSubmit = async (e) => {
        console.log('username:' + userAcc1)
        e.preventDefault();
        axios.post("http://localhost:8080/update/" + userAcc1,
            {
                username:userAcc1,
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
                AdminPages('/AdminPages')
            })
            .catch(error => {
                console.log(error)
            })
    }



    if (userData === undefined) {
        return (
            <h1>ユーザーがdeleteされました。</h1>
        )
    } else {

        return (
            <form onSubmit={handleSubmit}>
                <div className="Au-main box-Width-500 container my-5 shadow ">
                    <h1 className="text-center text-primary py-3 ">データ変更</h1>
                    <div className="form-group pb-3 px-5 ">
                        <label className='pb-1' for="name">氏名:</label>
                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} id="name" name="name" placeholder="氏名" value={name} />
                    </div>
                    <div className="form-check row pb-2">
                        <p className=" R-p ml-3 mb-2 d-inline">性別：</p>
                        <div className="form-check col-4 d-inline ">
                            <input className="mr-4 mt-2" onChange={(e) => setSex(e.target.value)} type="radio" id="sex" name="sex" value="男" />
                            <label className="pb-1 ms-3 " >男</label>
                        </div>
                        <div className="form-check col-4 d-inline">
                            <input className="mr-4 mt-2"  onChange={(e) => setSex(e.target.value)} type="radio" id="sex" name="sex" value="女" />
                            <label className="pb-1 ms-3 " >女</label>
                        </div>
                    </div>
                    <div className="form-group pb-3 px-5">
                        <label className='pb-1' for="birthday">生年月日：</label>
                        <input type="date" className="form-control" onChange={(e) => setBirthday(e.target.value)} id="birthday" name="birthday" placeholder="生年月日" value={birthday} />
                    </div>
                    <div className="form-group pb-3 px-5">
                        <label className='pb-1' for="visa_Id">在留カード番号：</label>
                        <input type="text" className="form-control" onChange={(e) => setVisa_id(e.target.value)} id="visa_Id" name="visa_Id" placeholder="在留カード番号" value={visa_id} />
                    </div>
                    <div className="form-group pb-3 px-5">
                        <label className='pb-1' for="visa_date">ビザ期限：</label>
                        <input type="date" className="form-control" onChange={(e) => setVisa_date(e.target.value)} id="visa_date" name="visa_date" placeholder="ビザ期限" value={visa_date} />
                    </div>
                    <div >
                        <label className="my-2 ms-5" >ビザ資格：</label>
                        <select className="Au-select form-select ms-5 mb-2 mt-1 " onChange={(e) => setVisa_type(e.target.value)} name="visa_type" id="visa_type" value={visa_type} >
                            <option selected > ビザ資格</option>
                            <option value="留学">留学</option>
                            <option value="家族滞在">家族滞在</option>
                            <option value="特定活動 ">特定活動 </option>
                            <option value="他">他</option>
                        </select>
                    </div>

                    <div className="form-group pb-3 px-5">
                        <label className='pb-1' for="country">国籍：</label>
                        <input type="text" className="form-control" onChange={(e) => setCountry(e.target.value)} id="country" name="country" placeholder="国籍" value={country} />
                    </div>
                    <div className="form-group pb-3 px-5">
                        <label className='pb-1' for="address">住所：</label>
                        <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} id="address" name="address" placeholder="住所" value={address} />
                    </div>


                    <div className="d-flex justify-content-around my-3">
                        <button
                            onClick={() => AdminPages('/AdminPages')}
                            className="btn btn-success text-bg-warning p-2 mb-4">
                            戻る
                        </button>
                        <button
                            type="submit"
                            className="btn btn-success  p-2 mb-4">
                            保存
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
export default AdminUpdate