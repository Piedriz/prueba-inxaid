'use client'
import React, { useEffect } from 'react';
import { HeroSuccess } from '../components/heroSuccess/HeroSuccess';
import { useCode } from '../context/AppContext';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const Success = () => {
    const router = useRouter();
    const [code] = useCode();
    
    useEffect(() => {
        if (!code) {
            Swal.fire({
                title: "Usuario no registrado",
                text: "Usted será redirigido a la página principal",
                icon: "error",
                timer: 3000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                },
                willClose: () => {
                    router.push('/');
                }
            });
        }
    }, [code, router]);

    return (
        <div>
            <HeroSuccess />
        </div>
    );
};

export default Success;
