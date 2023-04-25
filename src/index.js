import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter,  Routes,  Route} from 'react-router-dom';
import Home from './component/Home';
import NoPage from './component/NoPage';
import Login from './component/Login';
import Mypage from './component/Mypage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // router 設定
  <BrowserRouter>
  <Routes>
    {/* リンクを設定 */}
    <Route path="/" element={<Home/>} />{/* ホームページを設定 */}
    <Route path="/index" element={<Home />} />{/* ホームページを設定 */}
    <Route path="*" element={<NoPage />} />{/* ４０４ページを設定 */}
    {/* 担当のリンクを設定↓ */}
    <Route path="/login" element={<Login />} />{/* ログインページを設定 */}
    <Route path="/mypage" element={<Mypage />} />{/* マイページを設定 */}
  
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
