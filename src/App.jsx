import { useEffect, useState } from "react";
import { content } from "./logic/fetchContent";
import { ScaleLoader } from "react-spinners";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  function checkContent() {
    const intervalID = setInterval(() => {
      if (
        content.images.portrait != undefined &&
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
    <div id='app'>
      <Home content={content} cart={cart} />
    </div>
  );
}

export default App;
