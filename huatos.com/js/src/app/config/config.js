/**
 * 服务器接口地址
 */
// export const localURL = 'http://192.168.10.68:8051/api';
export var localURL = 'http://huato2008.eicp.net:8013/api';
/**
 * 分类
 */
export var cate = {
    getList: localURL + '/ProductAll/GetNodeAll'
};
/**
 * 获取产品详情
 */
export var introductionPdc = {
    getIntroductions: localURL + '/ProductAll/GetDisplay',
    getSimilar: localURL + '/ProductAll/GetSimilarAll'
};
export var pdcList = {
    getList: localURL + '/ProductAll/GetProductAll'
};
/**
 * 获取解决方案数据
 */
export var solution = {
    getSolutions: localURL + '/ProductAll/GetDetailstypeAll',
    getSolutionsIntroductions: localURL + '/ProductAll/GetDetailsAll'
};
/**
 * 获取资料下载数据
 */
export var download = {
    getDownloadList: localURL + '/ProductAll/GetDetaAll',
    getDownloadCateList: localURL + '/ProductAll/GetDetatypeAll'
};
/**
 * 人才招聘
 */
export var recruitment = {
    getRecuritmentIntrotions: localURL + '/ProductAll/GetPersonnelAll',
    getRecuritmentTypeList: localURL + '/ProductAll/GetPersonneltypeAll'
};
/**
 * 留言
 */
export var contactsAll = {
    addContactsAll: localURL + '/ProductAll/ContactsAdd'
};
