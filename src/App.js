import { useSelector } from "react-redux";
import { Login } from "./Components/Login";
import { Logout } from "./Components/Logout";
import { selectUser } from "./features/userSlice";
import "./styles.css";

export default function App() {
  const user = useSelector(selectUser);
  return <div className="App">{user ? <Logout /> : <Login />}</div>;
}
