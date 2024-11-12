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
  

export default function HomeUser() {
    return (
        <div>
            <HeaderUser />
            <div>
                <h1 className="text-center mt-10 text-3xl">Progreso de cafes</h1>
                <CoffeeProgress />
            </div>
            <div className="mt-20">
                <Drawer>
                    <div className="flex justify-center mt-10">
                        <DrawerTrigger className="bg-gray-600 shadow-lg px-5 py-2 text-zinc-300 rounded-md text-xl">Abrir mi Card Personal</DrawerTrigger>
                    </div>
                    <DrawerContent>
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