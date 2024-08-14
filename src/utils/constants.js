const YT_API_KEY = "AIzaSyCFMtq8CJ5jCYSOh6k804rs6Y3PNaYXLxI"
export const YT_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YT_API_KEY}`

export const Auto_Suggest_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="