import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider} from 'react-router-dom'
import {store} from './store'

import './index.css'
import 'flag-icon-css/css/flag-icons.min.css'

import Root from "./layouts/Root";
import {Result} from "antd";
import Home from "./pages/Home";
import About from "./pages/About";
import Auth from "./layouts/Auth";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import SignUp from "./pages/SignUp";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Root/>}
            errorElement={<Result status="404" title="404" subTitle="Sorry, the page you visited does not exist."
                                  extra={<Link to="/" type="primary">Back Home</Link>}/>}
        >
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path="/auth" element={<Auth/>}>
                <Route path="sign-in" element={<SignIn/>}/>
                <Route path="sign-out" element={<SignOut/>}/>
                <Route path="sign-up" element={<SignUp/>}/>
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    </Provider>,
)
