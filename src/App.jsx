import { useEffect, useState } from "react";
import { content } from "./logic/fetchContent";
import { ScaleLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(true);

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
    <div className='h-screen w-screen flex justify-center items-center'>
      <ScaleLoader color='#000000' />
    </div>
  ) : (
    <div>
      <nav>
        <img
          src={content.images.logo.src}
          alt={content.images.logo.name}
          className='w-28'
        />
        <a href=''></a>
        <a href=''></a>
        <a href=''></a>
      </nav>
    </div>
  );
}

export default App;
