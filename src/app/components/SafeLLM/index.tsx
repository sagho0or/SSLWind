'use client';
import isMobileView from '@/app/utils/isMobileView';
import MobileComparison from '@/app/components/SafeLLM/MobileComparison';
import WebComparison from '@/app/components/SafeLLM/WebComparison';
import {lazy, Suspense, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function SafeLLM() {

    const [side, setSide] = useState<string>('BID');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const dispatch = useDispatch();

    const initialState = {
        selectedCoin: null,
        amountValue: undefined,
        selectedExchange: '',
        isExchangeVisible: false,
    };


    const handleTabClick = (side: string) => {
        setSide(side);

    };

    const handleSearch = () => {
    };

    return (
        <>
            {
                isMobileView ?
                    <MobileComparison side={side}
                                      handleTabClick={handleTabClick}
                                      isModalOpen={isModalOpen}
                                      setIsModalOpen={setIsModalOpen}
                                      handleSearch={handleSearch}/>
                    : <>
                        <WebComparison side={side}
                                       handleTabClick={handleTabClick}
                                       isModalOpen={isModalOpen}
                                       setIsModalOpen={setIsModalOpen}
                                       handleSearch={handleSearch}/>
                        
                    </>

            }

        </>
    );
}