import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@fontsource-variable/figtree';
import '@fontsource-variable/bricolage-grotesque';
import { routes } from './App.jsx';
import './styles.css';
import './motion.css';
import './cinematic.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(routes)} />
  </React.StrictMode>,
);
