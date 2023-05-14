import axios from "axios";
import { ProductData } from "@/types/product";
import { BACKEND_URL } from "@/constants/api-urls";

async function getAllProducts(): Promise<ProductData[]> {
  let response;

  try {
    response = await axios.get(`${BACKEND_URL}/products`);
  } catch (error) {
    console.log("error on getAllProducts", error);
    throw error;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return response.data.products.map((product) => ({
    id: product["_id"]["$oid"],
    ...product,
  }));
}

export default getAllProducts;
