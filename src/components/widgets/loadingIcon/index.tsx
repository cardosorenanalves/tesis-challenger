import Image from "next/image";
import loading from '@/assets/loadinIcon.svg'

export function Loading(){
    return(
        <Image className="animate-spin" src={loading} width={20} height={20} alt="loading"/>
    )
}