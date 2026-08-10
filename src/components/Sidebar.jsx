import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("/manage-activity") || path.includes("/in-all-activity") || path.includes("/all-activity") || path.includes("/fso-all-activity")) {
      setOpenMenu("manage_activity");
    } else if (path.includes("/whatsapp")) {
      setOpenMenu("whatsapp");
    } else if (path.includes("/mail")) {
      setOpenMenu("mail");
    } else if (path.includes("/topic") || path.includes("/video") || path.includes("/reject-reversal-video")) {
      setOpenMenu("fb_live");
    } else if (path.includes("/create-webinar") || path.includes("/draft")) {
      setOpenMenu("ecme");
    } else if (path.includes("/activity-library") || path.includes("/my-task") || path.includes("/analytics")) {
      setOpenMenu("marketing_activity");
    } else if (path.includes("/qms")) {
      setOpenMenu("qms");
    }
  }, [location.pathname]);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <>
      <aside className="left-sidebar">

        <div>
          <div className="brand-logo d-flex align-items-center justify-content-center">
            <Link to="/dashboard" className="text-nowrap logo-img">
              <img src="/assets/images/logo.png" width="90" alt="" className="hide_logo" />
              <img src="/assets/images/logo.png" width="90" className="show_logo" alt="" />

            </Link>
            <Link className="nav-link sidebartoggler nav-icon-hover open_1200" id="headerCollapse" to="#">
              <i className="fa-solid fa-angle-left"></i>
            </Link>

            <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>

          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li className="sidebar-item">
                <Link className={"sidebar-link" + (location.pathname === "/dashboard" ? " active" : "")} to="/dashboard" aria-expanded="false">
                  <span>
                    <i className="fa-solid fa-gauge"></i>
                  </span>
                  <span className="hide-menu">Dashboard</span>
                </Link>

              </li>
              <li className="sidebar-item">
                <Link className={"sidebar-link" + (openMenu === "manage_activity" ? " open active" : "")} to="#" onClick={(e) => { e.preventDefault(); toggleMenu("manage_activity"); }} aria-expanded={openMenu === "manage_activity"}>
                  <span>
                    <i className="fa-regular fa-images"></i>
                  </span>
                  <span className="hide-menu"> Manage Activity </span>
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className={"submenu side_one" + (openMenu === "manage_activity" ? " show" : "")} style={{ display: openMenu === "manage_activity" ? "block" : "none" }}>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/manage-activity" ? " active" : "")} to="/manage-activity" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Manage Poster  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/in-all-activity" ? " active" : "")} to="/in-all-activity" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">All Activities  </span>
                    </Link>
                  </li>
                </ul>

              </li>

              <li className="sidebar-item ">
                <Link className={"sidebar-link" + (openMenu === "whatsapp" ? " open active" : "")} to="#" onClick={(e) => { e.preventDefault(); toggleMenu("whatsapp"); }} aria-expanded={openMenu === "whatsapp"}>
                  <span>
                    <i className="fa-brands fa-whatsapp"></i>
                  </span>
                  <span className="hide-menu">WhatsApp </span>
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className={"submenu side_one" + (openMenu === "whatsapp" ? " show" : "")} style={{ display: openMenu === "whatsapp" ? "block" : "none" }}>

                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/whatsapp-campaign-template" ? " active" : "")} to="/whatsapp-campaign-template" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Create Campaign  </span>

                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/whatsapp-campaign-manage" ? " active" : "")} to="/whatsapp-campaign-manage" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">View All Campaign</span>
                    </Link>
                  </li>


                </ul>
              </li>
              <li className="sidebar-item ">
                <Link className={"sidebar-link" + (openMenu === "mail" ? " open active" : "")} to="#" onClick={(e) => { e.preventDefault(); toggleMenu("mail"); }} aria-expanded={openMenu === "mail"}>
                  <span>
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <span className="hide-menu">Mail </span>
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className={"submenu side_one" + (openMenu === "mail" ? " show" : "")} style={{ display: openMenu === "mail" ? "block" : "none" }}>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/mail-campaign-template" ? " active" : "")} to="/mail-campaign-template" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Create Template  </span>

                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/mail-campaign-manage" ? " active" : "")} to="/mail-campaign-manage" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Manage Template</span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/manage-mail-campaign-create" ? " active" : "")} to="/manage-mail-campaign-create" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Create Campaign</span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/manage-mail-campaign" ? " active" : "")} to="/manage-mail-campaign" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Manage Campaign</span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/request-for-template" ? " active" : "")} to="/request-for-template" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Request For HTML Template</span>
                    </Link>
                  </li>

                </ul>
              </li>

              <li className="sidebar-item">
                <Link className={"sidebar-link" + (openMenu === "fb_live" ? " open active" : "")} to="#" onClick={(e) => { e.preventDefault(); toggleMenu("fb_live"); }} aria-expanded={openMenu === "fb_live"}>
                  <span>
                    <i className="fa-brands fa-facebook-f"></i>
                  </span>
                  <span className="hide-menu"> FB Live </span>
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className={"submenu side_one" + (openMenu === "fb_live" ? " show" : "")} style={{ display: openMenu === "fb_live" ? "block" : "none" }}>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/topic" ? " active" : "")} to="/topic" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Topic  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/video" ? " active" : "")} to="/video" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Fb Live Video  </span>
                    </Link>
                  </li>

                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/reject-reversal-video" ? " active" : "")} to="/reject-reversal-video" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Reject Reversal Video  </span>
                    </Link>
                  </li>
                </ul>


              </li>
              <li className="sidebar-item">
                <Link className={"sidebar-link" + (openMenu === "ecme" ? " open active" : "")} to="#" onClick={(e) => { e.preventDefault(); toggleMenu("ecme"); }} aria-expanded={openMenu === "ecme"}>
                  <span>
                    <i className="fa-solid fa-arrows-to-dot"></i>
                  </span>
                  <span className="hide-menu"> eCME </span>
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className={"submenu side_one" + (openMenu === "ecme" ? " show" : "")} style={{ display: openMenu === "ecme" ? "block" : "none" }}>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/create-webinar" ? " active" : "")} to="/create-webinar" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Create Webinar  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/draft" ? " active" : "")} to="/draft" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Draft Webinar  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/webinar-management" ? " active" : "")} to="/webinar-management" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Webinar Management  </span>
                    </Link>
                  </li>


                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/speaker-management" ? " active" : "")} to="/speaker-management" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Speaker Management  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/attendee-management" ? " active" : "")} to="/attendee-management" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Participant  Management  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/speaker-list" ? " active" : "")} to="/speaker-list" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Ratings  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/reports-analytics" ? " active" : "")} to="/reports-analytics" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Reports & Analytics  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/survey-poll" ? " active" : "")} to="/survey-poll" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Survey & Poll  </span>
                    </Link>
                  </li>

                </ul>
              </li>

              <li className="sidebar-item">
                <Link className={"sidebar-link" + (openMenu === "marketing_activity" ? " open active" : "")} to="#" onClick={(e) => { e.preventDefault(); toggleMenu("marketing_activity"); }} aria-expanded={openMenu === "marketing_activity"}>
                  <span>
                    <i className="fa-solid fa-arrows-to-eye"></i>
                  </span>
                  <span className="hide-menu"> Marketing Activity </span>
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className={"submenu side_one" + (openMenu === "marketing_activity" ? " show" : "")} style={{ display: openMenu === "marketing_activity" ? "block" : "none" }}>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/activity-library" ? " active" : "")} to="/activity-library" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Activity Library</span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/my-task" ? " active" : "")} to="/my-task" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> My Task </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/all-activity" ? " active" : "")} to="/all-activity" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> All Activities </span>
                    </Link>
                  </li>

                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/analytics" ? " active" : "")} to="/analytics" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Analytics </span>
                    </Link>
                  </li>
                </ul>

              </li>




              <li className="sidebar-item">
                <Link className={"sidebar-link" + (location.pathname === "/registered-fso" ? " active" : "")} to="/registered-fso" aria-expanded="false">
                  <span>
                    <i className="fa-regular fa-registered"></i>
                  </span>
                  <span className="hide-menu">Registered FSO</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className={"sidebar-link" + (location.pathname === "/user-report-download" ? " active" : "")} to="/user-report-download" aria-expanded="false">
                  <span>
                    <i className="fa-solid fa-download"></i>
                  </span>
                  <span className="hide-menu">Download Report</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className={"sidebar-link" + (location.pathname === "/content-repository" ? " active" : "")} to="/content-repository" aria-expanded="false">
                  <span>
                    <i className="fa-solid fa-align-center"></i>
                  </span>
                  <span className="hide-menu"> Content Repository</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className={"sidebar-link" + (location.pathname === "/manage-content-repository" ? " active" : "")} to="/manage-content-repository" aria-expanded="false">
                  <span>
                    <i className="fa-solid fa-align-left"></i>
                  </span>
                  <span className="hide-menu"> Manage  Repository </span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className={"sidebar-link" + (location.pathname === "/doctor-landing-page" ? " active" : "")} to="/doctor-landing-page" aria-expanded="false">
                  <span>
                    <i className="fa-solid fa-notes-medical"></i>
                  </span>
                  <span className="hide-menu"> Doctor Landing Page </span>
                </Link>
              </li>

              <li className="sidebar-item ">
                <Link className={"sidebar-link" + (openMenu === "qms" ? " open active" : "")} to="#" onClick={(e) => { e.preventDefault(); toggleMenu("qms"); }} aria-expanded={openMenu === "qms"}>
                  <span>
                    <i className="fa-regular fa-comment-dots"></i>
                  </span>
                  <span className="hide-menu">QMS</span>
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className={"submenu side_one" + (openMenu === "qms" ? " show" : "")} style={{ display: openMenu === "qms" ? "block" : "none" }}>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/qms" ? " active" : "")} to="/qms" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Manage Query</span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className={"sidebar-link" + (location.pathname === "/qms-category" ? " active" : "")} to="/qms-category" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Manage Category</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

        </div>

      </aside>
    </>);
}
