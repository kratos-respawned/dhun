import axios from "axios";

const music=axios.create({
    baseURL:"https://saavn.me/",
})
export {music};