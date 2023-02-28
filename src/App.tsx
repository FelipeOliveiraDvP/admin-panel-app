import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import { AuthProvider } from './core/contexts/AuthContext';
import { GlobalStyles } from './components/_commons/GlobalStyles';

import { PrivateLayout } from './components/_commons/layouts/PrivateLayout';
import { PublicLayout } from './components/_commons/layouts/PublicLayout';

import { LoginPage } from './pages/Login';
import { ForgotPage } from './pages/Forgot';
import { RecoveryPage } from './pages/Recovery';
import { DashboardPage } from './pages/Dashboard';
import { UsersPage } from './pages/Users';
import { ProfilePage } from './pages/Profile';
import { NotFoundPage } from './pages/NotFound';

function App() {
  return (
    <>
      <AuthProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route element={<PublicLayout />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="forgot" element={<ForgotPage />} />
                <Route path="recovery" element={<RecoveryPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
              <Route path="/app" element={<PrivateLayout />}>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MantineProvider>
      </AuthProvider>
    </>
  );
}

export default App;
