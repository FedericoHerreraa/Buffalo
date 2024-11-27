import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../../components/ui/drawer"

import { Button } from "../../components/ui/button"
import { UserCard } from "../../components/User/UserCard"
import HeaderUser from "../../components/User/HeaderUser"
import CoffeeProgress from "../../components/User/CoffeeProgress"
import CarouselComponent from "../../components/User/Carousel"
import logo from '../../images/logo.png'
import { useNightMode } from "../../context/NightModeContext"

export default function HomeUser() {
    const { isNightMode } = useNightMode()

    return (
        <div className={`${isNightMode ? 'bg-black' : ''} h-[100vh]`}>
            <HeaderUser />
            {/* <div className="mt-10">
                <CarouselComponent />
            </div> */}
            <img 
                src={logo} 
                alt="Logo img"
                className="h-40 mx-auto mt-10" 
            />
            <div>
                <h1 className={`text-center mt-20 text-3xl ${isNightMode ? 'text-zinc-400' : ''}`}>Progreso de cafes</h1>
                <CoffeeProgress />
            </div>
            <div className="mt-20">
                <Drawer>
                    <div className="flex justify-center mt-10">
                        <DrawerTrigger className="relative px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg transition-transform transform">Abrir mi Card Personal</DrawerTrigger>
                    </div>
                    <DrawerContent className={isNightMode ? 'bg-zinc-950 border-t border-t-zinc-900 border-x-black' : ''}>
                        <UserCard />
                        <DrawerFooter className="mb-7">
                            <DrawerClose>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    )
}