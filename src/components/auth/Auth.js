import { useLocation } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Auth() {
    const { pathname } = useLocation();
    if (pathname === '/register') {
        return <SignUp />;
    } else {
        return <SignIn />;
    }

}

export default Auth;