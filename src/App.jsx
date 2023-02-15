import { useEffect, useState } from "react";
import { content } from "./logic/fetchContent";
import { ScaleLoader } from "react-spinners";
import Navbar from "./components/Navbar";

function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  function checkContent() {
    const intervalID = setInterval(() => {
      if (
        content.images.logo != undefined &&
        content.products.greenDragon != undefined
      ) {
        setLoading(false);
        clearInterval(intervalID);
      } else return;
    }, 250);
  }

  useEffect(() => {
    checkContent();
  }, []);

  return loading ? (
    <div className='flex items-center justify-center w-screen h-screen'>
      <ScaleLoader color='#000000' />
    </div>
  ) : (
    <div>
      <Navbar content={content} cart={cart} />
      <section></section>

      <div
        id='background'
        className='absolute top-0 w-screen h-screen bg-black opacity-0'
      ></div>
    </div>
  );
}

export default App;
