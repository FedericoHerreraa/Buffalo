import logo from '../../public/logo.png'
import { useState } from 'react'


export default function AuthenticationPage() {
    const [signIn, setSignIn] = useState(true)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <div className="flex md:justify-center gap-5 mx-5 items-center mt-20">
                <img src={logo} alt="Buffalo Logo" className="h-20" />
                <h1 className="text-5xl">Comunidad <span className='text-zinc-500'>Buffalo</span></h1>
            </div>
            <h2 className="text-center md:mt-5 mt-10 mx-10">Inicia Sesion / Create una cuenta para recibir los mejores beneficios</h2>

            <form className="mt-40">
                <h3 className='ml-8 text-3xl md:text-center font-semibold'>{signIn ? "Iniciar Sesion" : "Crear Cuenta"}</h3>
                <p 
                    onClick={() => setSignIn(!signIn)}
                    className='ml-8 md:text-center font-light cursor-pointer'>
                    {signIn ? "Todavia no tienes una cuenta?" : "Ya tienes una cuenta?"} 
                        <span className='text-blue-500'>{signIn ? " Registrate" : " Ingresa"}</span>
                </p>
                <div className="flex flex-col items-center mt-7">
                    {!signIn && (
                        <input 
                            value={fullName}
                            onChange={(value) => setFullName(value)}
                            type="text" 
                            className="border rounded-lg border-gray-300 p-2 w-80" 
                            placeholder="Nombre Completo" 
                        />
                    )}

                    <input 
                        value={email}
                        onChange={(value) => setEmail(value)}
                        type="text" 
                        className="border rounded-lg border-gray-300 p-2 w-80 mt-4" 
                        placeholder="Email" 
                    />

                    <input 
                        value={password}
                        onChange={(value) => setPassword(value)}
                        type="password" 
                        className="border rounded-lg border-gray-300 p-2 w-80 mt-4" 
                        placeholder="Password" 
                    />

                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white p-2 rounded-md w-60 mt-4">
                            {signIn ? "Iniciar sesión" : "Crear Cuenta"}
                    </button>
                </div>
            </form>
        </div>
    )
}