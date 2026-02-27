import { useEffect } from "react"

export const useScrollLock = (isLocked: Boolean) =>{
    useEffect( ()=>{
        const isMobile = () => window.innerWidth < 768

        if(isLocked && isMobile()){
            document.body.classList.add('overflow-hidden','h-screen','touch-none')
        }else{
            document.body.classList.remove('overflow-hidden','h-screen','touch-none')
        }

        return () =>{
            document.body.classList.remove('overflow-hidden','h-screen','touch-none')
        }

    },[isLocked])
}