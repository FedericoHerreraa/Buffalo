import { GiCoffeeCup } from "react-icons/gi";
import { useNightMode } from "../../context/NightModeContext";

export default function CoffeeProgress() {
    const { isNightMode } = useNightMode()

    let coffees = 3;
    let coffeesLeft = 5 - coffees;
    let coffeeCups = [];

    for (let i = 0; i < coffees; i++) {
        coffeeCups.push(<GiCoffeeCup key={i} size={35} color={isNightMode ? 'white' : 'black'}  />);
    }
    for (let i = 0; i < coffeesLeft; i++) {
        coffeeCups.push(<GiCoffeeCup key={i + coffees} size={35} color="gray" />);
    }

    return (
        <div className="flex justify-center gap-5 w-[80%] mx-auto p-5">
            {coffeeCups}
        </div>
    )
}