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
  const response = await axios.post<Response>(NOVAPOSHTA_API_URL, {
    apiKey: process.env.NEXT_PUBLIC_NOVAPOSHTA_API_KEY,
    modelName: "Address",
    calledMethod: "getCities",
  });

  return response.data.data.map((city) => ({
    id: city.Ref,
    name: city.Description,
  }));
}

export default getUkrainianCities;
