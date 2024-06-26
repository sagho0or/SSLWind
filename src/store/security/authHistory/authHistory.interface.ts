export interface AuthHistoryInterface {
    agent: string,
    browser_family: string,
    browser_version: string,
    created_at: string,
    device_brand: string,
    device_family: string,
    device_model: string,
    ip: string,
    os_family: string,
    os_version: string,
}

export interface AuthHistoryParams {
    offset: number,
    limit: number
}