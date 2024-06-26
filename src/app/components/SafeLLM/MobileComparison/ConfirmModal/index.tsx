import {ConfirmModalInterface} from "@/app/components/SafeLLM/MobileComparison/ConfirmModal/confirmModal.interface";
import IModal from "@/app/components/Common/Modal";
import {ConfirmModalButtons} from "@/app/components/SafeLLM/MobileComparison/ConfirmModal/confirmModalButtons";
import isMobileView from '@/app/utils/isMobileView';

export default function ConfirmModal(props: ConfirmModalInterface) {

    return (
        <IModal customStyle={`top-48 relative ${isMobileView ?'px-4 pt-8 min-h-full':'p-6 min-h-100 rounded-2xl'}`}
                backGroundStyle={"bg-secondary-17 bg-opacity-40"}
                setIsModalOpen={props.setIsConfirmModalOpen} hasCloseButton={true}>
            <div className={'flex flex-col items-center text-xl font-semibold'}>

s                {/*Title*/}
                <h3 className={'my-3.5'}>
                    {props.selectedExchange?.title}
                </h3>
            </div>


            <div
                className={'bg-secondary-02 flex justify-center items-center h-12 rounded-xl font-bold'}>
                <span className={'text-xs mx-0.5'}></span>
                

            </div>


            <h6 className={'font-semibold my-5'}>Details</h6>

            <div className={'divide-secondary-02 divide-y divide-solid'}>
               
            </div>

            <ConfirmModalButtons selectedExchange={props.selectedExchange}
                                 setIsConfirmModalOpen={props.setIsConfirmModalOpen}
                                 side={props.side}
                                 track_id={props.track_id} getExchanges={()=>props.updateExchange()}/>
        </IModal>
    )
}