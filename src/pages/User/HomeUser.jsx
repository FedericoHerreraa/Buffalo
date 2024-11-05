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
  

export default function HomeUser() {
    return (
        <div>
            <h1 className="text-center text-2xl font-bold mt-10">Esta es la pagina de inicio del usuario</h1>
            <Drawer>
                <div className="flex justify-center mt-10">
                    <DrawerTrigger className="bg-gray-300 px-5 py-1 rounded-md text-xl">Open</DrawerTrigger>
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
    )
}