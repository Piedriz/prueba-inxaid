'use client'
import React, { useState } from 'react'
import { Formulario } from '../form/Formulario';
import { useCode } from '@/app/context/AppContext';

export const RegisterCard = () => {
    const [code] =useCode()
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='p-5 py-16  bg-black container mx-auto lg:max-w-md lg:bg-opacity-70 lg:absolute z-10 lg:py-7 lg:m-20'>
            
            {code ? (
                <>
                <p className='font-bold text-4xl pb-4 text-white'>Registrado con exito!</p>
                <p className='text-white font-semibold'>
                    Felicidades por su registro, su código es: <span className="text-orange-500">{code}</span>
                </p>
                
                </>
            ) : (
                <>
                    <p className='text-white font-semibold'>Más agilidad para la pista de carreras</p>
                    <div className='w-10 h-0.5 bg-orange-500 mt-4'></div>
                    <p className='font-bold text-4xl pt-10 text-white'>PARTICIPA EN NUESTRO SORTEO</p>
                    <button
                        onClick={openModal}
                        type="button"
                        className="mt-4 text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        REGISTRO
                    </button>
                </>
            )

            }


            {showModal && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-gray-950 text-white p-6 shadow-lg max-w-lg w-full relative overflow-auto max-h-screen mx-4 sm:mx-8">
                        {/* Botón para cerrar el modal */}
                        <button
                            className="absolute top-2 right-2 text-orange-500 hover:text-orange-400"
                            onClick={closeModal}
                        >
                            X
                        </button>
                        <div className="overflow-y-auto max-h-[85vh]"> {/* Ajuste de altura */}
                            <Formulario/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
