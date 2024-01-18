import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./App.module.scss";

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
      <Outlet />
    </div>
  );
};
