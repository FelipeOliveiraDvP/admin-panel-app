import React from 'react';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <>
      <h1>Welcome to {import.meta.env.VITE_APP_TITLE}</h1>
      <LoginPage />
    </>
  );
}

export default App;
