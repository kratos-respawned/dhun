import axios from "axios"

export const fetcherByID= async (id:string)=>{
    const {data}=await axios.get(`https://saavn.me/songs?id=${id}`)
    return data
}