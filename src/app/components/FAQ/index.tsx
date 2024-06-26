'use client'
import Icons from "../../../../public/Icons";
// @ts-ignore
import Faq from "react-faq-component";
import * as FAQ_Data from './FAQ.json'
import isMobileView from "@/app/utils/isMobileView";

export default function FAQ() {

    const data = FAQ_Data;

    const styles = {
        bgColor: 'white',
        titleTextColor: '#787878',
        titleTextSize: '16px',
        rowTitleColor: '#787878',
        rowTitleTextSize: '16px',
        rowContentColor: '#787878',
        rowContentTextSize: '16px',
        rowContentPaddingTop: '20px',
        rowContentPaddingBottom: '20px',
        rowContentPaddingLeft: '40px',
        rowContentPaddingRight: '40px',
        arrowColor: "#787878",
        //transitionDuration: "1s",
        // timingFunc: "ease"
    };

    const config = {
        animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };


    return (
        <div className={'bg-secondary-02 space-y-3 py-12'}>
            <div className={'w-fit m-auto'}>
                <Icons name={'question'} />
            </div>
            <h2 className={'text-primary-10 text-center font-normal'}>FAQ</h2>
            <div className={isMobileView?'' :'w-10/12 m-auto'}>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        </div>
    )
}