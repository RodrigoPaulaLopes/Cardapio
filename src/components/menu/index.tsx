import { useState } from "react"
import Burguer1 from '../../assets/hamb-1.png'
import Burguer2 from '../../assets/hamb-2.png'
import Burguer3 from '../../assets/hamb-3.png'
import Burguer4 from '../../assets/hamb-4.png'
import Burguer5 from '../../assets/hamb-5.png'
import Burguer6 from '../../assets/hamb-6.png'
import Burguer7 from '../../assets/hamb-7.png'
import Burguer8 from '../../assets/hamb-8.png'

import Bebida1 from '../../assets/refri-1.png'
import Bebida2 from '../../assets/refri-2.png'
import Card from "../cards"
import Heading from "../heading"

export interface Items {
    id: number
    name: string
    description: string
    price: string
    image: string
}

const hamburguersValue: Items[] = [{
    id: 1,
    name: 'Hamburguer Smash',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero ',
    price: '18.90',
    image: Burguer1

},
{
    id: 2,
    name: 'Hamburguer Justice',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero ',
    price: '20.90',
    image: Burguer2

},
{
    id: 3,
    name: 'Hamburguer Spider',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero ',
    price: '25.00',
    image: Burguer3

},
{
    id: 4,
    name: 'Hamburguer archer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero dolores ut quod provident necessitatibus quaerat',
    price: '25.00',
    image: Burguer4

},
{
    id: 5,
    name: 'Hamburguer fire',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero dolores ut quod provident necessitatibus quaerat',
    price: '25.00',
    image: Burguer5

},
{
    id: 6,
    name: 'Hamburguer water',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero dolores ut quod provident necessitatibus quaerat',
    price: '25.00',
    image: Burguer6

},
{
    id: 7,
    name: 'Hamburguer stone',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero dolores ut quod provident necessitatibus quaerat',
    price: '25.00',
    image: Burguer7

},
{
    id: 8,
    name: 'Hamburguer wind',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero dolores ut quod provident necessitatibus quaerat',
    price: '25.00',
    image: Burguer8

},
]

const bebidasValue: Items[] = [
    {
        id: 1,
        name: "Coca Cola 500ml",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero ',
        price: '5.50',
        image: Bebida1
    },
    {
        id: 2,
        name: "Guarana Antartica 500ml",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero ',
        price: '5.50',
        image: Bebida2
    },
]
export default function Menu() {
    const [hamburguers, setHamburguers] = useState<Items[]>(hamburguersValue)
    const [bebidas, setBebidas] = useState<Items[]>(bebidasValue)
    return (
        <main>
            <Heading text="Conheça nosso cardapio" side="text-center"/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-8 md:gap-12 mx-auto max-w-7xl mb-10">
                {hamburguers.map(hamburguer => (
                    <Card item={hamburguer}/>
                ))}
            </div>

        
            <Heading text="Bebidas" side="text-start" px="px-4"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-8 md:gap-12 mx-auto max-w-7xl mb-10">
                {bebidas.map(bebida => (
                    <Card item={bebida}/>
                ))}
            </div>


        </main>
    )
}