import { useEffect, useState } from "react";
import { content } from "./logic/fetchContent";
import { ScaleLoader } from "react-spinners";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

function App() {
  const [loading, setLoading] = useState(true);

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
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home content={content} />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
