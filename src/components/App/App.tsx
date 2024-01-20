import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./App.module.scss";
import { About } from "@/pages/about";
import tigerPng from "@/assets/tiger.png";
import boulevardJpg from "@/assets/boulevard.jpg";
import StarSvg from "@/assets/star.svg";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Link to='/about'>about</Link>
      <br />
      <Link to='/shop'>shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
      <div>
        <img width={150} height={150} src={tigerPng} alt='tiger' />
        <img width={150} height={150} src={boulevardJpg} alt='depo' />
        <StarSvg color='pink' width={150} height={150} />
      </div>
      <About />
    </div>
  );
};
