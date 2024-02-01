import Image from "next/image";
import Card from "./ui/card";
import { data } from "./data";

export default function Home() {
    
    const IDlist = data.map(componente => componente.id)
    
    return (
        <main className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 sm:ml-20">
                {IDlist.map((id) => (
                    <Card key={id} id={id} />
                ))}
            </div>
        </main>
    );
}
