

export default function SignIn() {
    return (
        <div>
            <div className="h-screen w-full bg-[url('/images/images.jpg')] bg-cover bg-center">
                <div className="flex justify-center text-center content-center">
                    <div className="w-full md:w-1/2 pt-[209px] content-center">
                        <div className="bg-transparent border border-white/20 rounded-2xl backdrop-blur-md shadow-lg transition-all duration-300 hover:border-white  hover:shadow-xl">
                            <div className="p-6 text-white text-center">
                                <h2 className="text-xl font-semibold block">Seller Sign In</h2>

                                <div className='mt-9 text-left'>
                                    <h3 className="text-sm text-white">Enter Mail</h3>

                                </div> <div className='mt-2 '>
                                    <input type='email' className="text-black block px-4 py-3 w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="Enter email" />
                                </div>

                                <div className='mt-4 text-left'>
                                    <h3 className="text-sm text-white">Enter Password</h3>
                                </div>

                                <div className='mt-2'>
                                    <input type='password' className=" text-black block px-4 py-3 w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="Enter password" />
                                </div>

                                <div className='pt-8'>
                                    <button className="inline-block rounded-md px-6 py-3 bg-blue-500 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800"
                                    > Login </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
