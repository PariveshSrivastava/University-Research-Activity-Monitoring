import React, {useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";


export default function NavbarUser(props) {
    const navigate = useNavigate()

    let isLoggedIn = false;
    let isAdmin = false;

    // // console.log(localStorage.getItem('token'))
    let dataToken
    if (localStorage.getItem('token') !== null) {
        let token = localStorage.getItem('token')
        dataToken = jwt_decode(token)
        // console.log(dataToken)
        if (dataToken.status === true) {
            isLoggedIn = true

            if (dataToken.userType === 'Admin') {
                isAdmin = true
            }
        }
    }


    const logout = () => {
        localStorage.clear();
        // setIsLoggedIn(isLoggedIn => !isLoggedIn)
        navigate('/')
    }

    return (
        <>
            <div>
                <div className="antialiased">
                    <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 border-b border-emerald-400">
                        <div className="flex-1 flex justify-between items-center">
                            <span className="text-3xl cursor-pointer p-4 text-inherit text-teal-500">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                {/* <a href="index.html">
                                Research Portal
                            </a> */}
                                <Link to="/" className="outline-none">ResDeck</Link>
                            </span>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                            <nav>
                                <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                                    <li className="lg:p-4 pb-3 pl-3 block lg:mb-0 mb-2">
                                        <Link to="/Table" className="hover:text-teal-400 outline-none"> Access data</Link>
                                    </li>
                                    {
                                        isLoggedIn ?
                                            <>
                                                {isAdmin ?
                                                    <>
                                                        <li className="p-3 block lg:mb-0 mb-2">

                                                            <Link to="/AdminPage"
                                                                className="bg-teal-500 hover:bg-teal-400 text-white px-3 py-2 rounded-full text-md font-medium shadow hover:shadow-md focus:outline-none "
                                                            >Admin</Link>

                                                        </li>
                                                    </> :
                                                    <></>
                                                }
                                                <li className="p-3 block lg:mb-0 mb-2">
                                                    <Link to="" onClick={logout}
                                                        className="bg-teal-500 hover:bg-teal-400 text-white px-3 py-2 rounded-full text-md font-medium shadow hover:shadow-md focus:outline-none"
                                                        aria-current="page">logout</Link>
                                                </li>

                                            </> :
                                            <>

                                                <li className="p-3 block lg:mb-0 mb-2">

                                                    <Link to="/Login"
                                                        className="bg-teal-500 hover:bg-teal-400 text-white px-3 py-2 rounded-full text-md font-medium shadow hover:shadow-md focus:outline-none "
                                                    >Sign In</Link>

                                                </li>
                                                <li className="p-3 block lg:mb-0 mb-2">
                                                    <Link to="/SignUp"
                                                        className="bg-teal-500 hover:bg-teal-400 text-white px-3 py-2 rounded-full text-md font-medium shadow hover:shadow-md focus:outline-none"
                                                        aria-current="page">Sign Up</Link>
                                                </li>

                                            </>
                                    }

                                </ul>
                            </nav>
                        </div>
                    </header>
                </div>



            </div>
            <Outlet />
        </>

    )
}
