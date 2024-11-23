export default class BandSiteApi {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
	}

	async getComments() {
		const url = `${this.baseUrl}comments?api_key=${this.apiKey}`;

		try {
			const response = await axios.get(url);
			const sortedComments = response.data.sort(
				(a, b) => b.timestamp - a.timestamp
			);
			console.log(response);
			return sortedComments;
		} catch (error) {
			console.error("Failed to retrieve comments:", error);
		}
	}
	async getShows() {
		const url = `${this.baseUrl}showdates?api_key=${this.apiKey}`;

		try {
			const response = await axios.get(url);
			return response.data;
		} catch (error) {
			console.error("Failed to retrieve shows:", error);
		}
	}
	async postComment(comment) {
		const url = `${this.baseUrl}comments?api_key=${this.apiKey}`;

		if (!comment.name || !comment.comment) {
			throw new Error("Both 'name' and 'comment' are required.");
		}

		try {
			const response = await axios.post(url, comment, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			return response.data;
		} catch (error) {
			console.error("Failed to post comment:", error);
		}
	}
}
