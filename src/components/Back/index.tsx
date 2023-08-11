import { FC } from "react";
import { IBack } from "./interface";
import { useNavigate } from "react-router-dom";
import cl from './back.module.scss'

const Back:FC<IBack> = ({title, to}) => {
    const navigate = useNavigate();
    return (  
        <div className={cl.back} onClick={() => navigate(to)}>
            {title}
        </div>
    );
}
 
export default Back;