import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function InAllActivity() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleToggle = (event) => {
    const isChecked = event.target.checked;
    event.preventDefault(); // Prevent default to handle it manually
    
    if (isChecked) {
      Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to activate your status?",
        icon: 'success',
        showDenyButton: true,
        confirmButtonColor: '#3085d6',
        denyButtonColor: '#d33',
        denyButtonText: 'No',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          event.target.checked = true;
        } else {
          event.target.checked = false;
        }
      });
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to deactivate your status?",
        icon: 'warning',
        showDenyButton: true,
        confirmButtonColor: '#3085d6',
        denyButtonColor: '#d33',
        denyButtonText: 'No',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          event.target.checked = false;
        } else {
          event.target.checked = true;
        }
      });
    }
  };


  useEffect(() => {
    if (window.$) {
      window.$('.select2').each(function () {
        window.$(this).select2({
          dropdownParent: window.$(this).parent(),
        });
      });
      
      if (window.$.fn.DataTable) {
        window.$('.data-table-dr').DataTable({
          scrollX: true,
          fixedHeader: false
        });
      }
    }
  }, []);

  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      <Sidebar />
      <div className="body-wrapper">
        <Header />
        <div className="container-fluid">
   <div className="rs_white_shadow">
    
    <div className="row g-2 justify-content-end">

      <div className="col-lg-auto  col-md-auto col-sm-auto col-12 my-auto me-auto">
        <h2 className="main_title m-0"> All Activities <a href="" className="text-dark ms-1" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i className="fa-solid fa-circle-info"></i></a></h2>
      </div>

       
            <div className="col-lg-auto  col-md-auto col-sm-auto col-auto mt-auto">
              
              <div className="filter_click">
                <a className="btn btn-outline-primary open_filter" href="#" onClick={(e) => { e.preventDefault(); setIsFilterOpen(true); }} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Filter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13.919" height="13.549" className="me-1" viewBox="0 0 16.919 13.549">
                    <g id="Group_65115" data-name="Group 65115" transform="translate(0 -50.984)">
                      <path id="Path_167817" data-name="Path 167817" d="M.529,53.714H9.137a2.2,2.2,0,0,0,4.274,0H16.39a.529.529,0,1,0,0-1.057H13.411a2.2,2.2,0,0,0-4.274,0H.529a.529.529,0,1,0,0,1.057Zm10.746-1.673a1.144,1.144,0,1,1-1.144,1.144A1.146,1.146,0,0,1,11.274,52.041ZM.529,58.287H3.507a2.2,2.2,0,0,0,4.274,0H16.39a.529.529,0,0,0,0-1.057H7.781a2.2,2.2,0,0,0-4.274,0H.529a.529.529,0,0,0,0,1.057Zm5.116-1.673A1.144,1.144,0,1,1,4.5,57.759,1.146,1.146,0,0,1,5.644,56.614ZM16.39,61.8H13.411a2.2,2.2,0,0,0-4.274,0H.529a.529.529,0,1,0,0,1.057H9.137a2.2,2.2,0,0,0,4.274,0H16.39a.529.529,0,1,0,0-1.057Zm-5.116,1.673a1.144,1.144,0,1,1,1.144-1.144A1.146,1.146,0,0,1,11.274,63.476Z" fill=""></path>
                    </g>
                  </svg>
                  Filter
                  <span className="fixed_view_filter">1</span>
                </a>
                <div className="filter_view" style={{ display: isFilterOpen ? "block" : "none" }}>
                  <div className="filter_box">
                    <div className="flter_br">
                      <div className="row">
                        <div className="col-auto me-auto my-auto">
                          <p className="m-0">Filters applied:</p>
                        </div>
                        <div className="col-auto">
                          <a href="#" className="close_fliter" onClick={(e) => { e.preventDefault(); setIsFilterOpen(false); }}>2 <i className="fa-solid fa-xmark ms-1"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="row p-3">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="mb-3">
                          <label className="form-label">Created By </label>
                          <select className="multi_select form-control" multiple="multiple">
                            <option value="Senora" >Select User </option>
                            <option value="Senora">User 1</option>
                            <option value="Senora">User 2</option>
                            <option value="Senora">User 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="mb-3">
                          <label className="form-label">Activity </label>
                          <select className="multi_select form-control" multiple="multiple">
                            <option value="Senora" >Select Activity</option>
                            <option value="Senora">Activity 1</option>
                            <option value="Senora">Activity 2</option>
                            <option value="Senora">Activity 3</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="mb-3">
                          <label className="form-label">Select Date </label>
                           <div id="reportrange" className="daterange">
                            <i className="fa fa-calendar"></i>&nbsp;
                            <span>January 11, 2024 - February 9, 2024</span> <i className="fa fa-caret-down"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 text-end">
                        <a href="" className="btn btn-success  btn-sm"> Apply </a>
                        <a href="" className="btn btn-danger btn-sm"> Reset </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-auto  col-md-auto col-sm-auto col-auto mt-auto" style="padding-top:5px;">
              <a href="#" className="btn btn-primary"> <img src="/assets/images/ho/export.png" /> Export </a>
            </div>

    </div>
  

    <div className="row">
      <div className="col-12">
        <div className="white_table">
          <table className="table table-striped table-bordered data-table-dr" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Date And Time</th>
                <th>Activity Name</th>
                <th>Created By</th>
                <th>Doctor Name</th>
                <th>Status</th>
                <th>Media</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <p className="mb-0">
                    <span className="d-flex  align-items-center"><i
                        className="fa fa-calendar-alt me-2"></i>27/03/2021<br /></span>
                    <span className="d-flex  align-items-center time_span"><i
                        className="fa fa-clock me-2"></i>07:00AM</span>
                  </p>
                </td>
                <td> Doctor E Card</td>
                <td>
                  <div className="d-flex  align-items-center">
                    <span>J RAGHU</span>
                    <button className="dc_btn">
                      BZ0301
                    </button>
                  </div>
                </td>
                <td>
                  <div className="d-flex  align-items-center">
                    <span>SANDEEP MOHANAN</span>
                    <button className="dc_btn">
                      98
                    </button>
                  </div>
                </td>
                <td>
                  <div className="d-flex  align-items-center">
                    <span className="complted_rs">
                      <i className="fa-regular fa-circle-check"></i> Completed
                    </span>
                  </div>
                </td>
                <td>
                  <div className="d-flex  align-items-center">
                    <a href="#" className="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Deleted">
                      <i className="fa-regular fa-circle-xmark fs-5" style="color:red;"></i>
                    </a>
                  </div>
                </td>

                <td>
                  <div className="d-flex  align-items-center">
                    <button className="rs_btn" data-bs-toggle="modal" data-bs-target="#doctor_user_detiles">
                      <img src="/assets/images/ho/grey_eye.png" />
                    </button>
                    <button className="rs_btn">
                      <img src="/assets/images/ho/share.png" />
                    </button>
                    <button className="rs_btn">
                      <img src="/assets/images/ho/dow.png" />
                    </button>
                    <button className="rs_btn">
                      <img src="/assets/images/ho/copy_black.png" />
                    </button>
                  </div>
                </td>

              </tr>
              <tr>
                <td>2</td>
                <td>
                  <p className="mb-0">
                    <span className="d-flex  align-items-center"><i
                        className="fa fa-calendar-alt me-2"></i>27/03/2021<br /></span>
                    <span className="d-flex  align-items-center time_span"><i
                        className="fa fa-clock me-2"></i>07:00AM</span>
                  </p>
                </td>
                <td> Doctor E Card</td>
                <td>

                  <div className="d-flex  align-items-center">
                    <span>J Ram</span>
                    <button className="dc_btn">
                      BZ030
                    </button>
                  </div>
                </td>
                <td>
                  <div className="d-flex  align-items-center">
                    <span>J RAGHU</span>
                    <button className="dc_btn">
                      BZ030
                    </button>
                  </div>
                </td>
                <td>
                  <div className="timer new_pending">
                    <i className="fa-regular fa-clock me-2"></i> Pending
                  </div>
                </td>
                <td>
                  <div className="d-flex  align-items-center">
                    <a href="/assets/images/ho/birth_card.png" className="my-image-links  btn btn-row p-0">
                      <img src="/assets/images/ho/white_gallery.png" width="20px" />
                    </a>
                  </div>
                </td>
                <td>
                  <div className="d-flex  align-items-center">
                    <button className="rs_btn" data-bs-toggle="modal" data-bs-target="#doctor_user_detiles">
                      <img src="/assets/images/ho/grey_eye.png" />
                    </button>
                    <button className="rs_btn">
                      <img src="/assets/images/ho/share.png" />
                    </button>
                    <button className="rs_btn">
                      <img src="/assets/images/ho/dow.png" />
                    </button>
                    <button className="rs_btn">
                      <img src="/assets/images/ho/copy_black.png" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>
                  <p className="mb-0">
                    <span className="d-flex  align-items-center"><i
                        className="fa fa-calendar-alt me-2"></i>27/03/2021<br /></span>
                    <span className="d-flex  align-items-center time_span"><i
                        className="fa fa-clock me-2"></i>07:00AM</span>
                  </p>
                </td>
                <td> Doctor E Card</td>
                <td>

                  <div className="d-flex  align-items-center">
                    <span>J Ram</span>
                    <button className="dc_btn">
                      BZ030
                    </button>
                  </div>
                </td>
                <td>
                  <div className="d-flex  align-items-center">
                    <span>J RAGHU</span>
                    <button className="dc_btn">
                      BZ030
                    </button>
                  </div>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="new_inprocess">
                      <i className="fa-solid fa-arrows-rotate me-1"></i> Inprocess
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex  align-items-center">
                    <a href="/assets/images/ho/video_row.mp4" data-autoplay="true" data-vbtype="video"
                      className="my-video-links  btn btn-row p-0">
                      <img src="/assets/images/ho/white_video.png" width="20px" />
                    </a>
                  </div>
                </td>
                <td>
                  <div className="d-flex  align-items-center">
                    <button className="rs_btn" data-bs-toggle="modal" data-bs-target="#doctor_user_detiles">
                      <img src="/assets/images/ho/grey_eye.png" />
                    </button>
                    <button className="rs_btn">
                      <img src="/assets/images/ho/share.png" />
                    </button>
                    <button className="rs_btn">
                      <img src="/assets/images/ho/dow.png" />
                    </button>
                    <button className="rs_btn">
                      <img src="/assets/images/ho/copy_black.png" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

  </div>
