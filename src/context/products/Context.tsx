import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductData } from "@/types/product";
import getAllProducts from "../../api/get-all-products";
import { Backdrop, CircularProgress } from "@mui/material";

interface ProductContextType {
  products: ProductData[];
}

const ProductsContext = createContext<ProductContextType | null>(null);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log("provider isLoading", isLoading);
  console.log("provider products", products);

  useEffect(() => {
    getAllProducts().then((products) => {
      setProducts(products);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("products context is null");
  }

  return context;
}
