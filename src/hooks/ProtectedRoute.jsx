import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, requireAdmin }) => {
  const accessToken = localStorage.getItem('accessToken');
  const userEmail = localStorage.getItem('userEmail');
  const adminEmail = "pardeepsharma7346@gmail.com";

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  // Check for admin access if required
  if (requireAdmin && userEmail?.toLowerCase() !== adminEmail.toLowerCase()) {
    return <Navigate to="/dashboard" />;
  }

  return <Component />;
};

export default ProtectedRoute;












// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element: Component }) => {
//   const isLoggedIn = !!localStorage.getItem('token');

//   return isLoggedIn ? <Component /> : <Navigate to="/login" />;
// };

// export default ProtectedRoute;   