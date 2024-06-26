import {PaginationInterface} from "@/app/components/Common/Pagination/pagination.interface";
import {useEffect, useState} from "react";
import IButton from "../Button";

export default function Pagination({total, limit, offset, callBack}:PaginationInterface) {
    /*total : Total length of array*/
    /*limit and offset : limit and offset of api calls*/
    /*callBack : function to call api - argument is page number*/
    const [pagination, setPagination] = useState<any>();
    const FIRSTPARTNUM = 6;
    const buttonsStyle = "!w-14 cursor-pointer";
    let currentPage = offset/limit;

    useEffect(() => {
        setPageFunc();
        currentPage = offset/limit;
    }, [offset, total]);
    function paginationFunction(index:number) {
        callBack(index)
    }

    function setPageFunc() {
        if (total) {
            const tempPagination = [];
            /*Number of pages*/
            let numberOfPages = 0;
            if (total % limit === 0) {
                numberOfPages = Math.floor(total / limit);
            } else {
                numberOfPages = Math.floor(total / limit) + 1;
            }


            /*We have four cases for pagination format based on number of pages and current selected page*/
            /*current selected page is offset/limit + 1*/
            /*1- if number of pages is less than 6*/
            /*2- if selected page is less than 5*/
            /*3- if we are in 4 last pages*/
            /*4- other cases!*/
            if (numberOfPages <= FIRSTPARTNUM) {
                for (let i = 0; i < numberOfPages; i++) {
                    tempPagination.push(
                        <IButton style={`${currentPage === i ?"primarySimple":"primaryOutline"}`}
                                 key={`first-${i}`}
                                 customStyle={buttonsStyle}
                                 onClick={() => paginationFunction(i)}>
                            {i + 1}
                        </IButton>
                    )
                }
            } else if (offset / limit < FIRSTPARTNUM - 1) {
                for (let i = 0; i < FIRSTPARTNUM; i++) {
                    tempPagination.push(
                        <IButton style={`${currentPage === i ?"primarySimple":"primaryOutline"}`}
                                 key={`second-${i}`}
                                 customStyle={buttonsStyle}
                                 onClick={() => paginationFunction(i)}>
                            {i + 1}
                        </IButton>
                    )
                }
                tempPagination.push(<div key={"dots-123"}>...</div>);
                tempPagination.push(
                    <IButton style={`${currentPage === numberOfPages - 1 ?"primarySimple":"primaryOutline"}`}
                             key={`first-${"numberOfPages"}`}
                             customStyle={buttonsStyle}
                             onClick={() => paginationFunction(numberOfPages - 1)}>
                        {numberOfPages}
                    </IButton>
                )
            } else if (offset / limit === numberOfPages || offset / limit === numberOfPages - 1 || offset / limit === numberOfPages - 2 || offset / limit === numberOfPages - 3) {
                for (let i = 0; i < 3; i++) {
                    tempPagination.push(
                        <IButton style={`${currentPage === i ?"primarySimple":"primaryOutline"}`}
                                 key={`fifth-${i}`}
                                 customStyle={buttonsStyle}
                                 onClick={() => paginationFunction(i)}>
                            {i + 1}
                        </IButton>
                    )
                }
                tempPagination.push(<div key={`dots-12345`}>...</div>);
                for (let i = numberOfPages - 4; i < numberOfPages; i++) {
                    tempPagination.push(
                        <IButton style={`${currentPage === i ?"primarySimple":"primaryOutline"}`}
                                 key={`sixth-${i}`}
                                 customStyle={buttonsStyle}
                                 onClick={() => paginationFunction(i)}>
                            {i + 1}
                        </IButton>
                    )
                }
            } else {
                for (let i = 0; i < 3; i++) {
                    tempPagination.push(
                        <IButton style={`${currentPage === i ?"primarySimple":"primaryOutline"}`}
                                 key={`seventh-${i}`}
                                 customStyle={buttonsStyle}
                                 onClick={() => paginationFunction(i)}>
                            {i + 1}
                        </IButton>
                    )
                }
                tempPagination.push(<div>...</div>);
                for (let i = offset / limit - 1; i < offset / limit + 2; i++) {
                    tempPagination.push(
                        <IButton style={`${currentPage === i ?"primarySimple":"primaryOutline"}`}
                                 key={`eigth-${i}`}
                                 customStyle={buttonsStyle}
                                 onClick={() => paginationFunction(i)}>
                            {i + 1}
                        </IButton>
                    )
                }
                tempPagination.push(<div key={`dots-123456`} >...</div>);
                tempPagination.push(
                    <IButton style={`${currentPage === numberOfPages - 1 ?"primarySimple":"primaryOutline"}`}
                             key={`ninth-12345678`}
                             customStyle={buttonsStyle}
                             onClick={() => paginationFunction(numberOfPages - 1)}>
                        {numberOfPages}
                    </IButton>
                )
            }
            setPagination(tempPagination);
        }
    }



    return (
        <div className={""}>
            {
                total ?
                    pagination &&
                    <div className={"flex justify-center gap-4"}>
                        {pagination}
                    </div>:''
            }
        </div>
    )
}