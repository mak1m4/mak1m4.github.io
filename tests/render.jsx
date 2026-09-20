import React from 'react';
import { renderToString } from 'react-dom/server';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from '../src/App.jsx';
export { works, caseSections, headerFor } from '../src/data.mjs';
export function render(url) {
  const router = createMemoryRouter(routes, { initialEntries: [url] });
  return renderToString(<RouterProvider router={router} />);
}
