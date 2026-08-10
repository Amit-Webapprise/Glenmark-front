export default function Sidebar() {
  return (
    <>
    <aside className="left-sidebar">
      
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-center">
          <a href="./dashboard.php" className="text-nowrap logo-img">
            <img src="/assets/images/logo.png" width="90" alt="" className="hide_logo" />
            <img src="/assets/images/logo.png" width="90" className="show_logo" alt="" />
          
            </a>
            <a className="nav-link sidebartoggler nav-icon-hover open_1200" id="headerCollapse" href="javascript:void(0)">
              <i className="fa-solid fa-angle-left"></i>
            </a>
          
          <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
       
        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li className="sidebar-item">
              <a className="sidebar-link" href="./dashboard.php" aria-expanded="false">
                <span>
                  <i className="fa-solid fa-gauge"></i>
                </span>
                <span className="hide-menu">Dashboard</span>
              </a>
              
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="fa-regular fa-images"></i>
                </span>
                <span className="hide-menu"> Manage Activity </span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
                <ul className="submenu side_one">
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./manage-activity.php" aria-expanded="false">
                      <span className="show_active">
                      <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Manage Poster  </span>                      
                    </a>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./in-all-activity.php" aria-expanded="false">
                      <span className="show_active">
                      <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">All Activities  </span>                      
                    </a>
                  </li>                
                </ul>
              
            </li>
            
            <li className="sidebar-item ">
              <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="fa-brands fa-whatsapp"></i>
                </span>
                <span className="hide-menu">WhatsApp </span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
              <ul className="submenu side_one">
                
                <li className="sidebar-item side_line_two">
                  <a className="sidebar-link" href="./whatsapp-campaign-template.php" aria-expanded="false">
                    <span className="show_active">
                     <i className="fa-solid fa-circle"></i>
                    </span>
                    <span className="hide-menu">Create Campaign  </span>
                    
                  </a>
                </li>
                <li className="sidebar-item side_line_two">
                  <a className="sidebar-link" href="./whatsapp-campaign-manage.php" aria-expanded="false">
                    <span className="show_active">
                     <i className="fa-solid fa-circle"></i>
                    </span>
                    <span className="hide-menu">View All Campaign</span>
                  </a>
                </li>
                 
               
              </ul>
            </li>
            <li className="sidebar-item ">
              <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <span className="hide-menu">Mail </span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
              <ul className="submenu side_one">
                <li className="sidebar-item side_line_two">
                  <a className="sidebar-link" href="./mail-campaign-template.php" aria-expanded="false">
                    <span className="show_active">
                     <i className="fa-solid fa-circle"></i>
                    </span>
                    <span className="hide-menu">Create Template  </span>
                    
                  </a>
                </li>
                <li className="sidebar-item side_line_two">
                  <a className="sidebar-link" href="./mail-campaign-manage.php" aria-expanded="false">
                    <span className="show_active">
                     <i className="fa-solid fa-circle"></i>
                    </span>
                    <span className="hide-menu">Manage Template</span>
                  </a>
                </li>
                <li className="sidebar-item side_line_two">
                  <a className="sidebar-link" href="./manage-mail-campaign-create.php" aria-expanded="false">
                    <span className="show_active">
                     <i className="fa-solid fa-circle"></i>
                    </span>
                    <span className="hide-menu">Create Campaign</span>
                  </a>
                </li>
                <li className="sidebar-item side_line_two">
                  <a className="sidebar-link" href="./manage-mail-campaign.php" aria-expanded="false">
                    <span className="show_active">
                     <i className="fa-solid fa-circle"></i>
                    </span>
                    <span className="hide-menu">Manage Campaign</span>
                  </a>
                </li>
                <li className="sidebar-item side_line_two">
                  <a className="sidebar-link" href="./request-for-template.php" aria-expanded="false">
                    <span className="show_active">
                     <i className="fa-solid fa-circle"></i>
                    </span>
                    <span className="hide-menu">Request For HTML Template</span>
                  </a>
                </li>
               
              </ul>
            </li>
            
            <li className="sidebar-item">
              <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="fa-brands fa-facebook-f"></i>
                </span>
                <span className="hide-menu"> FB Live </span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
                <ul className="submenu side_one">
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./topic.php" aria-expanded="false">
                      <span className="show_active">
                      <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Topic  </span>                      
                    </a>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./video.php" aria-expanded="false">
                      <span className="show_active">
                      <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Fb Live Video  </span>                      
                    </a>
                  </li>
                  
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./reject-reversal-video.php" aria-expanded="false">
                      <span className="show_active">
                      <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Reject Reversal Video  </span>                      
                    </a>
                  </li>                
                </ul>
                                 
                
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="fa-solid fa-arrows-to-dot"></i>
                </span>
                <span className="hide-menu"> eCME </span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
                <ul className="submenu side_one">
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./create-webinar.php" aria-expanded="false">
                      <span className="show_active">
                      <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Create Webinar  </span>                      
                    </a>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./draft.php" aria-expanded="false">
                      <span className="show_active">
                      <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Draft Webinar  </span>                      
                    </a>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./webinar-management.php" aria-expanded="false">
                      <span className="show_active">
                      <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Webinar Management  </span>                      
                    </a>
                  </li>
                  
                  
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./speaker-management.php" aria-expanded="false">
                      <span className="show_active">
                      <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Speaker Management  </span>                      
                    </a>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./attendee-management.php" aria-expanded="false">
                      <span className="show_active">
                      <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Participant  Management  </span>                      
                    </a>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./speaker-list.php" aria-expanded="false">
                      <span className="show_active">
                      <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Ratings  </span>                      
                    </a>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./reports-analytics.php" aria-expanded="false">
                      <span className="show_active">
                      <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Reports & Analytics  </span>                      
                    </a>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./survey-poll.php" aria-expanded="false">
                      <span className="show_active">
                      <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Survey & Poll  </span>                      
                    </a>
                  </li>
                  
                </ul>
            </li>

             <li className="sidebar-item">
              <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="fa-solid fa-arrows-to-eye"></i>
                </span>
                <span className="hide-menu"> Marketing Activity </span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
                <ul className="submenu side_one">
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./activity-library.php" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu">Activity Library</span>
                    </a>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./my-task.php" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> My Task </span>
                    </a>
                  </li>
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./all-activity.php" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> All Activities </span>
                    </a>
                  </li>
                      
                  <li className="sidebar-item side_line_two">
                    <a className="sidebar-link" href="./analytics.php" aria-expanded="false">
                      <span className="show_active">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                      <span className="hide-menu"> Analytics </span>
                    </a>
                  </li>                
                </ul>
              
            </li>
            
            
            
            
            <li className="sidebar-item">
              <a className="sidebar-link" href="./registered-fso.php" aria-expanded="false">
                <span>
                  <i className="fa-regular fa-registered"></i>
                </span>
                <span className="hide-menu">Registered FSO</span>
              </a>
            </li>
             <li className="sidebar-item">
              <a className="sidebar-link" href="./user-report-download.php" aria-expanded="false">
                <span>
                  <i className="fa-solid fa-download"></i>
                </span>
                <span className="hide-menu">Download Report</span>
              </a>
            </li>
             <li className="sidebar-item">
              <a className="sidebar-link" href="./content-repository.php" aria-expanded="false">
                <span>
                  <i className="fa-solid fa-align-center"></i>
                </span>
                <span className="hide-menu"> Content Repository</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./manage-content-repository.php" aria-expanded="false">
                <span>
                  <i className="fa-solid fa-align-left"></i>
                </span>
                <span className="hide-menu"> Manage  Repository </span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./doctor-landing-page.php" aria-expanded="false">
                <span>
                  <i className="fa-solid fa-notes-medical"></i>
                </span>
                <span className="hide-menu"> Doctor Landing Page </span>
              </a>
            </li>
            
            <li className="sidebar-item ">
              <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="fa-regular fa-comment-dots"></i>
                </span>
                <span className="hide-menu">QMS</span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
              <ul className="submenu side_one">
                <li className="sidebar-item side_line_two">
                  <a className="sidebar-link" href="./qms.php" aria-expanded="false">
                    <span className="show_active"> 
                      <i className="fa-solid fa-circle"></i>
                    </span>
                    <span className="hide-menu">Manage Query</span>
                  </a>
                </li>
                <li className="sidebar-item side_line_two">
                  <a className="sidebar-link" href="./qms-category.php" aria-expanded="false">
                    <span className="show_active"> 
                      <i className="fa-solid fa-circle"></i>
                    </span>
                    <span className="hide-menu">Manage Category</span>
                  </a>
                </li> 
              </ul>
            </li>
            
          


            

            
           
            
            
          

              
          </ul>
        </nav>
        
      </div>
      
    </aside>
    </>  );}
