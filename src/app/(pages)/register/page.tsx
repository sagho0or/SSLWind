'use client'
import isMobileView from "@/app/utils/isMobileView";
import RegisterComponent from "@/app/components/Register";

export default function RegisterPage() {
    return (
        <>
            {
                isMobileView ?
                    <RegisterComponent/>
                    :
                    <div className={"w-full h-screen bg-primary-00 flex items-center justify-between"}>
                        <div className={"flex w-3/6 justify-center"}>
                            <div className={'bg-white max-w-xl rounded-3xl flex-1  flex'}> {/*h-[35rem]*/}
                                <RegisterComponent/>
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}