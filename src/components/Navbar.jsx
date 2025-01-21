import { Link, NavLink } from "react-router-dom";
const LINKS = [
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "Gallery",
    to: "/gallery",
  },
  {
    id:3,
    name: "Link1",
    to: "/link1"

  },
  {
    id:4,
    name: "Link2",
    to: "/link2"

  }


];
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/home">
          SOME NAME
        </Link>
      
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {LINKS.map((el) => (
            <li className="nav-item" key={el.id}>
              <NavLink className="nav-link active" aria-current="page" to={el.to}>
                {el.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
