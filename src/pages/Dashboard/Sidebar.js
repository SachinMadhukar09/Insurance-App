import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSideBar } from "../../logic/actions/actions";
import { useLocation } from "react-router-dom";
import homeIcon from "../../Assets/svg/home.svg";
import homeActiveIcon from "../../Assets/svg/home-active.svg";
import "./sidebar.css";

const SideBar = () => {
  const { pathname } = useLocation();
  let { company } = useParams();
  if (!company) {
    company = localStorage.getItem("company");
  }

  const history = useHistory();
  const showSideBar = useSelector((state) => state.user.showSideBar);
  const dispatch = useDispatch();

  const goTo = (path) => {
    history.push(path);
    // if (showSideBar) {
    //   dispatch(toggleSideBar());
    // }
  };
  return (
    <div className="sidebar-container" showSideBar={showSideBar}>
      <div
        className="link-container"
        onClick={() => goTo(`/${company}/dashboard`)}
        active={pathname === `/${company}/dashboard`}
      >
        <div className="icon-container">
          {pathname === `/${company}/dashboard` ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <h3
          className="link"
          style={
            pathname === `/${company}/dashboard`
              ? { color: "#ea8283" }
              : { color: "#394042" }
          }
        >
          Dashboard
        </h3>
      </div>

      <div
        className="link-container"
        onClick={() => goTo(`/${company}/products`)}
        active={pathname === `/${company}/products`}
      >
        <div className="icon-container">
          {pathname === `/${company}/products` ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <h3
          className="link"
          style={
            pathname === `/${company}/products`
              ? { color: "#ea8283" }
              : { color: "#394042" }
          }
        >
          Products
        </h3>
      </div>

      <div
        className="link-container"
        onClick={() => goTo(`/${company}/policies`)}
        active={pathname === `/${company}/policies`}
      >
        <div className="icon-container">
          {pathname === `/${company}/policies` ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <h3
          className="link"
          style={
            pathname === `/${company}/policies`
              ? { color: "#ea8283" }
              : { color: "#394042" }
          }
        >
          Policies
        </h3>
      </div>

      <div
        className="link-container"
        onClick={() => goTo(`/${company}/quotes`)}
        active={pathname === `/${company}/quotes`}
      >
        <div className="icon-container">
          {pathname === `/${company}/quotes` ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <h3
          className="link"
          style={
            pathname === `/${company}/quotes`
              ? { color: "#ea8283" }
              : { color: "#394042" }
          }
        >
          Quotes
        </h3>
      </div>

      <div
        className="link-container"
        onClick={() => goTo(`/${company}/proposals`)}
        active={pathname === `/${company}/proposals`}
      >
        <div className="icon-container">
          {pathname === `/${company}/proposals` ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <h3
          className="link"
          style={
            pathname === `/${company}/proposals`
              ? { color: "#ea8283" }
              : { color: "#394042" }
          }
        >
          Proposals
        </h3>
      </div>

      <div
        className="link-container"
        onClick={() => goTo(`/${company}/claims`)}
        active={pathname === `/${company}/claims`}
      >
        <div className="icon-container">
          {pathname === `/${company}/claims` ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <h3
          className="link"
          style={
            pathname === `/${company}/claims`
              ? { color: "#ea8283" }
              : { color: "#394042" }
          }
        >
          Claims
        </h3>
      </div>

      <div
        className="link-container"
        onClick={() => goTo(`/${company}/profile`)}
        active={pathname === `/${company}/profile`}
      >
        <div className="icon-container">
          {pathname === `/${company}/profile` ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <h3
          className="link"
          style={
            pathname === `/${company}/profile`
              ? { color: "#ea8283" }
              : { color: "#394042" }
          }
        >
          Profile
        </h3>
      </div>

      <div
        className="link-container"
        onClick={() => goTo(`/${company}/help`)}
        active={pathname === `/${company}/help`}
      >
        <div className="icon-container">
          {pathname === `/${company}/help` ? (
            <img src={homeActiveIcon} alt="HomeIcon" />
          ) : (
            <img src={homeIcon} alt="HomeIcon" />
          )}
        </div>
        <h3
          className="link"
          style={
            pathname === `/${company}/help`
              ? { color: "#ea8283" }
              : { color: "#394042" }
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
