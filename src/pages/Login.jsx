import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = () => {
    let isValid = true;
    const newErrors = { username: '', password: '' };

    if (username.trim() === '') {
      newErrors.username = 'This field is required';
      isValid = false;
    } else if (!validateEmail(username)) {
      newErrors.username = 'Please enter a valid email address';
      isValid = false;
    }

    if (password.trim() === '') {
      newErrors.password = 'This field is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // In a real app, you would handle authentication here
      navigate('/dashboard');
    }
  };

  return (
    <div
      className="bg_login"
      style={{ backgroundImage: 'url(/assets/images/login_bg.png)' }}
    >
      <div className="new_rs_middle_login">
        <div className="login_rs">
          <div className="logo_login">
            <img src="/assets/images/logo.png" alt="Logo" />
          </div>
          <h2>Welcome back</h2>
          <form>
            <div className="login_in">
              <div className="mb-3">
                <label className="form-label">User Name</label>
                <div className="user_input">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter User Name"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (errors.username) setErrors({ ...errors, username: '' });
                    }}
                  />
                  <i className="fa-regular fa-user"></i>
                </div>
                {errors.username && <div className="text-danger mt-1" style={{ fontSize: '12px' }}>{errors.username}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="user_input">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: '' });
                    }}
                  />
                  <i
                    className={`fa-regular fa-eye righr_side ${showPassword ? 'rs_active' : ''}`}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </div>
                {errors.password && <div className="text-danger mt-1" style={{ fontSize: '12px' }}>{errors.password}</div>}
              </div>
              <button
                type="button"
                onClick={handleLogin}
                className="btn btn-primary new_rs mt-2 w-100"
              >
                Login
              </button>
              <div className="text-end">
                <Link to="/forgot-password" className="text-dark">
                  <b>Forgot Password?</b>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
