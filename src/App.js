import { Header, UserBlock } from "./components";
import styles from "./App.css";
import { Appcontext } from "./context";

const getUserFromServer = () => ({
  id: "a1110",
  name: "Bakhyt",
  age: 28,
  email: "bahytsembaev@gmail.com",
  phone: "+7-777-097-79-63",
});

export const App = () => {
  const userData = getUserFromServer();

  return (
    <Appcontext.Provider value ={userData}>
      <div className={styles.app}>
        <Header />
        <hr />
        <UserBlock />
      </div>
    </Appcontext.Provider>
  );
};

export default App;
