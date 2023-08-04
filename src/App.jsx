import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, set } from "./reduxStuff/action";
import { useCount } from "./hooks/use-count";
import MyTask from "./components/MyTask";
import { fetchGihubUserFromAPI } from "./store/asyncJonSlice";

function App() {
  // const [count, setCount] = useState(0);
  const name = useSelector((state) => state.users.name);
  const dispatch = useDispatch();

  // const { count, increment, decrement, set } = useCount();

  return (
    <>
      {/* Counter :{0} */}
      Name :{name}
      {/* <div className="task-container">
        <div className="me-tasks ">
          <MyTask />
        </div>
        <div className="your-task"></div>
      </div> */}
      <button onClick={() => dispatch(fetchGihubUserFromAPI("Vijendra-Tech"))}>
        Get User
      </button>
    </>
  );
}

export default App;
