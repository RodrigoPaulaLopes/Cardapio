import { useContext, useEffect } from "react";
import Heading from "../heading";
import { CartProvider } from "../../context/carrinho";

interface Props {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Modal({ open, setOpen }: Props) {

    const { cart, removeItemFromCart } = useContext(CartProvider)

    return (
        <dialog className="modal bg-gray-900/70" open={open}>
            <div className="modal-box bg-slate-50 shadow-lg border-gray-500">
                <div className="w-full flex flex-row justify-end">
                    <button onClick={() => setOpen(!open)}>
                        <i className="fa fa-thin fa-xmark"></i>
                    </button>
                </div>
                <Heading text="Meu Carrinho" side="text-center" />
                {cart.map(cart => (
                    <div className="my-4">
                        <p className="font-bold">{cart.name}</p>
                        <div className="flex flex-row justify-between items-center my-2">
                            <p>(Quantidade: {cart.quantities})</p>
                            <p onClick={() => removeItemFromCart(cart.name)}>Remover</p>
                        </div>
                        <p>R$ {cart.price}</p>
                    </div>
                ))}
                <div className="flex flex-row gap-4 w-full justify-between items-center">
                    <p className="font-bold text-xl">Total:</p>
                    <span className="text-green-500 text-xl font-semibold">R${cart.reduce((sum, item) => sum + (Number(item.price) * item.quantities), 0).toFixed(2)}</span>
                </div>
                <div className="w-full mt-8 flex flex-col gap-4">
                    <p className="font-medium">Endereço De Entrega: </p>
                    <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs border-gray-400" placeholder="Bio"></textarea>
                </div>
                <div className="modal-action">
                    <form method="dialog" className="flex flex-row justify-between w-full items-center">

                        <button className="bg-green-500 text-white px-4 py-2" onClick={() => setOpen(!open)}>Finalizar pedido</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}