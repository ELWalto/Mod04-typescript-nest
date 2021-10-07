
export const api =  {
    baseUrl: 'https://localhost:3000/',

    readAllUrl: () => Api.baseUrl + "/games",
    
    buildApiGetRequest: url =>
        fetch(url, {
            method: "GET",
        }),

}


