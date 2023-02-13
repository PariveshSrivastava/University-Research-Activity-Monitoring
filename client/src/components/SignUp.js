import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function SignUp() {

    const navigate = useNavigate()

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [rePassword,setRePassword] = useState('')
    const [samePw,setSamePw] = useState(true)

    async function registerUser() {
        if(password === rePassword){
            setSamePw(samePw => !samePw)
            const response = await fetch('http://localhost:2000/api/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            })
            const data = await response.json()
            
            console.log(data)

            if(data.status === 'ok'){
                // window.location.href = '/Login'
                navigate('/Login')
            }
        }
        else{
            setSamePw(samePw => !samePw)
            console.log("ERROR, password not same")
        }
    }

    let confimBorder = samePw ? ' focus:ring-emerald-500 ' :' border-red-700';
    let confirmText = samePw ? ' hidden' : ' ';
    // let confirmPadding = samePw ? ' focus:ring-emerald-500 border-green-700' :' border-red-700';

    return (
        <div>
            <div
                className="relative flex text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-3 sm:py-12">
                <div className="relative py-3 sm:w-96 mx-auto text-center">
                    <span className="text-2xl font-light">Create an account</span>
                    <div className="mt-4 bg-white shadow-md rounded-2xl text-left">
                        <div className="h-3 bg-teal-400 rounded-t-2xl"></div>
                        <div className="px-8 pt-6 pb-3">
                            <label className="block font-semibold text-sm"> Name </label>
                            <input 
                                value ={name}
                                onChange = {(e) => setName(e.target.value)}
                                type="text" 
                                placeholder="Name"
                                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-emerald-500 focus:ring-1 rounded-full" />

                            <label className="block mt-2 font-semibold text-sm"> Email </label>
                            <input 
                                value ={email}
                                onChange = {(e) => setEmail(e.target.value)}
                                type="text" 
                                placeholder="Email"
                                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-emerald-500 focus:ring-1 rounded-full" />

                            <label className="block mt-2 font-semibold text-sm"> Password </label>
                            <input 
                                value ={password}
                                onChange = {(e) => setPassword(e.target.value)}
                                type="password" 
                                placeholder="Password"
                                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-emerald-500 focus:ring-1 rounded-full " />
                            <label className="block mt-2 font-semibold text-sm">Confirm Password </label>
                            <input
                                value ={rePassword}
                                onChange = {(e) => setRePassword(e.target.value)}
                                type="password" 
                                placeholder="Password"
                                className={ ` border w-full h-5 px-3 py-5 mt-2 focus:outline-none hover:outline-none focus:ring-1 rounded-full ${confimBorder} ` }/>
                            <div className='text-sm pt-2 text-red-500'>
                                <p className={`${confirmText}`}>Passwords not same</p>
                            </div>
                            <button 
                                onClick={registerUser}
                                type="submit"
                                className={`text-center w-full mt-3 bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-400 `}>Create Account</button>
                            <div className="flex justify-between items-baseline">
                                <Link to="/Login" className="py-2 cursor-pointer text-sm block hover:underline">Already have an account?</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
