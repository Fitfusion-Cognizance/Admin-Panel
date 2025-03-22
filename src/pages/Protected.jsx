import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminLayout from './Layout/AdminLayout';

function Protected() {
  return (
    <>
      <AdminLayout>
        <Outlet />
      </AdminLayout>
    </>
  );
}

export default Protected;
