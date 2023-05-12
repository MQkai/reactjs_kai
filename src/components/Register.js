
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [inputFailed, setInputFailed] = useState(false)
//   const backHome = useNavigate();
//   const handleBack = () =>{
//     backHome('/')
//   }

//   const navigate = useNavigate();
//   const [post, setPost] = useState({
//     username: "",
//     password: "",
//     name: "",
//     sex: "",
//     birthday: "",
//     visa_ID: "",
//     visa_date: "",
//     visa_type: "",
//     country: "",
//     address: "",
//     status: "",
//   });
//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setPost({ ...post, [name]: value });
//     //console.log(post);
//   };
//   const today = new Date();
//   const selectedBirthday = new Date(post.birthday);
//   const selectedVisa = new Date(post.visa_date);

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(post);
//     // console.log(post);
// //check 
// if(
//   !post.username ||
//   !/^[A-Za-z0-9]+$/.test(post.username) ||
//   post.username.length < 6 ||
//   post.username.length > 20
// ) {
//   setInputFailed(true);
//   return;
  
// }

 


// if (!post.password ||
//   !/^[A-Za-z0-9]+$/.test(post.password)|| post.password.length < 6 || post.password.length > 20) {
//   setInputFailed(true);
//   return;
// }
// if (!post.name ||
//   !/^[A-Za-z0-9]+$/.test(post.name) || post.name.length < 2 || post.name.length > 50) {
//   setInputFailed(true);
//   return;
// }
// if (!post.sex) {
//   setInputFailed(true);
//   return;
// }

// if (!post.birthday || selectedBirthday > today) {
//   setInputFailed(true);
//   return;
// }

// if (!post.visa_ID || !/^[A-Z0-9]{12}$/.test(post.visa_ID)) {
//   setInputFailed(true);
//   return;
// }


// if (!post.address) {
//   setInputFailed(true);
//   return;
// }



// if (!post.visa_date || selectedVisa < today) {
//   setInputFailed(true);
//   return;
// }

// if (!post.visa_type) {
//   setInputFailed(true);
//   return;
// }

// if (!post.country) {
//   setInputFailed(true);
//   return;
// }
// if (!post.status) {
//   setInputFailed(true);
//   return;
// }


