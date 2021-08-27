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
      <div style={{ padding: "10px", paddingTop: "20px" }}>
        <div
          className="link-container"
          onClick={() => goTo(`/${company}/dashboard`)}
          active={pathname === `/${company}/dashboard`}
        >
          <div className="icon-container">
            <i class="fa fa-tachometer" aria-hidden="true"></i>
          </div>
          <span>Dashboard</span>
        </div>

        <div
          className="link-container"
          onClick={() => goTo(`/${company}/products`)}
          active={pathname === `/${company}/products`}
        >
          <div className="icon-container">
            <i class="fa fa-product-hunt" aria-hidden="true"></i>
          </div>
          <span>Products</span>
        </div>

        <div
          className="link-container"
          onClick={() => goTo(`/${company}/quotes`)}
          active={pathname === `/${company}/quotes`}
        >
          <div className="icon-container">
            <i class="fa fa-users" aria-hidden="true"></i>
          </div>
          <span>Quotes</span>
        </div>

        <div
          className="link-container"
          onClick={() => goTo(`/${company}/proposals`)}
          active={pathname === `/${company}/proposals`}
        >
          <div className="icon-container">
            <i class="fa fa-tablet" aria-hidden="true"></i>
          </div>
          <span>Proposals</span>
        </div>

        <div
          className="link-container"
          onClick={() => goTo(`/${company}/claims`)}
          active={pathname === `/${company}/claims`}
        >
          <div className="icon-container">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </div>
          <li className="nav-item-dropdown" style={{ paddingRight: "25px" }}>
            <a
              // className="open-claim-form"
              href="/submit-claim-request/"
            >
              Claims
            </a>
            <span className="menu-dropdown-font"></span>
            <ul className="nav-list">
              <li className="sub-menu-selected">
                <a href="/claim/health-claim">Health</a>
              </li>

              <li className="sub-menu-selected">
                <a href="/articles/">Motor</a>
              </li>
              <li className="sub-menu-selected">
                <a href="/articles/">Travel</a>
              </li>
              <li className="sub-menu-selected">
                <a href="/articles/">GMC</a>
              </li>
            </ul>
          </li>
          {/* <span>Claims</span> */}
        </div>
        <div
          className="link-container"
          onClick={() => goTo(`/${company}/policies`)}
          active={pathname === `/${company}/policies`}
        >
          <div className="icon-container">
            <i class="fa fa-users" aria-hidden="true"></i>
          </div>
          <span>Policies</span>
        </div>

        <div
          className="link-container"
          onClick={() => goTo(`/${company}/profile`)}
          active={pathname === `/${company}/profile`}
        >
          <div className="icon-container">
            <i class="fa fa-user-md" aria-hidden="true"></i>
          </div>
          <span>Profile</span>
        </div>

        <div
          className="link-container"
          onClick={() => goTo(`/${company}/help`)}
          active={pathname === `/${company}/help`}
        >
          <div className="icon-container">
            <i class="fa fa-question-circle" aria-hidden="true"></i>
          </div>
          <span>Help</span>
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
    </div>
  );
};

export default SideBar;
