import Signin from "../../components/login/logIn";
import { useEffect } from "react";

const Login = () =>{
    useEffect(() => {
        document.title = "Lama | Logout";
      }, []);

    return(
        <div className="logout">
            <Signin/>
        </div>
    )
}

export default Login;