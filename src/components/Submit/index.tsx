import { ISubmit } from './interface';
import { FC } from 'react'
import cl from './submit.module.scss'

const Submit:FC<ISubmit> = ({title, isActive, onClick}) => {
    const className = [cl.button, (isActive ? cl.active : cl.disabled)].join(' ');

    return (  
        <button disabled={!isActive} className={className} onClick={onClick}>    
            {title}
        </button>
    );
}
 
export default Submit;