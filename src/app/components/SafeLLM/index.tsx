'use client';
import isMobileView from '@/app/utils/isMobileView';
import MobileComparison from '@/app/components/SafeLLM/MobileComparison';
import WebComparison from '@/app/components/SafeLLM/WebComparison';
import {lazy, Suspense, useEffect, useState} from 'react';
import {getExchangesLoading} from '@/store/comparison/getExchanges/action';
import {ExchangeInterface} from '@/app/components/SafeLLM/ExchangeTable/exchangeTable.interface';
import {useDispatch, useSelector} from 'react-redux';
import ConfirmModal from "@/app/components/SafeLLM/MobileComparison/ConfirmModal";
import WebComparisonDescription from "@/app/components/SafeLLM/webDescription";
import Loading from '@/app/loading';

export default function SafeLLM() {

    const ExchangeTable = lazy(() => import('./ExchangeTable/exchangeTable'));
    const [side, setSide] = useState<string>('BID');
    const [amountValue, setAmountValue] = useState<number>();
    const [selectedExchange, setSelectedExchange] = useState<ExchangeInterface | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
    const [isExchangeVisible, setIsExchangeVisible] = useState<boolean>(false);
    const [market, setMarket] = useState<string>('');
    const [exchangesList, setExchangesList] = useState<ExchangeInterface[] | []>([]);

    const exchangesStates = useSelector((state: any) => state.exchanges);
    const orderStates = useSelector((state: any) => state.order);
    const dispatch = useDispatch();

    const initialState = {
        selectedCoin: null,
        amountValue: undefined,
        selectedExchange: '',
        isExchangeVisible: false,
    };

    const getExchanges = () => {
        dispatch(getExchangesLoading({
            market: market, side: side, amount: amountValue?.toString(),
        }));
    };
    const handleTabClick = (side: string) => {
        setSide(side);
        setAmountValue(initialState.amountValue);
        setIsExchangeVisible(initialState.isExchangeVisible);

    };
    const handleAmount = (value: number) => {
        if (value == amountValue)
            return;
        setAmountValue(value);
        setIsExchangeVisible(false);
    };

    const handleExchange = (exchange: ExchangeInterface | null) => {
        setSelectedExchange(exchange);
        setIsConfirmModalOpen(true);
    };

    const handleSearch = () => {
        setIsExchangeVisible(false);
        getExchanges();
    };

    useEffect(() => {
        if (exchangesStates.isDone) {
            if (selectedExchange) {
                const newExchange = exchangesStates.data.exchanges.filter((exchange: ExchangeInterface) => exchange.title == selectedExchange?.title)
                setSelectedExchange(newExchange[0])
            }
            setExchangesList(exchangesStates.data.exchanges);
            setIsExchangeVisible(true);
        }

    }, [exchangesStates.isDone]);

    return (
        <>
            {
                isMobileView ?
                    <MobileComparison side={side}
                                      handleTabClick={handleTabClick}
                                      isModalOpen={isModalOpen}
                                      setIsModalOpen={setIsModalOpen}
                                      selectedExchange={selectedExchange}
                                      handleSearch={handleSearch}
                                      exchangesList={exchangesList}/>
                    : <>
                        <WebComparison side={side}
                                       handleTabClick={handleTabClick}
                                       isModalOpen={isModalOpen}
                                       setIsModalOpen={setIsModalOpen}
                                       selectedExchange={selectedExchange}
                                       handleSearch={handleSearch}
                                       exchangesList={exchangesList}/>
                        {!isExchangeVisible &&
                            <WebComparisonDescription/>
                        }
                    </>

            }
            {
                isExchangeVisible && exchangesStates.isDone ?
                    <div className={isMobileView ? '' : 'm-auto w-3/4 mt-20'}>
                        <Suspense fallback={<Loading/>}>
                            <ExchangeTable onClick={handleExchange}
                                           exchangeList={exchangesList}
                                           side={side}/>
                        </Suspense>
                    </div> : ''

            }
            {isConfirmModalOpen &&
                <ConfirmModal setIsConfirmModalOpen={setIsConfirmModalOpen}
                              selectedExchange={selectedExchange}
                              side={side}
                              amountValue={amountValue}
                              track_id={exchangesStates?.data.track_id}
                              updateExchange={getExchanges}/>

            }

        </>
    );
}