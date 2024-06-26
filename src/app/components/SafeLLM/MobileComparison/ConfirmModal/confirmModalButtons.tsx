import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import IButton from '@/app/components/Common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { postOrderLoading } from '@/store/comparison/postOrder/action';
import { useCookies } from 'react-cookie';
import { OrderInterface } from '@/store/comparison/postOrder/order.interface';
import {
  ConfirmModalButtonsInterface
} from '@/app/components/SafeLLM/MobileComparison/ConfirmModal/confirmModalButtons.interface';
import { useRouter } from 'next/navigation';

export function ConfirmModalButtons(props: ConfirmModalButtonsInterface) {


  const dispatch = useDispatch();
  const orderStates = useSelector((state: any) => state.order);
  const router = useRouter();

  let timer = Date.now() + 5000;
  const [timerCompleted, setTimerCompleted] = useState<boolean>(false);

  const [cookie] = useCookies();
  const isLogin = !!cookie['auth-token'];
  const onUpdate = () => {
    setTimerCompleted(false);
    timer = Date.now() + 50000;
    props.getExchanges();
  };

  const onOrder = () => {
    const inputData: OrderInterface = {
      exchangeId: props.selectedExchange?.id || null,
      track_id: props.track_id,
      cookie: cookie['auth-token'],
    };
    dispatch(postOrderLoading({
      ...inputData,
    }));
  };


  return (
    <div className={'flex'}>
      <IButton style={'secondaryOutline'}
               onClick={() => props.setIsConfirmModalOpen(false)}
               customStyle={'flex-1 ml-2 font-semibold'}
      >Cancel</IButton>

      {isLogin && props.side === 'BID' && !timerCompleted &&
        <IButton style={'successSimple'}
                 onClick={onOrder}
                 disabled={false}
                 customStyle={'font-semibold flex-auto'}
        >
                    <span>Ok
                        ( <Countdown date={timer}
                                     className={'ml-2'}
                                     onComplete={() => setTimerCompleted(true)}
                                     renderer={counterProps =>
                                       <span>{
                                         counterProps.seconds
                                       }</span>} />
                        <span> Seconds )</span>
                    </span>
        </IButton>
      }
      {isLogin && !(props.side === 'BID') && !timerCompleted &&
        <IButton style={'errorSimple'}
                 onClick={onOrder}
                 disabled={false}
                 customStyle={'font-semibold flex-auto'}
        >
                    <span>Confirm
                            ( <Countdown date={timer}
                                     className={'ml-2'}
                                     onComplete={() => setTimerCompleted(true)}
                                     renderer={counterProps =>
                                       <span>{
                                         counterProps.seconds
                                       }</span>} />
                        <span> Seconds )</span>
                    </span>
        </IButton>
      }
      {!isLogin &&
        <IButton style={'primarySimple'}
                 onClick={() => router.push("/login")}
                 disabled={false}
                 customStyle={'font-semibold flex-auto'}
        >
          <p>Login | Register</p>
        </IButton>
      }
      {isLogin && timerCompleted &&
        <IButton style={'primarySimple'}
                 onClick={onUpdate}
                 disabled={false}
                 customStyle={'font-semibold flex-auto'}
        >
          <p>Update</p>
        </IButton>
      }
    </div>
  );

}