</div>

<div className="modal fade" id="add_new_doctor" tabIndex="-1" aria-labelledby="" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5">Add New Doctor</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
            className="fa-solid fa-xmark"></i></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Position Code <span className="text-danger">*</span></label>
              <input type="" className="form-control" placeholder="Enter Division Name" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Doctor's Unique Code <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Enter Division Code" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Molecule Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Enter Molecule Name" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Status <span className="text-danger">*</span></label>
              <select className="select2 js-example-basic-single select-label form-control w-100" name="select-label">
                <option value="Senora" >Select Status</option>
                <option value="Senora">Status 1</option>
                <option value="Senora">Status 2</option>
                <option value="Senora">Status 3</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Doctor Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Enter Doctor Name" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Doctor Name Prefix <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Enter Doctor Name Prefix" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Specialty <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Enter Specialty" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Qualification <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Enter Qualification" />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="mb-3">
              <label className="form-label">Address <span className="text-danger">*</span></label>
              <textarea className="form-control" rows="3"></textarea>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">City <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Enter City" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">State <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Enter State" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Pin Code <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Enter Pin Code" />
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Country Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Enter Country Name" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Mobile No <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Enter Mobile No" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Email Id <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Enter Email Id" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Sex <span className="text-danger">*</span></label>
              <select className="select2 js-example-basic-single select-label form-control w-100" name="select-label">
                <option value="Senora" >Select Sex</option>
                <option value="Senora">Sex 1</option>
                <option value="Senora">Sex 2</option>
                <option value="Senora">Sex 3</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Birthdate <span className="text-danger">*</span></label>
              <input type="date" className="form-control" placeholder="Enter Birthdate" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Anniversary Date <span className="text-danger">*</span></label>
              <input type="date" className="form-control" placeholder="Enter Birthdate" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Graduation Date <span className="text-danger">*</span></label>
              <input type="date" className="form-control" placeholder="Enter Birthdate" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Post Graduation Date <span className="text-danger">*</span></label>
              <input type="date" className="form-control" placeholder="Enter Birthdate" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Clinic Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Enter Clinic Name" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Clinic Opening Date <span className="text-danger">*</span></label>
              <input type="date" className="form-control" placeholder="Enter Birthdate" />
            </div>
          </div>
        </div>

      </div>
      <div className="modal-footer ">
        
        <button type="button" className="btn btn-primary">Add Doctor</button>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="edit_registered" tabIndex="-1" aria-labelledby="" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5">Edit Division</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
            className="fa-solid fa-xmark"></i></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Division Name</label>
              <input type="" className="form-control" value="Akuna" placeholder="Enter Division Name" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Division Code</label>
              <input type="text" className="form-control" value="AV" placeholder="Enter Division Code" />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="text" className="form-control" value="dost_akuna@sunkonnect.in" placeholder="Enter Email" />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="mb-3">
              <label className="form-label">Password <i className="ms-2 fa-regular fa-circle-question" data-bs-toggle="tooltip"
                  data-bs-placement="right" data-bs-title="Password must be at least 8 characters"></i> </label>
              <input type="password" className="form-control" placeholder="Enter Password" />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="mb-3">
              <label className="form-label">Confirm Password </label>
              <input type="password" className="form-control" placeholder="Confirm Password" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Upload Logo</label>
              <div className="rs_upload_new">
                <div className="left">
                  <span> <img src="/assets/images/ho/logo_table.png" /> </span>
                </div>
                <div className="right">
                  <button type="button" className="btn btn-primary">
                    <img src="/assets/images/ho/upload_white.png" className="me-2" /> Upload Logo
                    <input type="file" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Upload Favicon</label>
              <div className="rs_upload_new">
                <div className="left">
                  <span> <img src="/assets/images/ho/favicon_icon.png" /> </span>
                </div>
                <div className="right">
                  <button type="button" className="btn btn-primary">
                    <img src="/assets/images/ho/upload_white.png" className="me-2" /> Upload Favicon
                    <input type="file" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="modal-footer ">
        
        <button type="button" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="division" tabIndex="-1" aria-labelledby="" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5">Division Setting</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
            className="fa-solid fa-xmark"></i></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Max Doctor</label>
              <input type="" className="form-control" placeholder="Enter Max Doctor" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Max Chemist</label>
              <input type="text" className="form-control" placeholder="Enter Max Chemist" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Max User</label>
              <input type="" className="form-control" placeholder="Enter Max User" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Max Stockiest</label>
              <input type="text" className="form-control" placeholder="Enter Max Stockiest" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="fer_title">
              <h3 className="modal-title fs-5">General Setting</h3>
            </div>
            <div className="grey_br">
              <div className="row">
                <div className="col-lg-auto col-md-auto col-sm-auto col-12 me-auto">
                  <h6>Activity</h6>
                </div>
                <div className="col-lg-auto col-md-auto col-sm-auto col-12">
                  <div className="toggle">
                    <input type="checkbox" onChange={handleToggle} />
                    <label></label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <p>If any module is deactivated from the master admin, all functionalities related to that module will
                    be disabled from division login & field login.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="modal-footer ">
        
        <button type="button" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="manage_space" tabIndex="-1" aria-labelledby="" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5">Manage Space</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
            className="fa-solid fa-xmark"></i></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="mb-3">
            <label className="form-label">Storage Space</label>
            <div className="input-group mb-3">
              <input type="" className="form-control" placeholder="Enter Storage Space" style="width: 70%;" />
              <select className="form-select" id="inputGroupSelect01">
                <option >MB</option>
                <option value="1">MB 1</option>
                <option value="2">MB 2</option>
                <option value="3">MB 3</option>
              </select>
            </div>
          </div>
        </div>

      </div>
      <div className="modal-footer ">
        
        <button type="button" className="btn btn-primary">Submit</button>
      </div>
      <p style="color:#FF2C2C;text-align:center;"><b>Note : This is applicable for activity module only.</b></p>

    </div>
  </div>
