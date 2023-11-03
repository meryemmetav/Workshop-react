import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logoImages/Group 4.svg";
import image1 from "../../images/logoImages/image 1.png";
import image2 from "../../images/logoImages/Vector.png";
import image3 from "../../images/logoImages/Vector2.png";
import UserPool from "../../UserPool";
import { useNavigate } from "react-router-dom";

export default function SignUp() {

  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  const [username, setUsername] =useState("");
  const [cpassword, setCPassword] =useState("");
  const [passwordMatch, setPasswordMatch] = useState(true); // State to track password matching
  const navigate = useNavigate();


  const onSubmit = (event) => {
    event.preventDefault();

    if(password === cpassword){
      UserPool.signUp(email, password, [], null, (err, data) => {
          if(err){
              console.error(err);
              return;
          }
              console.log(data);
              navigate("/");
      });
    } else{
      setPasswordMatch(false);
    }  
};



  return (
    
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-[400px] h-[570px] bg-[#FFFFFF] rounded-md  items-center px-14">
        <div className="p-5  w-full flex justify-center mb-7 mt-2">
          <img className="cursor-pointer w-[200px]" src={logo} alt="" />
        </div>{" "}
        <div className=" flex w-full mb-6">
          <h2 className="text-black font-bold text-lg ">
            Welcome <br /> Create your account{" "}
          </h2>{" "}
        </div>{" "}
        <form onSubmit={onSubmit}>
          <div className="flex flex-col w-full ">
            <label className="text-black font-normal text-xs  pb-1">
              Username{" "}
            </label>{" "}
            <input
              type="text"
              className="w-[255px] bg-[#DCDCDC] outline-none rounded mb-2 focus:text-black  "
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <label className="text-black font-normal text-xs  pb-1">Email </label>{" "}
            <input
              type="text"
              className="w-[255px] bg-[#DCDCDC] outline-none rounded mb-2 focus:text-black  "
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label className="text-black font-normal text-xs  pb-1">
              Password{" "}
            </label>{" "}
            <input
              type="password"
              className="w-[255px] bg-[#DCDCDC] outline-none rounded mb-2 focus:text-black"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label className="text-black font-normal text-xs  pb-1">
              Confirm Password{" "}
            </label>{" "}
            <input
              type="password"
              className={`w-[255px] bg-[#DCDCDC] outline-none rounded mb-2 focus:text-black ${!passwordMatch ? "border-red-500" : ""}`}
              value={cpassword}
              onChange={(event) => {
                setCPassword(event.target.value)
                setPasswordMatch(true); // Reset the password match state when the input changes
              }}
            />
            {!passwordMatch && (
              <p className="text-red-500 text-xs">Passwords do not match.</p>
            )}
            <div className="flex flex-col justify-center items-center mb-3">
              <h3 className="text-black text-[9px] font-normal">
                Or Sign Up With{" "}
              </h3>{" "}
              <div className="flex py-3">
                <img className="cursor-pointer pr-9" src={image1} />{" "}
                <img className="cursor-pointer pr-9" src={image2} />{" "}
                <img className="cursor-pointer" src={image3} />{" "}
              </div>{" "}
            </div>{" "}
            <div className="w-full">
              <button className="bg-[#2E8544] text-[9px] p-2 w-full rounded font-bold text-white">
                Sign up{" "}
              </button>{" "}
            </div>{" "}
            <div className="w-full flex justify-center my-1">
              <h3 className="text-black text-[9px] font-normal"> Or </h3>{" "}
            </div>{" "}
            <div className="w-full">
              <Link to="/SignIn">
                <button type="submit" className="bg-[#DCDCDC] text-black text-[9px] p-2 w-full rounded font-bold">
                  Sign in
                </button>{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </form>
      </div>{" "}
    </div>

  );
}
