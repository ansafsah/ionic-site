var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from 'ionic-angular/components/toolbar/toolbar';
import * as import11 from 'ionic-angular/components/navbar/navbar';
import * as import12 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import13 from 'ionic-angular/components/content/content';
import * as import14 from 'ionic-angular/components/tabs/tabs';
import * as import15 from 'ionic-angular/components/tabs/tab';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import20 from 'ionic-angular/components/app/app';
import * as import21 from 'ionic-angular/navigation/nav-controller';
import * as import22 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from '../../node_modules/ionic-angular/components/tabs/tabs.ngfactory';
import * as import27 from 'ionic-angular/platform/platform';
import * as import28 from 'ionic-angular/navigation/deep-linker';
import * as import29 from '../../node_modules/ionic-angular/components/tabs/tab.ngfactory';
import * as import30 from '@angular/core/src/linker/component_factory_resolver';
import * as import31 from 'ionic-angular/gestures/gesture-controller';
import * as import32 from 'ionic-angular/transitions/transition-controller';
import * as import33 from 'ionic-angular/components/nav/nav';
import * as import34 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import35 from 'ionic-angular/navigation/nav-controller-base';
var renderType_TabPage_Host = null;
var _View_TabPage_Host0 = (function (_super) {
    __extends(_View_TabPage_Host0, _super);
    function _View_TabPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TabPage_Host0, renderType_TabPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TabPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('tab-page', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TabPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TabPage_0_4 = new import3.TabPage();
        this._appEl_0.initComponent(this._TabPage_0_4, [], compView_0);
        compView_0.create(this._TabPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_TabPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.TabPage) && (0 === requestNodeIndex))) {
            return this._TabPage_0_4;
        }
        return notFoundResult;
    };
    return _View_TabPage_Host0;
}(import1.AppView));
function viewFactory_TabPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TabPage_Host === null)) {
        (renderType_TabPage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_TabPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var TabPageNgFactory = new import9.ComponentFactory('tab-page', viewFactory_TabPage_Host0, import3.TabPage);
var styles_TabPage = [];
var renderType_TabPage = null;
var _View_TabPage0 = (function (_super) {
    __extends(_View_TabPage0, _super);
    function _View_TabPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TabPage0, renderType_TabPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TabPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, 'johnny utah', null);
        this.init([], [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_TabPage0;
}(import1.AppView));
export function viewFactory_TabPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TabPage === null)) {
        (renderType_TabPage = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/tabs/app.component.ts class TabPage - inline template', 0, import8.ViewEncapsulation.None, styles_TabPage, {}));
    }
    return new _View_TabPage0(viewUtils, parentInjector, declarationEl);
}
var renderType_ApiDemoPage_Host = null;
var _View_ApiDemoPage_Host0 = (function (_super) {
    __extends(_View_ApiDemoPage_Host0, _super);
    function _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage_Host0, renderType_ApiDemoPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('api-demo-page', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoPage_0_4 = new import3.ApiDemoPage();
        this._appEl_0.initComponent(this._ApiDemoPage_0_4, [], compView_0);
        compView_0.create(this._ApiDemoPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoPage) && (0 === requestNodeIndex))) {
            return this._ApiDemoPage_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoPage_Host0;
}(import1.AppView));
function viewFactory_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage_Host === null)) {
        (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoPageNgFactory = new import9.ComponentFactory('api-demo-page', viewFactory_ApiDemoPage_Host0, import3.ApiDemoPage);
var styles_ApiDemoPage = [
    '\n      ion-tabs {\n        margin-bottom: 20px;\n      }\n    ',
    '\n      ion-tabs,\n      ion-tabs .tabbar {\n        position: relative;\n        top: auto;\n        height: auto;\n        visibility: visible;\n        opacity: 1;\n      }\n    '
];
var renderType_ApiDemoPage = null;
var _View_ApiDemoPage0 = (function (_super) {
    __extends(_View_ApiDemoPage0, _super);
    function _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage0, renderType_ApiDemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import10.Header(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import18.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import19.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Navbar(this.parentInjector.get(import20.App), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import21.NavController, null), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import22.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.ToolbarTitle(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import10.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Tabs', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import23.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import13.Content(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import20.App), this.parentInjector.get(import24.Keyboard), this.parentInjector.get(import25.NgZone), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import14.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n  ', null);
        this._text_11 = this.renderer.createText(null, '\n  ', null);
        this._el_12 = this.renderer.createElement(null, 'ion-tabs', null);
        this._appEl_12 = new import2.AppElement(12, 9, this, this._el_12);
        var compView_12 = import26.viewFactory_Tabs0(this.viewUtils, this.injector(12), this._appEl_12);
        this._Tabs_12_4 = new import14.Tabs(this.parentInjector.get(import21.NavController, null), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_12), this.parentInjector.get(import27.Platform), this.renderer, this.parentInjector.get(import28.DeepLinker));
        this._appEl_12.initComponent(this._Tabs_12_4, [], compView_12);
        this._text_13 = this.renderer.createText(null, '\n    ', null);
        this._el_14 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_14, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_14, 'tabTitle', 'Recents');
        this._appEl_14 = new import2.AppElement(14, 12, this, this._el_14);
        var compView_14 = import29.viewFactory_Tab0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Tab_14_4 = new import15.Tab(this._Tabs_12_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_14), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_14.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_14.initComponent(this._Tab_14_4, [], compView_14);
        compView_14.create(this._Tab_14_4, [], null);
        this._text_15 = this.renderer.createText(null, '\n    ', null);
        this._el_16 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_16, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_16, 'tabBadge', '23');
        this.renderer.setElementAttribute(this._el_16, 'tabTitle', 'Favorites');
        this._appEl_16 = new import2.AppElement(16, 12, this, this._el_16);
        var compView_16 = import29.viewFactory_Tab0(this.viewUtils, this.injector(16), this._appEl_16);
        this._Tab_16_4 = new import15.Tab(this._Tabs_12_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_16), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_16.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_16.initComponent(this._Tab_16_4, [], compView_16);
        compView_16.create(this._Tab_16_4, [], null);
        this._text_17 = this.renderer.createText(null, '\n    ', null);
        this._el_18 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_18, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_18, 'tabTitle', 'Settings');
        this._appEl_18 = new import2.AppElement(18, 12, this, this._el_18);
        var compView_18 = import29.viewFactory_Tab0(this.viewUtils, this.injector(18), this._appEl_18);
        this._Tab_18_4 = new import15.Tab(this._Tabs_12_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_18), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_18.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_18.initComponent(this._Tab_18_4, [], compView_18);
        compView_18.create(this._Tab_18_4, [], null);
        this._text_19 = this.renderer.createText(null, '\n  ', null);
        compView_12.create(this._Tabs_12_4, [[].concat([
                this._text_13,
                this._el_14,
                this._text_15,
                this._el_16,
                this._text_17,
                this._el_18,
                this._text_19
            ])], null);
        this._text_20 = this.renderer.createText(null, '\n\n\n  ', null);
        this._text_21 = this.renderer.createText(null, '\n  ', null);
        this._el_22 = this.renderer.createElement(null, 'ion-tabs', null);
        this.renderer.setElementAttribute(this._el_22, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_22, 'selectedIndex', '1');
        this._appEl_22 = new import2.AppElement(22, 9, this, this._el_22);
        var compView_22 = import26.viewFactory_Tabs0(this.viewUtils, this.injector(22), this._appEl_22);
        this._Tabs_22_4 = new import14.Tabs(this.parentInjector.get(import21.NavController, null), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_22), this.parentInjector.get(import27.Platform), this.renderer, this.parentInjector.get(import28.DeepLinker));
        this._appEl_22.initComponent(this._Tabs_22_4, [], compView_22);
        this._text_23 = this.renderer.createText(null, '\n    ', null);
        this._el_24 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_24, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_24, 'tabIcon', 'call');
        this._appEl_24 = new import2.AppElement(24, 22, this, this._el_24);
        var compView_24 = import29.viewFactory_Tab0(this.viewUtils, this.injector(24), this._appEl_24);
        this._Tab_24_4 = new import15.Tab(this._Tabs_22_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_24), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_24.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_24.initComponent(this._Tab_24_4, [], compView_24);
        compView_24.create(this._Tab_24_4, [], null);
        this._text_25 = this.renderer.createText(null, '\n    ', null);
        this._el_26 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_26, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_26, 'tabIcon', 'heart');
        this._appEl_26 = new import2.AppElement(26, 22, this, this._el_26);
        var compView_26 = import29.viewFactory_Tab0(this.viewUtils, this.injector(26), this._appEl_26);
        this._Tab_26_4 = new import15.Tab(this._Tabs_22_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_26), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_26.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_26.initComponent(this._Tab_26_4, [], compView_26);
        compView_26.create(this._Tab_26_4, [], null);
        this._text_27 = this.renderer.createText(null, '\n    ', null);
        this._el_28 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_28, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_28, 'tabBadge', '2');
        this.renderer.setElementAttribute(this._el_28, 'tabBadgeStyle', 'danger');
        this.renderer.setElementAttribute(this._el_28, 'tabIcon', 'settings');
        this._appEl_28 = new import2.AppElement(28, 22, this, this._el_28);
        var compView_28 = import29.viewFactory_Tab0(this.viewUtils, this.injector(28), this._appEl_28);
        this._Tab_28_4 = new import15.Tab(this._Tabs_22_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_28), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_28.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_28.initComponent(this._Tab_28_4, [], compView_28);
        compView_28.create(this._Tab_28_4, [], null);
        this._text_29 = this.renderer.createText(null, '\n  ', null);
        compView_22.create(this._Tabs_22_4, [[].concat([
                this._text_23,
                this._el_24,
                this._text_25,
                this._el_26,
                this._text_27,
                this._el_28,
                this._text_29
            ])], null);
        this._text_30 = this.renderer.createText(null, '\n\n\n  ', null);
        this._text_31 = this.renderer.createText(null, '\n  ', null);
        this._el_32 = this.renderer.createElement(null, 'ion-tabs', null);
        this.renderer.setElementAttribute(this._el_32, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_32, 'selectedIndex', '2');
        this._appEl_32 = new import2.AppElement(32, 9, this, this._el_32);
        var compView_32 = import26.viewFactory_Tabs0(this.viewUtils, this.injector(32), this._appEl_32);
        this._Tabs_32_4 = new import14.Tabs(this.parentInjector.get(import21.NavController, null), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_32), this.parentInjector.get(import27.Platform), this.renderer, this.parentInjector.get(import28.DeepLinker));
        this._appEl_32.initComponent(this._Tabs_32_4, [], compView_32);
        this._text_33 = this.renderer.createText(null, '\n    ', null);
        this._el_34 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_34, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_34, 'tabIcon', 'navigate');
        this.renderer.setElementAttribute(this._el_34, 'tabTitle', 'Location');
        this._appEl_34 = new import2.AppElement(34, 32, this, this._el_34);
        var compView_34 = import29.viewFactory_Tab0(this.viewUtils, this.injector(34), this._appEl_34);
        this._Tab_34_4 = new import15.Tab(this._Tabs_32_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_34), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_34.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_34.initComponent(this._Tab_34_4, [], compView_34);
        compView_34.create(this._Tab_34_4, [], null);
        this._text_35 = this.renderer.createText(null, '\n    ', null);
        this._el_36 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_36, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_36, 'tabBadge', '12');
        this.renderer.setElementAttribute(this._el_36, 'tabBadgeStyle', 'dark');
        this.renderer.setElementAttribute(this._el_36, 'tabIcon', 'star');
        this.renderer.setElementAttribute(this._el_36, 'tabTitle', 'Favorites');
        this._appEl_36 = new import2.AppElement(36, 32, this, this._el_36);
        var compView_36 = import29.viewFactory_Tab0(this.viewUtils, this.injector(36), this._appEl_36);
        this._Tab_36_4 = new import15.Tab(this._Tabs_32_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_36), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_36.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_36.initComponent(this._Tab_36_4, [], compView_36);
        compView_36.create(this._Tab_36_4, [], null);
        this._text_37 = this.renderer.createText(null, '\n    ', null);
        this._el_38 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_38, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_38, 'tabIcon', 'musical-notes');
        this.renderer.setElementAttribute(this._el_38, 'tabTitle', 'Radio');
        this._appEl_38 = new import2.AppElement(38, 32, this, this._el_38);
        var compView_38 = import29.viewFactory_Tab0(this.viewUtils, this.injector(38), this._appEl_38);
        this._Tab_38_4 = new import15.Tab(this._Tabs_32_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_38), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_38.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_38.initComponent(this._Tab_38_4, [], compView_38);
        compView_38.create(this._Tab_38_4, [], null);
        this._text_39 = this.renderer.createText(null, '\n  ', null);
        compView_32.create(this._Tabs_32_4, [[].concat([
                this._text_33,
                this._el_34,
                this._text_35,
                this._el_36,
                this._text_37,
                this._el_38,
                this._text_39
            ])], null);
        this._text_40 = this.renderer.createText(null, '\n\n\n  ', null);
        this._text_41 = this.renderer.createText(null, '\n  ', null);
        this._el_42 = this.renderer.createElement(null, 'ion-tabs', null);
        this.renderer.setElementAttribute(this._el_42, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_42, 'selectedIndex', '1');
        this.renderer.setElementAttribute(this._el_42, 'tabsLayout', 'icon-bottom');
        this._appEl_42 = new import2.AppElement(42, 9, this, this._el_42);
        var compView_42 = import26.viewFactory_Tabs0(this.viewUtils, this.injector(42), this._appEl_42);
        this._Tabs_42_4 = new import14.Tabs(this.parentInjector.get(import21.NavController, null), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_42), this.parentInjector.get(import27.Platform), this.renderer, this.parentInjector.get(import28.DeepLinker));
        this._appEl_42.initComponent(this._Tabs_42_4, [], compView_42);
        this._text_43 = this.renderer.createText(null, '\n    ', null);
        this._el_44 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_44, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_44, 'tabBadge', '47');
        this.renderer.setElementAttribute(this._el_44, 'tabBadgeStyle', 'light');
        this.renderer.setElementAttribute(this._el_44, 'tabIcon', 'call');
        this.renderer.setElementAttribute(this._el_44, 'tabTitle', 'Recents');
        this._appEl_44 = new import2.AppElement(44, 42, this, this._el_44);
        var compView_44 = import29.viewFactory_Tab0(this.viewUtils, this.injector(44), this._appEl_44);
        this._Tab_44_4 = new import15.Tab(this._Tabs_42_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_44), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_44.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_44.initComponent(this._Tab_44_4, [], compView_44);
        compView_44.create(this._Tab_44_4, [], null);
        this._text_45 = this.renderer.createText(null, '\n    ', null);
        this._el_46 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_46, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_46, 'tabIcon', 'heart');
        this.renderer.setElementAttribute(this._el_46, 'tabTitle', 'Favorites');
        this._appEl_46 = new import2.AppElement(46, 42, this, this._el_46);
        var compView_46 = import29.viewFactory_Tab0(this.viewUtils, this.injector(46), this._appEl_46);
        this._Tab_46_4 = new import15.Tab(this._Tabs_42_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_46), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_46.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_46.initComponent(this._Tab_46_4, [], compView_46);
        compView_46.create(this._Tab_46_4, [], null);
        this._text_47 = this.renderer.createText(null, '\n    ', null);
        this._el_48 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_48, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_48, 'tabIcon', 'settings');
        this.renderer.setElementAttribute(this._el_48, 'tabTitle', 'Settings');
        this._appEl_48 = new import2.AppElement(48, 42, this, this._el_48);
        var compView_48 = import29.viewFactory_Tab0(this.viewUtils, this.injector(48), this._appEl_48);
        this._Tab_48_4 = new import15.Tab(this._Tabs_42_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_48), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_48.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_48.initComponent(this._Tab_48_4, [], compView_48);
        compView_48.create(this._Tab_48_4, [], null);
        this._text_49 = this.renderer.createText(null, '\n  ', null);
        compView_42.create(this._Tabs_42_4, [[].concat([
                this._text_43,
                this._el_44,
                this._text_45,
                this._el_46,
                this._text_47,
                this._el_48,
                this._text_49
            ])], null);
        this._text_50 = this.renderer.createText(null, '\n\n\n  ', null);
        this._text_51 = this.renderer.createText(null, '\n  ', null);
        this._el_52 = this.renderer.createElement(null, 'ion-tabs', null);
        this.renderer.setElementAttribute(this._el_52, 'color', 'light');
        this.renderer.setElementAttribute(this._el_52, 'selectedIndex', '0');
        this.renderer.setElementAttribute(this._el_52, 'tabsLayout', 'icon-right');
        this._appEl_52 = new import2.AppElement(52, 9, this, this._el_52);
        var compView_52 = import26.viewFactory_Tabs0(this.viewUtils, this.injector(52), this._appEl_52);
        this._Tabs_52_4 = new import14.Tabs(this.parentInjector.get(import21.NavController, null), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_52), this.parentInjector.get(import27.Platform), this.renderer, this.parentInjector.get(import28.DeepLinker));
        this._appEl_52.initComponent(this._Tabs_52_4, [], compView_52);
        this._text_53 = this.renderer.createText(null, '\n    ', null);
        this._el_54 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_54, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_54, 'tabIcon', 'call');
        this.renderer.setElementAttribute(this._el_54, 'tabTitle', 'Recents');
        this._appEl_54 = new import2.AppElement(54, 52, this, this._el_54);
        var compView_54 = import29.viewFactory_Tab0(this.viewUtils, this.injector(54), this._appEl_54);
        this._Tab_54_4 = new import15.Tab(this._Tabs_52_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_54), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_54.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_54.initComponent(this._Tab_54_4, [], compView_54);
        compView_54.create(this._Tab_54_4, [], null);
        this._text_55 = this.renderer.createText(null, '\n    ', null);
        this._el_56 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_56, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_56, 'tabIcon', 'heart');
        this.renderer.setElementAttribute(this._el_56, 'tabTitle', 'Favorites');
        this._appEl_56 = new import2.AppElement(56, 52, this, this._el_56);
        var compView_56 = import29.viewFactory_Tab0(this.viewUtils, this.injector(56), this._appEl_56);
        this._Tab_56_4 = new import15.Tab(this._Tabs_52_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_56), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_56.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_56.initComponent(this._Tab_56_4, [], compView_56);
        compView_56.create(this._Tab_56_4, [], null);
        this._text_57 = this.renderer.createText(null, '\n    ', null);
        this._el_58 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_58, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_58, 'tabBadge', '4');
        this.renderer.setElementAttribute(this._el_58, 'tabBadgeStyle', 'secondary');
        this.renderer.setElementAttribute(this._el_58, 'tabIcon', 'settings');
        this.renderer.setElementAttribute(this._el_58, 'tabTitle', 'Settings');
        this._appEl_58 = new import2.AppElement(58, 52, this, this._el_58);
        var compView_58 = import29.viewFactory_Tab0(this.viewUtils, this.injector(58), this._appEl_58);
        this._Tab_58_4 = new import15.Tab(this._Tabs_52_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_58), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_58.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_58.initComponent(this._Tab_58_4, [], compView_58);
        compView_58.create(this._Tab_58_4, [], null);
        this._text_59 = this.renderer.createText(null, '\n  ', null);
        compView_52.create(this._Tabs_52_4, [[].concat([
                this._text_53,
                this._el_54,
                this._text_55,
                this._el_56,
                this._text_57,
                this._el_58,
                this._text_59
            ])], null);
        this._text_60 = this.renderer.createText(null, '\n\n\n  ', null);
        this._text_61 = this.renderer.createText(null, '\n  ', null);
        this._el_62 = this.renderer.createElement(null, 'ion-tabs', null);
        this.renderer.setElementAttribute(this._el_62, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_62, 'tabsLayout', 'icon-left');
        this._appEl_62 = new import2.AppElement(62, 9, this, this._el_62);
        var compView_62 = import26.viewFactory_Tabs0(this.viewUtils, this.injector(62), this._appEl_62);
        this._Tabs_62_4 = new import14.Tabs(this.parentInjector.get(import21.NavController, null), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_62), this.parentInjector.get(import27.Platform), this.renderer, this.parentInjector.get(import28.DeepLinker));
        this._appEl_62.initComponent(this._Tabs_62_4, [], compView_62);
        this._text_63 = this.renderer.createText(null, '\n    ', null);
        this._el_64 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_64, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_64, 'tabBadge', '1');
        this.renderer.setElementAttribute(this._el_64, 'tabBadgeStyle', 'danger');
        this.renderer.setElementAttribute(this._el_64, 'tabIcon', 'call');
        this.renderer.setElementAttribute(this._el_64, 'tabTitle', 'Recents');
        this._appEl_64 = new import2.AppElement(64, 62, this, this._el_64);
        var compView_64 = import29.viewFactory_Tab0(this.viewUtils, this.injector(64), this._appEl_64);
        this._Tab_64_4 = new import15.Tab(this._Tabs_62_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_64), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_64.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_64.initComponent(this._Tab_64_4, [], compView_64);
        compView_64.create(this._Tab_64_4, [], null);
        this._text_65 = this.renderer.createText(null, '\n    ', null);
        this._el_66 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_66, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_66, 'tabIcon', 'heart');
        this.renderer.setElementAttribute(this._el_66, 'tabTitle', 'Favorites');
        this._appEl_66 = new import2.AppElement(66, 62, this, this._el_66);
        var compView_66 = import29.viewFactory_Tab0(this.viewUtils, this.injector(66), this._appEl_66);
        this._Tab_66_4 = new import15.Tab(this._Tabs_62_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_66), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_66.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_66.initComponent(this._Tab_66_4, [], compView_66);
        compView_66.create(this._Tab_66_4, [], null);
        this._text_67 = this.renderer.createText(null, '\n    ', null);
        this._el_68 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_68, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_68, 'tabIcon', 'settings');
        this.renderer.setElementAttribute(this._el_68, 'tabTitle', 'Settings');
        this._appEl_68 = new import2.AppElement(68, 62, this, this._el_68);
        var compView_68 = import29.viewFactory_Tab0(this.viewUtils, this.injector(68), this._appEl_68);
        this._Tab_68_4 = new import15.Tab(this._Tabs_62_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_68), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_68.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_68.initComponent(this._Tab_68_4, [], compView_68);
        compView_68.create(this._Tab_68_4, [], null);
        this._text_69 = this.renderer.createText(null, '\n  ', null);
        compView_62.create(this._Tabs_62_4, [[].concat([
                this._text_63,
                this._el_64,
                this._text_65,
                this._el_66,
                this._text_67,
                this._el_68,
                this._text_69
            ])], null);
        this._text_70 = this.renderer.createText(null, '\n\n\n  ', null);
        this._text_71 = this.renderer.createText(null, '\n  ', null);
        this._el_72 = this.renderer.createElement(null, 'ion-tabs', null);
        this.renderer.setElementAttribute(this._el_72, 'tabsLayout', 'icon-hide');
        this._appEl_72 = new import2.AppElement(72, 9, this, this._el_72);
        var compView_72 = import26.viewFactory_Tabs0(this.viewUtils, this.injector(72), this._appEl_72);
        this._Tabs_72_4 = new import14.Tabs(this.parentInjector.get(import21.NavController, null), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_72), this.parentInjector.get(import27.Platform), this.renderer, this.parentInjector.get(import28.DeepLinker));
        this._appEl_72.initComponent(this._Tabs_72_4, [], compView_72);
        this._text_73 = this.renderer.createText(null, '\n    ', null);
        this._el_74 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_74, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_74, 'tabIcon', 'call');
        this.renderer.setElementAttribute(this._el_74, 'tabTitle', 'Recents');
        this._appEl_74 = new import2.AppElement(74, 72, this, this._el_74);
        var compView_74 = import29.viewFactory_Tab0(this.viewUtils, this.injector(74), this._appEl_74);
        this._Tab_74_4 = new import15.Tab(this._Tabs_72_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_74), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_74.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_74.initComponent(this._Tab_74_4, [], compView_74);
        compView_74.create(this._Tab_74_4, [], null);
        this._text_75 = this.renderer.createText(null, '\n    ', null);
        this._el_76 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_76, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_76, 'tabBadge', '61');
        this.renderer.setElementAttribute(this._el_76, 'tabBadgeStyle', 'dark');
        this.renderer.setElementAttribute(this._el_76, 'tabIcon', 'heart');
        this.renderer.setElementAttribute(this._el_76, 'tabTitle', 'Favorites');
        this._appEl_76 = new import2.AppElement(76, 72, this, this._el_76);
        var compView_76 = import29.viewFactory_Tab0(this.viewUtils, this.injector(76), this._appEl_76);
        this._Tab_76_4 = new import15.Tab(this._Tabs_72_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_76), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_76.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_76.initComponent(this._Tab_76_4, [], compView_76);
        compView_76.create(this._Tab_76_4, [], null);
        this._text_77 = this.renderer.createText(null, '\n    ', null);
        this._el_78 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_78, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_78, 'tabIcon', 'settings');
        this.renderer.setElementAttribute(this._el_78, 'tabTitle', 'Settings');
        this._appEl_78 = new import2.AppElement(78, 72, this, this._el_78);
        var compView_78 = import29.viewFactory_Tab0(this.viewUtils, this.injector(78), this._appEl_78);
        this._Tab_78_4 = new import15.Tab(this._Tabs_72_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_78), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_78.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_78.initComponent(this._Tab_78_4, [], compView_78);
        compView_78.create(this._Tab_78_4, [], null);
        this._text_79 = this.renderer.createText(null, '\n  ', null);
        compView_72.create(this._Tabs_72_4, [[].concat([
                this._text_73,
                this._el_74,
                this._text_75,
                this._el_76,
                this._text_77,
                this._el_78,
                this._text_79
            ])], null);
        this._text_80 = this.renderer.createText(null, '\n\n\n  ', null);
        this._text_81 = this.renderer.createText(null, '\n  ', null);
        this._el_82 = this.renderer.createElement(null, 'ion-tabs', null);
        this.renderer.setElementAttribute(this._el_82, 'color', 'primary');
        this._appEl_82 = new import2.AppElement(82, 9, this, this._el_82);
        var compView_82 = import26.viewFactory_Tabs0(this.viewUtils, this.injector(82), this._appEl_82);
        this._Tabs_82_4 = new import14.Tabs(this.parentInjector.get(import21.NavController, null), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_82), this.parentInjector.get(import27.Platform), this.renderer, this.parentInjector.get(import28.DeepLinker));
        this._appEl_82.initComponent(this._Tabs_82_4, [], compView_82);
        this._text_83 = this.renderer.createText(null, '\n    ', null);
        this._el_84 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_84, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_84, 'tabTitle', 'Indiana Jones and the Raiders of the Lost Ark');
        this._appEl_84 = new import2.AppElement(84, 82, this, this._el_84);
        var compView_84 = import29.viewFactory_Tab0(this.viewUtils, this.injector(84), this._appEl_84);
        this._Tab_84_4 = new import15.Tab(this._Tabs_82_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_84), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_84.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_84.initComponent(this._Tab_84_4, [], compView_84);
        compView_84.create(this._Tab_84_4, [], null);
        this._text_85 = this.renderer.createText(null, '\n    ', null);
        this._el_86 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_86, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_86, 'tabTitle', 'Indiana Jones and the Temple of Doom');
        this._appEl_86 = new import2.AppElement(86, 82, this, this._el_86);
        var compView_86 = import29.viewFactory_Tab0(this.viewUtils, this.injector(86), this._appEl_86);
        this._Tab_86_4 = new import15.Tab(this._Tabs_82_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_86), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_86.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_86.initComponent(this._Tab_86_4, [], compView_86);
        compView_86.create(this._Tab_86_4, [], null);
        this._text_87 = this.renderer.createText(null, '\n    ', null);
        this._el_88 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_88, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_88, 'tabTitle', 'Indiana Jones and the Last Crusade');
        this._appEl_88 = new import2.AppElement(88, 82, this, this._el_88);
        var compView_88 = import29.viewFactory_Tab0(this.viewUtils, this.injector(88), this._appEl_88);
        this._Tab_88_4 = new import15.Tab(this._Tabs_82_4, this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_88), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), compView_88.ref, this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_88.initComponent(this._Tab_88_4, [], compView_88);
        compView_88.create(this._Tab_88_4, [], null);
        this._text_89 = this.renderer.createText(null, '\n  ', null);
        compView_82.create(this._Tabs_82_4, [[].concat([
                this._text_83,
                this._el_84,
                this._text_85,
                this._el_86,
                this._text_87,
                this._el_88,
                this._text_89
            ])], null);
        this._text_90 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._text_11,
                this._el_12,
                this._text_20,
                this._text_21,
                this._el_22,
                this._text_30,
                this._text_31,
                this._el_32,
                this._text_40,
                this._text_41,
                this._el_42,
                this._text_50,
                this._text_51,
                this._el_52,
                this._text_60,
                this._text_61,
                this._el_62,
                this._text_70,
                this._text_71,
                this._el_72,
                this._text_80,
                this._text_81,
                this._el_82,
                this._text_90
            ]),
            []
        ], null);
        this._text_91 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        this._expr_30 = import7.UNINITIALIZED;
        this._expr_31 = import7.UNINITIALIZED;
        this._expr_32 = import7.UNINITIALIZED;
        this._expr_33 = import7.UNINITIALIZED;
        this._expr_34 = import7.UNINITIALIZED;
        this._expr_35 = import7.UNINITIALIZED;
        this._expr_36 = import7.UNINITIALIZED;
        this._expr_37 = import7.UNINITIALIZED;
        this._expr_38 = import7.UNINITIALIZED;
        this._expr_39 = import7.UNINITIALIZED;
        this._expr_40 = import7.UNINITIALIZED;
        this._expr_41 = import7.UNINITIALIZED;
        this._expr_42 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_44 = import7.UNINITIALIZED;
        this._expr_45 = import7.UNINITIALIZED;
        this._expr_46 = import7.UNINITIALIZED;
        this._expr_47 = import7.UNINITIALIZED;
        this._expr_48 = import7.UNINITIALIZED;
        this._expr_49 = import7.UNINITIALIZED;
        this._expr_50 = import7.UNINITIALIZED;
        this._expr_51 = import7.UNINITIALIZED;
        this._expr_52 = import7.UNINITIALIZED;
        this._expr_53 = import7.UNINITIALIZED;
        this._expr_54 = import7.UNINITIALIZED;
        this._expr_55 = import7.UNINITIALIZED;
        this._expr_56 = import7.UNINITIALIZED;
        this._expr_57 = import7.UNINITIALIZED;
        this._expr_58 = import7.UNINITIALIZED;
        this._expr_59 = import7.UNINITIALIZED;
        this._expr_60 = import7.UNINITIALIZED;
        this._expr_61 = import7.UNINITIALIZED;
        this._expr_62 = import7.UNINITIALIZED;
        this._expr_63 = import7.UNINITIALIZED;
        this._expr_64 = import7.UNINITIALIZED;
        this._expr_65 = import7.UNINITIALIZED;
        this._expr_66 = import7.UNINITIALIZED;
        this._expr_67 = import7.UNINITIALIZED;
        this._expr_68 = import7.UNINITIALIZED;
        this._expr_69 = import7.UNINITIALIZED;
        this._expr_70 = import7.UNINITIALIZED;
        this._expr_71 = import7.UNINITIALIZED;
        this._expr_72 = import7.UNINITIALIZED;
        this._expr_73 = import7.UNINITIALIZED;
        this._expr_74 = import7.UNINITIALIZED;
        this._expr_75 = import7.UNINITIALIZED;
        this._expr_76 = import7.UNINITIALIZED;
        this._expr_77 = import7.UNINITIALIZED;
        this._expr_78 = import7.UNINITIALIZED;
        this._expr_79 = import7.UNINITIALIZED;
        this._expr_80 = import7.UNINITIALIZED;
        this._expr_81 = import7.UNINITIALIZED;
        this._expr_82 = import7.UNINITIALIZED;
        this._expr_83 = import7.UNINITIALIZED;
        this._expr_84 = import7.UNINITIALIZED;
        this._expr_85 = import7.UNINITIALIZED;
        this._expr_86 = import7.UNINITIALIZED;
        this._expr_87 = import7.UNINITIALIZED;
        this._expr_88 = import7.UNINITIALIZED;
        this._expr_89 = import7.UNINITIALIZED;
        this._expr_90 = import7.UNINITIALIZED;
        this._expr_91 = import7.UNINITIALIZED;
        this._expr_92 = import7.UNINITIALIZED;
        this._expr_93 = import7.UNINITIALIZED;
        this._expr_94 = import7.UNINITIALIZED;
        this._expr_95 = import7.UNINITIALIZED;
        this._expr_96 = import7.UNINITIALIZED;
        this._expr_97 = import7.UNINITIALIZED;
        this._expr_98 = import7.UNINITIALIZED;
        this._expr_99 = import7.UNINITIALIZED;
        this._expr_100 = import7.UNINITIALIZED;
        this._expr_101 = import7.UNINITIALIZED;
        this._expr_102 = import7.UNINITIALIZED;
        this._expr_103 = import7.UNINITIALIZED;
        this._expr_104 = import7.UNINITIALIZED;
        this._expr_105 = import7.UNINITIALIZED;
        this._expr_106 = import7.UNINITIALIZED;
        this._expr_107 = import7.UNINITIALIZED;
        this._expr_108 = import7.UNINITIALIZED;
        this._expr_109 = import7.UNINITIALIZED;
        this._expr_110 = import7.UNINITIALIZED;
        this._expr_111 = import7.UNINITIALIZED;
        this._expr_112 = import7.UNINITIALIZED;
        this._expr_113 = import7.UNINITIALIZED;
        this._expr_114 = import7.UNINITIALIZED;
        this._expr_115 = import7.UNINITIALIZED;
        this._expr_116 = import7.UNINITIALIZED;
        this._expr_117 = import7.UNINITIALIZED;
        this._expr_118 = import7.UNINITIALIZED;
        this._expr_119 = import7.UNINITIALIZED;
        this._expr_120 = import7.UNINITIALIZED;
        this._expr_121 = import7.UNINITIALIZED;
        this._expr_122 = import7.UNINITIALIZED;
        this._expr_123 = import7.UNINITIALIZED;
        this._expr_124 = import7.UNINITIALIZED;
        this._expr_125 = import7.UNINITIALIZED;
        this._expr_126 = import7.UNINITIALIZED;
        this._expr_127 = import7.UNINITIALIZED;
        this._expr_128 = import7.UNINITIALIZED;
        this._expr_129 = import7.UNINITIALIZED;
        this._expr_130 = import7.UNINITIALIZED;
        this._expr_131 = import7.UNINITIALIZED;
        this._expr_132 = import7.UNINITIALIZED;
        this._expr_133 = import7.UNINITIALIZED;
        this._expr_134 = import7.UNINITIALIZED;
        this._expr_135 = import7.UNINITIALIZED;
        this._expr_136 = import7.UNINITIALIZED;
        this._expr_137 = import7.UNINITIALIZED;
        this._expr_138 = import7.UNINITIALIZED;
        this._expr_139 = import7.UNINITIALIZED;
        this._expr_140 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._text_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._text_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._el_64,
            this._text_65,
            this._el_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._text_70,
            this._text_71,
            this._el_72,
            this._text_73,
            this._el_74,
            this._text_75,
            this._el_76,
            this._text_77,
            this._el_78,
            this._text_79,
            this._text_80,
            this._text_81,
            this._el_82,
            this._text_83,
            this._el_84,
            this._text_85,
            this._el_86,
            this._text_87,
            this._el_88,
            this._text_89,
            this._text_90,
            this._text_91
        ], [], []);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import11.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import10.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import15.Tab) && (14 === requestNodeIndex))) {
            return this._Tab_14_4;
        }
        if (((token === import15.Tab) && (16 === requestNodeIndex))) {
            return this._Tab_16_4;
        }
        if (((token === import15.Tab) && (18 === requestNodeIndex))) {
            return this._Tab_18_4;
        }
        if (((token === import14.Tabs) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Tabs_12_4;
        }
        if (((token === import15.Tab) && (24 === requestNodeIndex))) {
            return this._Tab_24_4;
        }
        if (((token === import15.Tab) && (26 === requestNodeIndex))) {
            return this._Tab_26_4;
        }
        if (((token === import15.Tab) && (28 === requestNodeIndex))) {
            return this._Tab_28_4;
        }
        if (((token === import14.Tabs) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._Tabs_22_4;
        }
        if (((token === import15.Tab) && (34 === requestNodeIndex))) {
            return this._Tab_34_4;
        }
        if (((token === import15.Tab) && (36 === requestNodeIndex))) {
            return this._Tab_36_4;
        }
        if (((token === import15.Tab) && (38 === requestNodeIndex))) {
            return this._Tab_38_4;
        }
        if (((token === import14.Tabs) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._Tabs_32_4;
        }
        if (((token === import15.Tab) && (44 === requestNodeIndex))) {
            return this._Tab_44_4;
        }
        if (((token === import15.Tab) && (46 === requestNodeIndex))) {
            return this._Tab_46_4;
        }
        if (((token === import15.Tab) && (48 === requestNodeIndex))) {
            return this._Tab_48_4;
        }
        if (((token === import14.Tabs) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._Tabs_42_4;
        }
        if (((token === import15.Tab) && (54 === requestNodeIndex))) {
            return this._Tab_54_4;
        }
        if (((token === import15.Tab) && (56 === requestNodeIndex))) {
            return this._Tab_56_4;
        }
        if (((token === import15.Tab) && (58 === requestNodeIndex))) {
            return this._Tab_58_4;
        }
        if (((token === import14.Tabs) && ((52 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._Tabs_52_4;
        }
        if (((token === import15.Tab) && (64 === requestNodeIndex))) {
            return this._Tab_64_4;
        }
        if (((token === import15.Tab) && (66 === requestNodeIndex))) {
            return this._Tab_66_4;
        }
        if (((token === import15.Tab) && (68 === requestNodeIndex))) {
            return this._Tab_68_4;
        }
        if (((token === import14.Tabs) && ((62 <= requestNodeIndex) && (requestNodeIndex <= 69)))) {
            return this._Tabs_62_4;
        }
        if (((token === import15.Tab) && (74 === requestNodeIndex))) {
            return this._Tab_74_4;
        }
        if (((token === import15.Tab) && (76 === requestNodeIndex))) {
            return this._Tab_76_4;
        }
        if (((token === import15.Tab) && (78 === requestNodeIndex))) {
            return this._Tab_78_4;
        }
        if (((token === import14.Tabs) && ((72 <= requestNodeIndex) && (requestNodeIndex <= 79)))) {
            return this._Tabs_72_4;
        }
        if (((token === import15.Tab) && (84 === requestNodeIndex))) {
            return this._Tab_84_4;
        }
        if (((token === import15.Tab) && (86 === requestNodeIndex))) {
            return this._Tab_86_4;
        }
        if (((token === import15.Tab) && (88 === requestNodeIndex))) {
            return this._Tab_88_4;
        }
        if (((token === import14.Tabs) && ((82 <= requestNodeIndex) && (requestNodeIndex <= 89)))) {
            return this._Tabs_82_4;
        }
        if (((token === import13.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 90)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        var currVal_3 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._Tab_14_4.root = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_4 = 'Recents';
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._Tab_14_4.tabTitle = currVal_4;
            this._expr_4 = currVal_4;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_14_4.ngOnInit();
        }
        var currVal_7 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._Tab_16_4.root = currVal_7;
            this._expr_7 = currVal_7;
        }
        var currVal_8 = 'Favorites';
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this._Tab_16_4.tabTitle = currVal_8;
            this._expr_8 = currVal_8;
        }
        var currVal_9 = '23';
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this._Tab_16_4.tabBadge = currVal_9;
            this._expr_9 = currVal_9;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_16_4.ngOnInit();
        }
        var currVal_12 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._Tab_18_4.root = currVal_12;
            this._expr_12 = currVal_12;
        }
        var currVal_13 = 'Settings';
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this._Tab_18_4.tabTitle = currVal_13;
            this._expr_13 = currVal_13;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_18_4.ngOnInit();
        }
        var currVal_16 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this._Tabs_22_4.color = currVal_16;
            this._expr_16 = currVal_16;
        }
        var currVal_17 = '1';
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this._Tabs_22_4.selectedIndex = currVal_17;
            this._expr_17 = currVal_17;
        }
        var currVal_18 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this._Tab_24_4.root = currVal_18;
            this._expr_18 = currVal_18;
        }
        var currVal_19 = 'call';
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this._Tab_24_4.tabIcon = currVal_19;
            this._expr_19 = currVal_19;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_24_4.ngOnInit();
        }
        var currVal_22 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this._Tab_26_4.root = currVal_22;
            this._expr_22 = currVal_22;
        }
        var currVal_23 = 'heart';
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this._Tab_26_4.tabIcon = currVal_23;
            this._expr_23 = currVal_23;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_26_4.ngOnInit();
        }
        var currVal_26 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this._Tab_28_4.root = currVal_26;
            this._expr_26 = currVal_26;
        }
        var currVal_27 = 'settings';
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this._Tab_28_4.tabIcon = currVal_27;
            this._expr_27 = currVal_27;
        }
        var currVal_28 = '2';
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this._Tab_28_4.tabBadge = currVal_28;
            this._expr_28 = currVal_28;
        }
        var currVal_29 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this._Tab_28_4.tabBadgeStyle = currVal_29;
            this._expr_29 = currVal_29;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_28_4.ngOnInit();
        }
        var currVal_32 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this._Tabs_32_4.color = currVal_32;
            this._expr_32 = currVal_32;
        }
        var currVal_33 = '2';
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this._Tabs_32_4.selectedIndex = currVal_33;
            this._expr_33 = currVal_33;
        }
        var currVal_34 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this._Tab_34_4.root = currVal_34;
            this._expr_34 = currVal_34;
        }
        var currVal_35 = 'Location';
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this._Tab_34_4.tabTitle = currVal_35;
            this._expr_35 = currVal_35;
        }
        var currVal_36 = 'navigate';
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this._Tab_34_4.tabIcon = currVal_36;
            this._expr_36 = currVal_36;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_34_4.ngOnInit();
        }
        var currVal_39 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this._Tab_36_4.root = currVal_39;
            this._expr_39 = currVal_39;
        }
        var currVal_40 = 'Favorites';
        if (import4.checkBinding(throwOnChange, this._expr_40, currVal_40)) {
            this._Tab_36_4.tabTitle = currVal_40;
            this._expr_40 = currVal_40;
        }
        var currVal_41 = 'star';
        if (import4.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this._Tab_36_4.tabIcon = currVal_41;
            this._expr_41 = currVal_41;
        }
        var currVal_42 = '12';
        if (import4.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this._Tab_36_4.tabBadge = currVal_42;
            this._expr_42 = currVal_42;
        }
        var currVal_43 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this._Tab_36_4.tabBadgeStyle = currVal_43;
            this._expr_43 = currVal_43;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_36_4.ngOnInit();
        }
        var currVal_46 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this._Tab_38_4.root = currVal_46;
            this._expr_46 = currVal_46;
        }
        var currVal_47 = 'Radio';
        if (import4.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this._Tab_38_4.tabTitle = currVal_47;
            this._expr_47 = currVal_47;
        }
        var currVal_48 = 'musical-notes';
        if (import4.checkBinding(throwOnChange, this._expr_48, currVal_48)) {
            this._Tab_38_4.tabIcon = currVal_48;
            this._expr_48 = currVal_48;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_38_4.ngOnInit();
        }
        var currVal_51 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_51, currVal_51)) {
            this._Tabs_42_4.color = currVal_51;
            this._expr_51 = currVal_51;
        }
        var currVal_52 = '1';
        if (import4.checkBinding(throwOnChange, this._expr_52, currVal_52)) {
            this._Tabs_42_4.selectedIndex = currVal_52;
            this._expr_52 = currVal_52;
        }
        var currVal_53 = 'icon-bottom';
        if (import4.checkBinding(throwOnChange, this._expr_53, currVal_53)) {
            this._Tabs_42_4.tabsLayout = currVal_53;
            this._expr_53 = currVal_53;
        }
        var currVal_54 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_54, currVal_54)) {
            this._Tab_44_4.root = currVal_54;
            this._expr_54 = currVal_54;
        }
        var currVal_55 = 'Recents';
        if (import4.checkBinding(throwOnChange, this._expr_55, currVal_55)) {
            this._Tab_44_4.tabTitle = currVal_55;
            this._expr_55 = currVal_55;
        }
        var currVal_56 = 'call';
        if (import4.checkBinding(throwOnChange, this._expr_56, currVal_56)) {
            this._Tab_44_4.tabIcon = currVal_56;
            this._expr_56 = currVal_56;
        }
        var currVal_57 = '47';
        if (import4.checkBinding(throwOnChange, this._expr_57, currVal_57)) {
            this._Tab_44_4.tabBadge = currVal_57;
            this._expr_57 = currVal_57;
        }
        var currVal_58 = 'light';
        if (import4.checkBinding(throwOnChange, this._expr_58, currVal_58)) {
            this._Tab_44_4.tabBadgeStyle = currVal_58;
            this._expr_58 = currVal_58;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_44_4.ngOnInit();
        }
        var currVal_61 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_61, currVal_61)) {
            this._Tab_46_4.root = currVal_61;
            this._expr_61 = currVal_61;
        }
        var currVal_62 = 'Favorites';
        if (import4.checkBinding(throwOnChange, this._expr_62, currVal_62)) {
            this._Tab_46_4.tabTitle = currVal_62;
            this._expr_62 = currVal_62;
        }
        var currVal_63 = 'heart';
        if (import4.checkBinding(throwOnChange, this._expr_63, currVal_63)) {
            this._Tab_46_4.tabIcon = currVal_63;
            this._expr_63 = currVal_63;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_46_4.ngOnInit();
        }
        var currVal_66 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_66, currVal_66)) {
            this._Tab_48_4.root = currVal_66;
            this._expr_66 = currVal_66;
        }
        var currVal_67 = 'Settings';
        if (import4.checkBinding(throwOnChange, this._expr_67, currVal_67)) {
            this._Tab_48_4.tabTitle = currVal_67;
            this._expr_67 = currVal_67;
        }
        var currVal_68 = 'settings';
        if (import4.checkBinding(throwOnChange, this._expr_68, currVal_68)) {
            this._Tab_48_4.tabIcon = currVal_68;
            this._expr_68 = currVal_68;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_48_4.ngOnInit();
        }
        var currVal_71 = 'light';
        if (import4.checkBinding(throwOnChange, this._expr_71, currVal_71)) {
            this._Tabs_52_4.color = currVal_71;
            this._expr_71 = currVal_71;
        }
        var currVal_72 = '0';
        if (import4.checkBinding(throwOnChange, this._expr_72, currVal_72)) {
            this._Tabs_52_4.selectedIndex = currVal_72;
            this._expr_72 = currVal_72;
        }
        var currVal_73 = 'icon-right';
        if (import4.checkBinding(throwOnChange, this._expr_73, currVal_73)) {
            this._Tabs_52_4.tabsLayout = currVal_73;
            this._expr_73 = currVal_73;
        }
        var currVal_74 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_74, currVal_74)) {
            this._Tab_54_4.root = currVal_74;
            this._expr_74 = currVal_74;
        }
        var currVal_75 = 'Recents';
        if (import4.checkBinding(throwOnChange, this._expr_75, currVal_75)) {
            this._Tab_54_4.tabTitle = currVal_75;
            this._expr_75 = currVal_75;
        }
        var currVal_76 = 'call';
        if (import4.checkBinding(throwOnChange, this._expr_76, currVal_76)) {
            this._Tab_54_4.tabIcon = currVal_76;
            this._expr_76 = currVal_76;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_54_4.ngOnInit();
        }
        var currVal_79 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_79, currVal_79)) {
            this._Tab_56_4.root = currVal_79;
            this._expr_79 = currVal_79;
        }
        var currVal_80 = 'Favorites';
        if (import4.checkBinding(throwOnChange, this._expr_80, currVal_80)) {
            this._Tab_56_4.tabTitle = currVal_80;
            this._expr_80 = currVal_80;
        }
        var currVal_81 = 'heart';
        if (import4.checkBinding(throwOnChange, this._expr_81, currVal_81)) {
            this._Tab_56_4.tabIcon = currVal_81;
            this._expr_81 = currVal_81;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_56_4.ngOnInit();
        }
        var currVal_84 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_84, currVal_84)) {
            this._Tab_58_4.root = currVal_84;
            this._expr_84 = currVal_84;
        }
        var currVal_85 = 'Settings';
        if (import4.checkBinding(throwOnChange, this._expr_85, currVal_85)) {
            this._Tab_58_4.tabTitle = currVal_85;
            this._expr_85 = currVal_85;
        }
        var currVal_86 = 'settings';
        if (import4.checkBinding(throwOnChange, this._expr_86, currVal_86)) {
            this._Tab_58_4.tabIcon = currVal_86;
            this._expr_86 = currVal_86;
        }
        var currVal_87 = '4';
        if (import4.checkBinding(throwOnChange, this._expr_87, currVal_87)) {
            this._Tab_58_4.tabBadge = currVal_87;
            this._expr_87 = currVal_87;
        }
        var currVal_88 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_88, currVal_88)) {
            this._Tab_58_4.tabBadgeStyle = currVal_88;
            this._expr_88 = currVal_88;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_58_4.ngOnInit();
        }
        var currVal_91 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_91, currVal_91)) {
            this._Tabs_62_4.color = currVal_91;
            this._expr_91 = currVal_91;
        }
        var currVal_92 = 'icon-left';
        if (import4.checkBinding(throwOnChange, this._expr_92, currVal_92)) {
            this._Tabs_62_4.tabsLayout = currVal_92;
            this._expr_92 = currVal_92;
        }
        var currVal_93 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_93, currVal_93)) {
            this._Tab_64_4.root = currVal_93;
            this._expr_93 = currVal_93;
        }
        var currVal_94 = 'Recents';
        if (import4.checkBinding(throwOnChange, this._expr_94, currVal_94)) {
            this._Tab_64_4.tabTitle = currVal_94;
            this._expr_94 = currVal_94;
        }
        var currVal_95 = 'call';
        if (import4.checkBinding(throwOnChange, this._expr_95, currVal_95)) {
            this._Tab_64_4.tabIcon = currVal_95;
            this._expr_95 = currVal_95;
        }
        var currVal_96 = '1';
        if (import4.checkBinding(throwOnChange, this._expr_96, currVal_96)) {
            this._Tab_64_4.tabBadge = currVal_96;
            this._expr_96 = currVal_96;
        }
        var currVal_97 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_97, currVal_97)) {
            this._Tab_64_4.tabBadgeStyle = currVal_97;
            this._expr_97 = currVal_97;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_64_4.ngOnInit();
        }
        var currVal_100 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_100, currVal_100)) {
            this._Tab_66_4.root = currVal_100;
            this._expr_100 = currVal_100;
        }
        var currVal_101 = 'Favorites';
        if (import4.checkBinding(throwOnChange, this._expr_101, currVal_101)) {
            this._Tab_66_4.tabTitle = currVal_101;
            this._expr_101 = currVal_101;
        }
        var currVal_102 = 'heart';
        if (import4.checkBinding(throwOnChange, this._expr_102, currVal_102)) {
            this._Tab_66_4.tabIcon = currVal_102;
            this._expr_102 = currVal_102;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_66_4.ngOnInit();
        }
        var currVal_105 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_105, currVal_105)) {
            this._Tab_68_4.root = currVal_105;
            this._expr_105 = currVal_105;
        }
        var currVal_106 = 'Settings';
        if (import4.checkBinding(throwOnChange, this._expr_106, currVal_106)) {
            this._Tab_68_4.tabTitle = currVal_106;
            this._expr_106 = currVal_106;
        }
        var currVal_107 = 'settings';
        if (import4.checkBinding(throwOnChange, this._expr_107, currVal_107)) {
            this._Tab_68_4.tabIcon = currVal_107;
            this._expr_107 = currVal_107;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_68_4.ngOnInit();
        }
        var currVal_110 = 'icon-hide';
        if (import4.checkBinding(throwOnChange, this._expr_110, currVal_110)) {
            this._Tabs_72_4.tabsLayout = currVal_110;
            this._expr_110 = currVal_110;
        }
        var currVal_111 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_111, currVal_111)) {
            this._Tab_74_4.root = currVal_111;
            this._expr_111 = currVal_111;
        }
        var currVal_112 = 'Recents';
        if (import4.checkBinding(throwOnChange, this._expr_112, currVal_112)) {
            this._Tab_74_4.tabTitle = currVal_112;
            this._expr_112 = currVal_112;
        }
        var currVal_113 = 'call';
        if (import4.checkBinding(throwOnChange, this._expr_113, currVal_113)) {
            this._Tab_74_4.tabIcon = currVal_113;
            this._expr_113 = currVal_113;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_74_4.ngOnInit();
        }
        var currVal_116 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_116, currVal_116)) {
            this._Tab_76_4.root = currVal_116;
            this._expr_116 = currVal_116;
        }
        var currVal_117 = 'Favorites';
        if (import4.checkBinding(throwOnChange, this._expr_117, currVal_117)) {
            this._Tab_76_4.tabTitle = currVal_117;
            this._expr_117 = currVal_117;
        }
        var currVal_118 = 'heart';
        if (import4.checkBinding(throwOnChange, this._expr_118, currVal_118)) {
            this._Tab_76_4.tabIcon = currVal_118;
            this._expr_118 = currVal_118;
        }
        var currVal_119 = '61';
        if (import4.checkBinding(throwOnChange, this._expr_119, currVal_119)) {
            this._Tab_76_4.tabBadge = currVal_119;
            this._expr_119 = currVal_119;
        }
        var currVal_120 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_120, currVal_120)) {
            this._Tab_76_4.tabBadgeStyle = currVal_120;
            this._expr_120 = currVal_120;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_76_4.ngOnInit();
        }
        var currVal_123 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_123, currVal_123)) {
            this._Tab_78_4.root = currVal_123;
            this._expr_123 = currVal_123;
        }
        var currVal_124 = 'Settings';
        if (import4.checkBinding(throwOnChange, this._expr_124, currVal_124)) {
            this._Tab_78_4.tabTitle = currVal_124;
            this._expr_124 = currVal_124;
        }
        var currVal_125 = 'settings';
        if (import4.checkBinding(throwOnChange, this._expr_125, currVal_125)) {
            this._Tab_78_4.tabIcon = currVal_125;
            this._expr_125 = currVal_125;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_78_4.ngOnInit();
        }
        var currVal_128 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_128, currVal_128)) {
            this._Tabs_82_4.color = currVal_128;
            this._expr_128 = currVal_128;
        }
        var currVal_129 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_129, currVal_129)) {
            this._Tab_84_4.root = currVal_129;
            this._expr_129 = currVal_129;
        }
        var currVal_130 = 'Indiana Jones and the Raiders of the Lost Ark';
        if (import4.checkBinding(throwOnChange, this._expr_130, currVal_130)) {
            this._Tab_84_4.tabTitle = currVal_130;
            this._expr_130 = currVal_130;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_84_4.ngOnInit();
        }
        var currVal_133 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_133, currVal_133)) {
            this._Tab_86_4.root = currVal_133;
            this._expr_133 = currVal_133;
        }
        var currVal_134 = 'Indiana Jones and the Temple of Doom';
        if (import4.checkBinding(throwOnChange, this._expr_134, currVal_134)) {
            this._Tab_86_4.tabTitle = currVal_134;
            this._expr_134 = currVal_134;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_86_4.ngOnInit();
        }
        var currVal_137 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_137, currVal_137)) {
            this._Tab_88_4.root = currVal_137;
            this._expr_137 = currVal_137;
        }
        var currVal_138 = 'Indiana Jones and the Last Crusade';
        if (import4.checkBinding(throwOnChange, this._expr_138, currVal_138)) {
            this._Tab_88_4.tabTitle = currVal_138;
            this._expr_138 = currVal_138;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_88_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_5 = this._Tab_14_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementAttribute(this._el_14, 'id', ((currVal_5 == null) ? null : currVal_5.toString()));
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._Tab_14_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementAttribute(this._el_14, 'aria-labelledby', ((currVal_6 == null) ? null : currVal_6.toString()));
            this._expr_6 = currVal_6;
        }
        var currVal_10 = this._Tab_16_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementAttribute(this._el_16, 'id', ((currVal_10 == null) ? null : currVal_10.toString()));
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._Tab_16_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementAttribute(this._el_16, 'aria-labelledby', ((currVal_11 == null) ? null : currVal_11.toString()));
            this._expr_11 = currVal_11;
        }
        var currVal_14 = this._Tab_18_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementAttribute(this._el_18, 'id', ((currVal_14 == null) ? null : currVal_14.toString()));
            this._expr_14 = currVal_14;
        }
        var currVal_15 = this._Tab_18_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementAttribute(this._el_18, 'aria-labelledby', ((currVal_15 == null) ? null : currVal_15.toString()));
            this._expr_15 = currVal_15;
        }
        var currVal_20 = this._Tab_24_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setElementAttribute(this._el_24, 'id', ((currVal_20 == null) ? null : currVal_20.toString()));
            this._expr_20 = currVal_20;
        }
        var currVal_21 = this._Tab_24_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setElementAttribute(this._el_24, 'aria-labelledby', ((currVal_21 == null) ? null : currVal_21.toString()));
            this._expr_21 = currVal_21;
        }
        var currVal_24 = this._Tab_26_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setElementAttribute(this._el_26, 'id', ((currVal_24 == null) ? null : currVal_24.toString()));
            this._expr_24 = currVal_24;
        }
        var currVal_25 = this._Tab_26_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementAttribute(this._el_26, 'aria-labelledby', ((currVal_25 == null) ? null : currVal_25.toString()));
            this._expr_25 = currVal_25;
        }
        var currVal_30 = this._Tab_28_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setElementAttribute(this._el_28, 'id', ((currVal_30 == null) ? null : currVal_30.toString()));
            this._expr_30 = currVal_30;
        }
        var currVal_31 = this._Tab_28_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setElementAttribute(this._el_28, 'aria-labelledby', ((currVal_31 == null) ? null : currVal_31.toString()));
            this._expr_31 = currVal_31;
        }
        var currVal_37 = this._Tab_34_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setElementAttribute(this._el_34, 'id', ((currVal_37 == null) ? null : currVal_37.toString()));
            this._expr_37 = currVal_37;
        }
        var currVal_38 = this._Tab_34_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_38, currVal_38)) {
            this.renderer.setElementAttribute(this._el_34, 'aria-labelledby', ((currVal_38 == null) ? null : currVal_38.toString()));
            this._expr_38 = currVal_38;
        }
        var currVal_44 = this._Tab_36_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this.renderer.setElementAttribute(this._el_36, 'id', ((currVal_44 == null) ? null : currVal_44.toString()));
            this._expr_44 = currVal_44;
        }
        var currVal_45 = this._Tab_36_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this.renderer.setElementAttribute(this._el_36, 'aria-labelledby', ((currVal_45 == null) ? null : currVal_45.toString()));
            this._expr_45 = currVal_45;
        }
        var currVal_49 = this._Tab_38_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this.renderer.setElementAttribute(this._el_38, 'id', ((currVal_49 == null) ? null : currVal_49.toString()));
            this._expr_49 = currVal_49;
        }
        var currVal_50 = this._Tab_38_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this.renderer.setElementAttribute(this._el_38, 'aria-labelledby', ((currVal_50 == null) ? null : currVal_50.toString()));
            this._expr_50 = currVal_50;
        }
        var currVal_59 = this._Tab_44_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_59, currVal_59)) {
            this.renderer.setElementAttribute(this._el_44, 'id', ((currVal_59 == null) ? null : currVal_59.toString()));
            this._expr_59 = currVal_59;
        }
        var currVal_60 = this._Tab_44_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_60, currVal_60)) {
            this.renderer.setElementAttribute(this._el_44, 'aria-labelledby', ((currVal_60 == null) ? null : currVal_60.toString()));
            this._expr_60 = currVal_60;
        }
        var currVal_64 = this._Tab_46_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_64, currVal_64)) {
            this.renderer.setElementAttribute(this._el_46, 'id', ((currVal_64 == null) ? null : currVal_64.toString()));
            this._expr_64 = currVal_64;
        }
        var currVal_65 = this._Tab_46_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_65, currVal_65)) {
            this.renderer.setElementAttribute(this._el_46, 'aria-labelledby', ((currVal_65 == null) ? null : currVal_65.toString()));
            this._expr_65 = currVal_65;
        }
        var currVal_69 = this._Tab_48_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_69, currVal_69)) {
            this.renderer.setElementAttribute(this._el_48, 'id', ((currVal_69 == null) ? null : currVal_69.toString()));
            this._expr_69 = currVal_69;
        }
        var currVal_70 = this._Tab_48_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_70, currVal_70)) {
            this.renderer.setElementAttribute(this._el_48, 'aria-labelledby', ((currVal_70 == null) ? null : currVal_70.toString()));
            this._expr_70 = currVal_70;
        }
        var currVal_77 = this._Tab_54_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_77, currVal_77)) {
            this.renderer.setElementAttribute(this._el_54, 'id', ((currVal_77 == null) ? null : currVal_77.toString()));
            this._expr_77 = currVal_77;
        }
        var currVal_78 = this._Tab_54_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_78, currVal_78)) {
            this.renderer.setElementAttribute(this._el_54, 'aria-labelledby', ((currVal_78 == null) ? null : currVal_78.toString()));
            this._expr_78 = currVal_78;
        }
        var currVal_82 = this._Tab_56_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_82, currVal_82)) {
            this.renderer.setElementAttribute(this._el_56, 'id', ((currVal_82 == null) ? null : currVal_82.toString()));
            this._expr_82 = currVal_82;
        }
        var currVal_83 = this._Tab_56_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_83, currVal_83)) {
            this.renderer.setElementAttribute(this._el_56, 'aria-labelledby', ((currVal_83 == null) ? null : currVal_83.toString()));
            this._expr_83 = currVal_83;
        }
        var currVal_89 = this._Tab_58_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_89, currVal_89)) {
            this.renderer.setElementAttribute(this._el_58, 'id', ((currVal_89 == null) ? null : currVal_89.toString()));
            this._expr_89 = currVal_89;
        }
        var currVal_90 = this._Tab_58_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_90, currVal_90)) {
            this.renderer.setElementAttribute(this._el_58, 'aria-labelledby', ((currVal_90 == null) ? null : currVal_90.toString()));
            this._expr_90 = currVal_90;
        }
        var currVal_98 = this._Tab_64_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_98, currVal_98)) {
            this.renderer.setElementAttribute(this._el_64, 'id', ((currVal_98 == null) ? null : currVal_98.toString()));
            this._expr_98 = currVal_98;
        }
        var currVal_99 = this._Tab_64_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_99, currVal_99)) {
            this.renderer.setElementAttribute(this._el_64, 'aria-labelledby', ((currVal_99 == null) ? null : currVal_99.toString()));
            this._expr_99 = currVal_99;
        }
        var currVal_103 = this._Tab_66_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_103, currVal_103)) {
            this.renderer.setElementAttribute(this._el_66, 'id', ((currVal_103 == null) ? null : currVal_103.toString()));
            this._expr_103 = currVal_103;
        }
        var currVal_104 = this._Tab_66_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_104, currVal_104)) {
            this.renderer.setElementAttribute(this._el_66, 'aria-labelledby', ((currVal_104 == null) ? null : currVal_104.toString()));
            this._expr_104 = currVal_104;
        }
        var currVal_108 = this._Tab_68_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_108, currVal_108)) {
            this.renderer.setElementAttribute(this._el_68, 'id', ((currVal_108 == null) ? null : currVal_108.toString()));
            this._expr_108 = currVal_108;
        }
        var currVal_109 = this._Tab_68_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_109, currVal_109)) {
            this.renderer.setElementAttribute(this._el_68, 'aria-labelledby', ((currVal_109 == null) ? null : currVal_109.toString()));
            this._expr_109 = currVal_109;
        }
        var currVal_114 = this._Tab_74_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_114, currVal_114)) {
            this.renderer.setElementAttribute(this._el_74, 'id', ((currVal_114 == null) ? null : currVal_114.toString()));
            this._expr_114 = currVal_114;
        }
        var currVal_115 = this._Tab_74_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_115, currVal_115)) {
            this.renderer.setElementAttribute(this._el_74, 'aria-labelledby', ((currVal_115 == null) ? null : currVal_115.toString()));
            this._expr_115 = currVal_115;
        }
        var currVal_121 = this._Tab_76_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_121, currVal_121)) {
            this.renderer.setElementAttribute(this._el_76, 'id', ((currVal_121 == null) ? null : currVal_121.toString()));
            this._expr_121 = currVal_121;
        }
        var currVal_122 = this._Tab_76_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_122, currVal_122)) {
            this.renderer.setElementAttribute(this._el_76, 'aria-labelledby', ((currVal_122 == null) ? null : currVal_122.toString()));
            this._expr_122 = currVal_122;
        }
        var currVal_126 = this._Tab_78_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_126, currVal_126)) {
            this.renderer.setElementAttribute(this._el_78, 'id', ((currVal_126 == null) ? null : currVal_126.toString()));
            this._expr_126 = currVal_126;
        }
        var currVal_127 = this._Tab_78_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_127, currVal_127)) {
            this.renderer.setElementAttribute(this._el_78, 'aria-labelledby', ((currVal_127 == null) ? null : currVal_127.toString()));
            this._expr_127 = currVal_127;
        }
        var currVal_131 = this._Tab_84_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_131, currVal_131)) {
            this.renderer.setElementAttribute(this._el_84, 'id', ((currVal_131 == null) ? null : currVal_131.toString()));
            this._expr_131 = currVal_131;
        }
        var currVal_132 = this._Tab_84_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_132, currVal_132)) {
            this.renderer.setElementAttribute(this._el_84, 'aria-labelledby', ((currVal_132 == null) ? null : currVal_132.toString()));
            this._expr_132 = currVal_132;
        }
        var currVal_135 = this._Tab_86_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_135, currVal_135)) {
            this.renderer.setElementAttribute(this._el_86, 'id', ((currVal_135 == null) ? null : currVal_135.toString()));
            this._expr_135 = currVal_135;
        }
        var currVal_136 = this._Tab_86_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_136, currVal_136)) {
            this.renderer.setElementAttribute(this._el_86, 'aria-labelledby', ((currVal_136 == null) ? null : currVal_136.toString()));
            this._expr_136 = currVal_136;
        }
        var currVal_139 = this._Tab_88_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_139, currVal_139)) {
            this.renderer.setElementAttribute(this._el_88, 'id', ((currVal_139 == null) ? null : currVal_139.toString()));
            this._expr_139 = currVal_139;
        }
        var currVal_140 = this._Tab_88_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_140, currVal_140)) {
            this.renderer.setElementAttribute(this._el_88, 'aria-labelledby', ((currVal_140 == null) ? null : currVal_140.toString()));
            this._expr_140 = currVal_140;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Tabs_12_4.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Tabs_22_4.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Tabs_32_4.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Tabs_42_4.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Tabs_52_4.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Tabs_62_4.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Tabs_72_4.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Tabs_82_4.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Tabs_12_4.ngOnDestroy();
        this._Tabs_22_4.ngOnDestroy();
        this._Tabs_32_4.ngOnDestroy();
        this._Tabs_42_4.ngOnDestroy();
        this._Tabs_52_4.ngOnDestroy();
        this._Tabs_62_4.ngOnDestroy();
        this._Tabs_72_4.ngOnDestroy();
        this._Tabs_82_4.ngOnDestroy();
        this._Content_9_4.ngOnDestroy();
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/tabs/page.html', 0, import8.ViewEncapsulation.None, styles_ApiDemoPage, {}));
    }
    return new _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl);
}
var renderType_ApiDemoApp_Host = null;
var _View_ApiDemoApp_Host0 = (function (_super) {
    __extends(_View_ApiDemoApp_Host0, _super);
    function _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp_Host0, renderType_ApiDemoApp_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('api-demo-app', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoApp0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoApp_0_4 = new import3.ApiDemoApp();
        this._appEl_0.initComponent(this._ApiDemoApp_0_4, [], compView_0);
        compView_0.create(this._ApiDemoApp_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoApp) && (0 === requestNodeIndex))) {
            return this._ApiDemoApp_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoApp_Host0;
}(import1.AppView));
function viewFactory_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp_Host === null)) {
        (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoAppNgFactory = new import9.ComponentFactory('api-demo-app', viewFactory_ApiDemoApp_Host0, import3.ApiDemoApp);
var styles_ApiDemoApp = [];
var renderType_ApiDemoApp = null;
var _View_ApiDemoApp0 = (function (_super) {
    __extends(_View_ApiDemoApp0, _super);
    function _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp0, renderType_ApiDemoApp, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import34.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import33.Nav(this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import35.NavControllerBase, null), this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_0), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import30.ComponentFactoryResolver), this.parentInjector.get(import31.GestureController), this.parentInjector.get(import32.TransitionController), this.parentInjector.get(import28.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import33.Nav) && (0 === requestNodeIndex))) {
            return this._Nav_0_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Nav_0_4.root = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_0_4.ngAfterViewInit();
            }
        }
    };
    return _View_ApiDemoApp0;
}(import1.AppView));
export function viewFactory_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp === null)) {
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/tabs/app.component.ts class ApiDemoApp - inline template', 0, import8.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
