import Burger from '../../assets/Ellipse3.png'
export default function Banner() {
    return (
        <header className='w-full h-[420px] bg-zinc-400 bg-home bg-cover bg-center'>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <img src={Burger} className="w-32 h-32 shadow-lg rounded-full hover:scale-110 duration-200" alt='logo-burger'/>
                <h1 className='text-4xl mt-4 mb-2 font-bold text-white'>Dev Burguer</h1>
                <span className='text-white font-medium'>Rua Rogéria 37, Parque Ulisses, Rio de janeiro - RJ</span>
                <div className='bg-amber-500 px-4 py-1 rounded-lg mt-5'>
                    <span className='text-white'>De Seg a Dom - 18:00 as 22:00 </span>
                </div>
            </div>
        </header>
    )
}