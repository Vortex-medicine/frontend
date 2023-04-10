export interface ProductImg {
  path: string;
  width: number;
  height: number;
}

export interface ProductData {
  productName: string;
  productDescr: string;
  productImg: ProductImg;
  productPrice: number;
  discountInfo?: string;
}
