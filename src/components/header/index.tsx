import Image from "next/image";
import logo from '@/assets/tesis-logo.svg'

export function HeaderComponent(){
    return(
        <header className="flex justify-start w-full h-105">
            <section className="w-4/5 bg-[#f9fafb] p-8">
                <Image src={logo} alt='Logotipo Tesis' width={120} height={120}/>
            </section>
        </header>
    );
}