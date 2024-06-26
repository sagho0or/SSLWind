import IButton from '@/app/components/Common/Button';
import BottomMenu from '@/app/components/Header/mobileMenu';
import { useCookies } from 'react-cookie';
import { SafeLLMInterface } from '../safellm.interface';

export default function MobileComparison(props: SafeLLMInterface) {
  const [cookie] = useCookies();
  const isLogin = !!cookie['auth-token'];

  return (
    <>
    <div id={'comparisonContainer'} className={props.isModalOpen ? 'h-screen overflow-hidden' : ''}>
      {/*Title*/}
      <h1 className={'font-bold text-center text-secondary-17 my-10'}>Title</h1>
      {/*Body*/}
      <>
        {/*Tab Content*/}
        <div className={' py-6 px-4 '}>
          {/*Button*/}
          <IButton style={'primarySimple'}
                   customStyle={'font-semibold'}
                   disabled={props.amountValue === 0}
                   onClick={props.handleSearch} >
            { props.side === 'BID' ?'no':'yes'}
          </IButton>
        </div>
      </>
    </div>
  <BottomMenu />
  </>
  );
}