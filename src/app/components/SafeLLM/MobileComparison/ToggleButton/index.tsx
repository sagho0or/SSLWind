import {ToggleButtonInterface} from "@/app/components/Comparison/MobileComparison/ToggleButton/toggleButton.interface";

export default function ToggleButton(props: ToggleButtonInterface) {
     return (
         <div className={"flex font-bold text-center border-b-3 border-secondary-02"}>
             <div
                 className={`w-1/2 p-2 cursor-pointer 
                 ${props.side === 'BID' ? 'border-b-2 border-success' : 'text-secondary-10'}`}
                 onClick={() => {
                   props.handleTabClick('BID');
                 }}
             >خرید
             </div>
             <div
                 className={`w-1/2 p-2 cursor-pointer 
                 ${props.side === 'BID' ? 'text-secondary-10' : 'border-b-2 border-error'}`}
                 onClick={() => {
                   props.handleTabClick('ASK');
                 }}
             >
                 فروش
             </div>
         </div>
     )
}