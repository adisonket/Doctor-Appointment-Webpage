import { useEffect, useState } from "react";
import "./preloader.css";

const Preloader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const preloader = document.querySelector("[data-preload]");
    window.addEventListener("load", () => {
      preloader?.classList.add("loaded");
      document.body.classList.add("loaded");
    });
  }, []);

  return (
    <>
      <div class="preload" data-preload>
        <div class="circle"></div>
        <p class="text">Dochub</p>
      </div>
    </>
  );
};

export default Preloader;
