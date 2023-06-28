import axios from "axios";

const music=axios.create({
    baseURL:"https://savan.vercel.app/",
})
export {music};