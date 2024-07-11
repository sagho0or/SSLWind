'use client'
import IButton from "@/app/components/Common/Button";
import {SafeLLMInterface} from '@/app/components/SafeLLM/safellm.interface';
import { useCookies } from "react-cookie";
import DefaultLayer from "../../defaultLayer";

export default function WebComparison(props: SafeLLMInterface) {
    function handleKeyDownEvent(event: any) {
        if (event.key === "Enter" &&
            props.amountValue ) {
            props.handleSearch()
        }
    }

    const [cookie] = useCookies();
    const isLogin = !!cookie['auth-token'];

    return (
        <DefaultLayer showFooter={true}>
            <div
                className="bg-gradient-to-b from-primary-002 from-0% to-white to-75% ... h-130
                ">
                <div className={"h-full w-full bg-[url('/images/comparison-bg-pattern.svg')] bg-no-repeat"}>
                    <div className={"w-8/12 max-w-275 mx-auto pt-8"}>
                        <div className={"w-1/2"}>
                            <h1 className={'text-5xl font-bold my-5 text-primary'}>SafeLLM Wind</h1>
                            <h4 className={'text-xl font-medium '}>Lorem Ipsum</h4>
                            <p className={"text-secondary-10 mt-5"}>description alaki</p>
                        </div>

                    </div>
                </div>
            </div>
            {!isLogin && 
            
            <div className={"absolute w-full top-[505px] "}>
                <div className={'flex gap-x-5 items-center justify-between relative bottom-16 bg-white ' +
                    'h-44 w-3/4 max-w-275 mx-auto px-8 rounded-2xl rounded-t-none rounded-l-2xl shadow-2xl'}>

                    <IButton style={'primarySimple'}
                             customStyle={'font-semibold max-w-44 flex items-center justify-center'}
                             disabled={props.amountValue === 0 || typeof (props.amountValue) !== 'string'}
                             onClick={props.handleSearch}>
                        Submit { props.side === 'BID'? 'get':'post'}
                    </IButton>
                </div>
            </div>
            }
        </DefaultLayer>
    )
}