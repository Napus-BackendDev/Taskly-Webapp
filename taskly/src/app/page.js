import { FaRegUser , FaGoogle , FaGithub  } from 'react-icons/fa';
import { TbLockPassword } from "react-icons/tb";

export default function Home() {
    return (
        <div className="grid grid-cols-2 min-h-screen font-[family-name:var(--font-geist-sans)]">
            {/* Left side for login form */}
            <div className="flex items-center justify-center bg-white px-8">
                <div className="flex flex-col gap-[32px] items-center">
                    <h1 className="text-3xl font-bold text-[rgba(0,0,0,0.6)]">Taskly</h1>
                    <h1 className="text-3xl font-bold">Login</h1>
                    <div className="flex items-center gap-3 border border-black p-4 rounded-lg shadow-md bg-[rgba(217,217,217,0.4)] w-full sm:w-[400px]">
                        <FaRegUser size={25}/>
                        <span className=""> | </span>
                        <input type="text" placeholder="Username" className="bg-transparent outline-none w-full"/>
                    </div>
                    <div className="flex ju items-center gap-3 border border-black p-3 rounded-lg shadow-md bg-[rgba(217,217,217,0.4)] w-full sm:w-[400px]">
                        <TbLockPassword size={32}/>
                        <span className=""> | </span>
                        <input type="password" placeholder="Password" className="bg-transparent outline-none w-full"/>
                    </div>
                    <a href="#" className="text-sm text-gray-500 text-right w-full sm:w-[400px] block hover:underline">Forgot password?</a>
                    <button className="bg-black text-white p-3 rounded-lg shadow-md w-full sm:w-[400px] block hover:bg-gray-800 transition duration-200 ease-in-out ">
                        Login
                    </button>
                    <div className="flex items-center w-full sm:w-[400px] my-4">
                        <hr className="flex-grow border-t border-gray-400" />
                        <span className="mx-4 text-lg font-medium">Or</span>
                        <hr className="flex-grow border-t border-gray-400" />
                    </div>
                    <div className="flex justify-center gap-8 w-full sm:w-[400px]">
                        <button className="bg-gray-300 text-black p-4 border rounded-full flex items-center justify-center w-16 h-16">
                            <FaGoogle size={32} />
                        </button>
                        <button className="bg-gray-300 text-black p-4 border rounded-full flex items-center justify-center w-16 h-16">
                            <FaGithub size={32} />
                        </button>
                        
                    </div>
                </div>
            </div>
            {/* Right side for illustration or info */}
            <div className="flex flex-col gap-[32px] col-start-2 items-center sm:items-start bg-gray-300 min-h-screen">
                {/* Right side for illustration or info */}
            </div>
        </div>
    );
}