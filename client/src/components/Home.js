import React from 'react'
import Search from './Search'

export default function Home() {
    return (
        <div className="">
            <div className="flex justify-center mt-10">
                <div>
                    <div className="px-4 ">
                        <p className="text-4xl text-center font-medium pt-53/200 mx-10">
                            Discover scientific knowledge
                        </p>
                        <p className="text-center pt-1">
                            Access publication pages and stay up to date with what's happening in your field.
                        </p>
                    </div>
                    <div className="p-2">
                        <Search></Search>
                    </div>
                </div>
                <div className="collapse lg:visible py-5">
                    <img src="research.webp" className="h-96 rounded-lg" alt="supaSaxy" />
                </div>
            </div>
            
        </div>
    )
}

