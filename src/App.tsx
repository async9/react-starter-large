import '@/styles/reset.css';
import '@/styles/index.css';

import { RouterProvider } from 'react-router-dom';

import router from '@/router/router';

export default function App() {
  return <RouterProvider router={router} />;
}
