import React, { useState } from 'react'

export default function Search() {
    // const searchClicked = () => {

    // }


    return (
        <div>
            {/* <div className="container flex justify-center items-center mt-4">
                <div className="relative">
                    <div className="absolute top-4 left-3">
                        <i className="mr-2 fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                    </div>
                    <input type="text" 
                        className="h-14 pl-10 pr-20 rounded-full z-0 shadow focus:shadow-md focus:outline-none"
                        placeholder="Search" />
                    <div className="absolute top-2 right-2">
                        <button className="h-10 w-20 text-white rounded-full bg-teal-500 hover:bg-teal-400" onClick={searchClicked}>Search</button>
                    </div>
                </div> */}

            <div className="container flex justify-center items-center">
                <div className="relative">
                    <div className="absolute top-4 left-3">
                        <i className="mr-2 fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                    </div>
                    <input type="text"
                        className="h-14 pl-10 pr-24 rounded-full z-0 shadow focus:shadow-md focus:outline-none"
                        placeholder="Search" />
                    <div className="absolute top-2 right-2">
                        <button className="h-10 w-20 text-white rounded-full bg-teal-500 hover:bg-teal-400">Search</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
