import Header from "./Header";
import {useRef, useState} from "react"
import { checkValidData } from "../utils/validate";
const Login = () => {
    const [isSignInForm,setSignInForm] = useState(true);
    const [errMessage,setErrMessage] = useState(null);
    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    }

    const email = useRef(null);
    const password = useRef(null);

    const HandleButtonClick = () => {
        // Validate the form data 
        const message =  checkValidData(email.current.value,password.current.value);
        setErrMessage(message);
        
    }
    return(
        <div>
           <Header></Header>
           <div className="absolute">
           <img src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"
            alt="logo"></img>
           </div>
           <div>
            <form onSubmit={(e)=>e.preventDefault()}className=" w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
                { !isSignInForm && ( <input type="text" placeholder="Enter Name" className="p-4 my-4 w-full bg-gray-800"></input> )}
                <input ref={email} type="text" placeholder="Email address" className="p-4 my-4 w-full bg-gray-800"></input>
                <input ref={password} type="password" placeholder="Enter Password" className="p-4 my-4 w-full bg-gray-800"></input>
                <p className="text-red-500 font-bond text-lg p-2">{errMessage}</p>
                <button className="p-4 my-4 w-full bg-red-700 rounded-lg" onClick={HandleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign Up Now" : "Alredy registerd ? Sign In Now"}</p>
            </form>
           </div>
        </div>
    )
}
export default Login;