
interface Boxprops {
    title: string;
    subtitle?: string;
    description?: string;
    rounded?: 'rounded-lg' | 'rounded-full' | 'rounded-md' | 'rounded-xl' | 'rounded-2xl';
    align?: 'text-right' | 'text-center';
    bgColor?: string;
}

const Box: React.FC<Boxprops> = ({ 
    title, 
    subtitle, 
    description, 
    rounded = '',
    align = 'text-left',
    bgColor,
     }) => {
    return (
        <section className={`gap-5 basis-3/5 ${bgColor} ${align} ${rounded}  p-8 flex flex-col items-center shadow-md`}>
            <h1 className="text-yellow-600 inria text-4xl">{title}</h1>
            <h3 className="font-semibold">{subtitle}</h3>
            <p className="text-sm inria text-center">
                {description}
            </p>
        </section>
    )
}

export default Box