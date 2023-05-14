export type ProductId = string;
export type ProductName = string;
export type ProductPrice = number;
// export type ProductDiscountInfo = string;
export type ProductQuantity = number;

export type LocalizedProductDescr = string;
export type LocalizedProductDiscountInfo = string;

export interface ProductDiscountInfo {
  uk: LocalizedProductDiscountInfo;
  en: LocalizedProductDiscountInfo;
  ru: LocalizedProductDiscountInfo;
}

export interface ProductDescr {
  uk: LocalizedProductDescr;
  en: LocalizedProductDescr;
  ru: LocalizedProductDescr;
}

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

export interface OrderItem {
  productId: ProductId;
  name: ProductName;
  descr: ProductDescr;
  price: ProductPrice;
  quantity: number;
}
