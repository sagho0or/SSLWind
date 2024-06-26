import isMobileView from "@/app/utils/isMobileView";
import Icons from "../../../../../public/Icons";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAuthHistoryLoading} from "@/store/security/authHistory/action";
import {
    AuthHistoryInterface
} from "@/store/security/authHistory/authHistory.interface";
import moment from 'moment';
import {useRouter} from "next/navigation";
import Pagination from "@/app/components/Common/Pagination";

export default function AuthHistory() {

    const [authHistoryList, setAuthHistoryList] = useState<AuthHistoryInterface[]>();
    const [offset, setOffset] = useState<number>(0);
    const limit = 5;

    const dispatch = useDispatch();
    const authHistoryState = useSelector((state: any) => state.authHistory);

    const router = useRouter();

    function getDeviceType(os_family: string) {
        let os = os_family.toLowerCase();
        if (os === 'android' || os === 'ios') {
            return 'phone'
        }
        return 'desktop'
    }

    function paginationCallBack(page: number) {
        setOffset(page*limit)
        dispatch(getAuthHistoryLoading({
            offset: page * limit,
            limit: limit
        }));
    }

    useEffect(() => {
        dispatch(getAuthHistoryLoading({
            offset: 0,
            limit: 5
        }));
    }, []);
    useEffect(() => {
        console.log('authHistoryState', authHistoryState.response.items)
        setAuthHistoryList(authHistoryState.response.items)
    }, [authHistoryState]);
    return (
        <div className={`bg-secondary-01 px-3 py-6 ${isMobileView ? 'flex justify-between' : 'rounded-xl space-y-6'}`}
             onClick={() => {
                 if (isMobileView) {
                     router.replace('/history')
                 }
             }}>
            <h4 className={`font-semibold ${isMobileView ? '' : 'text-xl'}`}>login history</h4>
            {isMobileView ?
                <Icons name={'direction-left-gray'}/>
                : <table className="w-full text-sm text-secondary-17 font-medium text-center">
                    <thead className={`h-12 border-b text-xs text-secondary font-normal`}>
                    <tr>
                        <th scope="col" className="w-1/3">
                            Device type
                        </th>
                        <th scope="col" className="w-1/3">
                            Date
                        </th>
                        <th scope="col" className="w-1/3">
                            IP
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {authHistoryList &&
                        authHistoryList.map((item) =>
                            <tr className="border-b h-18"
                                key={item.created_at}>
                                <td className="flex items-center h-inherit pr-4 w-max space-x-1" dir={'ltr'}>
                                    <span>{getDeviceType(item.os_family)}</span>
                                    <span>{item.os_family} X {item.os_version},</span>
                                    <span>{item.browser_family} {item.browser_version}</span>
                                    <Icons name={getDeviceType(item.os_family)}/>
                                </td>
                                <td className="">
                                    <p>{moment(item.created_at).format('HH:mm - YYYY/MM/DD')}</p>
                                </td>
                                <td className="">
                                    {item.ip}
                                </td>
                            </tr>
                        )
                    }
                    </tbody>

                </table>
            }
            <Pagination total={authHistoryState.response.total}
                        limit={limit}
                        offset={offset}
                        callBack={paginationCallBack}/>
        </div>
    )
}