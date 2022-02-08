import axios from "axios";

const KEY = "78438e94d71647028300dce5c9ee4ee1";

export default axios.create({
	baseURL: "https://newsapi.org/v2",
	params: {
		apiKey: KEY,
	},
});
