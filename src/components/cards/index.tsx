import { Items } from "../menu"

interface IProps {
    item: Items
}
export default function Card({item}: IProps) {
    return (
        <div className="flex gap-2">
            <img src={item.image} alt="burguer-1" className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
            <div>
                <p className="font-bold ">{item.name}</p>
                <p className="text-sm"> {item.description}</p>
                <div className="flex items-center justify-between gap-2 mt-3">
                    <p className="font-bold text-lg">R${item.price}</p>
                    <button className="bg-gray-900 px-5 rounded ">
                        <i className="fa fa-cart-plus text-lg text-white" />
                    </button>
                </div>
            </div>
        </div>
    )
}