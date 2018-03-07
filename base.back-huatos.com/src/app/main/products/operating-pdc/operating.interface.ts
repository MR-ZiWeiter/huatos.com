export interface UploadFile {
    uid: number;
    name: string;
    status: string;
    url: string;
    thumbUrl: string;
}
/**
 * @param Product_NAME	产品名称
 * @param Product_Img	产品图片
 * @param Characteristic	产品特点
 * @param Type_ID	产品大类型
 * @param SmallType_ID	产品小类型
 * @param Product_DESC	产品描述
 * @param Product_Range	产品范围
 * @param Product_RangeImg	产品范围图片
 * @param ProductDetails	详细参数
 * @param Product_heat	销售热度
 * @param Product_Data	质料下载
 */
export interface UploadPdc {
    Product_NAME: string;
    Product_Img: string;
    Characteristic: string;
    Type_ID: string;
    SmallType_ID: string;
    Product_DESC: string;
    Product_Range: string;
    Product_RangeImg: string;
    ProductDetails: string;
    Product_heat: string;
    Product_Data: string;
    Product_ID: number;
}
export interface Getlistparams {
    pageindex: number;
    name: string;
    type: number;
    smalltype: number;
    largetype: number;
}
