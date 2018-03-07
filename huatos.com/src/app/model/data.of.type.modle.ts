/**
 * 首页热点产品list集合数据类型
 */
export class ProductDataType {
    Product_ID: number;
    Product_Img: string;
    Product_NAME: string;
    Product_DESC: string;
    Count: number;
}
/**
 * 解决方案详情数据类型
 */
export class SolutionsIntrotions {
    Datails_ID?: number;
    Datails_Name?: string;
    Datails_time?: string;
    Datails_content?: string;
    href?: string;
}
/***
 * 人才招聘详情数据类型
 */
export class RecruitmentIntrotions {
    title: string;
    content: string;
    date: Date;
    auth: string;
    href: string;
}
/***
 * 产品详情数据类型
 */
export class PdcIntroctions {
    Product_NAME: string;
    Product_Img: string[];
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
