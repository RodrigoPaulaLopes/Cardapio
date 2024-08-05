interface IProps {
    text: string
    side: "text-center" | 'text-start'  | 'text-end'
    px?: string 
}

export default function Heading({text, side, px}: IProps) {
    return <h2 className={`text-2xl md:text-4xl font-bold ${side} mt-9 mb-6 ${px}`}>{text}</h2>
}