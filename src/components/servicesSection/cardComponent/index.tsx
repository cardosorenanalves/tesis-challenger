interface Props{
    content: string;
    step: number;
}

export function CardComponent({ content, step }: Props){
    return(
        <div className="h-30 max-[380px]:h-36 w-31p max-md:w-full max-[1060px]:w-47p bg-white relative flex flex-col items-center justify-center text-center px-8 pb-6 pt-10 gap-3 rounded-xl shadow-md">
            <div className="h-20 w-20 absolute top-0 flex justify-center items-center bg-gradient-to-b from-[#211c64] to-[#4338ca] rounded-full" style={{marginTop: '-53px'}}>
                <p className="text-4xl font-semibold">{ step }</p>
            </div>
            <p className="text-black text-sm font-medium">{ content }</p>
        </div>
    );
}