</div>

<div className="modal fade" id="division_hierarchy" tabIndex="-1" aria-labelledby="" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5">Division Hierarchy</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
            className="fa-solid fa-xmark"></i></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="title_v">
            <p className="first">Define Level</p>
            <p className="second">User Role / Designation</p>
          </div>
          <div className="leval_map">
            <div className="grey_br">
              <div className="left">
                <p><i className="fa-solid fa-ellipsis-vertical"></i><i className="fa-solid fa-ellipsis-vertical"></i></p>
                <span>Level 1</span>
              </div>
              <div className="midddle">
                <input type="" className="form-control" placeholder="Enter User Role / Designation" />
              </div>
              <div className="right">
                <i className="fa-solid fa-trash-can"></i>
              </div>
            </div>
          </div>
          <div className="leval_map">
            <div className="grey_br">
              <div className="left">
                <p><i className="fa-solid fa-ellipsis-vertical"></i><i className="fa-solid fa-ellipsis-vertical"></i></p>
                <span>Level 2</span>
              </div>
              <div className="midddle">
                <input type="" className="form-control" placeholder="Enter User Role / Designation" />
              </div>
              <div className="right">
                <i className="fa-solid fa-trash-can"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-auto  col-md-auto col-sm-auto col-auto ms-auto mt-2">
            <button type="button" className="btn btn-primary">
              <i className="fa-solid fa-plus me-2"></i> Add More
            </button>
          </div>
        </div>

      </div>
      <div className="modal-footer ">
        
        <button type="button" className="btn btn-primary">Submit</button>
      </div>
      <p style="color:#FF2C2C;text-align:center;"><b>Note : Hierarchy once set, cannot be changed.</b></p>
    </div>
  </div>
