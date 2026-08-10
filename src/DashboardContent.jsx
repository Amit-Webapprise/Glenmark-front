export default function DashboardContent() {
  return (
    <>
<div className="container-fluid">
  <div className="rs_white_shadow">

    <div className="row">
      <div className="col-auto">
        <h2 className="main_title">Dashboard <a href="" className="text-dark ms-1" data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-title="View a quick snapshot of all digital activities and performance across modules."><i
              className="fa-solid fa-circle-info"></i></a></h2>
        <p>The dashboard gives a consolidated summary of digital engagements across webinars, FB Live, WhatsApp, and
          mail campaigns. It helps you track coverage, attendance, activity status, and division-wise performance
          effortlessly.</p>
      </div>
    </div>


    <div className="row g-3 mt-2">
      <div className="col-lg-3 col-md-3 col-sm-6 col-12">
        <div className="rs_white_box bottle_rs" style={{"backgroundImage":"url(/assets/images/users.png)"}}>
          <div className="rs_row_icon">
            <div className="left">
              <div className="rs_left">
                <img src="/assets/images/3.png" />
              </div>
              <div className="rs_right">
                <p style={{"color":"#F6B42D"}}>4520</p>
                <span>Total HO Users</span>
              </div>
            </div>
            <div className="right">
              <div className="sparkline-wrapper" style={{"width":"100px","height":"40px"}}></div>
            </div>
          </div>
          <div className="rank_active third_rs">
            <div className="left_ac">
              <h5>3052</h5>
              <p>Active</p>
            </div>
            <div className="right_ac">
              <h5>1468</h5>
              <p>Inactive</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 col-12">
        <div className="rs_white_box bottle_rs" style={{"backgroundImage":"url(/assets/images/doctors.png)"}}>
          <div className="rs_row_icon">
            <div className="left">
              <div className="rs_left">
                <img src="/assets/images/4.png" />
              </div>
              <div className="rs_right">
                <p style={{"color":"#E64E34"}}>4520</p>
                <span>Total Doctors</span>
              </div>
            </div>
            <div className="right">
              <div className="sparkline-wrapper" style={{"width":"100px","height":"40px"}}></div>
            </div>
          </div>
          <div className="rank_active four_rs">
            <div className="left_ac">
              <h5>3052</h5>
              <p>Active</p>
            </div>
            <div className="right_ac">
              <h5>1468</h5>
              <p>Inactive</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 col-12">
        <div className="rs_white_box bottle_rs" style={{"backgroundImage":"url(/assets/images/ho.png)"}}>
          <div className="rs_row_icon">
            <div className="left">
              <div className="rs_left">
                <img src="/assets/images/2.png" />
              </div>
              <div className="rs_right">
                <p style={{"color":"#9247EE"}}>4520</p>
                <span> Total Field Users </span>
              </div>
            </div>
            <div className="right">
              <div className="sparkline-wrapper" style={{"width":"100px","height":"40px"}}></div>
            </div>
          </div>
          <div className="rank_active second_rs">
            <div className="left_ac">
              <h5>3052</h5>
              <p>Active</p>
            </div>
            <div className="right_ac">
              <h5>1468</h5>
              <p>Inactive</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div className="rs_white_shadow">

    <div className="row g-2">
      <div className="col-lg-auto col-sm-auto col-12 me-auto">
        <div className="rs_tabing rs_new_tab_design">
          <ul className="tabs">
            <li className="tab-link current" data-tab="tab-1">
              <i className="fa-solid fa-chart-line" style={{"color":"#0d6efd"}}></i> Overview
            </li>
            <li className="tab-link" data-tab="tab-2">
              <i className="fa-brands fa-facebook-f" style={{"color":"#1877F2"}}></i> FB Live
            </li>
            <li className="tab-link" data-tab="tab-3">
              <i className="fa-solid fa-video" style={{"color":"#FF0000"}}></i> Webinar
            </li>
            <li className="tab-link" data-tab="tab-4">
              <i className="fa-solid fa-chart-area" style={{"color":"#7800ff"}}></i> Activity
            </li>
            <li className="tab-link" data-tab="tab-5">
              <i className="fa-brands fa-whatsapp" style={{"color":"#25D366"}}></i> WhatsApp Campaign
            </li>
            <li className="tab-link" data-tab="tab-6">
              <i className="fa-solid fa-envelope" style={{"color":"#EA4335"}}></i> Mail Campaign
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-sm-2 col-12">
        <select className="multi_select_rs " multiple="multiple"> 
          <option value="1">Brand 1</option>
          <option value="2">Brand 2</option>
          <option value="3">Brand 3</option>
        </select>
      </div>
      <div className="col-lg-auto col-sm-auto col-12">
        <div className="col-lg-auto">
          <div className="d-flex align-items-center">
            <div id="reportrange" className="daterange">
              <i className="fa fa-calendar"></i>&nbsp;
              <span>February 1, 2024 - March 1, 2024</span> <i className="fa fa-caret-down"></i>
            </div>
            <a href="#" className="btn btn-primary ms-2"><i className="fa fa-search"></i></a>
            <a href="#" className="btn btn-danger ms-2"><i className="fa fa-times"></i></a>
          </div>
        </div>
      </div>
    </div>

    <div className="rs_tabing_detiles">

      <div id="tab-1" className="tab-content current">

        <div className="row g-3 mt-0">
          <div className="col col_new ">
            <div className="new_chear_view new_rs_box_desing shimmer-wrapper" style={{"background":"rgb(235 63 228 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-brands fa-digital-ocean"></i>
              <h4>45</h4>
              <p>Total Digital Coverage</p>
              <div className="" style={{"borderTop":"1px solid #fce4fb","padding":"5px 0 0"}}></div>
              <h4>45</h4>
              <p>Unique Digital Coverage</p>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view new_rs_box_desing shimmer-wrapper" style={{"background":"rgb(141 93 244 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-brands fa-facebook-f"></i>
              <h4>45</h4>
              <p>Total FB video</p>
              <a href="./video.php" target="_blank" className="rs-link_bottom_fixed"><i className="fa-solid fa-link"></i></a>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view new_rs_box_desing shimmer-wrapper" style={{"background":"rgb(246 163 74 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-users"></i>
              
              <h4>45</h4>
              <p>Total Webinar Count</p>
              <div className="" style={{"borderTop":"1px solid #fff5ec","padding":"5px 0 0"}}></div>
              <h4>45</h4>
              <p>Total Attendee Count</p>
              <a href="./webinar-management.php" target="_blank" className="rs-link_bottom_fixed"><i className="fa-solid fa-link"></i></a>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view new_rs_box_desing shimmer-wrapper" style={{"background":"rgb(252 89 86 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-regular fa-images"></i>
              <h4>12 </h4>
              <p>Total Activity (Image & Video)</p>
              <a href="./in-all-activity.php" target="_blank" className="rs-link_bottom_fixed"><i className="fa-solid fa-link"></i></a>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view new_rs_box_desing shimmer-wrapper" style={{"background":"rgb(13 204 35 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-brands fa-whatsapp"></i>
              <h4>12 </h4>
              <p>Whatsapp Engaged Audience </p>
              <a href="./whatsapp-campaign-manage.php" target="_blank" className="rs-link_bottom_fixed"><i className="fa-solid fa-link"></i></a>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view new_rs_box_desing shimmer-wrapper" style={{"background":"rgb(115 168 228 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-envelope-circle-check"></i>
              <h4>12 </h4>
              <p>Email Engaged Audience</p>
              <a href="./mail-campaign-manage.php" target="_blank" className="rs-link_bottom_fixed"><i className="fa-solid fa-link"></i></a>
            </div>
          </div>
        </div>
        <div className="row pt-0 mt-2">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2>Activity Chart (Count)</h2>
              <div className="chart"></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2>FB Live (Count)</h2>
              <div className="chart"></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2>Webinar (Count)</h2>
              <div className="chart"></div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2>Whatsapp  (Sent Count)</h2>
              <div className="row justify-content-center">
                <div className="col-lg-auto col-md-auto col-sm-auto col-12">
                  <div className="donut"></div>
                </div>
                <div className="col-lg-auto col-md-auto col-sm-auto col-12 my-auto">
                  <ul className="rs_chart_count">
                    <li>
                      <span style={{"background":"#9C27B0"}}></span>
                      Completed <b style={{"color":"#9C27B0"}}>30</b>
                    </li>
                    <li>
                      <span style={{"background":"#03A9F4"}}></span>
                      In Progress <b style={{"color":"#03A9F4"}}>70</b>
                    </li>
                    <li>
                      <span style={{"background":"#8BC34A"}}></span>
                      Pending <b style={{"color":"#8BC34A"}}>99</b>
                    </li>
                    <li>
                      <span style={{"background":"#FF9800"}}></span>
                      Draft <b style={{"color":"#FF9800"}}>05</b>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2> Email (Sent  Count)</h2>
              <div className="row justify-content-center">
                <div className="col-lg-auto col-md-auto col-sm-auto col-12">
                  <div className="donut"></div>
                </div>
                <div className="col-lg-auto col-md-auto col-sm-auto col-12 my-auto">
                  <ul className="rs_chart_count">
                    <li>
                      <span style={{"background":"#9C27B0"}}></span>
                      Completed <b style={{"color":"#9C27B0"}}>25</b>
                    </li>
                    <li>
                      <span style={{"background":"#03A9F4"}}></span>
                      In Progress <b style={{"color":"#03A9F4"}}>25</b>
                    </li>
                    <li>
                      <span style={{"background":"#8BC34A"}}></span>
                      Pending <b style={{"color":"#8BC34A"}}>25</b>
                    </li>
                    <li>
                      <span style={{"background":"#FF9800"}}></span>
                      Draft <b style={{"color":"#FF9800"}}>25</b>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tab-2" className="tab-content">
        <div className="row g-3 mt-0">
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(141 93 244 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
              <h4>45</h4>
              <p>Total Uploaded Videos </p>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(246 163 74 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-circle-check"></i>
              <h4>72</h4>
              <p>Submitted Videos </p>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(252 89 86 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-regular fa-circle-play"></i>
              <h4>12 </h4>
              <p>Live Videos </p>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(13 204 35 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-ban"></i>
              <h4>12 </h4>
              <p>Rejected Videos </p>
            </div>
          </div>
        </div>
        <div className="row pt-2 g-2">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2>FB Live Chart </h2>
              <div className="rs_chart" data-chart-index="1" data-chart="FBLive"></div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2>Cluster & Division wise   </h2>
              <div className="table-responsive table-container">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Cluster / Division</th>
                      <th>No. of Videos</th>
                      <th>Video Views</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table_primary fw-bold">
                      <td>RESPIRATORY</td>
                      <td>687</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">SHWAS-1</td>
                      <td>274</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">RESPICARE</td>
                      <td>38</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">SHWAS-2</td>
                      <td>335</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">MAJESTA MAX</td>
                      <td>40</td>
                      <td>0</td>
                    </tr>
                    <tr className="table_primary fw-bold">
                      <td>DIABETES</td>
                      <td>509</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">DIABETES CARE</td>
                      <td>178</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">HEALTHEON</td>
                      <td>210</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">GLENMARK CV</td>
                      <td>121</td>
                      <td>0</td>
                    </tr>
                    <tr className="table_primary fw-bold">
                      <td>CARDIOLOGY</td>
                      <td>525</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">GLENMARK SYNERG</td>
                      <td>122</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">ZOLTAN MAX</td>
                      <td>207</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">ZESTA</td>
                      <td>39</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">ZOLTAN</td>
                      <td>157</td>
                      <td>0</td>
                    </tr>
                    <tr className="table_primary fw-bold">
                      <td>DERMATOLOGY</td>
                      <td>17</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">GLENMARK</td>
                      <td>9</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">COSMOCARE</td>
                      <td>6</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">GRACEWELL</td>
                      <td>1</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">GRACEMAX</td>
                      <td>1</td>
                      <td>0</td>
                    </tr>
                    <tr className="table_primary fw-bold">
                      <td>HOSPITAL</td>
                      <td>21</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">CRITICA</td>
                      <td>17</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">ONKOS</td>
                      <td>4</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2>FB Live - State Wise Total Doctors </h2>
              <div className="rs_state"></div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2>FB Live - Total Doctors State Wise  </h2>
              <div className="table-responsive table-container">
                <table className="table table-bordered">
                  <thead>
                    <tr className="table_primary fw-bold text-white">
                      <td>State</td>
                      <td>Total Doctors</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ANDHRA PRADESH</td>
                      <td>367</td>
                    </tr>
                    <tr>
                      <td>ASSAM</td>
                      <td>95</td>
                    </tr>
                    <tr>
                      <td>BIHAR</td>
                      <td>212</td>
                    </tr>
                    <tr>
                      <td>CHHATTISGARH</td>
                      <td>53</td>
                    </tr>
                    <tr>
                      <td>DELHI</td>
                      <td>406</td>
                    </tr>
                    <tr>
                      <td>GOA</td>
                      <td>34</td>
                    </tr>
                    <tr>
                      <td>GUJARAT</td>
                      <td>234</td>
                    </tr>
                    <tr>
                      <td>HARYANA</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>HIMACHAL PRADESH</td>
                      <td>17</td>
                    </tr>
                    <tr>
                      <td>JAMMU &amp; KASHMIR</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>JAMMU AND KASHMIR</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>JHARKHAND</td>
                      <td>90</td>
                    </tr>
                    <tr>
                      <td>KARNATAKA</td>
                      <td>592</td>
                    </tr>
                    <tr>
                      <td>KERALA</td>
                      <td>149</td>
                    </tr>
                    <tr>
                      <td>MADHYA PRADESH</td>
                      <td>140</td>
                    </tr>
                    <tr>
                      <td>MAHARASHTRA</td>
                      <td>1171</td>
                    </tr>
                    <tr>
                      <td>MANIPUR</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>MEGHALAYA</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>MIZORAM</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>NAGALAND</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>NEPAL</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>ODISHA</td>
                      <td>138</td>
                    </tr>
                    <tr>
                      <td>ORISSA</td>
                      <td>139</td>
                    </tr>
                    <tr>
                      <td>PONDICHERRY</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>PUNJAB</td>
                      <td>156</td>
                    </tr>
                    <tr>
                      <td>RAJASTHAN</td>
                      <td>167</td>
                    </tr>
                    <tr>
                      <td>SIKKIM</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>TAMIL NADU</td>
                      <td>480</td>
                    </tr>
                    <tr>
                      <td>TELANGANA</td>
                      <td>386</td>
                    </tr>
                    <tr>
                      <td>TRIPURA</td>
                      <td>19</td>
                    </tr>
                    <tr>
                      <td>UTTAR PRADESH</td>
                      <td>570</td>
                    </tr>
                    <tr>
                      <td>UTTARAKHAND</td>
                      <td>56</td>
                    </tr>
                    <tr>
                      <td>UTTARANCHAL</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>WEST BENGAL</td>
                      <td>475</td>
                    </tr>
                    <tr style={{"fontWeight":"bold"}}>
                      <td>Total</td>
                      <td>6310</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tab-3" className="tab-content">
         <div className="row g-3 mt-0">
          
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(141 93 244 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-chalkboard-user"></i>
              <h4>45</h4>
              <p>Total Webinars</p>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(246 163 74 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-users-gear"></i>
              <h4>72</h4>
              <p>Total Participants </p>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(252 89 86 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-users"></i>
              <h4>12 </h4>
              <p>Total Attendance </p>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(13 204 35 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-regular fa-star"></i>
              <h4>12 </h4>
              <p>Total Ratings </p>
            </div>
          </div>
         </div>
        <div className="row pt-2 g-2">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2>Webinars Chart </h2>
              <div className="rs_chart" data-chart="Webinars"></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2>Participants | Attendee  Chart </h2>
              <div className="rs_chart" data-chart="Attendee"></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2>Cluster & Division wise </h2>
              <div className="table-responsive table-container">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Cluster / Division</th>
                      <th>Total Webinars</th>
                      <th>Total Participants </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table_primary fw-bold">
                      <td>CARDIOLOGY</td>
                      <td>69</td>
                      <td>3230</td>
                    </tr>
                    <tr>
                      <td className="ps-4">GLENMARK SYNERG</td>
                      <td>13</td>
                      <td>311</td>
                    </tr>
                    <tr>
                      <td className="ps-4">ZESTA</td>
                      <td>6</td>
                      <td>99</td>
                    </tr>
                    <tr>
                      <td className="ps-4">ZOLTAN</td>
                      <td>25</td>
                      <td>2321</td>
                    </tr>
                    <tr>
                      <td className="ps-4">ZOLTAN MAX</td>
                      <td>25</td>
                      <td>499</td>
                    </tr>
                    <tr className="table_primary fw-bold">
                      <td>DERMATOLOGY</td>
                      <td>10</td>
                      <td>165</td>
                    </tr>
                    <tr>
                      <td className="ps-4">GLENMARK</td>
                      <td>6</td>
                      <td>165</td>
                    </tr>
                    <tr>
                      <td className="ps-4">GRACEMAX</td>
                      <td>3</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">GRACEWELL SPECIALITY</td>
                      <td>1</td>
                      <td>0</td>
                    </tr>
                    <tr className="table_primary fw-bold">
                      <td>DIABETES</td>
                      <td>43</td>
                      <td>752</td>
                    </tr>
                    <tr>
                      <td className="ps-4">DIABETES CARE</td>
                      <td>14</td>
                      <td>319</td>
                    </tr>
                    <tr>
                      <td className="ps-4">GLENMARK CV</td>
                      <td>13</td>
                      <td>252</td>
                    </tr>
                    <tr>
                      <td className="ps-4">HEALTHEON</td>
                      <td>16</td>
                      <td>181</td>
                    </tr>
                    <tr className="table_primary fw-bold">
                      <td>RESPIRATORY</td>
                      <td>22</td>
                      <td>5866</td>
                    </tr>
                    <tr>
                      <td className="ps-4">MAJESTA</td>
                      <td>1</td>
                      <td>90</td>
                    </tr>
                    <tr>
                      <td className="ps-4">MAJESTA MAX</td>
                      <td>2</td>
                      <td>5595</td>
                    </tr>
                    <tr>
                      <td className="ps-4">RESPICARE</td>
                      <td>1</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="ps-4">SHWAS-1</td>
                      <td>17</td>
                      <td>181</td>
                    </tr>
                    <tr>
                      <td className="ps-4">SHWAS-2</td>
                      <td>1</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2> GeCME - Webinar Statewise Participants  </h2>
              <div className="rs_state"></div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2>GeCME - Total Webinar Statewise Participants  </h2>
              <div className="table-responsive table-container">
                <table className="table table-bordered">
                  <thead>
                    <tr className="table_primary fw-bold text-white">
                      <td>State</td>
                      <td>Total Doctors</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ANDHRA PRADESH</td>
                      <td>367</td>
                    </tr>
                    <tr>
                      <td>ASSAM</td>
                      <td>95</td>
                    </tr>
                    <tr>
                      <td>BIHAR</td>
                      <td>212</td>
                    </tr>
                    <tr>
                      <td>CHHATTISGARH</td>
                      <td>53</td>
                    </tr>
                    <tr>
                      <td>DELHI</td>
                      <td>406</td>
                    </tr>
                    <tr>
                      <td>GOA</td>
                      <td>34</td>
                    </tr>
                    <tr>
                      <td>GUJARAT</td>
                      <td>234</td>
                    </tr>
                    <tr>
                      <td>HARYANA</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>HIMACHAL PRADESH</td>
                      <td>17</td>
                    </tr>
                    <tr>
                      <td>JAMMU &amp; KASHMIR</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>JAMMU AND KASHMIR</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>JHARKHAND</td>
                      <td>90</td>
                    </tr>
                    <tr>
                      <td>KARNATAKA</td>
                      <td>592</td>
                    </tr>
                    <tr>
                      <td>KERALA</td>
                      <td>149</td>
                    </tr>
                    <tr>
                      <td>MADHYA PRADESH</td>
                      <td>140</td>
                    </tr>
                    <tr>
                      <td>MAHARASHTRA</td>
                      <td>1171</td>
                    </tr>
                    <tr>
                      <td>MANIPUR</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>MEGHALAYA</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>MIZORAM</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>NAGALAND</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>NEPAL</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>ODISHA</td>
                      <td>138</td>
                    </tr>
                    <tr>
                      <td>ORISSA</td>
                      <td>139</td>
                    </tr>
                    <tr>
                      <td>PONDICHERRY</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>PUNJAB</td>
                      <td>156</td>
                    </tr>
                    <tr>
                      <td>RAJASTHAN</td>
                      <td>167</td>
                    </tr>
                    <tr>
                      <td>SIKKIM</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>TAMIL NADU</td>
                      <td>480</td>
                    </tr>
                    <tr>
                      <td>TELANGANA</td>
                      <td>386</td>
                    </tr>
                    <tr>
                      <td>TRIPURA</td>
                      <td>19</td>
                    </tr>
                    <tr>
                      <td>UTTAR PRADESH</td>
                      <td>570</td>
                    </tr>
                    <tr>
                      <td>UTTARAKHAND</td>
                      <td>56</td>
                    </tr>
                    <tr>
                      <td>UTTARANCHAL</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>WEST BENGAL</td>
                      <td>475</td>
                    </tr>
                    <tr style={{"fontWeight":"bold"}}>
                      <td>Total</td>
                      <td>6310</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tab-4" className="tab-content">
        <div className="row g-3 mt-0">
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(141 93 244 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-chart-area"></i>
              <h4>45</h4>
              <p>Active Activity</p>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(246 163 74 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-play"></i>
              <h4>72</h4>
              <p>Total Generated Media  </p>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(252 89 86 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-photo-film"></i>
              <h4>12 </h4>
              <p>Total Video </p>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(13 204 35 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-regular fa-image"></i>
              <h4>12 </h4>
              <p>Total Image </p>
            </div>
          </div>
        </div>
      </div>

      <div id="tab-5" className="tab-content">
        <div className="row g-3 mb-2">
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(141 93 244 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-bullhorn"></i>
              <h4>45</h4>
              <p>Total Campaigns</p>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(246 163 74 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-people-group"></i>
              <h4>72</h4>
              <p>Engaged Audience  </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2>WhatsApp Campaign Chart </h2>
              <div className="rs_chart" data-chart-index="2" data-chart="WhatsApp"></div>
            </div>
          </div>
        
      </div>

      <div id="tab-6" className="tab-content">
        <div className="row g-3 mt-0">
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(141 93 244 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-bullhorn"></i>
              <h4>45</h4>
              <p>Total Campaigns</p>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(246 163 74 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-image-portrait"></i>
              <h4>72</h4>
              <p>Total Templates </p>
            </div>
          </div>
          <div className="col col_new">
            <div className="new_chear_view shimmer-wrapper" style={{"background":"rgb(252 89 86 / 27%)"}}>
               <div className="shimmer"></div>
              <i className="fa-solid fa-people-group"></i>
              <h4>12 </h4>
              <p>Engaged Audience </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rs_white_shadow">
              <h2>Mail Campaign Chart </h2>
              <div className="rs_chart" data-chart-index="3" data-chart="Mail"></div>
            </div>
          </div>
        
      </div>

    </div>
  </div>

  <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="py-1 px-1 text-center col-12">
                <p className="mb-0 fs-3">Copyright © All rights reserved by </p>
            </div>
        </div>
    </div>
</footer>
</div>

<a href="tel:9925099250" className="glow-on-hover" type="button">

    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="29.968" height="29.968"
        viewBox="0 0 29.968 29.968">
        <defs>
            <clipPath id="clip-path">
                <path id="Path_251937" data-name="Path 251937"
                    d="M5.211,13.773a11.773,11.773,0,1,1,23.546,0v1.205a4.283,4.283,0,0,1,3.211,4.146v4.281a4.281,4.281,0,0,1-5.006,4.22,8.159,8.159,0,0,1-7.624,4.331,2.141,2.141,0,0,1-.214.011H16.984a2.141,2.141,0,1,1,0-4.281h2.141a2.141,2.141,0,0,1,2.132,1.949,6.011,6.011,0,0,0,3.749-2.892,4.273,4.273,0,0,1-1.6-3.338V19.125a4.283,4.283,0,0,1,3.21-4.146V13.773a9.633,9.633,0,1,0-19.265,0v1.205a4.283,4.283,0,0,1,3.211,4.146v4.281a4.281,4.281,0,1,1-8.562,0V19.125a4.283,4.283,0,0,1,3.21-4.146Z"
                    transform="translate(-6002 2879)" fill="#fff" />
            </clipPath>
            <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 500 281">
                <image width="500" height="281"
                    xlink:href="data:image/png;base64,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" />
            </pattern>
        </defs>
        <g id="Mask_Group_50" data-name="Mask Group 50" transform="translate(6000 -2881)" clip-path="url(#clip-path)">
            <rect id="Image_31" data-name="Image 31" width="54" height="31" transform="translate(-6017 2880)"
                fill="url(#pattern)" />
        </g>
    </svg>

</a>

<div id="chat-widget" className="chat-widget">
    <button type="button" id="chat-bubble" aria-label="Open chat">
        <svg id="chat-icon" viewBox="0 0 24 24" fill="white" width="28" height="28">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
        <svg id="close-icon" className="hidden" viewBox="0 0 24 24" fill="white" width="28" height="28">
            <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
    </button>
    <div id="chat-window" className="hidden">
        <div id="chat-header">
            <div id="header-info">
                <div id="avatar">GA</div>
                <div>
                    <div id="header-name">Glenmark Admin</div>
                    <div id="header-status"><span id="status-dot"></span> Online — usually replies in minutes</div>
                </div>
            </div>
            <button type="button" id="close-chat" aria-label="Close chat">&times;</button>
        </div>
        <div id="chat-messages"></div>
        
    </div>
</div>





<div id="sfe-section" className="type-section d-none">
    <label className="form-label fw-semibold">SFE Category</label>
    <select className="form-select" name="sfe_category" id="sfe_category">
        <option value="">-- Select Category --</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Quality Control">Quality Control</option>
        <option value="Warehouse">Warehouse</option>
        <option value="Production">Production</option>
        <option value="Validation">Validation</option>
    </select>
</div>


<div id="digital-section" className="type-section d-none">
    <label className="form-label fw-semibold">Digital Category</label>
    <select className="form-select" name="digital_category" id="digital_category">
        <option value="">-- Select Category --</option>
        <option value="eCME">eCME</option>
        <option value="FB Live">FB Live</option>
        <option value="Whatapp Campaign">Whatapp Campaign</option>
        <option value="Mail Campaign">Mail Campaign</option>
        <option value="Poster Generation">Poster Generation</option>
    </select>
</div>


<input type="hidden" name="selected_type" id="selected_type" value="" />


<div className="modal fade" id="systemUpgradeModal" tabIndex="-1" aria-hidden="true" data-bs-backdrop="static"
    data-bs-keyboard="false">
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0 shadow-lg">

            <div className="modal-header ">
                <h5 className="modal-title">
                    <i className="bi bi-gear-fill me-2"></i> System Upgrade in Progress
                </h5>
                <button type="button" className="btn-close " data-bs-dismiss="modal"><i
                        className="fa-solid fa-xmark"></i></button>
            </div>

            <div className="modal-body p-4">

                <div className="alert alert-success d-flex align-items-center mb-4">
                    <i className="bi bi-check-circle-fill fs-4 me-3"></i>
                    <div>
                        <strong>Migration Complete!</strong><br />
                        Site migration to the new architecture is successful.
                    </div>
                </div>

                <p className="text-muted mb-3">
                    Attention Admin: The system is currently running in a <strong>partial-functionality</strong> state
                    while final
                    links are being restored.
                </p>

                <ul className="list-group mb-3">
                    <li className="list-group-item mb-2 d-flex justify-content-between">
                        Core Modules
                        <span className="badge bg-success">Active</span>
                    </li>
                    <li className="list-group-item mb-2 d-flex justify-content-between">
                        Legacy Tools
                        <span className="badge bg-warning text-dark">Re-linking</span>
                    </li>
                    <li className="list-group-item mb-2 d-flex justify-content-between">
                        Reporting & Hooks
                        <span className="badge bg-danger">Partial</span>
                    </li>
                </ul>

                <div className="alert alert-warning small mb-0">
                    Some backend hooks and reporting tools may return errors during finalization.
                    Please consult the <strong>internal dev-log</strong> before reporting issues.
                </div>

            </div>

        </div>
    </div>
</div>

<div className="modal fade" id="welcomeModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg border-0">

            <div className="modal-header">
                <h5 className="modal-title">

                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"><i
                        className="fa-solid fa-xmark"></i></button>
            </div>

            <div className="modal-body">
                <h2 className="mb-3 fs-7">Welcome to the New <span className="fw-bold text-primary">glenmark.live</span></h2>
                <p className="mb-3 fs-3">
                    We’ve upgraded! You’re looking at our brand-new platform,
                    designed to give you a <b>faster</b> and <b>smoother</b> experience.
                </p>

                <div className="alert alert-warning d-flex align-items-start">
                    <i className="fa-solid fa-gear fa-spin me-2 mt-1"></i>
                    <small>
                        <b>Please Note:</b> We’re still polishing a few gears behind the scenes.
                        If something feels unfinished, don’t worry — features are and data being migrated
                        and will be live shortly.
                    </small>
                </div>

                <p className="text-center text-success fs-3 fw-semibold mb-0">
                    Thank you for your patience.
                </p>
            </div>

        </div>
    </div>
</div>




























    </>  );}
