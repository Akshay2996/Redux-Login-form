export function Login() {
  return (
    <div className="login">
      <form className="login__form">
        <h1>
          Login Form
          <span role="img" aria-label="Door emoji">
            🚪
          </span>
        </h1>
        <input type="name" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
}
