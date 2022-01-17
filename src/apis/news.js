import axios from 'axios';

const KEY = '78438e94d71647028300dce5c9ee4ee1'
// const KEY = 'b410b9c2325b452ebc21ace5b668e42a'

export default axios.create({
	baseURL: 'https://newsapi.org/v2',
	params: {
		apiKey: KEY
	}
	
});