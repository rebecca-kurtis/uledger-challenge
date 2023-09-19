

import React from 'react';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {

  return (
    <div>
      <h1 className="text-center mt-8 text-4xl text-gray-700 font-bold mb-2">Login: </h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;