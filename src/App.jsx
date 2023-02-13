import { useEffect, useState } from "react";
import { content } from "./logic/fetchContent";
import { ScaleLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 250);
  }, []);

  return loading ? null : (
    <div>
      <nav>
        <img src={content.images.logo.src} alt={content.images.logo.name} />
        <a href=''></a>
        <a href=''></a>
        <a href=''></a>
      </nav>
    </div>
  );
}

export default App;
