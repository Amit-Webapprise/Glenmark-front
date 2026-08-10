import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item d-block d-xl-none">
              <Link className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" to="javascript:void(0)">
                <i className="fa-solid fa-bars"></i>
              </Link>
            </li>
            
          </ul>
          <div className="navbar-collapse justify-content-end px-0 ms-2" id="navbarNav">
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
              <li className="nav-item  ms-2" style={{"minWidth":"200px","width":"100%"}}>
               <select className="multi_select_rs " multiple="multiple">
                  <option value="all" defaultValue>All Division</option>
                  <option value="1">Division 1</option>
                  <option value="2">Division 2</option>
                  <option value="3">Division 3</option>
                </select>


                </li>
              <li className="nav-item dropdown ms-2">
                <Link className="nav-link nav-icon-hover" to="javascript:void(0)" id="drop2" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  
                  SR
                </Link>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                  <div className="message-body">
                    <span className="w-100 text-center d-block text-dark"> <i className="fa-regular fa-user me-1"></i> User Name </span>
                    <Link to="" className="btn btn-outline-primary mx-3 mt-2 d-block"  data-bs-toggle="modal" data-bs-target="#change_password">Change Password</Link>
                    <Link to="/login" className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>  );}
