import logo from '../../images/logo.png'

export default function HeaderUser() {
    return (
        <div className="w-full h-24 shadow-xl flex justify-between items-center px-5">
            <h1 className='font-semibold text-zinc-600 text-2xl'>Buffalo Cafe y Musica</h1>
            <img 
                src={logo} 
                alt=""
                className='h-16' 
            />   
        </div>
    )
}