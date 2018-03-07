/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "./product-list-details.component.sass.shim.ngstyle";
import * as i1 from "@angular/core";
import * as i2 from "../../../../../node_modules/ng-zorro-antd/antd.ngfactory";
import * as i3 from "ng-zorro-antd";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
import * as i6 from "./product-list-details.component";
import * as i7 from "./list-data.service";
import * as i8 from "../../products-list.service";
var styles_ProductListDetailsComponent = [i0.styles];
var RenderType_ProductListDetailsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ProductListDetailsComponent, data: {} });
export { RenderType_ProductListDetailsComponent as RenderType_ProductListDetailsComponent };
function View_ProductListDetailsComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "nz-breadcrumb-item", [], null, null, null, i2.View_NzBreadCrumbItemComponent_0, i2.RenderType_NzBreadCrumbItemComponent)), i1.ɵdid(1, 49152, null, 0, i3.NzBreadCrumbItemComponent, [i3.NzBreadCrumbComponent], null, null), (_l()(), i1.ɵted(-1, 0, ["\n            "])), (_l()(), i1.ɵeld(3, 0, null, 0, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵted(-1, 0, ["\n          "]))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "/product-center/pdcList/type/", _v.context.$implicit.Type_id, ""); _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.Type_Name; _ck(_v, 4, 0, currVal_1); }); }
function View_ProductListDetailsComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵeld(1, 0, null, null, 16, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i5.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵeld(4, 0, null, null, 3, "div", [["class", "custom-image"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                    "])), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [["alt", "HUATO"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵeld(9, 0, null, null, 7, "div", [["class", "custom-card"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                    "])), (_l()(), i1.ɵeld(11, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(12, null, ["", ""])), (_l()(), i1.ɵted(-1, null, ["\n                    "])), (_l()(), i1.ɵeld(14, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(15, null, ["", ""])), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵted(-1, null, ["\n              "]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/product-center/pbcDetails/", _v.parent.context.$implicit.Product_ID, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.Product_Img, ""); _ck(_v, 6, 0, currVal_3); var currVal_4 = _v.parent.context.$implicit.Product_NAME; _ck(_v, 12, 0, currVal_4); var currVal_5 = _v.parent.context.$implicit.Product_DESC; _ck(_v, 15, 0, currVal_5); }); }
function View_ProductListDetailsComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, "nz-card", [["class", "_huato_product_items"]], [[2, "ant-card", null], [2, "ant-card-bordered", null], [2, "ant-card-no-hovering", null]], null, null, i2.View_NzCardComponent_0, i2.RenderType_NzCardComponent)), i1.ɵdid(1, 49152, null, 3, i3.NzCardComponent, [], null, null), i1.ɵqud(335544320, 1, { title: 0 }), i1.ɵqud(335544320, 2, { extra: 0 }), i1.ɵqud(335544320, 3, { body: 0 }), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵand(0, [[3, 2], ["body", 2]], null, 0, null, View_ProductListDetailsComponent_4)), (_l()(), i1.ɵted(-1, null, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = true; var currVal_1 = i1.ɵnov(_v, 1).nzBordered; var currVal_2 = i1.ɵnov(_v, 1).nzNoHovering; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_ProductListDetailsComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 16, "section", [["class", "_huato_proListItem"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n        "])), (_l()(), i1.ɵeld(2, 0, null, null, 7, "section", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n          "])), (_l()(), i1.ɵeld(4, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n            "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductListDetailsComponent_3)), i1.ɵdid(7, 802816, null, 0, i5.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵted(-1, null, ["\n          "])), (_l()(), i1.ɵted(-1, null, ["\n        "])), (_l()(), i1.ɵted(-1, null, ["\n        "])), (_l()(), i1.ɵeld(11, 0, null, null, 4, "section", [["class", "_huato_productpage"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n          "])), (_l()(), i1.ɵeld(13, 0, null, null, 1, "nz-pagination", [["nzPageSize", "12"], ["nzShowQuickJumper", ""]], null, [[null, "nzPageIndexChange"], [null, "nzTotalChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("nzPageIndexChange" === en)) {
        var pd_0 = ((_co.pageIndex = $event) !== false);
        ad = (pd_0 && ad);
    } if (("nzTotalChange" === en)) {
        var pd_1 = ((_co.pdcList.pagetotal = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i2.View_NzPaginationComponent_0, i2.RenderType_NzPaginationComponent)), i1.ɵdid(14, 49152, null, 0, i3.NzPaginationComponent, [i1.ElementRef], { nzShowQuickJumper: [0, "nzShowQuickJumper"], nzPageIndex: [1, "nzPageIndex"], nzPageSize: [2, "nzPageSize"], nzTotal: [3, "nzTotal"] }, { nzPageIndexChange: "nzPageIndexChange" }), (_l()(), i1.ɵted(-1, null, ["\n        "])), (_l()(), i1.ɵted(-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pdcListItem; _ck(_v, 7, 0, currVal_0); var currVal_1 = ""; var currVal_2 = _co.pageIndex; var currVal_3 = "12"; var currVal_4 = _co.pdcList.pagetotal; _ck(_v, 14, 0, currVal_1, currVal_2, currVal_3, currVal_4); }, null); }
function View_ProductListDetailsComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "section", [["class", "_huato_proListItem"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n        "])), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u6682\u65E0\u4EA7\u54C1"])), (_l()(), i1.ɵted(-1, null, ["\n      "]))], null, null); }
export function View_ProductListDetailsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 52, "section", [["class", "_huato_productlist"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(2, 0, null, null, 49, "section", [["class", "_huato_productcontent"], ["nz-row", ""]], null, null, null, i2.View_NzRowComponent_0, i2.RenderType_NzRowComponent)), i1.ɵdid(3, 114688, null, 0, i3.NzRowComponent, [i1.ElementRef, i1.Renderer2], null, null), (_l()(), i1.ɵted(-1, 0, ["\n    "])), (_l()(), i1.ɵeld(5, 0, null, 0, 35, "section", [["class", "_huato_product_nav"], ["nz-row", ""]], null, null, null, i2.View_NzRowComponent_0, i2.RenderType_NzRowComponent)), i1.ɵdid(6, 114688, null, 0, i3.NzRowComponent, [i1.ElementRef, i1.Renderer2], null, null), (_l()(), i1.ɵted(-1, 0, ["\n      "])), (_l()(), i1.ɵeld(8, 0, null, 0, 5, "header", [["class", "_huato_contack"], ["nz-col", ""]], [[4, "padding-left", "px"], [4, "padding-right", "px"]], null, null, null, null)), i1.ɵdid(9, 606208, null, 0, i3.NzColDirective, [i1.ElementRef, [2, i3.NzRowComponent], i1.Renderer2], null, null), (_l()(), i1.ɵted(-1, null, ["\n        "])), (_l()(), i1.ɵeld(11, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(12, null, ["", ""])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵted(-1, 0, ["\n      "])), (_l()(), i1.ɵeld(15, 0, null, 0, 24, "nav", [["nz-col", ""]], [[4, "padding-left", "px"], [4, "padding-right", "px"]], null, null, null, null)), i1.ɵdid(16, 606208, null, 0, i3.NzColDirective, [i1.ElementRef, [2, i3.NzRowComponent], i1.Renderer2], null, null), (_l()(), i1.ɵted(-1, null, ["\n        "])), (_l()(), i1.ɵeld(18, 0, null, null, 20, "nz-breadcrumb", [["class", "_huato_navs"]], [[2, "ant-breadcrumb", null]], null, null, i2.View_NzBreadCrumbComponent_0, i2.RenderType_NzBreadCrumbComponent)), i1.ɵdid(19, 49152, null, 0, i3.NzBreadCrumbComponent, [], { nzSeparator: [0, "nzSeparator"] }, null), (_l()(), i1.ɵted(-1, 0, ["\n          "])), (_l()(), i1.ɵeld(21, 0, null, 0, 6, "nz-breadcrumb-item", [], null, null, null, i2.View_NzBreadCrumbItemComponent_0, i2.RenderType_NzBreadCrumbItemComponent)), i1.ɵdid(22, 49152, null, 0, i3.NzBreadCrumbItemComponent, [i3.NzBreadCrumbComponent], null, null), (_l()(), i1.ɵted(-1, 0, ["\n            "])), (_l()(), i1.ɵeld(24, 0, null, 0, 2, "a", [["routerLink", "/home"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 25).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(25, 671744, null, 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i5.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["\u4E3B\u9875"])), (_l()(), i1.ɵted(-1, 0, ["\n          "])), (_l()(), i1.ɵted(-1, 0, ["\n          "])), (_l()(), i1.ɵeld(29, 0, null, 0, 5, "nz-breadcrumb-item", [], null, null, null, i2.View_NzBreadCrumbItemComponent_0, i2.RenderType_NzBreadCrumbItemComponent)), i1.ɵdid(30, 49152, null, 0, i3.NzBreadCrumbItemComponent, [i3.NzBreadCrumbComponent], null, null), (_l()(), i1.ɵted(-1, 0, ["\n            "])), (_l()(), i1.ɵeld(32, 0, null, 0, 1, "a", [["href", "/product-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u4EA7\u54C1\u4E2D\u5FC3"])), (_l()(), i1.ɵted(-1, 0, ["\n          "])), (_l()(), i1.ɵted(-1, 0, ["\n          "])), (_l()(), i1.ɵand(16777216, null, 0, 1, null, View_ProductListDetailsComponent_1)), i1.ɵdid(37, 802816, null, 0, i5.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵted(-1, 0, ["\n        "])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵted(-1, 0, ["\n    "])), (_l()(), i1.ɵted(-1, 0, ["\n    "])), (_l()(), i1.ɵeld(42, 0, null, 0, 8, "nz-spin", [], [[2, "ant-spin-nested-loading", null]], null, null, i2.View_NzSpinComponent_0, i2.RenderType_NzSpinComponent)), i1.ɵdid(43, 1097728, null, 0, i3.NzSpinComponent, [i1.ElementRef, i1.Renderer2], { nzSpinning: [0, "nzSpinning"] }, null), (_l()(), i1.ɵted(-1, 0, ["\n      "])), (_l()(), i1.ɵand(16777216, null, 0, 1, null, View_ProductListDetailsComponent_2)), i1.ɵdid(46, 16384, null, 0, i5.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵted(-1, 0, ["\n      "])), (_l()(), i1.ɵand(16777216, null, 0, 1, null, View_ProductListDetailsComponent_5)), i1.ɵdid(49, 16384, null, 0, i5.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵted(-1, 0, ["\n    "])), (_l()(), i1.ɵted(-1, 0, ["\n  "])), (_l()(), i1.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 3, 0); _ck(_v, 6, 0); _ck(_v, 9, 0); _ck(_v, 16, 0); var currVal_6 = ">"; _ck(_v, 19, 0, currVal_6); var currVal_9 = "/home"; _ck(_v, 25, 0, currVal_9); var currVal_10 = _co.bindBreadcrumb; _ck(_v, 37, 0, currVal_10); var currVal_12 = _co._isSpinning; _ck(_v, 43, 0, currVal_12); var currVal_13 = (_co.pdcListItem.length !== 0); _ck(_v, 46, 0, currVal_13); var currVal_14 = (_co.pdcListItem.length === 0); _ck(_v, 49, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 9).paddingLeft; var currVal_1 = i1.ɵnov(_v, 9).paddingRight; _ck(_v, 8, 0, currVal_0, currVal_1); var currVal_2 = _co._ListDataService.listdata.title; _ck(_v, 12, 0, currVal_2); var currVal_3 = i1.ɵnov(_v, 16).paddingLeft; var currVal_4 = i1.ɵnov(_v, 16).paddingRight; _ck(_v, 15, 0, currVal_3, currVal_4); var currVal_5 = true; _ck(_v, 18, 0, currVal_5); var currVal_7 = i1.ɵnov(_v, 25).target; var currVal_8 = i1.ɵnov(_v, 25).href; _ck(_v, 24, 0, currVal_7, currVal_8); var currVal_11 = i1.ɵnov(_v, 43).isNested; _ck(_v, 42, 0, currVal_11); }); }
export function View_ProductListDetailsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "huato-product-list-details", [], null, null, null, View_ProductListDetailsComponent_0, RenderType_ProductListDetailsComponent)), i1.ɵdid(1, 245760, null, 0, i6.ProductListDetailsComponent, [i4.ActivatedRoute, i7.ListDataService, i8.ProductsListService, i4.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProductListDetailsComponentNgFactory = i1.ɵccf("huato-product-list-details", i6.ProductListDetailsComponent, View_ProductListDetailsComponent_Host_0, {}, {}, []);
export { ProductListDetailsComponentNgFactory as ProductListDetailsComponentNgFactory };
