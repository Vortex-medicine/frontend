export type ProductId = string;
export type ProductName = string;
export type ProductDescr = string;
export type ProductPrice = number;
export type ProductDiscountInfo = string;

export type ProductImgPath = string;
export type ProductImgWidth = number;
export type ProductImgHeight = number;

export interface ProductImg {
  path: ProductImgPath;
  width: ProductImgWidth;
  height: ProductImgHeight;
}

export interface ProductData {
  id: ProductId;
  name: ProductName;
  descr: ProductDescr;
  img: ProductImg;
  price: ProductPrice;
  discountInfo?: ProductDiscountInfo;
}
