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
  let response;

  try {
    response = await axios.post<Response>(
      NOVAPOSHTA_API_URL,
      {
        apiKey: process.env.NEXT_PUBLIC_NOVAPOSHTA_API_KEY,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          CityRef: cityId,
        },
      },
      {
        timeout: 3000,
      }
    );
  } catch (error) {
    console.log("error on getWarehousesByCityId", error);
    throw error;
  }

  // throw new Error("warehouses not available");

  if (!response.data.success) {
    console.log(response.data.errors);
  }

  return response.data.data.map((warehouse) => ({
    id: warehouse.Ref,
    name: warehouse.Description,
  }));
}

export default getWarehousesByCityId;
