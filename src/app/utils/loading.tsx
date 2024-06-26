import Image from 'next/image';
export default function ILoading(){
    return(
        <Image src={"/images/loading.gif"}
               className={"m-auto"}
               alt={"loading"} width={40} height={40}/>
    )
}