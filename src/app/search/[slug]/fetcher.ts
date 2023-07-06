import { music } from "@/lib/music";
import { SearchData } from "@/typings/searchdata";

export const search = async (slug: string) => {
    try {
        const { data }: { data: SearchData } = await music(
            `search/all?query=${slug}`
          );
          return data;    
    } catch (error) {
        console.log(error);
    }
    return null;
};