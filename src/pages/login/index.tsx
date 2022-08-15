import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login, selectLogined } from "../../redux/user";
import "./index.scss";

function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();

    const { from }: any = location.state || { from: "/" };
    const logined = useAppSelector(selectLogined);
    useEffect(() => {
        if(logined) { // 已登录状态跳转首页
            navigate(from, { replace: true });
        }
    });

    const handleLogin = () => {
        dispatch(login({}));
        navigate(from, { replace: true });
    };

    return <div>
        Login Page
        <button onClick={handleLogin}>登录</button>
    </div>
}

export default LoginPage;