</div>

<div className="modal fade" id="view_hierarchy" tabIndex="-1" aria-labelledby="" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5">View Division Hierarchy</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
            className="fa-solid fa-xmark"></i></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="leval_design">
            <div className="hire_view">
              <span>BE</span>
              <p>(Level 1)</p>
            </div>
            <div className="hire_view">
              <span>ASM</span>
              <p>(Level 2)</p>
            </div>
            <div className="hire_view">
              <span>RSM</span>
              <p>(Level 3)</p>
            </div>
            <div className="hire_view">
              <span>ZSM</span>
              <p>(Level 4)</p>
            </div>
            <div className="hire_view">
              <span>NSM</span>
              <p>(Level 5)</p>
            </div>
            <div className="hire_view">
              <span>HO</span>
              <p>(Level 6)</p>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  </div>
</div>

<div className="modal fade" id="doctor_user_detiles" tabIndex="-1" aria-labelledby="" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-md">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5">Activity Name: Patient Education </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
            className="fa-solid fa-xmark"></i></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="leval_design_new">
            <div className="media_row">
              <ul>
                <li>Media Type : <span> Image </span></li>
                <li>Media Name : <span>Hypertension day </span></li>
                <li>Status : <span>completed </span></li>
              </ul>
              <h3><i className="fa-solid fa-angles-right me-2"></i>User Information </h3>
              <ul>
                <li>Employee name : <span> KULDEEP </span></li>
                <li>Employee Code : <span> E81280 </span></li>
                <li>Designation : <span>SO </span></li>
              </ul>
              <h3><i className="fa-solid fa-angles-right me-2"></i> Activity Details </h3>
              <ul>
                <li>Doctor Photograph : <span> <img src="/assets/images/ho/cover_gallery.png" width="30px" /> <i
                      className="fa-solid fa-download ms-2"></i></span></li>
                <li>Doctor Name : <span> Kartik Harsora </span></li>
                <li>Qualification : <span> M.D. </span></li>
                <li>Create Time : <span> Time 10:00 am </span></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  </div>
