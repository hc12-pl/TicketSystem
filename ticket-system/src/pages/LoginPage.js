import React from "react";
import '../styles/loginPage.css'


function LoginPage() {
  return (
    <main>
      <h1>Login Page</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? Contact Us!
      </p>
      <p>
        <a href="/forgot-password">Forgot Password?</a>
      </p>
    </main>
  );
}

export default LoginPage;
