
let apiKey= "2886777c-3308-49eb-af29-c97d7b690a3e"


class BandSiteApi  {
    constructor(apiKey) {
        this.apiKey = apiKey; 
        this.baseUrl = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4"
    }


async getBandsiteApi() {
    const url = `${this.baseUrl}/showdates`
    const response = await axios.get(url);
    return response.data.value;
} 

} 





// // In the band-site-api.js file, you must create a class called BandSiteApi with the following methods.

// // constructor: The constructor accepts an API key as its only parameter (e.g. apiKey). This API key will be used 
// when making POST and GET requests 
// to the API (such as in the postComment and getComments methods).
// // The constructor must store the API key parameter in an instance property (e.g. this.apiKey).
// // The constructor must store the base API URL in an instance property (e.g. this.baseUrl). 
// This property can be set to a hardcoded string, as it is not passed as a parameter.
// // postComment: This method accepts a comment object as its only parameter. It must send a POST request
//  to the API with the comment object as the body, using the API key instance property (this.apiKey) to authenticate the request.
// // getComments: This method accepts no parameters. It must send a GET request to the API, using the API key instance 
// property (this.apiKey) to authenticate the request.
// // The getComments method must sort the array of comments from the API, returning them in order from newest to oldest.
// // getShows: This method accepts no parameters. It must send a GET request to the provided shows API, using 
// the API key instance property (e.g. this.apiKey) to authenticate the request.
// // The getShows method must return the array of show data objects returned from the API.
// // You must create an instance of the BandSiteApi class and use this to interact with the API.

// // A class method that makes an API request must be marked with the async keyword. When calling the async method,
//  remember to use await!