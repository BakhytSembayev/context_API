import {Header,UserBlock} from './components'
import styles from './App.css';

const getUserFromServer = () => ({
  id: 'a1110',
  name: 'Bakhyt',
  age: 28,
  email: 'bahytsembaev@gmail.com',
  phone: '+7-777-097-79-63',

});

export const App = ()=>{
  const {name, age, email, phone} = getUserFromServer();
  return (
    <div className={styles.app}>
      <Header currentUser ={name} />
      <hr/>
      <UserBlock name={name} age={age} email={email} phone={phone}/>
    </div>
  );
};

export default App;
