import Image from "next/image";
import logo from '@/assets/logoFooter.svg'

export function FooterComponent(){
    return(
        <footer className="w-full h-48 flex justify-center align-center bg-[#F0F0F0]">
            <Image src={logo} alt='Logotipo Tesis' width={150} height={150}/>
        </footer>
    )
}