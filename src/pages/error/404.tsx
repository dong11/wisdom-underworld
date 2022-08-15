import { useNavigate } from "react-router-dom";

function Error404Page() {
    const navigate = useNavigate();

    const toHome = () => {
        navigate('/', { replace: true });
    };

    return <div className="error-page">
        404 Error
        <button onClick={toHome}>回首页</button>
    </div>
}

export default Error404Page;