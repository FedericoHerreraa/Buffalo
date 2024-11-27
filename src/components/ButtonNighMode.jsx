import { useNightMode } from "../context/NightModeContext";
import { IoSunny } from "react-icons/io5";
import { MdNightlightRound } from "react-icons/md";

export const ButtonNightMode = () => {
    const { isNightMode, toggleNightMode } = useNightMode();

    return (
        <button onClick={toggleNightMode} className='text-2xl'>
            {isNightMode ? <IoSunny color='white'/>  : <MdNightlightRound />}
        </button>
    )
}
