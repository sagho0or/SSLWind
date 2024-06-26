import Icons from "../../../../../public/Icons";
import {StaticWarningInterface} from "@/app/components/Common/StaticWarning/staticWarning.interface";

export default function StaticWarning(props: StaticWarningInterface) {
    return (
        <div className={'inline-flex h-auto bg-warning-01 text-warning rounded-xl p-4' +' '+  props.customStyle}>
            <Icons name={'warning'} width={props.iconWidth}/>
            <p className={'text-sm p-1'}>{props.text}</p>
        </div>
    )
}