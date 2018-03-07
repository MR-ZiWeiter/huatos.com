/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./products-list.module";
import * as i2 from "../../../../node_modules/ng-zorro-antd/antd.ngfactory";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/cdk/bidi";
import * as i7 from "@angular/cdk/platform";
import * as i8 from "@angular/cdk/scrolling";
import * as i9 from "@angular/cdk/overlay";
import * as i10 from "@angular/cdk/observers";
import * as i11 from "../component/product-list-details/list-data.service";
import * as i12 from "@angular/cdk/portal";
import * as i13 from "../../public-component/layout-hotline/layout-hotline.module.routing";
import * as i14 from "@angular/router";
var ProductsListModuleNgFactory = i0.ɵcmf(i1.ProductsListModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.NzMessageContainerComponentNgFactory, i2.NzModalComponentNgFactory, i2.NzConfirmComponentNgFactory, i2.NzNotificationContainerComponentNgFactory, i2.NzPopoverComponentNgFactory, i2.NzToolTipComponentNgFactory, i2.ɵbbNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵa]]), i0.ɵmpd(5120, i4.ɵd, i4.ɵe, [[3, i4.ɵd], i4.NZ_LOGGER_STATE]), i0.ɵmpd(5120, i4.NzLocaleService, i4.ɵa, [[3, i4.NzLocaleService], i4.NZ_LOCALE, i4.ɵd]), i0.ɵmpd(4608, i5.ɵi, i5.ɵi, []), i0.ɵmpd(6144, i6.DIR_DOCUMENT, null, [i3.DOCUMENT]), i0.ɵmpd(4608, i6.Directionality, i6.Directionality, [[2, i6.DIR_DOCUMENT]]), i0.ɵmpd(4608, i7.Platform, i7.Platform, []), i0.ɵmpd(5120, i8.ScrollDispatcher, i8.SCROLL_DISPATCHER_PROVIDER_FACTORY, [[3, i8.ScrollDispatcher], i0.NgZone, i7.Platform]), i0.ɵmpd(5120, i8.ViewportRuler, i8.VIEWPORT_RULER_PROVIDER_FACTORY, [[3, i8.ViewportRuler], i7.Platform, i0.NgZone]), i0.ɵmpd(4608, i9.ScrollStrategyOptions, i9.ScrollStrategyOptions, [i8.ScrollDispatcher, i8.ViewportRuler, i0.NgZone]), i0.ɵmpd(5120, i9.OverlayContainer, i9.ɵa, [[3, i9.OverlayContainer], i3.DOCUMENT]), i0.ɵmpd(4608, i9.ɵh, i9.ɵh, [i8.ViewportRuler, i3.DOCUMENT]), i0.ɵmpd(5120, i9.OverlayKeyboardDispatcher, i9.ɵf, [[3, i9.OverlayKeyboardDispatcher], i3.DOCUMENT]), i0.ɵmpd(4608, i9.Overlay, i9.Overlay, [i9.ScrollStrategyOptions, i9.OverlayContainer, i0.ComponentFactoryResolver, i9.ɵh, i9.OverlayKeyboardDispatcher, i0.ApplicationRef, i0.Injector, i0.NgZone, i3.DOCUMENT]), i0.ɵmpd(5120, i9.ɵc, i9.ɵd, [i9.Overlay]), i0.ɵmpd(4608, i4.NzModalSubject, i4.NzModalSubject, []), i0.ɵmpd(4608, i4.NzModalService, i4.NzModalService, [i0.ApplicationRef, i0.ComponentFactoryResolver, i4.NzLocaleService]), i0.ɵmpd(4608, i4.ɵz, i4.ɵz, []), i0.ɵmpd(4608, i10.MutationObserverFactory, i10.MutationObserverFactory, []), i0.ɵmpd(5120, i0.APP_INITIALIZER, function (p0_0, p0_1) { return [i4.ɵq(p0_0, p0_1)]; }, [i3.DOCUMENT, [2, i4.NZ_ROOT_CONFIG]]), i0.ɵmpd(5120, i4.ɵbc, i4.ɵbd, [i3.DOCUMENT, [3, i4.ɵbc]]), i0.ɵmpd(4608, i11.ListDataService, i11.ListDataService, []), i0.ɵmpd(512, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(512, i4.ɵc, i4.ɵc, []), i0.ɵmpd(512, i4.NzLocaleModule, i4.NzLocaleModule, []), i0.ɵmpd(512, i4.NzButtonModule, i4.NzButtonModule, []), i0.ɵmpd(512, i4.NzAlertModule, i4.NzAlertModule, []), i0.ɵmpd(512, i4.NzBadgeModule, i4.NzBadgeModule, []), i0.ɵmpd(512, i5.ɵba, i5.ɵba, []), i0.ɵmpd(512, i5.FormsModule, i5.FormsModule, []), i0.ɵmpd(512, i6.BidiModule, i6.BidiModule, []), i0.ɵmpd(512, i12.PortalModule, i12.PortalModule, []), i0.ɵmpd(512, i7.PlatformModule, i7.PlatformModule, []), i0.ɵmpd(512, i8.ScrollDispatchModule, i8.ScrollDispatchModule, []), i0.ɵmpd(512, i9.OverlayModule, i9.OverlayModule, []), i0.ɵmpd(512, i4.NzSelectModule, i4.NzSelectModule, []), i0.ɵmpd(512, i4.NzRadioModule, i4.NzRadioModule, []), i0.ɵmpd(512, i4.NzCalendarModule, i4.NzCalendarModule, []), i0.ɵmpd(512, i4.NzInputModule, i4.NzInputModule, []), i0.ɵmpd(512, i4.NzCascaderModule, i4.NzCascaderModule, []), i0.ɵmpd(512, i4.NzCheckboxModule, i4.NzCheckboxModule, []), i0.ɵmpd(512, i4.NzUtilModule, i4.NzUtilModule, []), i0.ɵmpd(512, i4.NzTimePickerModule, i4.NzTimePickerModule, []), i0.ɵmpd(512, i4.NzDatePickerModule, i4.NzDatePickerModule, []), i0.ɵmpd(512, i4.NzFormModule, i4.NzFormModule, []), i0.ɵmpd(512, i4.NzInputNumberModule, i4.NzInputNumberModule, []), i0.ɵmpd(512, i4.NzGridModule, i4.NzGridModule, []), i0.ɵmpd(512, i4.NzMessageModule, i4.NzMessageModule, []), i0.ɵmpd(512, i4.NzModalModule, i4.NzModalModule, []), i0.ɵmpd(512, i4.NzNotificationModule, i4.NzNotificationModule, []), i0.ɵmpd(512, i4.NzPaginationModule, i4.NzPaginationModule, []), i0.ɵmpd(512, i4.NzPopconfirmModule, i4.NzPopconfirmModule, []), i0.ɵmpd(512, i4.NzPopoverModule, i4.NzPopoverModule, []), i0.ɵmpd(512, i4.NzRateModule, i4.NzRateModule, []), i0.ɵmpd(512, i4.NzSpinModule, i4.NzSpinModule, []), i0.ɵmpd(512, i4.NzToolTipModule, i4.NzToolTipModule, []), i0.ɵmpd(512, i4.NzSliderModule, i4.NzSliderModule, []), i0.ɵmpd(512, i4.NzSwitchModule, i4.NzSwitchModule, []), i0.ɵmpd(512, i4.NzProgressModule, i4.NzProgressModule, []), i0.ɵmpd(512, i4.NzTableModule, i4.NzTableModule, []), i0.ɵmpd(512, i10.ObserversModule, i10.ObserversModule, []), i0.ɵmpd(512, i4.NzTabsModule, i4.NzTabsModule, []), i0.ɵmpd(512, i4.NzTagModule, i4.NzTagModule, []), i0.ɵmpd(512, i4.NzStepsModule, i4.NzStepsModule, []), i0.ɵmpd(512, i4.NzMenuModule, i4.NzMenuModule, []), i0.ɵmpd(512, i4.NzDropDownModule, i4.NzDropDownModule, []), i0.ɵmpd(512, i4.NzBreadCrumbModule, i4.NzBreadCrumbModule, []), i0.ɵmpd(512, i4.NzLayoutModule, i4.NzLayoutModule, []), i0.ɵmpd(131584, i4.NzRootModule, i4.NzRootModule, [i3.DOCUMENT, i0.Injector, i0.ComponentFactoryResolver]), i0.ɵmpd(512, i4.NzCarouselModule, i4.NzCarouselModule, []), i0.ɵmpd(512, i4.NzCardModule, i4.NzCardModule, []), i0.ɵmpd(512, i4.NzCollapseModule, i4.NzCollapseModule, []), i0.ɵmpd(512, i4.NzTimelineModule, i4.NzTimelineModule, []), i0.ɵmpd(512, i4.NzBackTopModule, i4.NzBackTopModule, []), i0.ɵmpd(512, i4.NzAffixModule, i4.NzAffixModule, []), i0.ɵmpd(512, i4.NzAnchorModule, i4.NzAnchorModule, []), i0.ɵmpd(512, i4.NzAvatarModule, i4.NzAvatarModule, []), i0.ɵmpd(512, i4.NzTransferModule, i4.NzTransferModule, []), i0.ɵmpd(512, i4.NgZorroAntdModule, i4.NgZorroAntdModule, []), i0.ɵmpd(512, i13.LayoutHotlineModule, i13.LayoutHotlineModule, []), i0.ɵmpd(512, i14.RouterModule, i14.RouterModule, [[2, i14.ɵa], [2, i14.Router]]), i0.ɵmpd(512, i1.ProductsListModule, i1.ProductsListModule, []), i0.ɵmpd(256, i4.NZ_LOGGER_STATE, false, []), i0.ɵmpd(256, i4.NZ_LOCALE, i4.zhCN, []), i0.ɵmpd(256, i4.ɵl, { nzDuration: 1500, nzAnimate: true, nzPauseOnHover: true, nzMaxStack: 7 }, []), i0.ɵmpd(256, i4.ɵo, { nzTop: "24px", nzRight: "0px", nzDuration: 4500, nzMaxStack: 7, nzPauseOnHover: true, nzAnimate: true }, [])]); });
export { ProductsListModuleNgFactory as ProductsListModuleNgFactory };
