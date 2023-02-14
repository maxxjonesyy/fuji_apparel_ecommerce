import { useEffect, useState } from "react";
import { content } from "./logic/fetchContent";
import { ScaleLoader } from "react-spinners";
import Navbar from "./components/Navbar";

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
    <div className='flex items-center justify-center'>
      <ScaleLoader color='#000000' />
    </div>
  ) : (
    <div>
      <Navbar content={content} />
    </div>
  );
}

export default App;
