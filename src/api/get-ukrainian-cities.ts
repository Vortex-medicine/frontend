import { NOVAPOSHTA_API_URL } from "@/constants/api-urls";
import { UkrainianCity } from "@/types/checkout";
import axios from "axios";

interface Response {
  data: ResponseUkrainianCity[];
}

interface ResponseUkrainianCity {
  Ref: string;
  Description: string;
}

async function getUkrainianCities(): Promise<UkrainianCity[]> {
  let response;

  try {
    response = await axios.post<Response>(
      NOVAPOSHTA_API_URL,
      {
        apiKey: process.env.NEXT_PUBLIC_NOVAPOSHTA_API_KEY,
        modelName: "Address",
        calledMethod: "getCities",
      },
      {
        timeout: 3000,
      }
    );
  } catch (error) {
    console.log("error on getUkrainianCities", error);
    throw error;
  }

  // throw new Error("cities not available");

  return response.data.data.map((city) => ({
    id: city.Ref,
    name: city.Description,
  }));
}

export default getUkrainianCities;
