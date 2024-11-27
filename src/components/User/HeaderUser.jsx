import logo from '../../images/logo.png'
import { ButtonNightMode } from '../ButtonNighMode'
import { useNightMode } from '../../context/NightModeContext'

export default function HeaderUser() {
    const { isNightMode } = useNightMode()

    return (
        <div className={`w-full h-24 shadow-xl flex justify-between items-center px-5 ${isNightMode ? 'bg-gradient-to-b from-zinc-900 to-black' : ''}`}>
            <h1 className={`text-2xl ${isNightMode ? 'text-white' : 'text-zinc-600'}`}>Buffalo Cafe y Musica</h1>
            <ButtonNightMode/>
        </div>
    )
}