'use client'

import { telefonemask } from "@/utils/telefone";
import { UseForm } from "./useForm";
import { Input } from "@/components/widgets/input";
import { Loading } from "@/components/widgets/loadingIcon";

export function FormComponent(){
    const {
        nameErr,
        name,
        enterprise,
        enterpriseErr,
        emailErr,
        email,
        telErr,
        tel,
        handleSubmit,
        isLoading,
        changeEmail,
        changeEnterprise,
        changeFone,
        changeName
    } = UseForm();

    return(
        <div className="bg-[#f9fafb] w-4/5 max-md:w-full h-full rounded-lg p-6 flex flex-col justify-between gap-3">
            <h2 className="text-[#4338CA] text-lg font-semibold">Informe seus dados<br/> para falar com um especialista:</h2>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3 w-full justify-between">
                    <p className={nameErr ? 'text-[#9c0000]' : "text-[#4338CA]"}>Nome:</p>
                    <Input value={name} onChange={(e)=> changeName(e.target.value)} error={nameErr} type="text" className={`bg-[#F4F8FD] text-black px-1.5 h-9 ${nameErr ? 'border-[#9c0000]' : 'border-[#d9d9d9]'} w-74p border border-solid rounded-lg`}/>
                </div>
                <div className="flex flex-row gap-3 w-full justify-between">
                    <p className={emailErr ? 'text-[#9c0000]' : "text-[#4338CA]"}>E-mail:</p>
                    <Input value={email} onChange={(e)=> changeEmail(e.target.value)} error={emailErr} type="email" className={`bg-[#F4F8FD] text-black px-1.5 h-9 ${emailErr ? 'border-[#9c0000]' : 'border-[#d9d9d9]'} w-74p border border-solid rounded-lg`}/>
                </div>
                <div className="flex flex-row gap-3 w-full justify-between">
                    <p className={enterpriseErr ? 'text-[#9c0000]' : "text-[#4338CA]"}>Empresa:</p>
                    <Input value={enterprise} onChange={(e)=> changeEnterprise(e.target.value)} error={enterpriseErr} type="text" className={`bg-[#F4F8FD] text-black px-1.5 h-9 ${enterpriseErr ? 'border-[#9c0000]' : 'border-[#d9d9d9]'} w-74p border border-solid rounded-lg`}/>
                </div>
                <div className="flex flex-row gap-3 w-full justify-between">
                    <p className={telErr ? 'text-[#9c0000]' : "text-[#4338CA]"}>Telefone:</p>
                    <Input value={telefonemask(tel)} onChange={(e)=> changeFone(e.target.value)} error={telErr} maxLength={15} type="tel" className={`bg-[#F4F8FD] text-black px-1.5 h-9 ${telErr ? 'border-[#9c0000]' : 'border-[#d9d9d9]'} w-74p border border-solid rounded-lg`}/>
                </div>
            </div>
    
        <button onClick={handleSubmit} className="flex bg-[#98BDF8] hover:bg-[#4338CA] ease-in duration-150 w-full justify-center align-center py-2 rounded-lg">
            { !isLoading ?
                <p className="font-semibold">FALE COM UM ESPECIALISTA</p>
                :
                <Loading />
            }
        </button>
    </div>
    );
}