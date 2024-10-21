import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-black  py-5 flex flex-col px-4 container mx-auto'>
            <div className='grid md:grid-cols-3 grid-cols-2 items-center gap-4'>
                <div className='col-span-1'>
                    <Image src="/images/logocar.png" width={200} height={200} alt='logo' />
                </div>

                <div className='hidden md:flex justify-between gap-8'>
                    {/* Comunidad Item */}
                    <div className='flex flex-col items-center group cursor-pointer'>
                        <svg
                            className="w-6 h-6 mx-auto text-gray-800 dark:text-white group-hover:text-orange-500 transition-all duration-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className='text-white font-bold text-xs mt-1 group-hover:text-orange-500'>
                            COMUNIDAD
                        </p>
                        <div className='w-full h-0.5 bg-orange-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </div>

                    {/* Eventos Item */}
                    <div className='flex flex-col items-center group cursor-pointer'>
                        <svg
                            className="w-6 h-6 mx-auto text-gray-800 dark:text-white group-hover:text-orange-500 transition-all duration-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className='text-white font-bold text-xs mt-1 group-hover:text-orange-500'>
                            EVENTOS
                        </p>
                        <div className='w-full h-0.5 bg-orange-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </div>

                    {/* Beneficios Item */}
                    <div className='flex flex-col items-center group cursor-pointer'>
                        <svg
                            className="w-6 h-6 mx-auto text-gray-800 dark:text-white group-hover:text-orange-500 transition-all duration-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20 7h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C10.4 2.842 8.949 2 7.5 2A3.5 3.5 0 0 0 4 5.5c.003.52.123 1.033.351 1.5H4a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a2 2 0 0 0-2-2Zm-9.942 0H7.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM13 14h-2v8h2v-8Zm-4 0H4v6a2 2 0 0 0 2 2h3v-8Zm6 0v8h3a2 2 0 0 0 2-2v-6h-5Z" />
                        </svg>
                        <p className='text-white font-bold text-xs mt-1 group-hover:text-orange-500'>
                            BENEFICIOS
                        </p>
                        <div className='w-full h-0.5 bg-orange-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </div>

                    {/* Noticias Item */}
                    <div className='flex flex-col items-center group cursor-pointer'>
                        <svg
                            className="w-6 h-6 mx-auto text-gray-800 dark:text-white group-hover:text-orange-500 transition-all duration-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path fillRule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                        </svg>
                        <p className='text-white font-bold text-xs mt-1 group-hover:text-orange-500'>
                            NOTICIAS
                        </p>
                        <div className='w-full h-0.5 bg-orange-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </div>
                </div>
                
                <div className='col-span-1 justify-self-end'>
                    <button type="button" className=" my-auto text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-3xl text-sm px-4 py-2 text-center me-2 ">
                        LOGIN
                    </button>

                </div>
            </div>

            <div className='justify-between md:hidden w-full max-w-md mx-auto flex flex-row gap-3 pt-4'>
                {/* Comunidad Item */}
                <div className='flex flex-col items-center group'>
                    <svg
                        className="w-6 h-6 mx-auto text-gray-800 dark:text-white group-hover:text-orange-500 transition-all duration-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p className='text-white font-bold text-xs mt-1 group-hover:text-orange-500'>
                        COMUNIDAD
                    </p>
                    <div className='w-full h-0.5 bg-orange-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>

                {/* Eventos Item */}
                <div className='flex flex-col items-center group'>
                    <svg
                        className="w-6 h-6 mx-auto text-gray-800 dark:text-white group-hover:text-orange-500 transition-all duration-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p className='text-white font-bold text-xs mt-1 group-hover:text-orange-500'>
                        EVENTOS
                    </p>
                    <div className='w-full h-0.5 bg-orange-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>

                {/* Beneficios Item */}
                <div className='flex flex-col items-center group'>
                    <svg
                        className="w-6 h-6 mx-auto text-gray-800 dark:text-white group-hover:text-orange-500 transition-all duration-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20 7h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C10.4 2.842 8.949 2 7.5 2A3.5 3.5 0 0 0 4 5.5c.003.52.123 1.033.351 1.5H4a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a2 2 0 0 0-2-2Zm-9.942 0H7.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM13 14h-2v8h2v-8Zm-4 0H4v6a2 2 0 0 0 2 2h3v-8Zm6 0v8h3a2 2 0 0 0 2-2v-6h-5Z" />
                    </svg>
                    <p className='text-white font-bold text-xs mt-1 group-hover:text-orange-500'>
                        BENEFICIOS
                    </p>
                    <div className='w-full h-0.5 bg-orange-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>

                {/* Noticias Item */}
                <div className='flex flex-col items-center group'>
                    <svg
                        className="w-6 h-6 mx-auto text-gray-800 dark:text-white group-hover:text-orange-500 transition-all duration-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path fillRule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                    </svg>
                    <p className='text-white font-bold text-xs mt-1 group-hover:text-orange-500'>
                        NOTICIAS
                    </p>
                    <div className='w-full h-0.5 bg-orange-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
            </div>
        </div>
    )
}

export default Header
