import { useEffect, useState } from "react";
import { content } from "./logic/fetchContent";
import { ScaleLoader } from "react-spinners";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";

function App() {
  const [loading, setLoading] = useState(true);

  function checkContent() {
    const intervalID = setInterval(() => {
      if (content) {
        setLoading(false);
        clearInterval(intervalID);
      } else return;
    }, 500);
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
          <Route path='/about' element={<About content={content} />} />
          <Route path='/shop' element={<Shop content={content} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart content={content} />} />
          <Route path='/product' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
