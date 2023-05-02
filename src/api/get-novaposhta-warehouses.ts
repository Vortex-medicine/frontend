import { NOVAPOSHTA_API_URL } from "@/constants/api-urls";
import { NovaposhtaWarehouse } from "@/types/checkout";
import axios from "axios";

interface Response {
  data: ResponseWarehouse[];
  success: boolean;
  errors: string[];
}

interface ResponseWarehouse {
  Description: string;
  Ref: string;
}

async function getWarehousesByCityId(
  cityId: string
): Promise<NovaposhtaWarehouse[]> {
  const response = await axios.post<Response>(NOVAPOSHTA_API_URL, {
    apiKey: process.env.NEXT_PUBLIC_NOVAPOSHTA_API_KEY,
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityRef: cityId,
    },
  });

  if (!response.data.success) {
    console.log(response.data.errors);
  }

  console.log(response.data);

  return response.data.data.map((warehouse) => ({
    id: warehouse.Ref,
    name: warehouse.Description,
  }));
}

export default getWarehousesByCityId;
