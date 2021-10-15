const Api = {
  baseUrl: "http://localhost:3000/",

  readAllUrl: () => Api.baseUrl + "/games",

  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),
};

export default Api