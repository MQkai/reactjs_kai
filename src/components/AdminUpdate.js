import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const AdminUpdate = () => {
    //管理者ページからデータ取得します
    // sessionStorage　から　string JSON　取得します
    const storedJSON = sessionStorage.getItem('data');
    // string JSON => object に変更します
    const data = JSON.parse(storedJSON);

    const AdminPages = useNavigate()
    const [name, setName] = useState(data.name)
    const [sex, setSex] = useState(data.sex)
    const [birthday, setBirthday] = useState(data.birthday)
    const [visa_id, setVisa_id] = useState(data.visa_id)
    const [visa_date, setVisa_date] = useState(data.visa_date)
    const [visa_type, setVisa_type] = useState(data.visa_type)
    const [country, setCountry] = useState(data.country)
    const [address, setAddress] = useState(data.address)
    // Đặt giá trị cho radio button dựa vào giá trị trong sessionStorage
    useEffect(() => {
        if (data.sex === '男') {
            setSex('男');
        } else if (data.sex === '女') {
            setSex('女');
        }
    }, [data.sex]);



    const userAcc1 = sessionStorage.getItem('userAcc1')

    //生年月日とビザ期限の条件を設定する。
    const [birthdayError, setBirthdayError] = useState(null);
    const [visa_dateError, setVisa_dateError] = useState(null);
    const [dengen, setDengen] = useState(false);//switch dengen=電源

    // const date = new Date();
    // const day = date.getDate();//日
    // const month = date.getMonth() + 1;// Tháng hiện tại, chú ý đến việc phải cộng thêm 1 vì tháng được tính từ 0-11
    // const year = date.getFullYear();//現在の年
    // const yearOfBirthday = new Date(birthday).getFullYear();//生年月日の年
    // const monthOfBirthday = new Date(birthday).getMonth();//生年月日の年
    // const dayOfBirthday = new Date(birthday).getDate();//生年月日の年
    // const yearOfDateVisa = new Date(visa_date).getFullYear();
    const today = new Date();
    const selectedBirthday = new Date(birthday);
    const selectedVisa = new Date(visa_date);




    const handleSubmit = async (e) => {
        e.preventDefault();
        setDengen(true)
        if (!name || !/[A-Z\u4E00-\u9FFF\u3005\u3007\u303B]+$/.test(name)) {
            setDengen(true);
            return;
        }
        if (!sex) {
            setDengen(true);
            return;
        }
        if (!birthday || selectedBirthday > today) {
            setDengen(true);
            return;
        }
        if (
            !visa_id
        ) {
            setDengen(true);
            return;
        }
        if (!address) {
            setDengen(true);
            return;
        }
        if (!visa_date || selectedVisa < today) {
            setDengen(true);
            return;
        }
        if (!visa_type) {
            setDengen(true);
            return;
        }
        if (!country) {
            setDengen(true);
            return;
        }
        axios.post("http://localhost:8080/update/" + userAcc1,
            {
                username: userAcc1,
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
                if (res.data === undefined) {
                    setDengen(true)
                }
                else if (res.data !== undefined) {
                    console.log(res)
                    AdminPages('/AdminPages', { state: { message: 'データ変更できました' } })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }



    const test = () => {

    }


    if (userAcc1 === undefined) {
        return (
            <h1 className='alert alert-danger text-center mx-5' >404 error</h1>
        )
    } else {

        return (

            <form onSubmit={handleSubmit}>
                <div onClick={test} className="Au-main box-Width-500 container my-5 shadow">
                    <title>データ変更</title>
                    <h1 className="text-center text-primary py-3 ">データ変更</h1>
                    <div className="form-group pt-1 pb-2 px-5 ">
                        <label className='pb-1' for="name">氏名:</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="例：AMRIT KUTTA"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    {dengen && (!name) && (<h6 className="text-center text-danger"> 氏名を入力してください </h6>)}
                    {dengen && (!/[A-Z\u4E00-\u9FFF\u3005\u3007\u303B]+$/.test(name) && name.length >= 1 && !/[0-9]+$/.test(name)) && (<h6 className="text-center text-danger">
                        氏名は大文字英語(半角スペース必須）と<br></br>
                        2文字以上入力してください。 </h6>)}
                    {dengen && (/[0-9]+$/.test(name)) && (<h6 className="text-center text-danger"> 数字入力してはいけない </h6>)}


                    <div className="form-check row pb-2">
                        <p className=" R-p ml-3 mb-2 d-inline">性別：</p>
                        <div className="form-check col-4 d-inline ">
                            <input className="mr-4 mt-2" type="radio" name="sex" onChange={(e) => setSex(e.target.value)} value="男" checked={sex === "男"} />
                            <label className="pb-1 ms-3 " >男</label>
                        </div>
                        <div className="form-check col-4 d-inline">
                            <input className="mr-4 mt-2" type="radio" name="sex" onChange={(e) => setSex(e.target.value)} value="女" checked={sex === "女"} />
                            <label className="pb-1 ms-3 " >女</label>
                        </div>
                        <div className="form-check col-4 d-inline">
                        </div>
                        {dengen && !sex && (<h6 className="text text-center text-danger">性別を選択してください</h6>)}




                    </div>
                    <div className="form-group pt-1 pb-2 px-5">
                        <label className='pb-1' for="birthday">生年月日：</label>
                        <input type="date" className="form-control" id="myDatePicker" /*ref={datePickerRef}*/ name="birthday" placeholder="生年月日"
                            onChange={(e) => setBirthday(e.target.value)} value={birthday}
                        />
                    </div>
                    {dengen && !birthday && (<h6 className="text-center text-danger">生年月日を選択してください</h6>)}
                    {dengen && (selectedBirthday > today) && (<h6 className="text-center text-danger">正しい生年月日が入力されました。</h6>)}

                    <div className="form-group pt-1 pb-2 px-5">
                        <label className='pb-1' for="visa_id">在留カード番号：</label>
                        <input type="text" className="form-control" id="visa_id" name="visa_id" placeholder="例：FE123456790"
                            onChange={(e) => setVisa_id(e.target.value)} value={visa_id.toUpperCase()} maxLength='12' />
                    </div>
                    {dengen && !visa_id && (<h6 className="text-center text-danger">  在留カード番号を入力してください </h6>)}
                    {dengen && (visa_id.length >= 1 && (!/^(?=[A-Za-z]{2}\d{10}$)(?![A-Za-z]+$)(?!\d+$)[A-Za-z\d]{1,12}$/.test(visa_id))) && (<h6 className="text-center text-danger"> 正しい在留カード番号を入力してください<br></br> 例：FE1234567890 </h6>)}


                    <div className="form-group pt-1 pb-2 px-5">
                        <label className='pb-1' for="visa_date">ビザ期限：</label>
                        <input type="date" className="form-control" id="visa_date" name="visa_date" placeholder="ビザ期限"
                            onChange={(e) => setVisa_date(e.target.value)} value={visa_date}  />
                    </div>
                    {dengen && !visa_date && (<h6 className="text-center text-danger">ビザ期限を選択してください</h6>)}
                    {dengen && selectedVisa < today && (<h6 className="text-center text-danger">このビザは期限切れです。<br></br>正しいビザ期限を選択してください</h6>)}

                    <div >
                        <label className="my-2 ms-5" >ビザ資格：</label>
                        <select className="Au-select form-select ms-5 mb-2 mt-1 " name="visa_type" id="visa_type" onChange={(e) => setVisa_type(e.target.value)} value={visa_type}>
                            <option value="" disabled selected > ビザ資格</option>
                            <option value="留学">留学</option>
                            <option value="家族滞在">家族滞在</option>
                            <option value="特定活動 ">特定活動 </option>
                            <option value="他">他</option>
                        </select>
                    </div>
                    {dengen && !visa_type && (<h6 className="text-center text-danger">ビザ資格を選択してください</h6>)}

                    <div>
                        <label className="my-2 ms-5">国籍：</label>
                        <select
                            className="R-select form-select ms-5 mb-2 mt-1 "
                            name="country"
                            onChange={(e) => setCountry(e.target.value)} value={country}

                        >
                            <option value="" disabled selected>国籍選択してください。 </option>
                            <option value="ベトナム">ベトナム</option>
                            <option value="ドイツ">ドイツ</option>
                            <option value="ネパール ">ネパール </option>
                            <option value="中国 ">中国 </option>
                        </select>
                    </div>
                    {dengen && !country && (<h6 className="text-center text-danger">国籍を選択してください</h6>)}



                    <div className="form-group pt-1 pb-2 px-5">
                        <label className='pb-1' for="address">住所：</label>
                        <input type="text" className="form-control" id="address" name="address" placeholder="例：埼玉県蕨市指南町３丁目１１２番地"
                            onChange={(e) => setAddress(e.target.value)} value={address} />
                    </div>
                    {dengen && !address && (<h6 className="text-center text-danger">住所を入力してください</h6>)}
                    {dengen && !/[0-9\u4E00-\u9FFF\u3005\u3007\u303B]+$/.test(address) && address.length >= 1 && (<h6 className="text-center text-danger">住所は漢字で入力してください。</h6>)}



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