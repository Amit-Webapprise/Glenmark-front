import Sidebar from './Sidebar';
import Header from './Header';
import DashboardContent from './DashboardContent';

export default function Dashboard() {
  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      <Sidebar />
      <div className="body-wrapper">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
}
