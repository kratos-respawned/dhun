import 'server-only'
import axios from "axios";
const URL=process.env.SCRAPER_URL;
if(!URL) throw new Error("No scraper url provided")
const music=axios.create({
    baseURL:URL,
})
export {music};