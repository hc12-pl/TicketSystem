import React from "react";
import '../styles/loginPage.css';

function LoginPage() {
  let showPassword = false;
  const handleShowPasswordClick = () => {
    const passwordInput = document.getElementById("passwordInput");
    const passwordShowIcon = document.getElementById("togglePassword")
    showPassword = !showPassword
    if (showPassword) {
      passwordInput.setAttribute('type', 'text')
      passwordShowIcon.innerHTML = "visibility_off"
    } else {
      passwordInput.setAttribute('type', 'password')
      passwordShowIcon.innerHTML = "visibility"
    }
    
  }

  return (
    <>
      <main>
        <h1>Welcome back!</h1>
        <form action="user/info" method="post">
          <section id="username">
            <span className="material-symbols-outlined">person</span>
            <input id="usernameInput" type="text" placeholder="Username" />
          </section>
          <section id="password">
            <span className="material-symbols-outlined">key</span>
            <input id="passwordInput" type="password" placeholder="Password" />
            <span id="togglePassword" className="material-symbols-outlined showPassword" onClick={handleShowPasswordClick}>visibility</span>
          </section>
          <button type="submit" id="submitBtn">Login</button>
        </form>
        <p>
          Don't have an account? Contact Us!
        </p>
        <p>
          <a id="forgotPswd" href="/forgot-password">Forgot Password?</a>
        </p>
      </main>
    </>
  );
}

export default LoginPage;
