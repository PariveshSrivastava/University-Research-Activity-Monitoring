import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AdminPage() {
    return (
        <>
        <div>
            <div className="p-4 pb-3 ">
                <div className="sm:flex items-center p-4 bg-white border-2 border-teal-500 rounded-3xl shadow-sm ">
                    <img alt="userImage" className="rounded-xl border-2 border-gray-300"
                        src="https://picsum.photos/seed/picsum/200" />
                    <div id="body" className="flex flex-col ml-5">
                        <div className="flex items-baseline">
                            <p className=" lg:text-6xl md:text-5xl sm:text-5xl text-2xl">John Doe</p>
                        </div>
                        <div className="text-sm py-2 pr-2 leading-normal uppercase">
                            <i className="fas fa-map-marker-alt "></i>&nbsp;
                            Hyderabad,Telangana
                        </div>
                        <div className="text-sm pb-2 pr-2 leading-normal uppercase">
                            <i className="fas fa-university"></i>&nbsp;
                            Keshav Memorial Institute of Technology
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto ">
                <div className="border-b-2 border-teal-400">
                    <nav className=" ">
                        <div className=" flex items-center justify-center p-6 mx-auto capitalize">
                            <Link to="/AdminUpload"
                                className="border-b-2 border-transparent hover:text-gray-500  hover:border-teal-500 mx-1.5 sm:mx-6">upload
                                data</Link>
                            <Link to="#"
                                className="border-b-2 border-transparent hover:text-gray-500  hover:border-teal-500 mx-1.5 sm:mx-6">Downlaod
                                data</Link>
                            <Link to="#"
                                className="border-b-2 border-transparent hover:text-gray-500  hover:border-teal-500 mx-1.5 sm:mx-6">Modify
                                data</Link>
                            <Link to="#"
                                className="border-b-2 border-transparent hover:text-gray-500  hover:border-teal-500 mx-1.5 sm:mx-6">statistics
                            </Link>
                        </div>
                    </nav>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
