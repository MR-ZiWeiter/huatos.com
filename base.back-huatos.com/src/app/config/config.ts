// const serverURL = 'http://192.168.10.68:8051/api';
const serverURL = '';
// const serverURL = 'http://huato2008.eicp.net:8013/api';
/**
 * @param 后台分类的增删查改
 */
export const cate = {
    addparent: serverURL + '/ProductAll/ParentnodeAdd',
    updataparent: serverURL + '/ProductAll/GetParentnodeUpdate',
    deleteparent: serverURL + '/ProductAll/GetParentnodeDelete',
    addchild: serverURL + '/ProductAll/SubnodeAdd',
    updatachild: serverURL + '/ProductAll/GetSubnodeUpdate',
    deletechild: serverURL + '/ProductAll/GetSubnodeDelete',
    getAll: serverURL + '/ProductAll/GetNodeAll'
};
/**
 * @param 其他
 */
export const other = {
    upload: serverURL + '/ProductAll/ProductUpload',
    imgAll: serverURL + '/ProductAll/GetDetaimgAll',
    iploads: serverURL + '/ProductAll/ProductUploads'
};
/**
 * @param 产品
 */
export const product = {
    addproducts: serverURL + '/ProductAll/update',
    similar: serverURL + '/ProductAll/GetSimilarAll',
    getintroductions: serverURL + '/ProductAll/GetDisplay',
    getpdcList: serverURL + '/ProductAll/GetProductAll',
    upproducts: serverURL + '/ProductAll/ProductUpdate',
    deletepdc: serverURL + '/ProductAll/GetDelete'
};
/***
 * 解决方案
 */
export const solutions = {
    getSolutionsList: serverURL + '/ProductAll/GetDetailstypeAll',
    getSolutionsIntrodctions: serverURL + '/ProductAll/GetDetailsAll',
    addSolutions: serverURL + '/ProductAll/DetailsAdd',
    deleteSolutions: serverURL + '/ProductAll/DetailsDelete',
    updataSolutions: serverURL + '/ProductAll/DetailsUpdate'
};
/**
 * 资料分类下载
 */
export const downLoad = {
    getDownList: serverURL + '/ProductAll/GetDetaAll',
    add_data: serverURL + '/ProductAll/DetaAdd',
    up_data: serverURL + '/ProductAll/DetaUpdate',
    delete_data: serverURL + '/ProductAll/DetaUpdate',
    get_dataTypeList: serverURL + '/ProductAll/GetDetatypeAll',
    add_dataType: serverURL + '/ProductAll/DetatypeAdd',
    up_dataType: serverURL + '/ProductAll/DetatypeUpdate',
    delete_dataType: serverURL + '/ProductAll/DetatypeDelete',
    getDownIntro: serverURL + '/ProductAll/GetDetaIdAll'
};
/**
 * 人才招聘
 */
export const recruitment = {
    add_recruitment: serverURL + '/ProductAll/PersonnelAdd',
    delete_recruitment: serverURL + '/ProductAll/PersonnelDelete',
    update_recruitment: serverURL + '/ProductAll/PersonnelDelete',
    recruitmentTypeList: serverURL + '/ProductAll/GetPersonneltypeAll',
    getrecruitment: serverURL + '/ProductAll/GetPersonnelAll'
};
/**
 * 留言管理
 */
export const conts = {
    get_contsList: serverURL + '/ProductAll/GetContactsAll',
    delete_conts: serverURL + '/ProductAll/GetContactsDelete'
};
