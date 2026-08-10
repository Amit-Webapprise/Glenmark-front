import { useState } from 'react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: false, password: false });

  const handleLogin = () => {
    let isValid = true;
    const newErrors = { username: false, password: false };

    if (username.trim() === '') {
      newErrors.username = true;
      isValid = false;
    }
    if (password.trim() === '') {
      newErrors.password = true;
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // In a real app, you would handle authentication here
      window.location.href = '/dashboard';
    } else {
      alert('Please fill all fields');
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
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ borderColor: errors.username ? 'red' : '' }}
                  />
                  <i className="fa-regular fa-user"></i>
                </div>
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
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ borderColor: errors.password ? 'red' : '' }}
                  />
                  <i
                    className={`fa-regular fa-eye righr_side ${showPassword ? 'rs_active' : ''}`}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </div>
              </div>
              <button
                type="button"
                onClick={handleLogin}
                className="btn btn-primary new_rs mt-2 w-100"
              >
                Login
              </button>
              <div className="text-end">
                <a href="/forgot-password" className="text-dark">
                  <b>Forgot Password?</b>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
