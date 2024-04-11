import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import userData from "../datas/users.json";
import { User } from "../models/UserModel";
import { login } from "../actions/authActions";
import { RootState } from "../reducers";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isLogIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  //console.log(isLogIn);
  
  const handleLogin = () => {
    const user = userData.find(user => user.username === username && user.password === password);
    const userModel: User = { username: username, email: "sonhv@gmail.com" }
    if (user) {
      // Đăng nhập thành công, điều hướng đến trang chủ
      dispatch(login(userModel));
      localStorage.setItem("isLoggedIn", 'true');
      navigate('/home');
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không đúng');
    }
  };
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn == "true") {
    //navigate("/login");
    return <Navigate to="/home"></Navigate>
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <form style={{ width: '300px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Đăng nhập</h2>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        <button
          type="button"
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
export default LoginPage;