import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
      <aside className="left-sidebar">

        <div>
          <div className="brand-logo d-flex align-items-center justify-content-center">
            <Link to="/dashboard" className="text-nowrap logo-img">
              <img src="/assets/images/logo.png" width="90" alt="" className="hide_logo" />
              <img src="/assets/images/logo.png" width="90" className="show_logo" alt="" />

            </Link>
            <Link className="nav-link sidebartoggler nav-icon-hover open_1200" id="headerCollapse" to="javascript:void(0)">
              <i className="fa-solid fa-angle-left"></i>
            </Link>

            <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>

          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/dashboard" aria-expanded="false">
                  <span>
                    <i className="fa-solid fa-gauge"></i>
                  </span>
                  <span className="hide-menu">Dashboard</span>
                </Link>

              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="javascript:void(0)" aria-expanded="false">
                  <span>
                    <i className="fa-regular fa-images"></i>
                  </span>
                  <span className="hide-menu"> Manage Activity </span>
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className="submenu side_one">
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/manage-activity" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Manage Poster  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/in-all-activity" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">All Activities  </span>
                    </Link>
                  </li>
                </ul>

              </li>

              <li className="sidebar-item ">
                <Link className="sidebar-link" to="javascript:void(0)" aria-expanded="false">
                  <span>
                    <i className="fa-brands fa-whatsapp"></i>
                  </span>
                  <span className="hide-menu">WhatsApp </span>
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className="submenu side_one">

                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/whatsapp-campaign-template" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Create Campaign  </span>

                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/whatsapp-campaign-manage" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">View All Campaign</span>
                    </Link>
                  </li>


                </ul>
              </li>
              <li className="sidebar-item ">
                <Link className="sidebar-link" to="javascript:void(0)" aria-expanded="false">
                  <span>
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <span className="hide-menu">Mail </span>
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className="submenu side_one">
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/mail-campaign-template" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Create Template  </span>

                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/mail-campaign-manage" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Manage Template</span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/manage-mail-campaign-create" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Create Campaign</span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/manage-mail-campaign" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Manage Campaign</span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/request-for-template" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Request For HTML Template</span>
                    </Link>
                  </li>

                </ul>
              </li>

              <li className="sidebar-item">
                <Link className="sidebar-link" to="javascript:void(0)" aria-expanded="false">
                  <span>
                    <i className="fa-brands fa-facebook-f"></i>
                  </span>
                  <span className="hide-menu"> FB Live </span>
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className="submenu side_one">
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/topic" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Topic  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/video" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Fb Live Video  </span>
                    </Link>
                  </li>

                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/reject-reversal-video" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Reject Reversal Video  </span>
                    </Link>
                  </li>
                </ul>


              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="javascript:void(0)" aria-expanded="false">
                  <span>
                    <i className="fa-solid fa-arrows-to-dot"></i>
                  </span>
                  <span className="hide-menu"> eCME </span>
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className="submenu side_one">
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/create-webinar" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Create Webinar  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/draft" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Draft Webinar  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/webinar-management" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Webinar Management  </span>
                    </Link>
                  </li>


                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/speaker-management" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Speaker Management  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/attendee-management" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Participant  Management  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/speaker-list" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Ratings  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/reports-analytics" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Reports & Analytics  </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/survey-poll" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Survey & Poll  </span>
                    </Link>
                  </li>

                </ul>
              </li>

              <li className="sidebar-item">
                <Link className="sidebar-link" to="javascript:void(0)" aria-expanded="false">
                  <span>
                    <i className="fa-solid fa-arrows-to-eye"></i>
                  </span>
                  <span className="hide-menu"> Marketing Activity </span>
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className="submenu side_one">
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/activity-library" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Activity Library</span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/my-task" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> My Task </span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/all-activity" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> All Activities </span>
                    </Link>
                  </li>

                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/analytics" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Analytics </span>
                    </Link>
                  </li>
                </ul>

              </li>




              <li className="sidebar-item">
                <Link className="sidebar-link" to="/registered-fso" aria-expanded="false">
                  <span>
                    <i className="fa-regular fa-registered"></i>
                  </span>
                  <span className="hide-menu">Registered FSO</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/user-report-download" aria-expanded="false">
                  <span>
                    <i className="fa-solid fa-download"></i>
                  </span>
                  <span className="hide-menu">Download Report</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/content-repository" aria-expanded="false">
                  <span>
                    <i className="fa-solid fa-align-center"></i>
                  </span>
                  <span className="hide-menu"> Content Repository</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/manage-content-repository" aria-expanded="false">
                  <span>
                    <i className="fa-solid fa-align-left"></i>
                  </span>
                  <span className="hide-menu"> Manage  Repository </span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/doctor-landing-page" aria-expanded="false">
                  <span>
                    <i className="fa-solid fa-notes-medical"></i>
                  </span>
                  <span className="hide-menu"> Doctor Landing Page </span>
                </Link>
              </li>

              <li className="sidebar-item ">
                <Link className="sidebar-link" to="javascript:void(0)" aria-expanded="false">
                  <span>
                    <i className="fa-regular fa-comment-dots"></i>
                  </span>
                  <span className="hide-menu">QMS</span>
                  <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className="submenu side_one">
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/qms" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Manage Query</span>
                    </Link>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <Link className="sidebar-link" to="/qms-category" aria-expanded="false">
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
