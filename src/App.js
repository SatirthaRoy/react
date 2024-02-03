import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Bag from "./components/Bag";
import Fruits from "./components/Fruits";

function App() {
  return (
    <>
      <Navigation firstName = 'Satirtha' lastName="Roy"/>
      <Main bag={<Bag fruits={<Fruits/>}/>}/>
      <Footer list={['rice', 'potato', 'sugar', 'mango', 'apple', 'fish']}/>
    </>
  );
}

export default App;
