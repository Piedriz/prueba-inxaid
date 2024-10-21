'use client'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { generarCodigoAlfanumerico } from '@/app/utils/code';
import Swal from 'sweetalert2';
import { useCode } from '@/app/context/AppContext';
import { useRouter } from 'next/navigation';
import { departamentosCiudades } from '@/app/utils/departamentosCiudades';
import { schema } from '@/app/utils/formSchema';




const Form = () => {
  const router = useRouter()
  const [code, setCode] = useCode();
  const [cities, setCities] = useState([]);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = (data) => {
    const code =generarCodigoAlfanumerico(10); 
    setCode(code)// Puedes cambiar esta lógica para generar el código como prefieras
    
    Swal.fire({
      title: "Registrado con exito",
      text: `Codigo: ${code}`,
      icon: "success",
      
      confirmButtonText: 'Continuar',
    }).then((result)=>{
      if(result.isConfirmed){
        router.push(`/success`);
      }
    });
  };

  const handleDepartmentChange = (event) => {
    const selectedDepartment = event.target.value;
    // Obtener las ciudades correspondientes al departamento seleccionado
    const cities = departamentosCiudades[selectedDepartment] || [];
    setCities(cities); // Actualizar el estado de las ciudades
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6 bg-gray-950 shadow-lg  text-white">
      {/* Nombre */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-orange-400">Nombre</label>
        <input
          {...register('nombre')}
          className="w-full mt-2 p-3 border-0 h-10 bg-slate-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <p className="text-red-500 text-sm">{errors.nombre?.message}</p>
      </div>

      {/* Apellido */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-orange-400">Apellido</label>
        <input
          {...register('apellido')}
          className="w-full mt-2 p-3 border-0 h-10 bg-slate-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <p className="text-red-500 text-sm">{errors.apellido?.message}</p>
      </div>

      {/* Cédula */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-orange-400">Cédula</label>
        <input
          {...register('cedula')}
          className="w-full mt-2 p-3 border-0 h-10 bg-slate-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <p className="text-red-500 text-sm">{errors.cedula?.message}</p>
      </div>

      {/* Departamento */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-orange-400">Departamento</label>
        <select
          {...register('departamento')}
          onChange={handleDepartmentChange}
          className="w-full mt-2 p-3 border-0 bg-slate-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">Seleccione...</option>
          {Object.keys(departamentosCiudades).map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
        <p className="text-red-500 text-sm">{errors.departamento?.message}</p>
      </div>

      {/* Ciudad */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-orange-400">Ciudad</label>
        <select
          {...register('ciudad')}
          className="w-full mt-2 p-3 border-0 bg-slate-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">Seleccione...</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        <p className="text-red-500 text-sm">{errors.ciudad?.message}</p>
      </div>

      {/* Celular */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-orange-400">Celular</label>
        <input
          {...register('celular')}
          className="w-full mt-2 p-3 border-0 h-10 bg-slate-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <p className="text-red-500 text-sm">{errors.celular?.message}</p>
      </div>

      {/* Correo Electrónico */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-orange-400">Correo Electrónico</label>
        <input
          {...register('email')}
          className="w-full mt-2 p-3 border-0 h-10 bg-slate-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      {/* Checkbox de Autorización */}
      <div className="mb-6 flex items-center">
        <input
          type="checkbox"
          {...register('habeasData')}
          className="form-checkbox h-5 w-5 text-orange-500 focus:ring-2 focus:ring-orange-400"
        />
        <label className="ml-3 text-sm font-medium text-orange-400">
          Autorizo el tratamiento de mis datos
        </label>
        <p className="text-red-500 text-sm">{errors.habeasData?.message}</p>
      </div>

      {/* Botón de Enviar */}
      <button
        type="submit"
        className="w-full py-3 mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-orange-400"
      >
        Registrar
      </button>
    </form>
  );
};

export default Form;
