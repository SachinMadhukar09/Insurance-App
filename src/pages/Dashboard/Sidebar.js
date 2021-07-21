import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSideBar } from "../../logic/actions/actions";
import { useLocation } from "react-router-dom";
import homeIcon from "../../Assets/svg/home.svg";
import homeActiveIcon from "../../Assets/svg/home-active.svg";
import "./sidebar.css";


const SideBar = () => {
  const { pathname } = useLocation();

  const history = useHistory();
  const showSideBar = useSelector((state) => state.user.showSideBar);
  const dispatch = useDispatch();

  const goTo = (path) => {
    history.push(path);
    if (showSideBar) {
      dispatch(toggleSideBar());
    }
  };
  return (
    <div className="sidebar-container" showSideBar={showSideBar}>
      <div
        className="link-container"
        onClick={() => goTo("/dashboard")}
        active={pathname === "/dashboard"}
      >
        <div className="icon-container">
          {pathname === "/dashboard" ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <h3
          className="link"
          style={
            pathname === "/dashboard"
              ? { color: "#ea8283" }
              : { color: "#394042" }
          }
        >
          Dashboard
        </h3>
      </div>

      <div
        className="link-container"
        onClick={() => goTo("/policies")}
        active={pathname === "/policies"}
      >
        <div className="icon-container">
          {pathname === "/policies" ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <h3
          className="link"
          style={
            pathname === "/policies"
              ? { color: "#ea8283" }
              : { color: "#394042" }
          }
        >
          Policies
        </h3>
      </div>

      <div
        className="link-container"
        onClick={() => goTo("/quotes")}
        active={pathname === "/quotes"}
      >
        <div className="icon-container">
          {pathname === "/quotes" ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <h3
          className="link"
          style={
            pathname === "/quotes" ? { color: "#ea8283" } : { color: "#394042" }
          }
        >
          Quotes
        </h3>
      </div>

      <div
        className="link-container"
        onClick={() => goTo("/proposals")}
        active={pathname === "/proposals"}
      >
        <div className="icon-container">
          {pathname === "/proposals" ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <h3
          className="link"
          style={
            pathname === "/proposals"
              ? { color: "#ea8283" }
              : { color: "#394042" }
          }
        >
          Proposals
        </h3>
      </div>

      <div
        className="link-container"
        onClick={() => goTo("/claims")}
        active={pathname === "/claims"}
      >
        <div className="icon-container">
          {pathname === "/claims" ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <h3
          className="link"
          style={
            pathname === "/claims" ? { color: "#ea8283" } : { color: "#394042" }
          }
        >
          Claims
        </h3>
      </div>

      <div
        className="link-container"
        onClick={() => goTo("/profile")}
        active={pathname === "/profile"}
      >
        <div className="icon-container">
          {pathname === "/profile" ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <h3
          className="link"
          style={
            pathname === "/profile"
              ? { color: "#ea8283" }
              : { color: "#394042" }
          }
        >
          Profile
        </h3>
      </div>

      <div
        className="link-container"
        onClick={() => goTo("/help")}
        active={pathname === "/help"}
      >
        <div className="icon-container">
          {pathname === "/help" ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <h3
          className="link"
          style={
            pathname === "/help" ? { color: "#ea8283" } : { color: "#394042" }
          }
        >
          Help
        </h3>
      </div>

      {/* <div
        className="link-container"
        onClick={() => goTo("/settings")}
        active={pathname === "/settings"}
      >
        <div className="icon-container">
          {pathname === "/settings" ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <div
          className="link"
          style={
            pathname === "/settings"
              ? { color: "#ea8283" }
              : { color: "#394042" }
          }
        >
          Settings
        </div>
      </div> */}
    </div>
  );
};

export default SideBar;
