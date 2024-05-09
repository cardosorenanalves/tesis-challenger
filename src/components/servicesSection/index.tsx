'use client'

import { Scroll } from "@/utils/scrollFunction";
import { CardComponent } from "./cardComponent";

export function ServicesSection(){
    const infoCards = [
        {number: 1 , content: 'Prover suporte para a avaliação de novos produtos e tecnologias'},
        {number: 2 , content: 'Reduzir riscos na utilização de novos produtos e tecnologias'},
        {number: 3 , content: 'Orientar o mercado na escolha de novos produtos e tecnologias'},
        {number: 4 , content: 'Estimular o processo de inovação tecnológica'},
        {number: 5 , content: 'Buscar a concessão de uma aprovação técnica, com base em um documento de avaliação técnica'}
    ]

    return(
        <>
            <section className="bg-[#F1F7FF] w-full flex flex-col items-center mt-14 pb-12">
                <h1 style={{marginTop: '-14px'}} className="text-[#4338ca] text-2xl font-semibold w-min">SERVIÇOS</h1>
                <div className="w-full mt-28 mb-20 px-16 max-[331px]:px-1 flex flex-wrap max-[1060px]:justify-center items-center gap-x-8 gap-y-24">
                    { 
                        infoCards.map((item) => <CardComponent content={item.content} step={item.number} key={item.number}/>)
                    }               
                </div>
            </section>
            <button onClick={() => Scroll()} style={{marginTop: '-20px'}} className="bg-[#FCD34D] py-1.5 px-10 rounded-md mb-16 transition-all hover:scale-110"><p className="text-[#4338CA] text-lg font-semibold">Fale com um especialista</p></button>
        </>
    );
}