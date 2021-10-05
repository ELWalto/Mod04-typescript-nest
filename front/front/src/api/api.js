export const Api = {
  baseUrl: "http://localhost:3000",

  readAllUrl: () => Api.baseUrl + "/product",

  // GET
  buildApiGetRequest: (url) =>
    fetch(url,{
      method: "GET",
    }),
};
