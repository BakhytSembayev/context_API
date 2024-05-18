import {useContext} from 'react';
import { Appcontext } from '../../../../context';

export const UserPersona)=>{
    const {name,age} = useContext (Appcontext);
    return (
        <div>
            <h3>Персональные данные: </h3>
            <div>Имя: {name}</div>
            <div>Возраст: {age} </div>
        </div>
    )
};