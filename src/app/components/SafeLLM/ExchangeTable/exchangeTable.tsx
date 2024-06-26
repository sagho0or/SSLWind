import {ExchangeProps} from "@/app/components/SafeLLM/ExchangeTable/exchangeTable.interface";
import Icons from "../../../../../public/Icons";
import isMobileView from '@/app/utils/isMobileView';
import numberWithCommas from "@/app/utils/numberWithCommas";


export default function ExchangeTable(props: ExchangeProps) {

    return (
        <div className={isMobileView ?"p-3 border-t-3 border-secondary-02" :''}>
            {
                props.exchangeList?.length ?
                    <table className="w-full text-sm text-secondary-17 font-medium text-right">
                        <thead className={`h-12 text-xs text-secondary-10 ${isMobileView ?'' :'bg-secondary-02 rounded-xl'}`}>
                        <>
                            <th scope="col" className="rounded-r-xl pr-4">
                                #
                            </th>
                            <th scope="col" className="">
                                Name
                            </th>
                            <th scope="col" className="">
                                Access Level
                            </th>
                            <th scope="col" className="">
                                Id
                            </th>
                            <th scope="col" className="rounded-l-xl">
                                <span className="sr-only">Continue</span>
                            </th>
                        </>
                        </thead>
                        <tbody>
                        {
                            props.exchangeList.map((exchange, index) =>
                                <tr className="border-b h-18"
                                    key={exchange.id}>
                                    <td className={'pr-4'}>
                                        <p className={'text-secondary-10'}>{index + 1}</p>
                                    </td>
                                    <td className="flex items-center h-inherit">
                                        <span className={'ml-2'}>
                                        </span>
                                        <span className={''}>{exchange.title}</span>
                                    </td>
                                    <td className="">
                                    </td>
                                    <td className="">
                                    </td>
                                    <td className="">
                                        <a href="#"
                                           className="inline-flex"
                                           onClick={
                                               () => props.onClick(exchange)
                                           }
                                        >
                                            <p className={'text-primary'}> {props.side === 'BID' ? 'خرید' : 'فروش'} </p>
                                            <Icons name={'direction-left-blue'}/>
                                        </a>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                    : <p className={'my-8 text-center'}>No record !</p>
            }
        </div>
    )
}