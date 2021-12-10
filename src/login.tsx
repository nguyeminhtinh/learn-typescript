import React, {useState, useContext} from "react";
import  { useNavigate  } from 'react-router-dom';
import { UserContext } from "./context/UserContext";

const Login = () => {
  const userContext = useContext(UserContext)
  const navigate = useNavigate();
  const [userInfo, setUsetInfo] = useState<AuthUser>({} as AuthUser)
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'username':
        setUsetInfo({
          ...userInfo,
          username: e.target.value
        })
        break;
      case 'email':
        setUsetInfo({
          ...userInfo,
          email: e.target.value
        })
        break;
      default:
        break;
    }
  }

  const handleLogin = () => {
    if(userInfo.username === 'minhtinh' && userInfo.email === 'minhtinh@gmail.com'){
      window.localStorage.setItem('userInfo',  JSON.stringify(userInfo))
      navigate('/', {replace: true})
    }
    if(userContext){
      userContext.setUser({
        username: userInfo.username,
        email: userInfo.email
      })
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="mb-3">
        <label  className="form-label">Name</label>
        <input type="text" className="form-control" value={userInfo?.username} placeholder="name" name="username" onChange={handleChangeInput} />
      </div>
      <div className="mb-3">
        <label  className="form-label">Email address</label>
        <input type="email" className="form-control" value={userInfo?.email} onChange={handleChangeInput} name="email" placeholder="name@example.com" />
      </div>
      <button type="submit" className="btn btn-primary" onClick={(e) => {
        e.preventDefault();
        handleLogin()
      }}>Login</button>

      <div> user name is {userContext?.user?.username}</div>
    </div>
  )
}

export default Login;