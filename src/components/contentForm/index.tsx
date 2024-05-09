import Image from "next/image";
import arrow from '@/assets/arrow.svg'
import { FormComponent } from "./formComponent";

export function ContentForm(){
    return(
        <main className="w-full bg-gradient-to-b from-[#4338ca] to-[#211c64] flex flex-row items-center max-md:items-center max-md:justify-center max-md:gap-8 max-md:flex-col p-16 h-full max-[870px]:px-9 max-[780px]:px-4">
            <section className="flex w-1/2 max-md:w-full h-full flex items-start flex-col justify-center gap-7">
                <h1 className="text-3xl font-semibold">Desenvolvimento e gestão de serviços tecnológicos!</h1>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-1.5">
                        <Image src={arrow} alt="Flecha" width={25} height={25}/>
                        <h2>Gestão técnica de Programas Setoriais da Qualidade</h2>
                    </div>
                    <div className="flex flex-row gap-1.5">
                        <Image src={arrow} alt="Flecha" width={25} height={25}/>
                        <h2>Avaliação de produtos inovadores para construção civil</h2>
                    </div>
                    <div className="flex flex-row gap-1.5">
                        <Image src={arrow} alt="Flecha" width={25} height={25}/>
                        <h2>Realização de ensaios de materiais de construção</h2>
                    </div>
                </div>
            </section>
            <section className="flex w-1/2 max-md:w-full max-md:justify-center h-full flex items-center justify-end">
                <FormComponent />
            </section>
        </main>
    );
}