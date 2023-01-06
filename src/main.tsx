import { Result } from 'antd'
import 'flag-icon-css/css/flag-icons.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './layouts/Root'
import About from './pages/About'
import Home from './pages/Home'
import { store } from './store'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
      errorElement={<Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." extra={<Link to="/" type="primary">Back Home</Link>} />}
    >
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
    </Route >
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
)
