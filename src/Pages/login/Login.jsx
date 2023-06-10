import Signin from "../../components/login/logIn";
import { useEffect } from "react";

const Login = () =>{
    useEffect(() => {
        document.title = "Lama | Login"
      }, []);

    return(
        <div className="login">
            <Signin/>
        </div>
    )
}

export default Login;