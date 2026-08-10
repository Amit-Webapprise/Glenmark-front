import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activity-library" element={<PlaceholderPage title="Activity Library" />} />
        <Route path="/all-activity" element={<PlaceholderPage title="All Activity" />} />
        <Route path="/analytics" element={<PlaceholderPage title="Analytics" />} />
        <Route path="/attendee-management" element={<PlaceholderPage title="Attendee Management" />} />
        <Route path="/content-repository" element={<PlaceholderPage title="Content Repository" />} />
        <Route path="/create-webinar" element={<PlaceholderPage title="Create Webinar" />} />
        <Route path="/doctor-landing-page" element={<PlaceholderPage title="Doctor Landing Page" />} />
        <Route path="/draft" element={<PlaceholderPage title="Draft" />} />
        <Route path="/in-all-activity" element={<PlaceholderPage title="In All Activity" />} />
        <Route path="/mail-campaign-manage" element={<PlaceholderPage title="Mail Campaign Manage" />} />
        <Route path="/mail-campaign-template" element={<PlaceholderPage title="Mail Campaign Template" />} />
        <Route path="/manage-activity" element={<PlaceholderPage title="Manage Activity" />} />
        <Route path="/manage-content-repository" element={<PlaceholderPage title="Manage Content Repository" />} />
        <Route path="/manage-mail-campaign" element={<PlaceholderPage title="Manage Mail Campaign" />} />
        <Route path="/manage-mail-campaign-create" element={<PlaceholderPage title="Manage Mail Campaign Create" />} />
        <Route path="/my-task" element={<PlaceholderPage title="My Task" />} />
        <Route path="/qms" element={<PlaceholderPage title="Qms" />} />
        <Route path="/qms-category" element={<PlaceholderPage title="Qms Category" />} />
        <Route path="/registered-fso" element={<PlaceholderPage title="Registered Fso" />} />
        <Route path="/reject-reversal-video" element={<PlaceholderPage title="Reject Reversal Video" />} />
        <Route path="/reports-analytics" element={<PlaceholderPage title="Reports Analytics" />} />
        <Route path="/request-for-template" element={<PlaceholderPage title="Request For Template" />} />
        <Route path="/speaker-list" element={<PlaceholderPage title="Speaker List" />} />
        <Route path="/speaker-management" element={<PlaceholderPage title="Speaker Management" />} />
        <Route path="/survey-poll" element={<PlaceholderPage title="Survey Poll" />} />
        <Route path="/topic" element={<PlaceholderPage title="Topic" />} />
        <Route path="/user-report-download" element={<PlaceholderPage title="User Report Download" />} />
        <Route path="/video" element={<PlaceholderPage title="Video" />} />
        <Route path="/webinar-management" element={<PlaceholderPage title="Webinar Management" />} />
        <Route path="/whatsapp-campaign-manage" element={<PlaceholderPage title="Whatsapp Campaign Manage" />} />
        <Route path="/whatsapp-campaign-template" element={<PlaceholderPage title="Whatsapp Campaign Template" />} />
        <Route path="/forgot-password" element={<PlaceholderPage title="Forgot Password" />} />
      </Routes>
    </Router>
  );
}

export default App;
