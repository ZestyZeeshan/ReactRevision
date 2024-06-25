import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food";
import Card from "./Card";
import Button from "./Botton/Button";
import Student from "./Props/Student";

function App() {
 

  return (
    <>
      <Header/>
      <Food/>
      <Card/>
      <Button/>
      <Student name='zesty' age={19} isStudent={true} college="bvp" />
      <Student name='afr' age={20} isStudent={false} colleege='jmi'/>
      <Student name='tal' age={21} isStudent={true} college="Ca" />
      <Student name='nit' age={22} isStudent={false} colleege='gurug'/>

  
      <Footer/>
    </>
  );
}

export default App
