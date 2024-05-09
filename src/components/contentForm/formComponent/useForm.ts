'use client'

import { toast } from 'react-toastify';
import { validateEmail } from '@/utils/validateEmail';
import { telefonemask } from '@/utils/telefone';
import { useState } from 'react';

export function UseForm(){
    const [name, setName] = useState<string>('');  
    const [enterprise, setEnterprise] = useState<string>('');  
    const [email, setEmail] = useState<string>('');
    const [tel, setTel] = useState<string>('');
    const [nameErr, setNameErr] = useState<boolean>(false);  
    const [enterpriseErr, setEnterpriseErr] = useState<boolean>(false); 
    const [emailErr, setEmailErr] = useState<boolean>(false); 
    const [telErr, setTelErr] = useState<boolean>(false); 
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function changeName(param: string){
        if(param !== ''){
            setNameErr(false);
        }

        setName(param)
    }

    function changeEmail(param: string){
        const validate = validateEmail(param)
        if(validate){
            setEmailErr(false);
        }

        setEmail(param)
    }

    function changeFone(param: string){
        const validate = telefonemask(param)?.length as number === 15
        if(validate){
            setTelErr(false);
        }

        setTel(param)
    }

    function changeEnterprise(param: string){
        if(param !== ''){
            setEnterpriseErr(false);
        }

        setEnterprise(param)
    }
 
    function handleSubmit(){
        setIsLoading(true);
        resetError();
        if(!name){
            setNameErr(true);
            setIsLoading(false);
        }
        if(!enterprise){
            setEnterpriseErr(true);
            setIsLoading(false);
        }
        if(!email || !validateEmail(email)){
             setEmailErr(true);
             setIsLoading(false);
        }
        if(!tel || telefonemask(tel)?.length as number < 15){
             setTelErr(true);
             setIsLoading(false);
        }

        if(
            tel 
            && telefonemask(tel)?.length as number === 15
            && email
            && validateEmail(email)
            && name
        ){    
            const register = {
                nome: name,
                email: email,
                telefone: tel,
            };
            console.log(register);
            setTimeout(()=>{
                toast.success('Cadastrado com sucesso!');
                setIsLoading(false);
                setName('');
                setEmail('');
                setTel('');
                setEnterprise('');
            }, 2000);  
        }else{
            toast.error('Ops! Verifique os campos e tente novamente! ');
        }        
    }

    function resetError(){
        setNameErr(false);
        setEmailErr(false);
        setTelErr(false);
        setEnterpriseErr(false);
    }

    return{
        nameErr,
        name,
        enterprise,
        changeEnterprise,
        enterpriseErr,
        changeName,
        emailErr,
        email,
        changeEmail,
        telErr,
        changeFone,
        tel,
        handleSubmit,
        isLoading
    };
}