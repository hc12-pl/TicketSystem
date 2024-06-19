import React from "react";
import '../styles/loginPage.css'

function LoginPage() {
  return (
    <>
    <main>
      <h1>Welcome back!</h1>
      <form>
        <section id="username">
          <span class="material-symbols-outlined">person</span>
          <input id="usernameInput" type="text" placeholder="Username" />
        </section> 
        <section id="password">
          <span class="material-symbols-outlined">key</span>
          <input id="passwordInput" type="password" placeholder="Password" />
        </section>
        <button id="submitBtn">Login</button>
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
