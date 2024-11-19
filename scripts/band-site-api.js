
let apiKey= "2886777c-3308-49eb-af29-c97d7b690a3e"

class BandSiteApi  {
    constructor(apiKey) {
        this.apiKey = apiKey; 
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }
    async postComment(comment) {
        const url = `$(this.baseUrl)comments?api_key=${this.apiKey}`; 
        try {
            const response = await axios 
            
        } catch (error) {
            
        }
    }
} 







