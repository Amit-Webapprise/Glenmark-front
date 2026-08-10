import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function PlaceholderPage({ title }) {
  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      <Sidebar />
      <div className="body-wrapper">
        <Header />
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-4">{title}</h5>
              <p className="mb-0">This page is under construction.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
