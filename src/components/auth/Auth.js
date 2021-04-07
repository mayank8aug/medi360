import { useLocation } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Auth() {
    const { state } = useLocation();
    if (state && state.context === 'register') {
        return <SignUp />;
    } else {
        return <SignIn />;
    }

}

export default Auth;