//     // server call
//     axios
//       .post("http://localhost:8080/register", post, {
//         //get dùng param để ,Post dell dung aram
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((res) => {
//         console.log(res)
//         if (res.data.information === "Insertできました") {
//           navigate("/");
//         }
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   }

//   return (
    
//     <div className="R-main container my-5 shadow">
 
//       <title>新規登録</title>
//       <h1 className="text-center text-primary py-3">新規登録</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group px-5 py-2">
//           <label className="pb-1">ユーザ ID:半角英数字６字以上20字以下</label>
//           <input
//             type="text"
//             className="form-control"
//             name="username"
//             placeholder="例：AMRIT12"
//             value={post.username}
//             onChange={handleInput}
//           />
//         </div>
//         {inputFailed &&(
//             !post.username ||
//             !/^[A-Za-z0-9]+$/.test(post.username) ||
//             post.username.length < 6 ||
//             post.username.length > 20
//           ) && (
//             <h6 className=" text-center text-danger">
//               ユーザIDは6字以上20字以下で入力してください
//             </h6>
//           )}
//         <div className="form-group px-5 py-2">
//           <label className="pb-1">パスワード:</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name="password"
//             placeholder="パスワード"
//             value={post.password}
//             onChange={handleInput}
//           />
//         </div>
//         {inputFailed && (!post.password ||
//             !/^[A-Za-z0-9]+$/.test(post.password)|| post.password.length < 6 || post.password.length > 20)&&(
//             <h6 className=" text-center text-danger ">
//             パスワードは6字以上20字以下で入力してください
//             </h6>
//           )}
//         <div className="form-group px-5 py-2">
//         <label className="pb-1">氏名:半角英数字2字以上60字以下</label>
//         <input
//           type="text"
//           className="form-control"
//           name="name"
//           placeholder="例：AMRIT KUTTA"
//           value={post.name}
//           onChange={handleInput}
//         />
//         {inputFailed && (!post.name ||
//           !/^[A-Za-z0-9]+$/.test(post.name) || post.name.length < 2 || post.name.length > 50)&& (
//           <h6 className="pt-1 text-center text-danger ">
//             氏名は2字以上入力してください
//           </h6>
//         )}
//       </div>

//         <div className="form-check row ">
//           <p className=" R-p ml-3 mb-2 d-inline">性別：</p>
//           <div className="form-check col-4 d-inline ">
//             <input
//               className="mr-4 "
//               type="radio"
//               name="sex"
//               value="男"
//               onChange={handleInput}
//             />
//             <label className="ms-3 " name="sex">
//               男
//             </label>
//           </div>
//           <div className="form-check col-4 d-inline">
//             <input
//               className="mr-4 "
//               type="radio"
//               name="sex"
//               value="女 "
//               onChange={handleInput}
//             />
//             <label className="ms-3" name="sex">
//               女
//             </label>     
//           </div>
//         </div>
//         {inputFailed &&  !post.sex && (
//               <h6 className="pt-1 text-center text-danger ">
//               性別を選択してください
//               </h6>
//             )}
//         <div className="form-group px-5 py-2">
//           <label className="pb-1">生年月日：</label>
//           <input
//             type="date"
//             className="form-control"
//             name="birthday"
//             placeholder="生年月日"
//             value={post.birthday}
//             onChange={handleInput}
//           />
//         </div>
//         {inputFailed &&  (!post.birthday || selectedBirthday > today) &&(
//             <h6 className=" text-center text-danger ">
//             生年月日を選択してください
//             </h6>
//           )}


        
//         <div className="form-group px-5 py-2">
//           <label className="pb-1">在留カード番号：</label>
//           <input
//             type="text"
//             className="form-control"
//             name="visa_ID"
//             placeholder="例：ADJWJWJSJW12"
//             value={post.visa_ID}
//             onChange={handleInput}
//           />
//         </div>
//         {inputFailed && (!post.visa_ID || !/^[A-Z0-9]{12}$/.test(post.visa_ID)) &&(
//             <h6 className=" text-center text-danger ">
//             在留カード番号は12字で入力してください
//             </h6>
//           )}
//         <div className="form-group px-5 py-2">
//           <label className="pb-1">ビザ期限：</label>
//           <input
//             type="date"
//             className="form-control"
//             name="visa_date"
//             placeholder="ビザ期限"
//             value={post.visa_date}
//             onChange={handleInput}
//           />
//         </div>
//         {inputFailed &&  (!post.visa_date || selectedVisa < today) &&(
//             <h6 className=" text-center text-danger ">
//             ビザ期限を選択してください
//             </h6>
//           )}
//         <div>
//           <label className="my-2 ms-5">ビザ資格：</label>
//           <select
//             className="R-select form-select ms-5 mb-2 mt-1 "
//             name="visa_type"
//             value={post.visa_type}
//             onChange={handleInput}
//           >
//             <option value="" disabled selected>ビザ資格選択してください。 </option>
//             <option value="留学">留学</option>
//             <option value="家族滞在">家族滞在</option>
//             <option value="特定活動 ">特定活動 </option>
//           </select>
//         </div>
//         {inputFailed &&  !post.visa_type &&(
//             <h6 className=" text-center text-danger" >
//             ビザ資格を選択してください
//             </h6>
//           )}


//         <div>
//           <label className="my-2 ms-5">国籍：</label>
//           <select
//             className="R-select form-select ms-5 mb-2 mt-1 "
//             name="country"
//             value={post.country}
//             onChange={handleInput}

//           >
//             <option value="" disabled selected>国籍選択してください。 </option>
//             <option value="ベトナム">ベトナム</option>
//             <option value="ドイツ">ドイツ</option>
//             <option value="ネパール ">ネパール </option>
//             <option value="中国 ">中国 </option>
//           </select>
//         </div>
//         {inputFailed &&  !post.country &&(
//             <h6 className=" text-center text-danger" >
//             国籍を選択してください
//             </h6>
//           )}
      

        
//         <div className="form-group px-5 py-2">
//           <label className="pb-1">住所：</label>
//           <input
//             type="text"
//             className="form-control"
//             name="address"
//             placeholder="例：埼玉県蕨市指南町３丁目１１２番地"
//             value={post.address}
//             onChange={handleInput}
//           />
//         </div>
//         {inputFailed &&  !post.address &&(
//             <h6 className=" text-center text-danger ">
//             正しい形式で入力してください
//             </h6>
//           )}
//         <div className="row d-flex justify-content-around mt-3">
//           <button
//           onClick={handleBack}
//           type="button"
//             className="btn btn-warning col-4 mb-3 "
//           >
//             戻す
//           </button>
//           <button
//             type="submit" className="btn btn-success col-4 mb-3  ">
//             保存
//           </button>
//         </div>
//         <p className="R-p-footer pb-4 px-3 h6">
//           私のページの利用規約とプライバシー規約に同意いただける場合は保存ボータン押ししてください。
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [inputFailed, setInputFailed] = useState(false)

  const navigate = useNavigate();
  const [post, setPost] = useState({
    username: "",
    password: "",
    name: "",
    sex: "",
    birthday: "",
    visa_ID: "",
    visa_date: "",
    visa_type: "",
    country: "",
    address: "",
    status: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
    //console.log(post);
  };
  const today = new Date();
  const selectedBirthday = new Date(post.birthday);
  const selectedVisa = new Date(post.visa_date);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(post);
    // console.log(post);
//check

if(
  !post.username ||
  !/^(?=.*\d)[A-Za-z\d]{6,20}$/.test(post.username) ||
  post.username.length < 6 ||
  post.username.length > 20
) {
  setInputFailed(true);
}



 


if (!post.password ||
  !/^[A-Za-z0-9]+$/.test(post.password)|| post.password.length < 6 || post.password.length > 20) {
  setInputFailed(true);
}



if (!post.name ||
  !/^(?=.*\s)[A-Za-z0-9\s]+$/.test(post.name) || post.name.length < 2 || post.name.length > 50) {
  setInputFailed(true);
}




if (!post.sex) {
  setInputFailed(true);
}

if (!post.birthday || selectedBirthday > today) {
  setInputFailed(true);
}

if (!post.visa_ID || !/^[A-Z0-9]{12}$/.test(post.visa_ID)) {
  setInputFailed(true);
}


if (!post.address) {
  setInputFailed(true);
}



if (!post.visa_date || selectedVisa < today) {
  setInputFailed(true);
}

if (!post.visa_type) {
  setInputFailed(true);
}

if (!post.country) {
  setInputFailed(true);
}
if (!post.status) {
  setInputFailed(true);
}


    // server call
    axios
      .post("http://localhost:8080/register", post, {
        //get dùng param để ,Post dell dung aram
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.information === "Insertできました") {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    
    <div className="R-main container my-5 shadow">
 
      <title>新規登録</title>
      <h1 className="text-center text-primary py-3">新規登録</h1>
      <form onSubmit={handleSubmit}>
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
        {inputFailed &&(
            !post.username ||
            !/^(?=.*\d)[A-Za-z\d]{6,20}$/.test(post.username)
            ||
            post.username.length < 6 ||
            post.username.length > 20
          ) && (
            <h6 className=" text-center text-danger">
              ユーザIDは6字以上20字以下で入力してください
            </h6>
          )}
        <div className="form-group px-5 py-2">
          <label className="pb-1">パスワード:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="パスワード"
            value={post.password}
            onChange={handleInput}
          />
        </div>
        {inputFailed && (!post.password ||
            !/^[A-Za-z0-9]+$/.test(post.password)|| post.password.length < 6 || post.password.length > 20)&&(
            <h6 className=" text-center text-danger ">
            パスワードは6字以上20字以下で入力してください
            </h6>
          )}
        <div className="form-group px-5 py-2">
        <label className="pb-1">氏名:半角英数字2字以上60字以下</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="例：AMRIT KUTTA"
          value={post.name}
          onChange={handleInput}
        />
        {inputFailed && (!post.name ||
          !/^(?=.*\s)[A-Za-z0-9\s]+$/.test(post.name) || post.name.length < 2 || post.name.length > 50) && (
          <h6 className="pt-1 text-center text-danger ">
            氏名は2字以上入力してください
          </h6>
        )}
      </div>

        <div className="form-check row ">
          <p className=" R-p ml-3 mb-2 d-inline">性別：</p>
          <div className="form-check col-4 d-inline ">
            <input
              className="mr-4 "
              type="radio"
              name="sex"
              value="男"
              onChange={handleInput}
            />
            <label className="ms-3 " name="sex">
              男
            </label>
          </div>
          <div className="form-check col-4 d-inline">
            <input
              className="mr-4 "
              type="radio"
              name="sex"
              value="女 "
              onChange={handleInput}
            />
            <label className="ms-3" name="sex">
              女
            </label>     
          </div>
        </div>
        {inputFailed &&  !post.sex && (
              <h6 className="pt-1 text-center text-danger ">
              性別を選択してください
              </h6>
            )}
        <div className="form-group px-5 py-2">
          <label className="pb-1">生年月日：</label>
          <input
            type="date"
            className="form-control"
            name="birthday"
            placeholder="生年月日"
            value={post.birthday}
            onChange={handleInput}
          />
        </div>
        {inputFailed &&  (!post.birthday || selectedBirthday > today) &&(
            <h6 className=" text-center text-danger ">
            生年月日を選択してください
            </h6>
          )}


        
        <div className="form-group px-5 py-2">
          <label className="pb-1">在留カード番号：</label>
          <input
            type="text"
            className="form-control"
            name="visa_ID"
            placeholder="例：ADJWJWJSJW12"
            value={post.visa_ID}
            onChange={handleInput}
          />
        </div>
        {inputFailed && (!post.visa_ID || !/^[A-Z0-9]{12}$/.test(post.visa_ID)) &&(
            <h6 className=" text-center text-danger ">
            在留カード番号は12字で入力してください
            </h6>
          )}
        <div className="form-group px-5 py-2">
          <label className="pb-1">ビザ期限：</label>
          <input
            type="date"
            className="form-control"
            name="visa_date"
            placeholder="ビザ期限"
            value={post.visa_date}
            onChange={handleInput}
          />
        </div>
        {inputFailed &&  (!post.visa_date || selectedVisa < today) &&(
            <h6 className=" text-center text-danger ">
            ビザ期限を選択してください
            </h6>
          )}
        <div>
          <label className="my-2 ms-5">ビザ資格：</label>
          <select
            className="R-select form-select ms-5 mb-2 mt-1 "
            name="visa_type"
            value={post.visa_type}
            onChange={handleInput}
          >
            <option value="" disabled selected>ビザ資格選択してください。 </option>
            <option value="留学">留学</option>
            <option value="家族滞在">家族滞在</option>
            <option value="特定活動 ">特定活動 </option>
          </select>
        </div>
        {inputFailed &&  !post.visa_type &&(
            <h6 className=" text-center text-danger" >
            ビザ資格を選択してください
            </h6>
          )}


        <div>
          <label className="my-2 ms-5">国籍：</label>
          <select
            className="R-select form-select ms-5 mb-2 mt-1 "
            name="country"
            value={post.country}
            onChange={handleInput}

          >
            <option value="" disabled selected>国籍選択してください。 </option>
            <option value="ベトナム">ベトナム</option>
            <option value="ドイツ">ドイツ</option>
            <option value="ネパール ">ネパール </option>
            <option value="中国 ">中国 </option>
          </select>
        </div>
        {inputFailed &&  !post.country &&(
            <h6 className=" text-center text-danger" >
            国籍を選択してください
            </h6>
          )}
      

        
        <div className="form-group px-5 py-2">
          <label className="pb-1">住所：</label>
          <input
            type="text"
            className="form-control"
            name="address"
            placeholder="例：埼玉県蕨市指南町３丁目１１２番地"
            value={post.address}
            onChange={handleInput}
          />
        </div>
        {inputFailed &&  !post.address &&(
            <h6 className=" text-center text-danger ">
            正しい形式で入力してください
            </h6>
          )}
        <div className="row d-flex justify-content-around mt-3">
          <button
          onClick={()=>{navigate('/')}}
          type = "button"
            className="btn btn-warning col-4 mb-3 "
          >
            戻す
          </button>
          <button
            type=" submit" className="btn btn-success col-4 mb-3  ">
            保存
          </button>
        </div>
        <p className="R-p-footer pb-4 px-3 h6">
          私のページの利用規約とプライバシー規約に同意いただける場合は保存ボータン押ししてください。
        </p>
      </form>
    </div>
  );
};

export default Register;