import { music } from "@/lib/music";
import { HomepageResponse } from "@/typings/homepage";

export const gethomepageData = async () => {
    try {
      const {
        data,
      }: {
        data: HomepageResponse;
      } = await music("/modules?language=hindi,english");
      return data;
    } catch (error) {
      console.log(error);
    }
  };