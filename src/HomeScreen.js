import { Link, useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { useState } from 'react'
import axios from 'axios'
function HomeScreen(){
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
   const handleClick =async ()=>{

    try{
      const data= await axios.post("http://localhost:4000/api/users/dangnhap",{
        email,
        password
      })
      try{
        window.location.href=data.data
      }catch(err){
        console.log(err);
      }
    
    }catch(err){
          console.log(err);
    }
       
       
  }
    return( 
        <div className="Login">
        <div className="facebook">
        <div className="facebooktext">  
        facebook
        </div>
          <div className="title">
          Facebook giúp bạn kết nối và chia sẻ 
          <br></br>với mọi người trong cuộc sống của bạn.
          </div>
          </div>

          <div className="loginContainer">
          
          <div className="logindetail">
          <input  className='cssinput' type="email"placeholder="Email hoặc số điện thoại"
              onChange={e =>{ setEmail(e.target.value)}}
          />
          <br></br>
          <input className='cssinput' type="Password"placeholder="Mật khẩu"
          onChange={e =>{ setPassword(e.target.value)}}
          />
          <br></br>
          
          <button onClick={handleClick} className="btn">
          Đăng Nhập
              </button>
        
         
            </div>

            
        <div className="forget">
          <a href="forget">Quên mật khẩu?</a>
          <br></br>
        </div>
        <div className='border'></div>
        <div className="create">
        <br></br> 
        <button className="btns">
        Tạo tài khoản mới
        </button>
      </div>
      <p></p>
      <br></br>
      <div className="page">
        <a href="createpage">Tạo Trang </a> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
      </div>
      </div>
      
      </div>
    )
}
export default HomeScreen