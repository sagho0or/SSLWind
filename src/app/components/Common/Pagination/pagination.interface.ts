export interface PaginationInterface{
    total:number,
    limit: number,
    offset: number,
    callBack: (pageNumber:number)=>void
}