import React from 'react';
import { RecoilRoot } from 'recoil';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  const router = createBrowserRouter([{ path: '/', element: <Home /> }]);
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
