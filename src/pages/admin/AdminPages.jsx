import { Outlet, NavLink } from "react-router-dom";

export default function AdminPages() {
  return (
    <main className="adm_bg">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <ul>
              <li className="nav-item">
                <NavLink className="nav-link" to="report">
                  報表管理
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-10">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}
