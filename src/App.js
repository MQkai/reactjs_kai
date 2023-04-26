import React, { createContext } from 'react';
import {  BrowserRouter,  Routes,  Route, Navigate } from 'react-router-dom';
import Home from './component/Home';
import NoPage from './component/NoPage';
import Login from './component/Login';
import Mypage from './component/Mypage';
import UserAll from './component/admin/UserAll';
import Admin from './component/admin/Admin';
import UserDeleted from './component/admin/UserDeleted';
import UserActive from './component/admin/UserActive';
import Logout from './component/Logout';
import Register from './component/Register';
import User from './component/user/User';


export const AuthContext = createContext();
function App() {
    const isLogin = sessionStorage.getItem("loginUsername")!==null ? true :false;
    const isRole  = sessionStorage.getItem("loginUsername") ? JSON.parse(sessionStorage.getItem("loginUsername")).role==="ADMIN" :false;
  return (
    <BrowserRouter>
        <Routes>
        {/* リンクを設定 */}
        <Route path="/" element={<Home/>} />{/* ホームページを設定 */}
        <Route path="/index" element={<Home />} />{/* ホームページを設定 */}
        <Route path="*" element={<NoPage />} />{/* ４０４ページを設定 */}
        <Route path="/login" element={isLogin ?<Navigate to="/mypage"/> : <Login/>} />{/* ログインページを設定 */}
        <Route path="/register" element={isLogin ?<Navigate to="/mypage"/> : <Register/>} />{/* ログインページを設定 */}
        <Route path="/logout" element={<Logout />} />{/* ログアウトページを設定 */}
        {/* ログインしたリンクを設定↓ */}
        <Route path="/mypage" element={isLogin ?<Mypage /> : <Navigate to="/login"/>} />{/* マイページを設定 */}
        {/* 管理者ドメインを設定 */}
        <Route path="/admin" element={isRole ? <Admin /> : <Navigate to="/mypage" />} />{/* 管理者ページを設定 */}
        <Route path="/admin/all" element={isRole ? <UserAll /> : <Navigate to="/mypage" />} />{/* 全部ユーザー名ページを設定 */}
        <Route path="/admin/deleted" element={isRole ? <UserDeleted /> : <Navigate to="/mypage" />} />{/* 削除ユーザー名ページを設定 */}
        <Route path="/admin/active" element={isRole ? <UserActive /> : <Navigate to="/mypage" />} />{/* 使えるユーザー名ページを設定 */}
        {/* ユーザー名の編集ページを設定 */}
        <Route path="/user/:username" element={isRole ? <User /> : <Navigate to="/mypage" />} />{/* 使えるユーザー名ページを設定 */}
        </Routes>
    </BrowserRouter>
  )
}

export default App