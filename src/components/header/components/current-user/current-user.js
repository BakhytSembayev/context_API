import {useContext} from 'react';
import { Appcontext } from '../../../../context';

export const CurrentUser =()=>{
const {name} = useContext (Appcontext);

    return (
        <div>
            <div>Текущий пользователь: {name}</div>
        </div>
    );

};