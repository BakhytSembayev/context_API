import {useContext} from 'react';
import { Appcontext } from '../../../../context';

export const UserContacts =()=>{
    const {email,phone} = useContext (Appcontext);

    return (
      <div>
        <h3>Контакты: </h3>
        <div>Почта: {email}</div>
        <div>Телефон: {phone}</div>
      </div>  
    );
};