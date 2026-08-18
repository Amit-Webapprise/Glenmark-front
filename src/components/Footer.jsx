import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="py-2 px-2 text-center col-12">
            <p className="mb-0 fs-3">
              Copyright © {year} All rights reserved by <Link to="/dashboard" className="fw-semibold">Glenmark Life Sciences</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