</div>

<div className="modal fade" id="new_rs_filter" tabIndex="-1" aria-labelledby="" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-md">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5">Filter </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
            className="fa-solid fa-xmark"></i></button>
      </div>
      <div className="modal-body">
        <div className="row">

          <div className="col-lg-6  col-md-6 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">User </label>
              <select className="multi_select form-control w-100" multiple="multiple">
                <option value="Senora" >Select User </option>
                <option value="Senora">User 1</option>
                <option value="Senora">User 2</option>
                <option value="Senora">User 3</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6  col-md-6 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Activity </label>
              <select className="multi_select form-control w-100" multiple="multiple">
                <option value="Senora" >Select Activity</option>
                <option value="Senora">Activity 1</option>
                <option value="Senora">Activity 2</option>
                <option value="Senora">Activity 3</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6  col-md-6 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Zone </label>
              <select className="multi_select form-control w-100" multiple="multiple">
                <option value="Senora" >Select Zone</option>
                <option value="Senora">Zone 1</option>
                <option value="Senora">Zone 2</option>
                <option value="Senora">Zone 3</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6  col-md-6 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Territory </label>
              <select className="multi_select form-control w-100" multiple="multiple">
                <option value="Senora" >Select Territory </option>
                <option value="Senora">Territory 1</option>
                <option value="Senora">Territory 2</option>
                <option value="Senora">Territory 3</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6  col-md-6 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Qualification </label>
              <select className="multi_select form-control w-100" multiple="multiple">
                <option value="Senora" >Select Qualification</option>
                <option value="Senora">Qualification 1</option>
                <option value="Senora">Qualification 2</option>
                <option value="Senora">Qualification 3</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6  col-md-6 col-sm-6 col-12">
            <div className="mb-3">
              <label className="form-label">Speciality </label>
              <select className="multi_select form-control w-100" multiple="multiple">
                <option value="Senora" >Select Speciality </option>
                <option value="Senora">Speciality 1</option>
                <option value="Senora">Speciality 2</option>
                <option value="Senora">Speciality 3</option>
              </select>
            </div>
          </div>
        </div>

      </div>
      <div className="modal-footer ">
        
        <button type="button" className="btn btn-primary">Submit</button>
      </div>
      
    </div>
   </div>
</div>

<Footer />
  </div>
    </div>
  );
}
