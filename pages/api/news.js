// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  console.log("**", req.query);  
  console.log(process.env.NEWS_SECRET);
  const { countryCode } = req.query;
  
  if(countryCode !== ''){

      const response = await axios
      .get(
          `https://newsdata.io/api/1/news?apikey=${process.env.NEWS_SECRET}&country=${countryCode}&language=en&category=top `
          )
          .then((res) => {
              // return res;
              if (res.status === 200) {
                  return res.data;
                } else {
                    return `Error`;
                }
            });
            return res.status(200).json(response);
        }

        return res.status(500)
  

}
