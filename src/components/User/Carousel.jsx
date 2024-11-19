import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../../components/ui/carousel";

import logo from "../../images/logo.png";

export default function CarouselComponent() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        { id: 1, src: logo },
        { id: 2, src: logo },
        { id: 3, src: logo },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); 
        }, 3000);

        return () => clearInterval(interval); 
    }, [items.length]);

    return (
        <Carousel className="h-20 bg-gray-500">
            <CarouselContent
                className="-ml-2 md:-ml-4"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`, 
                    transition: "transform 0.5s ease-in-out", 
                }}
            >
                {items.map((item) => (
                    <CarouselItem key={item.id} className="pl-2 md:pl-4">
                        <img src={item.src} className="w-20 h-20" alt={`carousel-${item.id}`} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}