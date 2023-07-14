import axios from "axios";

const fetchMusic = (id:string) => axios.post("/api/musicData",{
    id:id
}).then((res) => res.data);

export default fetchMusic;