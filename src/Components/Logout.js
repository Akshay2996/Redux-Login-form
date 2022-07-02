import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import "./Logout.css";

export const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="logout">
      <h1>
        Welcome <span className="username">{user.name}</span>
      </h1>
      <button className="logout__btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
