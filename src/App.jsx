import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './features/Admin/Admin';
import Protected from './pages/Protected';
import Rental from './features/Admin/Rental/Rental';
import Challanges from './features/Admin/Challenges/Challanges';
import Setting from './features/Admin/Setting/Setting';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    element: <Protected />,
    children: [
      {
        path: '/',
        element: <Admin />,
      },
      {
        path: '/rental',
        element: <Rental />,
      },
      {
        path: '/challenges',
        element: <Challanges />,
      },
      {
        path: '/setting',
        element: <Setting />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
