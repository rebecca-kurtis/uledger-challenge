import React, { FormEvent } from "react";

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
