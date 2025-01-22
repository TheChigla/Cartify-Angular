import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/main.ts
import { bootstrapApplication } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_platform-browser.js?v=1e6815a1";

// src/app/app.config.ts
import { provideZoneChangeDetection } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import { provideRouter } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_router.js?v=1e6815a1";

// src/app/pages/home/home.component.ts
import { Component as Component5 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";

// src/app/components/hero/hero.component.ts
import { Component } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import * as i0 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
var HeroComponent = class _HeroComponent {
  static \u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], decls: 28, vars: 0, consts: [["id", "home", 1, "home", "w-full", "lg:h-[700px]", "lg:bg-[url('assets/images/bg1.png')]", "bg-contain", "bg-no-repeat", "bg-[#F2F0F1]", "bg-bottom", "p-0", "lg:px-32", "lg:relative"], [1, "home__container"], [1, "home__container---content", "lg:w-[calc(45%-64px)]", "lg:absolute", "lg:bottom-[200px]"], [1, "home__container---content-title", "integral", "lg:hidden", "font-black", "text-4xl", "mb-7", "px-5", "lg:p-0", "pt-10"], [1, "home__container---content-description", "text-[rgba(0,0,0,.6)]", "px-5", "lg:p-0"], [1, "home__container---content-button", "px-5", "lg:p-0"], [1, "bg-black", "rounded-full", "py-4", "px-16", "text-white", "mt-7", "mb-7", "lg:mb-16", "w-full", "md:w-auto"], [1, "home__container---content-stats", "flex", "justify-between", "px-5", "lg:p-0", "pb-5"], [1, "home__container---content-stat"], [1, "home__container---content-stat__count", "text-2xl", "md:text-5xl", "font-bold"], [1, "home__container---content-stat__title", "text-xs", "md:text-base", "text-[rgba(0,0,0,.6)]", "mt-2"], [1, "home__container---content---image", "md:hidden", "mt-10", "flex", "justify-center"], ["src", "assets/images/bg2.png", "alt", "Image", 1, "w-[100%]"]], template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      i0.\u0275\u0275text(4, " FIND CLOTHES THAT MATCHES YOUR STYLE ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(5, "div", 4);
      i0.\u0275\u0275text(6, " Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      i0.\u0275\u0275text(9, " Shop Now ");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9);
      i0.\u0275\u0275text(13, " 200+ ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(14, "div", 10);
      i0.\u0275\u0275text(15, " International Brands ");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(16, "div", 8)(17, "div", 9);
      i0.\u0275\u0275text(18, " 2,000+ ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(19, "div", 10);
      i0.\u0275\u0275text(20, " High-Quality Products ");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(21, "div", 8)(22, "div", 9);
      i0.\u0275\u0275text(23, " 30,000+ ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(24, "div", 10);
      i0.\u0275\u0275text(25, " Happy Customers ");
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(26, "div", 11);
      i0.\u0275\u0275element(27, "img", 12);
      i0.\u0275\u0275elementEnd()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src/app/components/hero/hero.component.ts", lineNumber: 9 });
})();
(() => {
  function HeroComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=src%2Fapp%2Fcomponents%2Fhero%2Fhero.component.ts%40HeroComponent&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i0.\u0275\u0275replaceMetadata(HeroComponent, m.default, [i0], []));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && HeroComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === "src%2Fapp%2Fcomponents%2Fhero%2Fhero.component.ts%40HeroComponent" && HeroComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/partners/partners.component.ts
import { Component as Component2 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import * as i02 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
var PartnersComponent = class _PartnersComponent {
  static \u0275fac = function PartnersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PartnersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _PartnersComponent, selectors: [["app-partners"]], decls: 12, vars: 0, consts: [[1, "partners"], [1, "partners__wrapper", "flex", "flex-wrap", "lg:justify-between", "justify-center", "gap-5", "lg:gap-0", "items-center", "bg-black", "p-5", "lg:py-8", "lg:px-32"], [1, "partner"], ["src", "assets/images/logos/versace.png", "alt", "Versace logo", 1, "w-28", "h-auto"], ["src", "assets/images/logos/zara.png", "alt", "Zara logo", 1, "w-20", "h-auto"], ["src", "assets/images/logos/gucci.png", "alt", "Gucci logo", 1, "w-28", "h-auto"], ["src", "assets/images/logos/prada.png", "alt", "Prada logo", 1, "w-28", "h-auto"], ["src", "assets/images/logos/calvinklein.png", "alt", "Calvin Klein logo", 1, "w-28", "h-auto"]], template: function PartnersComponent_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      i02.\u0275\u0275element(3, "img", 3);
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(4, "div", 2);
      i02.\u0275\u0275element(5, "img", 4);
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(6, "div", 2);
      i02.\u0275\u0275element(7, "img", 5);
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(8, "div", 2);
      i02.\u0275\u0275element(9, "img", 6);
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(10, "div", 2);
      i02.\u0275\u0275element(11, "img", 7);
      i02.\u0275\u0275elementEnd()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(PartnersComponent, { className: "PartnersComponent", filePath: "src/app/components/partners/partners.component.ts", lineNumber: 9 });
})();
(() => {
  function PartnersComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=src%2Fapp%2Fcomponents%2Fpartners%2Fpartners.component.ts%40PartnersComponent&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i02.\u0275\u0275replaceMetadata(PartnersComponent, m.default, [i02], []));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && PartnersComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === "src%2Fapp%2Fcomponents%2Fpartners%2Fpartners.component.ts%40PartnersComponent" && PartnersComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/products/products.component.ts
import { Component as Component4, Input as Input2 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";

// src/app/components/product-card/product-card.component.ts
import { Component as Component3, Input } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import { CommonModule } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_common.js?v=1e6815a1";
import { RouterModule } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_router.js?v=1e6815a1";
import * as i03 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import * as i1 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_common.js?v=1e6815a1";
import * as i2 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_router.js?v=1e6815a1";
var _c0 = (a0) => ["/product", a0];
var ProductCardComponent = class _ProductCardComponent {
  productData;
  static \u0275fac = function ProductCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], inputs: { productData: "productData" }, decls: 10, vars: 9, consts: [[1, "product-card"], ["routerLinkActive", "router-link-active", 3, "routerLink"], [1, "product-card__image", "bg-[#F0EEED]", "py-8", "flex", "items-center", "justify-center", "rounded-3xl"], [1, "h-64", 3, "src", "alt"], [1, "product-card__content", "pt-3"], [1, "product-card__title", "font-bold", "capitalize"], [1, "product-card__price", "pt-1", "text-2xl", "font-semibold"]], template: function ProductCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275elementStart(0, "div", 0)(1, "a", 1)(2, "div", 2);
      i03.\u0275\u0275element(3, "img", 3);
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "a", 1);
      i03.\u0275\u0275text(7);
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275elementStart(8, "div", 6);
      i03.\u0275\u0275text(9);
      i03.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("routerLink", i03.\u0275\u0275pureFunction1(5, _c0, ctx.productData.id));
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275propertyInterpolate("src", ctx.productData.image, i03.\u0275\u0275sanitizeUrl);
      i03.\u0275\u0275advance(3);
      i03.\u0275\u0275property("routerLink", i03.\u0275\u0275pureFunction1(7, _c0, ctx.productData.id));
      i03.\u0275\u0275advance();
      i03.\u0275\u0275textInterpolate(ctx.productData.title);
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275textInterpolate1(" $", ctx.productData.price, " ");
    }
  }, dependencies: [CommonModule, i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe, RouterModule, i2.RouterOutlet, i2.RouterLink, i2.RouterLinkActive, i2.\u0275EmptyOutletComponent], styles: ["\n\n@media (max-width: 1024px) {\n  .product-card[_ngcontent-%COMP%] {\n    min-width: 300px;\n    flex: 0 0 auto;\n  }\n}\n/*# sourceMappingURL=product-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "src/app/components/product-card/product-card.component.ts", lineNumber: 12 });
})();
(() => {
  function ProductCardComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=src%2Fapp%2Fcomponents%2Fproduct-card%2Fproduct-card.component.ts%40ProductCardComponent&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i03.\u0275\u0275replaceMetadata(ProductCardComponent, m.default, [i03, i1, i2], [CommonModule, RouterModule]));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ProductCardComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === "src%2Fapp%2Fcomponents%2Fproduct-card%2Fproduct-card.component.ts%40ProductCardComponent" && ProductCardComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/products/products.component.ts
import * as i04 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
var _forTrack0 = ($index, $item) => $item.id;
function ProductsComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275element(0, "app-product-card", 3);
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    i04.\u0275\u0275property("productData", product_r1);
  }
}
var ProductsComponent = class _ProductsComponent {
  title = "";
  products = [];
  static \u0275fac = function ProductsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _ProductsComponent, selectors: [["app-products"]], inputs: { title: "title", products: "products" }, decls: 9, vars: 1, consts: [[1, "products__container", "pt-8", "lg:pt-16", "pl-5", "lg:px-32"], [1, "products__container---title", "integral", "font-semibold", "text-3xl", "lg:text-5xl", "uppercase", "text-center", "pb-5", "lg:pb-10"], [1, "products__container---products-grid", "gap-6", "flex", "overflow-x-auto", "w-[100%]", "lg:grid", "lg:grid-cols-4", "justify-center"], [3, "productData"], [1, "product__container---products-button", "text-center", "mt-5", "pr-5"], [1, "bg-white", "border", "rounded-full", "py-3", "px-16", "text-black", "mt-7", "mb-7", "lg:mb-16", "w-full", "md:w-auto"]], template: function ProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i04.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      i04.\u0275\u0275text(2);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(3, "div", 2);
      i04.\u0275\u0275repeaterCreate(4, ProductsComponent_For_5_Template, 1, 1, "app-product-card", 3, _forTrack0);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
      i04.\u0275\u0275text(8, " View All ");
      i04.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      i04.\u0275\u0275advance(2);
      i04.\u0275\u0275textInterpolate1(" ", ctx.title, " ");
      i04.\u0275\u0275advance(2);
      i04.\u0275\u0275repeater(ctx.products);
    }
  }, dependencies: [ProductCardComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(ProductsComponent, { className: "ProductsComponent", filePath: "src/app/components/products/products.component.ts", lineNumber: 11 });
})();
(() => {
  function ProductsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=src%2Fapp%2Fcomponents%2Fproducts%2Fproducts.component.ts%40ProductsComponent&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i04.\u0275\u0275replaceMetadata(ProductsComponent, m.default, [i04], [ProductCardComponent]));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ProductsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === "src%2Fapp%2Fcomponents%2Fproducts%2Fproducts.component.ts%40ProductsComponent" && ProductsComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/home/home.component.ts
import * as i05 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
var HomeComponent = class _HomeComponent {
  splittedFirstFour = JSON.parse(localStorage.getItem("products") || "[]").slice(0, 4);
  splittedLastFour = JSON.parse(localStorage.getItem("products") || "[]").slice(4, 8);
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 7, vars: 2, consts: [["id", "newarrivals"], ["title", "New Arrivals", 3, "products"], [1, "max-w-[calc(100%-40px)]", "lg:max-w-[calc(100%-256px)]", "m-auto"], ["id", "topselling"], ["title", "Top Selling", 3, "products"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      i05.\u0275\u0275element(0, "app-hero")(1, "app-partners");
      i05.\u0275\u0275elementStart(2, "section", 0);
      i05.\u0275\u0275element(3, "app-products", 1);
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275element(4, "hr", 2);
      i05.\u0275\u0275elementStart(5, "section", 3);
      i05.\u0275\u0275element(6, "app-products", 4);
      i05.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
      i05.\u0275\u0275advance(3);
      i05.\u0275\u0275property("products", ctx.splittedFirstFour);
      i05.\u0275\u0275advance(3);
      i05.\u0275\u0275property("products", ctx.splittedLastFour);
    }
  }, dependencies: [HeroComponent, PartnersComponent, ProductsComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 12 });
})();
(() => {
  function HomeComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=src%2Fapp%2Fpages%2Fhome%2Fhome.component.ts%40HomeComponent&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i05.\u0275\u0275replaceMetadata(HomeComponent, m.default, [i05], [HeroComponent, PartnersComponent, ProductsComponent]));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && HomeComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === "src%2Fapp%2Fpages%2Fhome%2Fhome.component.ts%40HomeComponent" && HomeComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/error/error.component.ts
import { Component as Component6 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import * as i06 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
var ErrorComponent = class _ErrorComponent {
  static \u0275fac = function ErrorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _ErrorComponent, selectors: [["app-error"]], decls: 3, vars: 0, consts: [[1, "error-container"], [1, "error-container__title", "text-6xl", "font-black", "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2"]], template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      i06.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      i06.\u0275\u0275text(2, " 404 PAGE NOT FOUND. ");
      i06.\u0275\u0275elementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(ErrorComponent, { className: "ErrorComponent", filePath: "src/app/pages/error/error.component.ts", lineNumber: 9 });
})();
(() => {
  function ErrorComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=src%2Fapp%2Fpages%2Ferror%2Ferror.component.ts%40ErrorComponent&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i06.\u0275\u0275replaceMetadata(ErrorComponent, m.default, [i06], []));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ErrorComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === "src%2Fapp%2Fpages%2Ferror%2Ferror.component.ts%40ErrorComponent" && ErrorComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/single-product/single-product.component.ts
import { Component as Component7 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import { FormsModule } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_forms.js?v=1e6815a1";
import { CommonModule as CommonModule2 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_common.js?v=1e6815a1";
import * as i09 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import * as i13 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_router.js?v=1e6815a1";

// src/app/services/product.service.ts
var product_service_exports = {};
__export(product_service_exports, {
  ProductService: () => ProductService
});
import { Injectable } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import * as i07 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import * as i12 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_common_http.js?v=1e6815a1";
var ProductService = class _ProductService {
  http;
  baseUrl = "https://fakestoreapi.com/products";
  constructor(http) {
    this.http = http;
  }
  getProducts() {
    return this.http.get(this.baseUrl);
  }
  getProductById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  addProduct(product) {
    return this.http.post(this.baseUrl, product);
  }
  static \u0275fac = function ProductService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductService)(i07.\u0275\u0275inject(i12.HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ i07.\u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
};

// src/app/services/cart.service.ts
var cart_service_exports = {};
__export(cart_service_exports, {
  CartService: () => CartService
});
import { Injectable as Injectable2 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import * as i08 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
var CartService = class _CartService {
  cart = [];
  getCartItems() {
    return this.cart;
  }
  addToCart(product) {
    const productInCart = this.cart.find((item) => item.id === product.id);
    if (productInCart) {
      productInCart.quantity++;
    } else {
      this.cart.push(__spreadProps(__spreadValues({}, product), { quantity: 1 }));
    }
  }
  removeFromCart(product) {
    const productIndex = this.cart.findIndex((item) => item.id === product.id);
    if (productIndex > -1) {
      this.cart.splice(productIndex, 1);
    }
  }
  clearCart() {
    this.cart = [];
  }
  static \u0275fac = function CartService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartService)();
  };
  static \u0275prov = /* @__PURE__ */ i08.\u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
};

// src/app/pages/single-product/single-product.component.ts
import * as i4 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_forms.js?v=1e6815a1";
import * as i5 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_common.js?v=1e6815a1";
function SingleProductComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i09.\u0275\u0275getCurrentView();
    i09.\u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    i09.\u0275\u0275element(3, "img", 4);
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(4, "div", 5)(5, "div", 6);
    i09.\u0275\u0275text(6);
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(7, "div", 7);
    i09.\u0275\u0275text(8);
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(9, "div", 8);
    i09.\u0275\u0275text(10);
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275element(11, "hr", 9);
    i09.\u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "button", 13);
    i09.\u0275\u0275listener("click", function SingleProductComponent_div_0_Template_button_click_15_listener() {
      i09.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i09.\u0275\u0275nextContext();
      return i09.\u0275\u0275resetView(ctx_r1.decrementQuantity());
    });
    i09.\u0275\u0275element(16, "img", 14);
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(17, "input", 15);
    i09.\u0275\u0275twoWayListener("ngModelChange", function SingleProductComponent_div_0_Template_input_ngModelChange_17_listener($event) {
      i09.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i09.\u0275\u0275nextContext();
      i09.\u0275\u0275twoWayBindingSet(ctx_r1.quantity, $event) || (ctx_r1.quantity = $event);
      return i09.\u0275\u0275resetView($event);
    });
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(18, "button", 13);
    i09.\u0275\u0275listener("click", function SingleProductComponent_div_0_Template_button_click_18_listener() {
      i09.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i09.\u0275\u0275nextContext();
      return i09.\u0275\u0275resetView(ctx_r1.incrementQuantity());
    });
    i09.\u0275\u0275element(19, "img", 16);
    i09.\u0275\u0275elementEnd()()();
    i09.\u0275\u0275elementStart(20, "div", 17)(21, "button", 18);
    i09.\u0275\u0275listener("click", function SingleProductComponent_div_0_Template_button_click_21_listener() {
      i09.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i09.\u0275\u0275nextContext();
      return i09.\u0275\u0275resetView(ctx_r1.addToCart(ctx_r1.product, ctx_r1.quantity));
    });
    i09.\u0275\u0275text(22, " Add To Cart ");
    i09.\u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = i09.\u0275\u0275nextContext();
    i09.\u0275\u0275advance(3);
    i09.\u0275\u0275property("src", ctx_r1.product.image, i09.\u0275\u0275sanitizeUrl)("alt", ctx_r1.product.title);
    i09.\u0275\u0275advance(3);
    i09.\u0275\u0275textInterpolate1(" ", ctx_r1.product.title, " ");
    i09.\u0275\u0275advance(2);
    i09.\u0275\u0275textInterpolate1(" $", ctx_r1.product.price, " ");
    i09.\u0275\u0275advance(2);
    i09.\u0275\u0275textInterpolate1(" ", ctx_r1.product.description, " ");
    i09.\u0275\u0275advance(7);
    i09.\u0275\u0275twoWayProperty("ngModel", ctx_r1.quantity);
  }
}
var SingleProductComponent = class _SingleProductComponent {
  route;
  productService;
  cartService;
  constructor(route, productService, cartService) {
    this.route = route;
    this.productService = productService;
    this.cartService = cartService;
  }
  product;
  quantity = 1;
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
    });
  }
  incrementQuantity() {
    this.quantity++;
  }
  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  addToCart(product, quantity) {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    let item = __spreadProps(__spreadValues({}, product), { quantity });
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  static \u0275fac = function SingleProductComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SingleProductComponent)(i09.\u0275\u0275directiveInject(i13.ActivatedRoute), i09.\u0275\u0275directiveInject(ProductService), i09.\u0275\u0275directiveInject(CartService));
  };
  static \u0275cmp = /* @__PURE__ */ i09.\u0275\u0275defineComponent({ type: _SingleProductComponent, selectors: [["app-single-product"]], decls: 1, vars: 1, consts: [["class", "single-product p-5 lg:px-32", 4, "ngIf"], [1, "single-product", "p-5", "lg:px-32"], [1, "single-product__product-container", "flex", "flex-col", "gap-4", "lg:gap-8", "lg:flex-row"], [1, "single-product__product-container---image", "bg-[#F0EEED]", "py-8", "flex", "items-center", "justify-center", "rounded-3xl", "lg:w-[35%]", "w-full"], [1, "lg:h-[500px]", "h-60", 3, "src", "alt"], [1, "single-product__product-container---content", "lg:w-[65%]", "w-full"], [1, "single-product__product-container---product-title", "integral", "font-black", "text-2xl", "lg:text-5xl"], [1, "single-product__product-container---product-price", "text-3xl", "font-bold", "mt-5", "pb-5"], [1, "single-product__product-container---product-description", "text-[rgba(0,0,0,0.6)]"], [1, "my-5"], [1, "single-product__product-container---product-actions", "flex", "items-center", "gap-5"], [1, "single-product__product-container---product-quantity", "bg-[#F0EEED]", "py-4", "px-8", "rounded-full", "flex", "items-center", "gap-4"], [1, "single-product__product-container---product-quantity---input", "flex", "items-center", "gap-4"], [1, "bg-[#F0EEED]", "rounded-full", 3, "click"], ["src", "assets/icons/minus.svg", "alt", ""], ["type", "text", "readonly", "", 1, "text-center", "outline-none", "w-16", "bg-transparent", 3, "ngModelChange", "ngModel"], ["src", "assets/icons/plus.svg", "alt", ""], [1, "single-product__product-container---product-cart-btn", "flex-1", "lg:flex-initial"], [1, "bg-black", "rounded-full", "py-4", "px-16", "text-white", "w-[100%]", 3, "click"]], template: function SingleProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      i09.\u0275\u0275template(0, SingleProductComponent_div_0_Template, 23, 6, "div", 0);
    }
    if (rf & 2) {
      i09.\u0275\u0275property("ngIf", ctx.product);
    }
  }, dependencies: [FormsModule, i4.\u0275NgNoValidate, i4.NgSelectOption, i4.\u0275NgSelectMultipleOption, i4.DefaultValueAccessor, i4.NumberValueAccessor, i4.RangeValueAccessor, i4.CheckboxControlValueAccessor, i4.SelectControlValueAccessor, i4.SelectMultipleControlValueAccessor, i4.RadioControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.MinLengthValidator, i4.MaxLengthValidator, i4.PatternValidator, i4.CheckboxRequiredValidator, i4.EmailValidator, i4.MinValidator, i4.MaxValidator, i4.NgModel, i4.NgModelGroup, i4.NgForm, CommonModule2, i5.NgClass, i5.NgComponentOutlet, i5.NgForOf, i5.NgIf, i5.NgTemplateOutlet, i5.NgStyle, i5.NgSwitch, i5.NgSwitchCase, i5.NgSwitchDefault, i5.NgPlural, i5.NgPluralCase, i5.AsyncPipe, i5.UpperCasePipe, i5.LowerCasePipe, i5.JsonPipe, i5.SlicePipe, i5.DecimalPipe, i5.PercentPipe, i5.TitleCasePipe, i5.CurrencyPipe, i5.DatePipe, i5.I18nPluralPipe, i5.I18nSelectPipe, i5.KeyValuePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassDebugInfo(SingleProductComponent, { className: "SingleProductComponent", filePath: "src/app/pages/single-product/single-product.component.ts", lineNumber: 15 });
})();
(() => {
  function SingleProductComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=src%2Fapp%2Fpages%2Fsingle-product%2Fsingle-product.component.ts%40SingleProductComponent&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i09.\u0275\u0275replaceMetadata(SingleProductComponent, m.default, [i09, i4, i5, i13, product_service_exports, cart_service_exports], [FormsModule, CommonModule2]));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && SingleProductComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === "src%2Fapp%2Fpages%2Fsingle-product%2Fsingle-product.component.ts%40SingleProductComponent" && SingleProductComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/cart/cart.component.ts
import { CommonModule as CommonModule4 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_common.js?v=1e6815a1";
import { Component as Component9 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";

// src/app/components/cart-products/cart-products.component.ts
import { Component as Component8, Input as Input3 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import { RouterModule as RouterModule2 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_router.js?v=1e6815a1";
import { FormsModule as FormsModule2 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_forms.js?v=1e6815a1";
import { CommonModule as CommonModule3 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_common.js?v=1e6815a1";
import * as i010 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import * as i14 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_router.js?v=1e6815a1";
import * as i22 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_forms.js?v=1e6815a1";
import * as i3 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_common.js?v=1e6815a1";
var _forTrack02 = ($index, $item) => $item.id;
function CartProductsComponent_div_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i010.\u0275\u0275getCurrentView();
    i010.\u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    i010.\u0275\u0275element(2, "img", 4);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(3, "div", 5)(4, "div", 6);
    i010.\u0275\u0275text(5);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(6, "div", 7);
    i010.\u0275\u0275text(7);
    i010.\u0275\u0275elementEnd()();
    i010.\u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "img", 10);
    i010.\u0275\u0275listener("click", function CartProductsComponent_div_0_For_2_Template_img_click_10_listener() {
      const cartItem_r2 = i010.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i010.\u0275\u0275nextContext(2);
      return i010.\u0275\u0275resetView(ctx_r2.removeFromCart(cartItem_r2));
    });
    i010.\u0275\u0275elementEnd()();
    i010.\u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "button", 13);
    i010.\u0275\u0275listener("click", function CartProductsComponent_div_0_For_2_Template_button_click_13_listener() {
      const cartItem_r2 = i010.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i010.\u0275\u0275nextContext(2);
      return i010.\u0275\u0275resetView(ctx_r2.decrementQuantity(cartItem_r2));
    });
    i010.\u0275\u0275element(14, "img", 14);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(15, "input", 15);
    i010.\u0275\u0275twoWayListener("ngModelChange", function CartProductsComponent_div_0_For_2_Template_input_ngModelChange_15_listener($event) {
      const cartItem_r2 = i010.\u0275\u0275restoreView(_r1).$implicit;
      i010.\u0275\u0275twoWayBindingSet(cartItem_r2.quantity, $event) || (cartItem_r2.quantity = $event);
      return i010.\u0275\u0275resetView($event);
    });
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(16, "button", 13);
    i010.\u0275\u0275listener("click", function CartProductsComponent_div_0_For_2_Template_button_click_16_listener() {
      const cartItem_r2 = i010.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i010.\u0275\u0275nextContext(2);
      return i010.\u0275\u0275resetView(ctx_r2.incrementQuantity(cartItem_r2));
    });
    i010.\u0275\u0275element(17, "img", 16);
    i010.\u0275\u0275elementEnd()()()()();
    i010.\u0275\u0275element(18, "hr");
  }
  if (rf & 2) {
    const cartItem_r2 = ctx.$implicit;
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275property("src", cartItem_r2.image, i010.\u0275\u0275sanitizeUrl)("alt", cartItem_r2.title);
    i010.\u0275\u0275advance(3);
    i010.\u0275\u0275textInterpolate1(" ", cartItem_r2.title, " ");
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275textInterpolate1(" $", cartItem_r2.price * cartItem_r2.quantity, " ");
    i010.\u0275\u0275advance(8);
    i010.\u0275\u0275twoWayProperty("ngModel", cartItem_r2.quantity);
  }
}
function CartProductsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i010.\u0275\u0275elementStart(0, "div", 1);
    i010.\u0275\u0275repeaterCreate(1, CartProductsComponent_div_0_For_2_Template, 19, 5, null, null, _forTrack02);
    i010.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = i010.\u0275\u0275nextContext();
    i010.\u0275\u0275advance();
    i010.\u0275\u0275repeater(ctx_r2.cartItems);
  }
}
var CartProductsComponent = class _CartProductsComponent {
  cartItems = [];
  productsLength = JSON.parse(localStorage.getItem("cart")).length;
  incrementQuantity(product) {
    product.quantity++;
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
  }
  decrementQuantity(product) {
    if (product.quantity > 1) {
      product.quantity--;
      localStorage.setItem("cart", JSON.stringify(this.cartItems));
    }
  }
  removeFromCart(product) {
    const index = this.cartItems.indexOf(product);
    this.cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
  }
  static \u0275fac = function CartProductsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartProductsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i010.\u0275\u0275defineComponent({ type: _CartProductsComponent, selectors: [["app-cart-products"]], inputs: { cartItems: "cartItems" }, decls: 1, vars: 1, consts: [["class", "cart-products border rounded-xl p-5 flex flex-col gap-7 justify-stretch items-stretch", 4, "ngIf"], [1, "cart-products", "border", "rounded-xl", "p-5", "flex", "flex-col", "gap-7", "justify-stretch", "items-stretch"], [1, "cart-product", "flex", "gap-5", "w-full"], [1, "cart-product__image", "bg-[#F0EEED]", "p-4", "flex", "items-center", "justify-center", "rounded-3xl"], [1, "w-36", "h-36", 3, "src", "alt"], [1, "cart-product__content", "flex-1"], [1, "cart-product__content---title", "font-bold", "text-xl"], [1, "cart-product__content---price", "font-bold", "text-2xl", "pt-2"], [1, "cart-product__actions", "flex", "flex-col", "justify-between", "items-end"], [1, "cart-product__actions---remove-btn"], ["src", "assets/icons/trash.svg", "alt", "Trash", 1, "cursor-pointer", 3, "click"], [1, "cart-product__actions---quantity", "bg-[#F0EEED]", "p-4", "rounded-full", "flex", "items-center", "gap-4"], [1, "cart-product__actions---quantity---input", "flex", "items-center", "gap-4"], [1, "bg-[#F0EEED]", "rounded-full", 3, "click"], ["src", "assets/icons/minus.svg", "alt", ""], ["type", "text", "readonly", "", 1, "text-center", "outline-none", "w-16", "bg-transparent", 3, "ngModelChange", "ngModel"], ["src", "assets/icons/plus.svg", "alt", ""]], template: function CartProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i010.\u0275\u0275template(0, CartProductsComponent_div_0_Template, 3, 0, "div", 0);
    }
    if (rf & 2) {
      i010.\u0275\u0275property("ngIf", ctx.productsLength > 0);
    }
  }, dependencies: [RouterModule2, i14.RouterOutlet, i14.RouterLink, i14.RouterLinkActive, i14.\u0275EmptyOutletComponent, FormsModule2, i22.\u0275NgNoValidate, i22.NgSelectOption, i22.\u0275NgSelectMultipleOption, i22.DefaultValueAccessor, i22.NumberValueAccessor, i22.RangeValueAccessor, i22.CheckboxControlValueAccessor, i22.SelectControlValueAccessor, i22.SelectMultipleControlValueAccessor, i22.RadioControlValueAccessor, i22.NgControlStatus, i22.NgControlStatusGroup, i22.RequiredValidator, i22.MinLengthValidator, i22.MaxLengthValidator, i22.PatternValidator, i22.CheckboxRequiredValidator, i22.EmailValidator, i22.MinValidator, i22.MaxValidator, i22.NgModel, i22.NgModelGroup, i22.NgForm, CommonModule3, i3.NgClass, i3.NgComponentOutlet, i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i3.NgStyle, i3.NgSwitch, i3.NgSwitchCase, i3.NgSwitchDefault, i3.NgPlural, i3.NgPluralCase, i3.AsyncPipe, i3.UpperCasePipe, i3.LowerCasePipe, i3.JsonPipe, i3.SlicePipe, i3.DecimalPipe, i3.PercentPipe, i3.TitleCasePipe, i3.CurrencyPipe, i3.DatePipe, i3.I18nPluralPipe, i3.I18nSelectPipe, i3.KeyValuePipe], styles: ["\n\n.cart-products[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]:last-child {\n  display: none;\n}\n/*# sourceMappingURL=cart-products.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassDebugInfo(CartProductsComponent, { className: "CartProductsComponent", filePath: "src/app/components/cart-products/cart-products.component.ts", lineNumber: 13 });
})();
(() => {
  function CartProductsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=src%2Fapp%2Fcomponents%2Fcart-products%2Fcart-products.component.ts%40CartProductsComponent&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i010.\u0275\u0275replaceMetadata(CartProductsComponent, m.default, [i010, i14, i22, i3], [RouterModule2, FormsModule2, CommonModule3]));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && CartProductsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === "src%2Fapp%2Fcomponents%2Fcart-products%2Fcart-products.component.ts%40CartProductsComponent" && CartProductsComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/cart/cart.component.ts
import * as i011 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import * as i15 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_common.js?v=1e6815a1";
var CartComponent = class _CartComponent {
  cartItems = [];
  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem("cart"));
  }
  static \u0275fac = function CartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i011.\u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], decls: 5, vars: 1, consts: [[1, "cart", "pt-10", "pb-5", "px-5", "lg:px-32"], [1, "cart__title", "integral", "font-semibold", "text-3xl", "lg:text-5xl", "uppercase", "pb-5", "lg:pb-10"], [1, "cart__flex"], [3, "cartItems"]], template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      i011.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      i011.\u0275\u0275text(2, " Your Cart ");
      i011.\u0275\u0275elementEnd();
      i011.\u0275\u0275elementStart(3, "div", 2);
      i011.\u0275\u0275element(4, "app-cart-products", 3);
      i011.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i011.\u0275\u0275advance(4);
      i011.\u0275\u0275property("cartItems", ctx.cartItems);
    }
  }, dependencies: [CommonModule4, i15.NgClass, i15.NgComponentOutlet, i15.NgForOf, i15.NgIf, i15.NgTemplateOutlet, i15.NgStyle, i15.NgSwitch, i15.NgSwitchCase, i15.NgSwitchDefault, i15.NgPlural, i15.NgPluralCase, i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe, CartProductsComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i011.\u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/pages/cart/cart.component.ts", lineNumber: 12 });
})();
(() => {
  function CartComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=src%2Fapp%2Fpages%2Fcart%2Fcart.component.ts%40CartComponent&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i011.\u0275\u0275replaceMetadata(CartComponent, m.default, [i011, i15], [CommonModule4, CartProductsComponent]));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && CartComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === "src%2Fapp%2Fpages%2Fcart%2Fcart.component.ts%40CartComponent" && CartComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/admin/admin.component.ts
import { Component as Component11 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";

// src/app/components/admin-add-product/admin-add-product.component.ts
import { Component as Component10 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import { ReactiveFormsModule, Validators } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_forms.js?v=1e6815a1";
import * as i012 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import * as i16 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_forms.js?v=1e6815a1";
var AdminAddProductComponent = class _AdminAddProductComponent {
  fb;
  productService;
  addProductForm;
  constructor(fb, productService) {
    this.fb = fb;
    this.productService = productService;
    this.addProductForm = this.fb.group({
      title: ["", Validators.required],
      price: [0, Validators.required],
      imageUrl: ["", Validators.required],
      description: ["", Validators.required]
    });
  }
  onSubmit() {
    if (this.addProductForm.valid) {
      this.productService.addProduct(this.addProductForm.value);
    } else {
      alert("Please fill all the fields");
    }
  }
  static \u0275fac = function AdminAddProductComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminAddProductComponent)(i012.\u0275\u0275directiveInject(i16.FormBuilder), i012.\u0275\u0275directiveInject(ProductService));
  };
  static \u0275cmp = /* @__PURE__ */ i012.\u0275\u0275defineComponent({ type: _AdminAddProductComponent, selectors: [["app-admin-add-product"]], decls: 28, vars: 1, consts: [[1, "admin-add-products"], [1, "admin-add-products__title", "integral", "font-semibold", "text-3xl", "lg:text-5xl", "uppercase", "pb-5", "lg:pb-10"], [3, "ngSubmit", "formGroup"], [1, "admin-add-products__form", "flex", "flex-col", "gap-3"], [1, "admin-add-products__form__input"], ["for", "name", 1, "text-[rgba(0,0,0,.6)]"], ["type", "text", "id", "name", "formControlName", "title", "placeholder", "Title", "required", "required", 1, "w-full", "border", "border-[rgba(0,0,0,.2)]", "rounded-md", "p-2"], ["for", "price", 1, "text-[rgba(0,0,0,.6)]"], ["type", "number", "id", "price", "formControlName", "price", "placeholder", "Price", "required", "required", 1, "w-full", "border", "border-[rgba(0,0,0,.2)]", "rounded-md", "p-2"], ["for", "image", 1, "text-[rgba(0,0,0,.6)]"], ["type", "text", "id", "image", "formControlName", "imageUrl", "required", "required", 1, "w-full", "border", "border-[rgba(0,0,0,.2)]", "rounded-md", "p-2"], ["for", "description", 1, "text-[rgba(0,0,0,.6)]"], ["id", "description", "formControlName", "description", "required", "required", 1, "w-full", "border", "border-[rgba(0,0,0,.2)]", "rounded-md", "p-2"], [1, "admin-add-products__form__submit"], ["type", "submit", 1, "bg-[#000]", "text-white", "rounded-md", "py-2", "px-5", 3, "click"]], template: function AdminAddProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      i012.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      i012.\u0275\u0275text(2, " Add Product ");
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(3, "form", 2);
      i012.\u0275\u0275listener("ngSubmit", function AdminAddProductComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      i012.\u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "label", 5);
      i012.\u0275\u0275text(7, "Title");
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275element(8, "br")(9, "input", 6);
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(10, "div", 4)(11, "label", 7);
      i012.\u0275\u0275text(12, "Price");
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275element(13, "br")(14, "input", 8);
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(15, "div", 4)(16, "label", 9);
      i012.\u0275\u0275text(17, "Image URL");
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275element(18, "br")(19, "input", 10);
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(20, "div", 4)(21, "label", 11);
      i012.\u0275\u0275text(22, "Description");
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275element(23, "br")(24, "textarea", 12);
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(25, "div", 13)(26, "button", 14);
      i012.\u0275\u0275listener("click", function AdminAddProductComponent_Template_button_click_26_listener() {
        return ctx.onSubmit();
      });
      i012.\u0275\u0275text(27, " Add Product ");
      i012.\u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      i012.\u0275\u0275advance(3);
      i012.\u0275\u0275property("formGroup", ctx.addProductForm);
    }
  }, dependencies: [ReactiveFormsModule, i16.\u0275NgNoValidate, i16.NgSelectOption, i16.\u0275NgSelectMultipleOption, i16.DefaultValueAccessor, i16.NumberValueAccessor, i16.RangeValueAccessor, i16.CheckboxControlValueAccessor, i16.SelectControlValueAccessor, i16.SelectMultipleControlValueAccessor, i16.RadioControlValueAccessor, i16.NgControlStatus, i16.NgControlStatusGroup, i16.RequiredValidator, i16.MinLengthValidator, i16.MaxLengthValidator, i16.PatternValidator, i16.CheckboxRequiredValidator, i16.EmailValidator, i16.MinValidator, i16.MaxValidator, i16.FormControlDirective, i16.FormGroupDirective, i16.FormControlName, i16.FormGroupName, i16.FormArrayName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i012.\u0275setClassDebugInfo(AdminAddProductComponent, { className: "AdminAddProductComponent", filePath: "src/app/components/admin-add-product/admin-add-product.component.ts", lineNumber: 17 });
})();
(() => {
  function AdminAddProductComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=src%2Fapp%2Fcomponents%2Fadmin-add-product%2Fadmin-add-product.component.ts%40AdminAddProductComponent&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i012.\u0275\u0275replaceMetadata(AdminAddProductComponent, m.default, [i012, i16, product_service_exports], [ReactiveFormsModule]));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AdminAddProductComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === "src%2Fapp%2Fcomponents%2Fadmin-add-product%2Fadmin-add-product.component.ts%40AdminAddProductComponent" && AdminAddProductComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/admin/admin.component.ts
import * as i013 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
var AdminComponent = class _AdminComponent {
  static \u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i013.\u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], decls: 3, vars: 0, consts: [[1, "admin", "px-5", "lg:px-32", "py-10"], [1, "admin__add-product"]], template: function AdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      i013.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      i013.\u0275\u0275element(2, "app-admin-add-product");
      i013.\u0275\u0275elementEnd()();
    }
  }, dependencies: [AdminAddProductComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i013.\u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src/app/pages/admin/admin.component.ts", lineNumber: 10 });
})();
(() => {
  function AdminComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=src%2Fapp%2Fpages%2Fadmin%2Fadmin.component.ts%40AdminComponent&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i013.\u0275\u0275replaceMetadata(AdminComponent, m.default, [i013], [AdminAddProductComponent]));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AdminComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === "src%2Fapp%2Fpages%2Fadmin%2Fadmin.component.ts%40AdminComponent" && AdminComponent_HmrLoad(d.timestamp)));
})();

// src/app/app.routes.ts
var routes = [
  { path: "", component: HomeComponent },
  { path: "cart", component: CartComponent },
  { path: "admin", component: AdminComponent },
  { path: "products", component: ProductsComponent },
  { path: "product/:id", component: SingleProductComponent },
  { path: "**", component: ErrorComponent }
];

// src/app/app.config.ts
import { provideClientHydration, withEventReplay } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_platform-browser.js?v=1e6815a1";
import { provideHttpClient } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_common_http.js?v=1e6815a1";
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(withEventReplay())
  ]
};

// src/app/app.component.ts
import { Component as Component14 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import { RouterOutlet as RouterOutlet3 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_router.js?v=1e6815a1";

// src/app/components/header/header.component.ts
import { Component as Component12 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import { RouterLink as RouterLink3 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_router.js?v=1e6815a1";
import * as i014 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
function HeaderComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i014.\u0275\u0275getCurrentView();
    i014.\u0275\u0275elementStart(0, "div", 21);
    i014.\u0275\u0275listener("click", function HeaderComponent_Conditional_17_Template_div_click_0_listener($event) {
      i014.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i014.\u0275\u0275nextContext();
      return i014.\u0275\u0275resetView(ctx_r1.handleClose($event));
    });
    i014.\u0275\u0275elementStart(1, "ul", 22)(2, "li", 23)(3, "a", 24);
    i014.\u0275\u0275text(4, "Home");
    i014.\u0275\u0275elementEnd()();
    i014.\u0275\u0275elementStart(5, "li", 23)(6, "a", 25);
    i014.\u0275\u0275text(7, "New Arrivals");
    i014.\u0275\u0275elementEnd()();
    i014.\u0275\u0275elementStart(8, "li", 23)(9, "a", 26);
    i014.\u0275\u0275text(10, "Top Selling");
    i014.\u0275\u0275elementEnd()();
    i014.\u0275\u0275elementStart(11, "li", 27);
    i014.\u0275\u0275element(12, "input", 28);
    i014.\u0275\u0275elementStart(13, "div", 29);
    i014.\u0275\u0275element(14, "img", 30);
    i014.\u0275\u0275elementEnd()()()();
  }
}
var HeaderComponent = class _HeaderComponent {
  isMenuOpened = false;
  handleOpen() {
    this.isMenuOpened = true;
  }
  handleClose(event) {
    const className = event.target.classList[0];
    const foundMenu = document.querySelector(`.${className}`).closest(".header__mobile-menu");
    if (!foundMenu) {
      this.isMenuOpened = false;
    }
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i014.\u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 28, vars: 1, consts: [[1, "header", "p-5", "py-3", "lg:px-32", "bg-white", "flex", "justify-between", "items-center", "gap-7"], [1, "header__logo", "font-extrabold", "text-2xl", "lg:text-3xl", "integral", "font-black", "flex", "items-center", "gap-5"], [1, "header__mobile-btn", "flex", "items-center", "md:hidden", "pt-1"], [3, "click"], ["src", "assets/icons/menu.svg", "alt", "Burger"], [1, "header__nav"], [1, "header__menu", "hidden", "md:flex", "items-center", "gap-5"], [1, "header__menu---item"], ["routerLink", "/"], ["href", "#newarrivals"], ["href", "#topselling"], [1, "header__mobile-menu---outside", "bg-[rgba(0,0,0,.5)]", "fixed", "w-screen", "h-screen", "top-0", "left-0", "z-10"], [1, "header__search", "hidden", "md:flex", "items-center", "relative", "w-full", "flex-1"], ["src", "assets/icons/search.svg", "alt", "Search", 1, "absolute", "left-3"], ["type", "text", "name", "", "id", "", "placeholder", "Search for products...", 1, "text-[rgba(0,", "0,", "0,", ".4)]", "bg-[#F0F0F0]", "rounded-full", "px-10", "py-3", "w-full", "outline-none"], [1, "header__actions", "flex", "items-center", "gap-5"], [1, "header__action"], ["routerLink", "/cart", 1, "flex", "items-center"], ["src", "assets/icons/cart.svg", "alt", "Cart"], [1, "flex", "items-center"], ["src", "assets/icons/user.svg", "alt", "User"], [1, "header__mobile-menu---outside", "bg-[rgba(0,0,0,.5)]", "fixed", "w-screen", "h-screen", "top-0", "left-0", "z-10", 3, "click"], [1, "header__mobile-menu", "md:hidden", "fixed", "left-0", "top-0", "h-[100%]", "bg-white", "p-5", "pr-10", "flex", "flex-col", "gap-3"], [1, "header__mobile-menu---item"], ["routerLink", "/", 1, "header__mobile-menu---item-link", "text-sm"], ["href", "#newarrivals", 1, "header__mobile-menu---item-link", "text-sm"], ["href", "#topselling", 1, "header__mobile-menu---item-link", "text-sm"], [1, "header__mobile-menu---item", "relative", "w-auto", "flex", "gap-1", "items-center"], ["type", "text", "name", "", "id", "", "placeholder", "Search for products...", 1, "text-[rgba(0,", "0,", "0,", ".4)]", "bg-[#F0F0F0]", "rounded-full", "px-5", "py-2", "text-sm", "outline-none"], [1, "header__mobile---menu-item__search-btn", "bg-[#f0f0f0]", "p-2", "rounded-full"], ["src", "assets/icons/search.svg", "alt", "Search", 1, "w-5"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      i014.\u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      i014.\u0275\u0275listener("click", function HeaderComponent_Template_button_click_3_listener() {
        return ctx.handleOpen();
      });
      i014.\u0275\u0275element(4, "img", 4);
      i014.\u0275\u0275elementEnd()();
      i014.\u0275\u0275text(5, " CARTIFY.CO ");
      i014.\u0275\u0275elementEnd();
      i014.\u0275\u0275elementStart(6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
      i014.\u0275\u0275text(10, "Home");
      i014.\u0275\u0275elementEnd()();
      i014.\u0275\u0275elementStart(11, "li", 7)(12, "a", 9);
      i014.\u0275\u0275text(13, "New Arrivals");
      i014.\u0275\u0275elementEnd()();
      i014.\u0275\u0275elementStart(14, "li", 7)(15, "a", 10);
      i014.\u0275\u0275text(16, "Top Selling");
      i014.\u0275\u0275elementEnd()()();
      i014.\u0275\u0275template(17, HeaderComponent_Conditional_17_Template, 15, 0, "div", 11);
      i014.\u0275\u0275elementEnd();
      i014.\u0275\u0275elementStart(18, "div", 12);
      i014.\u0275\u0275element(19, "img", 13)(20, "input", 14);
      i014.\u0275\u0275elementEnd();
      i014.\u0275\u0275elementStart(21, "div", 15)(22, "div", 16)(23, "a", 17);
      i014.\u0275\u0275element(24, "img", 18);
      i014.\u0275\u0275elementEnd()();
      i014.\u0275\u0275elementStart(25, "div", 16)(26, "button", 19);
      i014.\u0275\u0275element(27, "img", 20);
      i014.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      i014.\u0275\u0275advance(17);
      i014.\u0275\u0275conditional(ctx.isMenuOpened ? 17 : -1);
    }
  }, dependencies: [RouterLink3], styles: ["\n\n.header__mobile-menu[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideFromLeft 0.4s linear;\n}\n@keyframes _ngcontent-%COMP%_slideFromLeft {\n  from {\n    transform: translateX(-400px);\n  }\n  to {\n    transform: translateX(0px);\n  }\n}\n/*# sourceMappingURL=header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i014.\u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/components/header/header.component.ts", lineNumber: 10 });
})();
(() => {
  function HeaderComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=src%2Fapp%2Fcomponents%2Fheader%2Fheader.component.ts%40HeaderComponent&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i014.\u0275\u0275replaceMetadata(HeaderComponent, m.default, [i014], [RouterLink3]));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && HeaderComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === "src%2Fapp%2Fcomponents%2Fheader%2Fheader.component.ts%40HeaderComponent" && HeaderComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/footer/footer.component.ts
import { Component as Component13 } from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
import * as i015 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
var FooterComponent = class _FooterComponent {
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i015.\u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "max-w-[calc(100%-40px)]", "lg:max-w-[calc(100%-256px)]", "m-auto"], [1, "py-3", "px-5", "lg:px-32", "text-[rgba(0,0,0,.6)]", "text-sm", "lg:text-base", "text-center"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      i015.\u0275\u0275element(0, "hr", 0);
      i015.\u0275\u0275elementStart(1, "footer", 1);
      i015.\u0275\u0275text(2, " Cartify \xA9 &2025 All Rights Reserved.\n");
      i015.\u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i015.\u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/components/footer/footer.component.ts", lineNumber: 9 });
})();
(() => {
  function FooterComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=src%2Fapp%2Fcomponents%2Ffooter%2Ffooter.component.ts%40FooterComponent&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i015.\u0275\u0275replaceMetadata(FooterComponent, m.default, [i015], []));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && FooterComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === "src%2Fapp%2Fcomponents%2Ffooter%2Ffooter.component.ts%40FooterComponent" && FooterComponent_HmrLoad(d.timestamp)));
})();

// src/app/app.component.ts
import * as i016 from "/@fs/Users/nick/Desktop/cartify/.angular/cache/19.1.3/cartify/vite/deps/@angular_core.js?v=1e6815a1";
var AppComponent = class _AppComponent {
  productService;
  constructor(productService) {
    this.productService = productService;
  }
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      if (!localStorage.getItem("products")) {
        localStorage.setItem("products", JSON.stringify(data));
      }
    });
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(i016.\u0275\u0275directiveInject(ProductService));
  };
  static \u0275cmp = /* @__PURE__ */ i016.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "main"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i016.\u0275\u0275element(0, "app-header");
      i016.\u0275\u0275elementStart(1, "main", 0);
      i016.\u0275\u0275element(2, "router-outlet");
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275element(3, "app-footer");
    }
  }, dependencies: [RouterOutlet3, HeaderComponent, FooterComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i016.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 13 });
})();
(() => {
  function AppComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=src%2Fapp%2Fapp.component.ts%40AppComponent&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i016.\u0275\u0275replaceMetadata(AppComponent, m.default, [i016, product_service_exports], [RouterOutlet3, HeaderComponent, FooterComponent]));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AppComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === "src%2Fapp%2Fapp.component.ts%40AppComponent" && AppComponent_HmrLoad(d.timestamp)));
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => (
  // aq erori gamomaq
  console.error(err)
));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVyby9oZXJvLmNvbXBvbmVudC50cyIsInNyYy9hcHAvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFydG5lcnMvcGFydG5lcnMuY29tcG9uZW50LnRzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhcnRuZXJzL3BhcnRuZXJzLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC50cyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC50cyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9wYWdlcy9lcnJvci9lcnJvci5jb21wb25lbnQudHMiLCJzcmMvYXBwL3BhZ2VzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9wYWdlcy9zaW5nbGUtcHJvZHVjdC9zaW5nbGUtcHJvZHVjdC5jb21wb25lbnQudHMiLCJzcmMvYXBwL3BhZ2VzL3NpbmdsZS1wcm9kdWN0L3NpbmdsZS1wcm9kdWN0LmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9zZXJ2aWNlcy9wcm9kdWN0LnNlcnZpY2UudHMiLCJzcmMvYXBwL3NlcnZpY2VzL2NhcnQuc2VydmljZS50cyIsInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LmNvbXBvbmVudC50cyIsInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL2NhcnQtcHJvZHVjdHMvY2FydC1wcm9kdWN0cy5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC1wcm9kdWN0cy9jYXJ0LXByb2R1Y3RzLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9wYWdlcy9hZG1pbi9hZG1pbi5jb21wb25lbnQudHMiLCJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL2FkbWluLWFkZC1wcm9kdWN0L2FkbWluLWFkZC1wcm9kdWN0LmNvbXBvbmVudC50cyIsInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1hZGQtcHJvZHVjdC9hZG1pbi1hZGQtcHJvZHVjdC5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvYXBwLnJvdXRlcy50cyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXBBcHBsaWNhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgYXBwQ29uZmlnIH0gZnJvbSAnLi9hcHAvYXBwLmNvbmZpZyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC9hcHAuY29tcG9uZW50JztcblxuYm9vdHN0cmFwQXBwbGljYXRpb24oQXBwQ29tcG9uZW50LCBhcHBDb25maWcpLmNhdGNoKChlcnIpID0+XG4gIC8vIGFxIGVyb3JpIGdhbW9tYXFcbiAgY29uc29sZS5lcnJvcihlcnIpXG4pO1xuIiwiaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWcsIHByb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcbmltcG9ydCB7XG4gIHByb3ZpZGVDbGllbnRIeWRyYXRpb24sXG4gIHdpdGhFdmVudFJlcGxheSxcbn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBwcm92aWRlSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGNvbnN0IGFwcENvbmZpZzogQXBwbGljYXRpb25Db25maWcgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uKHsgZXZlbnRDb2FsZXNjaW5nOiB0cnVlIH0pLFxuICAgIHByb3ZpZGVSb3V0ZXIocm91dGVzKSxcbiAgICBwcm92aWRlSHR0cENsaWVudCgpLFxuICAgIHByb3ZpZGVDbGllbnRIeWRyYXRpb24od2l0aEV2ZW50UmVwbGF5KCkpLFxuICBdLFxufTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVyb0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVyby9oZXJvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXJ0bmVyc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFydG5lcnMvcGFydG5lcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIGltcG9ydHM6IFtIZXJvQ29tcG9uZW50LCBQYXJ0bmVyc0NvbXBvbmVudCwgUHJvZHVjdHNDb21wb25lbnRdLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5zY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gIHNwbGl0dGVkRmlyc3RGb3VyID0gSlNPTi5wYXJzZShcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdHMnKSB8fCAnW10nXG4gICkuc2xpY2UoMCwgNCk7XG4gIHNwbGl0dGVkTGFzdEZvdXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9kdWN0cycpIHx8ICdbXScpLnNsaWNlKFxuICAgIDQsXG4gICAgOFxuICApO1xufVxuIiwiPGFwcC1oZXJvPjwvYXBwLWhlcm8+XG48YXBwLXBhcnRuZXJzPjwvYXBwLXBhcnRuZXJzPlxuPHNlY3Rpb24gaWQ9XCJuZXdhcnJpdmFsc1wiPlxuICA8YXBwLXByb2R1Y3RzXG4gICAgdGl0bGU9XCJOZXcgQXJyaXZhbHNcIlxuICAgIFtwcm9kdWN0c109XCJzcGxpdHRlZEZpcnN0Rm91clwiXG4gID48L2FwcC1wcm9kdWN0cz5cbjwvc2VjdGlvbj5cbjxociBjbGFzcz1cIm1heC13LVtjYWxjKDEwMCUtNDBweCldIGxnOm1heC13LVtjYWxjKDEwMCUtMjU2cHgpXSBtLWF1dG9cIiAvPlxuPHNlY3Rpb24gaWQ9XCJ0b3BzZWxsaW5nXCI+XG4gIDxhcHAtcHJvZHVjdHNcbiAgICB0aXRsZT1cIlRvcCBTZWxsaW5nXCJcbiAgICBbcHJvZHVjdHNdPVwic3BsaXR0ZWRMYXN0Rm91clwiXG4gID48L2FwcC1wcm9kdWN0cz5cbjwvc2VjdGlvbj5cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaGVybycsXHJcbiAgaW1wb3J0czogW10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hlcm8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9oZXJvLmNvbXBvbmVudC5zY3NzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlcm9Db21wb25lbnQge31cclxuIiwiPHNlY3Rpb25cclxuICBpZD1cImhvbWVcIlxyXG4gIGNsYXNzPVwiaG9tZSB3LWZ1bGwgbGc6aC1bNzAwcHhdIGxnOmJnLVt1cmwoJ2Fzc2V0cy9pbWFnZXMvYmcxLnBuZycpXSBiZy1jb250YWluIGJnLW5vLXJlcGVhdCBiZy1bI0YyRjBGMV0gYmctYm90dG9tIHAtMCBsZzpweC0zMiBsZzpyZWxhdGl2ZVwiXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwiaG9tZV9fY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiaG9tZV9fY29udGFpbmVyLS0tY29udGVudCBsZzp3LVtjYWxjKDQ1JS02NHB4KV0gbGc6YWJzb2x1dGUgbGc6Ym90dG9tLVsyMDBweF1cIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJob21lX19jb250YWluZXItLS1jb250ZW50LXRpdGxlIGludGVncmFsIGxnOmhpZGRlbiBmb250LWJsYWNrIHRleHQtNHhsIG1iLTcgcHgtNSBsZzpwLTAgcHQtMTBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgRklORCBDTE9USEVTIFRIQVQgTUFUQ0hFUyBZT1VSIFNUWUxFXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJob21lX19jb250YWluZXItLS1jb250ZW50LWRlc2NyaXB0aW9uIHRleHQtW3JnYmEoMCwwLDAsLjYpXSBweC01IGxnOnAtMFwiXHJcbiAgICAgID5cclxuICAgICAgICBCcm93c2UgdGhyb3VnaCBvdXIgZGl2ZXJzZSByYW5nZSBvZiBtZXRpY3Vsb3VzbHkgY3JhZnRlZCBnYXJtZW50cyxcclxuICAgICAgICBkZXNpZ25lZCB0byBicmluZyBvdXQgeW91ciBpbmRpdmlkdWFsaXR5IGFuZCBjYXRlciB0byB5b3VyIHNlbnNlIG9mXHJcbiAgICAgICAgc3R5bGUuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaG9tZV9fY29udGFpbmVyLS0tY29udGVudC1idXR0b24gcHgtNSBsZzpwLTBcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzcz1cImJnLWJsYWNrIHJvdW5kZWQtZnVsbCBweS00IHB4LTE2IHRleHQtd2hpdGUgbXQtNyBtYi03IGxnOm1iLTE2IHctZnVsbCBtZDp3LWF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFNob3AgTm93XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJob21lX19jb250YWluZXItLS1jb250ZW50LXN0YXRzIGZsZXgganVzdGlmeS1iZXR3ZWVuIHB4LTUgbGc6cC0wIHBiLTVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhvbWVfX2NvbnRhaW5lci0tLWNvbnRlbnQtc3RhdFwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cImhvbWVfX2NvbnRhaW5lci0tLWNvbnRlbnQtc3RhdF9fY291bnQgdGV4dC0yeGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgMjAwK1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwiaG9tZV9fY29udGFpbmVyLS0tY29udGVudC1zdGF0X190aXRsZSB0ZXh0LXhzIG1kOnRleHQtYmFzZSB0ZXh0LVtyZ2JhKDAsMCwwLC42KV0gbXQtMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEludGVybmF0aW9uYWwgQnJhbmRzXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG9tZV9fY29udGFpbmVyLS0tY29udGVudC1zdGF0XCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwiaG9tZV9fY29udGFpbmVyLS0tY29udGVudC1zdGF0X19jb3VudCB0ZXh0LTJ4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAyLDAwMCtcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cImhvbWVfX2NvbnRhaW5lci0tLWNvbnRlbnQtc3RhdF9fdGl0bGUgdGV4dC14cyBtZDp0ZXh0LWJhc2UgdGV4dC1bcmdiYSgwLDAsMCwuNildIG10LTJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBIaWdoLVF1YWxpdHkgUHJvZHVjdHNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJob21lX19jb250YWluZXItLS1jb250ZW50LXN0YXRcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJob21lX19jb250YWluZXItLS1jb250ZW50LXN0YXRfX2NvdW50IHRleHQtMnhsIG1kOnRleHQtNXhsIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDMwLDAwMCtcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cImhvbWVfX2NvbnRhaW5lci0tLWNvbnRlbnQtc3RhdF9fdGl0bGUgdGV4dC14cyBtZDp0ZXh0LWJhc2UgdGV4dC1bcmdiYSgwLDAsMCwuNildIG10LTJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBIYXBweSBDdXN0b21lcnNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwiaG9tZV9fY29udGFpbmVyLS0tY29udGVudC0tLWltYWdlIG1kOmhpZGRlbiBtdC0xMCBmbGV4IGp1c3RpZnktY2VudGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9iZzIucG5nXCIgYWx0PVwiSW1hZ2VcIiBjbGFzcz1cInctWzEwMCVdXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBhcnRuZXJzJyxcclxuICBpbXBvcnRzOiBbXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFydG5lcnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9wYXJ0bmVycy5jb21wb25lbnQuc2NzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhcnRuZXJzQ29tcG9uZW50IHtcclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBhcnRuZXJzXCI+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJwYXJ0bmVyc19fd3JhcHBlciBmbGV4IGZsZXgtd3JhcCBsZzpqdXN0aWZ5LWJldHdlZW4ganVzdGlmeS1jZW50ZXIgZ2FwLTUgbGc6Z2FwLTAgaXRlbXMtY2VudGVyIGJnLWJsYWNrIHAtNSBsZzpweS04IGxnOnB4LTMyXCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFydG5lclwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiYXNzZXRzL2ltYWdlcy9sb2dvcy92ZXJzYWNlLnBuZ1wiXHJcbiAgICAgICAgYWx0PVwiVmVyc2FjZSBsb2dvXCJcclxuICAgICAgICBjbGFzcz1cInctMjggaC1hdXRvXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhcnRuZXJcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvbG9nb3MvemFyYS5wbmdcIlxyXG4gICAgICAgIGFsdD1cIlphcmEgbG9nb1wiXHJcbiAgICAgICAgY2xhc3M9XCJ3LTIwIGgtYXV0b1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYXJ0bmVyXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJhc3NldHMvaW1hZ2VzL2xvZ29zL2d1Y2NpLnBuZ1wiXHJcbiAgICAgICAgYWx0PVwiR3VjY2kgbG9nb1wiXHJcbiAgICAgICAgY2xhc3M9XCJ3LTI4IGgtYXV0b1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYXJ0bmVyXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJhc3NldHMvaW1hZ2VzL2xvZ29zL3ByYWRhLnBuZ1wiXHJcbiAgICAgICAgYWx0PVwiUHJhZGEgbG9nb1wiXHJcbiAgICAgICAgY2xhc3M9XCJ3LTI4IGgtYXV0b1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYXJ0bmVyXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJhc3NldHMvaW1hZ2VzL2xvZ29zL2NhbHZpbmtsZWluLnBuZ1wiXHJcbiAgICAgICAgYWx0PVwiQ2FsdmluIEtsZWluIGxvZ29cIlxyXG4gICAgICAgIGNsYXNzPVwidy0yOCBoLWF1dG9cIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByb2R1Y3RDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1wcm9kdWN0cycsXHJcbiAgaW1wb3J0czogW1Byb2R1Y3RDYXJkQ29tcG9uZW50XSxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9wcm9kdWN0cy5jb21wb25lbnQuc2NzcycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHByb2R1Y3RzOiBQcm9kdWN0W10gPSBbXTtcclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicHJvZHVjdHNfX2NvbnRhaW5lciBwdC04IGxnOnB0LTE2IHBsLTUgbGc6cHgtMzJcIj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cInByb2R1Y3RzX19jb250YWluZXItLS10aXRsZSBpbnRlZ3JhbCBmb250LXNlbWlib2xkIHRleHQtM3hsIGxnOnRleHQtNXhsIHVwcGVyY2FzZSB0ZXh0LWNlbnRlciBwYi01IGxnOnBiLTEwXCJcclxuICA+XHJcbiAgICB7eyB0aXRsZSB9fVxyXG4gIDwvZGl2PlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwicHJvZHVjdHNfX2NvbnRhaW5lci0tLXByb2R1Y3RzLWdyaWQgZ2FwLTYgZmxleCBvdmVyZmxvdy14LWF1dG8gdy1bMTAwJV0gbGc6Z3JpZCBsZzpncmlkLWNvbHMtNCBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgPlxyXG4gICAgQGZvciAocHJvZHVjdCBvZiBwcm9kdWN0czsgdHJhY2sgcHJvZHVjdC5pZCkge1xyXG4gICAgPGFwcC1wcm9kdWN0LWNhcmQgW3Byb2R1Y3REYXRhXT1cInByb2R1Y3RcIj48L2FwcC1wcm9kdWN0LWNhcmQ+XHJcbiAgICB9XHJcbiAgICA8IS0tIDxhcHAtcHJvZHVjdC1jYXJkPjwvYXBwLXByb2R1Y3QtY2FyZD5cclxuICAgIDxhcHAtcHJvZHVjdC1jYXJkPjwvYXBwLXByb2R1Y3QtY2FyZD5cclxuICAgIDxhcHAtcHJvZHVjdC1jYXJkPjwvYXBwLXByb2R1Y3QtY2FyZD5cclxuICAgIDxhcHAtcHJvZHVjdC1jYXJkIGNsYXNzPVwicHItNVwiPjwvYXBwLXByb2R1Y3QtY2FyZD4gLS0+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX2NvbnRhaW5lci0tLXByb2R1Y3RzLWJ1dHRvbiB0ZXh0LWNlbnRlciBtdC01IHByLTVcIj5cclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3M9XCJiZy13aGl0ZSBib3JkZXIgcm91bmRlZC1mdWxsIHB5LTMgcHgtMTYgdGV4dC1ibGFjayBtdC03IG1iLTcgbGc6bWItMTYgdy1mdWxsIG1kOnctYXV0b1wiXHJcbiAgICA+XHJcbiAgICAgIFZpZXcgQWxsXHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcHJvZHVjdC1jYXJkJyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q2FyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHByb2R1Y3REYXRhITogUHJvZHVjdDtcbn1cbiIsIjxkaXYgY2xhc3M9XCJwcm9kdWN0LWNhcmRcIj5cbiAgPGFcbiAgICBbcm91dGVyTGlua109XCJbJy9wcm9kdWN0JywgcHJvZHVjdERhdGEuaWRdXCJcbiAgICByb3V0ZXJMaW5rQWN0aXZlPVwicm91dGVyLWxpbmstYWN0aXZlXCJcbiAgICA+PGRpdlxuICAgICAgY2xhc3M9XCJwcm9kdWN0LWNhcmRfX2ltYWdlIGJnLVsjRjBFRUVEXSBweS04IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtM3hsXCJcbiAgICA+XG4gICAgICA8aW1nIHNyYz1cInt7IHByb2R1Y3REYXRhLmltYWdlIH19XCIgW2FsdF09XCJcIiBjbGFzcz1cImgtNjRcIiAvPjwvZGl2XG4gID48L2E+XG4gIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWNhcmRfX2NvbnRlbnQgcHQtM1wiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWNhcmRfX3RpdGxlIGZvbnQtYm9sZCBjYXBpdGFsaXplXCI+XG4gICAgICA8YVxuICAgICAgICBbcm91dGVyTGlua109XCJbJy9wcm9kdWN0JywgcHJvZHVjdERhdGEuaWRdXCJcbiAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cInJvdXRlci1saW5rLWFjdGl2ZVwiXG4gICAgICAgID57eyBwcm9kdWN0RGF0YS50aXRsZSB9fTwvYVxuICAgICAgPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWNhcmRfX3ByaWNlIHB0LTEgdGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgJHt7IHByb2R1Y3REYXRhLnByaWNlIH19XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWVycm9yJyxcbiAgaW1wb3J0czogW10sXG4gIHRlbXBsYXRlVXJsOiAnLi9lcnJvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9lcnJvci5jb21wb25lbnQuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JDb21wb25lbnQge1xuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZXJyb3ItY29udGFpbmVyXCI+XG4gIDxkaXZcbiAgICBjbGFzcz1cImVycm9yLWNvbnRhaW5lcl9fdGl0bGUgdGV4dC02eGwgZm9udC1ibGFjayBhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMlwiXG4gID5cbiAgICA0MDQgUEFHRSBOT1QgRk9VTkQuXG4gIDwvZGl2PlxuPC9kaXY+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpbmdsZS1wcm9kdWN0JyxcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vc2luZ2xlLXByb2R1Y3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vc2luZ2xlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBTaW5nbGVQcm9kdWN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIHByb2R1Y3QhOiBQcm9kdWN0O1xuICBxdWFudGl0eSA9IDE7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJykhO1xuICAgIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdEJ5SWQoaWQpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0ID0gZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIGluY3JlbWVudFF1YW50aXR5KCkge1xuICAgIHRoaXMucXVhbnRpdHkrKztcbiAgfVxuXG4gIGRlY3JlbWVudFF1YW50aXR5KCkge1xuICAgIGlmICh0aGlzLnF1YW50aXR5ID4gMSkge1xuICAgICAgdGhpcy5xdWFudGl0eS0tO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvQ2FydChwcm9kdWN0OiBQcm9kdWN0LCBxdWFudGl0eTogbnVtYmVyKSB7XG4gICAgLy8gdGhpcy5jYXJ0U2VydmljZS5hZGRUb0NhcnQoeyAuLi5wcm9kdWN0LCBxdWFudGl0eSB9KTtcblxuICAgIC8vIGNyZWF0ZSBjYXJ0IGlmIG5vdCBpbiBsb2NhbHN0b3JhZ2UgdGhlbiBhZGQgaXRlbXNcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgICB9XG5cbiAgICBsZXQgY2FydCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSEpO1xuICAgIGxldCBpdGVtID0geyAuLi5wcm9kdWN0LCBxdWFudGl0eSB9O1xuICAgIGNhcnQucHVzaChpdGVtKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInNpbmdsZS1wcm9kdWN0IHAtNSBsZzpweC0zMlwiICpuZ0lmPVwicHJvZHVjdFwiPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJzaW5nbGUtcHJvZHVjdF9fcHJvZHVjdC1jb250YWluZXIgZmxleCBmbGV4LWNvbCBnYXAtNCBsZzpnYXAtOCBsZzpmbGV4LXJvd1wiXG4gID5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInNpbmdsZS1wcm9kdWN0X19wcm9kdWN0LWNvbnRhaW5lci0tLWltYWdlIGJnLVsjRjBFRUVEXSBweS04IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtM3hsIGxnOnctWzM1JV0gdy1mdWxsXCJcbiAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzPVwibGc6aC1bNTAwcHhdIGgtNjBcIlxuICAgICAgICBbc3JjXT1cInByb2R1Y3QuaW1hZ2VcIlxuICAgICAgICBbYWx0XT1cInByb2R1Y3QudGl0bGVcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXByb2R1Y3RfX3Byb2R1Y3QtY29udGFpbmVyLS0tY29udGVudCBsZzp3LVs2NSVdIHctZnVsbFwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInNpbmdsZS1wcm9kdWN0X19wcm9kdWN0LWNvbnRhaW5lci0tLXByb2R1Y3QtdGl0bGUgaW50ZWdyYWwgZm9udC1ibGFjayB0ZXh0LTJ4bCBsZzp0ZXh0LTV4bFwiXG4gICAgICA+XG4gICAgICAgIHt7IHByb2R1Y3QudGl0bGUgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInNpbmdsZS1wcm9kdWN0X19wcm9kdWN0LWNvbnRhaW5lci0tLXByb2R1Y3QtcHJpY2UgdGV4dC0zeGwgZm9udC1ib2xkIG10LTUgcGItNVwiXG4gICAgICA+XG4gICAgICAgICR7eyBwcm9kdWN0LnByaWNlIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJzaW5nbGUtcHJvZHVjdF9fcHJvZHVjdC1jb250YWluZXItLS1wcm9kdWN0LWRlc2NyaXB0aW9uIHRleHQtW3JnYmEoMCwwLDAsMC42KV1cIlxuICAgICAgPlxuICAgICAgICB7eyBwcm9kdWN0LmRlc2NyaXB0aW9uIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxociBjbGFzcz1cIm15LTVcIiAvPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInNpbmdsZS1wcm9kdWN0X19wcm9kdWN0LWNvbnRhaW5lci0tLXByb2R1Y3QtYWN0aW9ucyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNVwiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInNpbmdsZS1wcm9kdWN0X19wcm9kdWN0LWNvbnRhaW5lci0tLXByb2R1Y3QtcXVhbnRpdHkgYmctWyNGMEVFRURdIHB5LTQgcHgtOCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJzaW5nbGUtcHJvZHVjdF9fcHJvZHVjdC1jb250YWluZXItLS1wcm9kdWN0LXF1YW50aXR5LS0taW5wdXQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3M9XCJiZy1bI0YwRUVFRF0gcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImRlY3JlbWVudFF1YW50aXR5KClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9taW51cy5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBvdXRsaW5lLW5vbmUgdy0xNiBiZy10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJxdWFudGl0eVwiXG4gICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzcz1cImJnLVsjRjBFRUVEXSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiaW5jcmVtZW50UXVhbnRpdHkoKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL3BsdXMuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwic2luZ2xlLXByb2R1Y3RfX3Byb2R1Y3QtY29udGFpbmVyLS0tcHJvZHVjdC1jYXJ0LWJ0biBmbGV4LTEgbGc6ZmxleC1pbml0aWFsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiYmctYmxhY2sgcm91bmRlZC1mdWxsIHB5LTQgcHgtMTYgdGV4dC13aGl0ZSB3LVsxMDAlXVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiYWRkVG9DYXJ0KHByb2R1Y3QsIHRoaXMucXVhbnRpdHkpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgVG8gQ2FydFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJ2h0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldFByb2R1Y3RzKCk6IE9ic2VydmFibGU8UHJvZHVjdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UHJvZHVjdFtdPih0aGlzLmJhc2VVcmwpO1xuICB9XG5cbiAgZ2V0UHJvZHVjdEJ5SWQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3Q+KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIGFkZFByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxQcm9kdWN0Pih0aGlzLmJhc2VVcmwsIHByb2R1Y3QpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0U2VydmljZSB7XG4gIHByaXZhdGUgY2FydDogUHJvZHVjdFtdID0gW107XG5cbiAgZ2V0Q2FydEl0ZW1zKCk6IFByb2R1Y3RbXSB7XG4gICAgcmV0dXJuIHRoaXMuY2FydDtcbiAgfVxuXG4gIGFkZFRvQ2FydChwcm9kdWN0OiBQcm9kdWN0KTogdm9pZCB7XG4gICAgY29uc3QgcHJvZHVjdEluQ2FydCA9IHRoaXMuY2FydC5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcblxuICAgIGlmIChwcm9kdWN0SW5DYXJ0KSB7XG4gICAgICBwcm9kdWN0SW5DYXJ0LnF1YW50aXR5Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FydC5wdXNoKHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IDEgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRnJvbUNhcnQocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQge1xuICAgIGNvbnN0IHByb2R1Y3RJbmRleCA9IHRoaXMuY2FydC5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpO1xuXG4gICAgaWYgKHByb2R1Y3RJbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmNhcnQuc3BsaWNlKHByb2R1Y3RJbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJDYXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FydCA9IFtdO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBDYXJ0UHJvZHVjdHNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NhcnQtcHJvZHVjdHMvY2FydC1wcm9kdWN0cy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2FydCcsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENhcnRQcm9kdWN0c0NvbXBvbmVudF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2NhcnQuY29tcG9uZW50LnNjc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0Q29tcG9uZW50IHtcbiAgY2FydEl0ZW1zOiBQcm9kdWN0W10gPSBbXTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhcnRJdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSEpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FydCBwdC0xMCBwYi01IHB4LTUgbGc6cHgtMzJcIj5cbiAgPGRpdlxuICAgIGNsYXNzPVwiY2FydF9fdGl0bGUgaW50ZWdyYWwgZm9udC1zZW1pYm9sZCB0ZXh0LTN4bCBsZzp0ZXh0LTV4bCB1cHBlcmNhc2UgcGItNSBsZzpwYi0xMFwiXG4gID5cbiAgICBZb3VyIENhcnRcbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjYXJ0X19mbGV4XCI+XG4gICAgPGFwcC1jYXJ0LXByb2R1Y3RzIFtjYXJ0SXRlbXNdPVwidGhpcy5jYXJ0SXRlbXNcIj48L2FwcC1jYXJ0LXByb2R1Y3RzPlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2FydC1wcm9kdWN0cycsXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1wcm9kdWN0cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9jYXJ0LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFByb2R1Y3RzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY2FydEl0ZW1zOiBQcm9kdWN0W10gPSBbXTtcblxuICBwcm9kdWN0c0xlbmd0aDogbnVtYmVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpISkubGVuZ3RoO1xuXG4gIGluY3JlbWVudFF1YW50aXR5KHByb2R1Y3Q6IFByb2R1Y3QpIHtcbiAgICBwcm9kdWN0LnF1YW50aXR5Kys7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydEl0ZW1zKSk7XG4gIH1cblxuICBkZWNyZW1lbnRRdWFudGl0eShwcm9kdWN0OiBQcm9kdWN0KSB7XG4gICAgaWYgKHByb2R1Y3QucXVhbnRpdHkgPiAxKSB7XG4gICAgICBwcm9kdWN0LnF1YW50aXR5LS07XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkodGhpcy5jYXJ0SXRlbXMpKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVGcm9tQ2FydChwcm9kdWN0OiBQcm9kdWN0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNhcnRJdGVtcy5pbmRleE9mKHByb2R1Y3QpO1xuICAgIHRoaXMuY2FydEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydEl0ZW1zKSk7XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2xhc3M9XCJjYXJ0LXByb2R1Y3RzIGJvcmRlciByb3VuZGVkLXhsIHAtNSBmbGV4IGZsZXgtY29sIGdhcC03IGp1c3RpZnktc3RyZXRjaCBpdGVtcy1zdHJldGNoXCJcbiAgKm5nSWY9XCJ0aGlzLnByb2R1Y3RzTGVuZ3RoID4gMFwiXG4+XG4gIEBmb3IoY2FydEl0ZW0gb2YgY2FydEl0ZW1zOyB0cmFjayBjYXJ0SXRlbS5pZCkge1xuICA8ZGl2IGNsYXNzPVwiY2FydC1wcm9kdWN0IGZsZXggZ2FwLTUgdy1mdWxsXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJjYXJ0LXByb2R1Y3RfX2ltYWdlIGJnLVsjRjBFRUVEXSBwLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC0zeGxcIlxuICAgID5cbiAgICAgIDxpbWcgW3NyY109XCJjYXJ0SXRlbS5pbWFnZVwiIFthbHRdPVwiY2FydEl0ZW0udGl0bGVcIiBjbGFzcz1cInctMzYgaC0zNlwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcnQtcHJvZHVjdF9fY29udGVudCBmbGV4LTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXByb2R1Y3RfX2NvbnRlbnQtLS10aXRsZSBmb250LWJvbGQgdGV4dC14bFwiPlxuICAgICAgICB7eyBjYXJ0SXRlbS50aXRsZSB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FydC1wcm9kdWN0X19jb250ZW50LS0tcHJpY2UgZm9udC1ib2xkIHRleHQtMnhsIHB0LTJcIj5cbiAgICAgICAgJHt7IGNhcnRJdGVtLnByaWNlICogY2FydEl0ZW0ucXVhbnRpdHkgfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXByb2R1Y3RfX2FjdGlvbnMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FydC1wcm9kdWN0X19hY3Rpb25zLS0tcmVtb3ZlLWJ0blwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgc3JjPVwiYXNzZXRzL2ljb25zL3RyYXNoLnN2Z1wiXG4gICAgICAgICAgYWx0PVwiVHJhc2hcIlxuICAgICAgICAgIChjbGljayk9XCJyZW1vdmVGcm9tQ2FydChjYXJ0SXRlbSlcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FydC1wcm9kdWN0X19hY3Rpb25zLS0tcXVhbnRpdHkgYmctWyNGMEVFRURdIHAtNCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjYXJ0LXByb2R1Y3RfX2FjdGlvbnMtLS1xdWFudGl0eS0tLWlucHV0IGZsZXggaXRlbXMtY2VudGVyIGdhcC00XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiYmctWyNGMEVFRURdIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZGVjcmVtZW50UXVhbnRpdHkoY2FydEl0ZW0pXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9taW51cy5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBvdXRsaW5lLW5vbmUgdy0xNiBiZy10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImNhcnRJdGVtLnF1YW50aXR5XCJcbiAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cImJnLVsjRjBFRUVEXSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImluY3JlbWVudFF1YW50aXR5KGNhcnRJdGVtKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvcGx1cy5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8aHIgLz5cbiAgfVxuPC9kaXY+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFkbWluQWRkUHJvZHVjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYWRtaW4tYWRkLXByb2R1Y3QvYWRtaW4tYWRkLXByb2R1Y3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFkbWluJyxcbiAgaW1wb3J0czogW0FkbWluQWRkUHJvZHVjdENvbXBvbmVudF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9hZG1pbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9hZG1pbi5jb21wb25lbnQuc2NzcycsXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluQ29tcG9uZW50IHt9XG4iLCI8ZGl2IGNsYXNzPVwiYWRtaW4gcHgtNSBsZzpweC0zMiBweS0xMFwiPlxuICA8ZGl2IGNsYXNzPVwiYWRtaW5fX2FkZC1wcm9kdWN0XCI+XG4gICAgPGFwcC1hZG1pbi1hZGQtcHJvZHVjdD48L2FwcC1hZG1pbi1hZGQtcHJvZHVjdD5cbiAgPC9kaXY+XG48L2Rpdj5cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRm9ybUJ1aWxkZXIsXG4gIEZvcm1Hcm91cCxcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFkbWluLWFkZC1wcm9kdWN0JyxcbiAgaW1wb3J0czogW1JlYWN0aXZlRm9ybXNNb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRtaW4tYWRkLXByb2R1Y3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vYWRtaW4tYWRkLXByb2R1Y3QuY29tcG9uZW50LnNjc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbkFkZFByb2R1Y3RDb21wb25lbnQge1xuICBhZGRQcm9kdWN0Rm9ybSE6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpIHtcbiAgICB0aGlzLmFkZFByb2R1Y3RGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB0aXRsZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHByaWNlOiBbMCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBpbWFnZVVybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWRkUHJvZHVjdEZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2UuYWRkUHJvZHVjdCh0aGlzLmFkZFByb2R1Y3RGb3JtLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ1BsZWFzZSBmaWxsIGFsbCB0aGUgZmllbGRzJyk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYWRtaW4tYWRkLXByb2R1Y3RzXCI+XG4gIDxkaXZcbiAgICBjbGFzcz1cImFkbWluLWFkZC1wcm9kdWN0c19fdGl0bGUgaW50ZWdyYWwgZm9udC1zZW1pYm9sZCB0ZXh0LTN4bCBsZzp0ZXh0LTV4bCB1cHBlcmNhc2UgcGItNSBsZzpwYi0xMFwiXG4gID5cbiAgICBBZGQgUHJvZHVjdFxuICA8L2Rpdj5cbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJhZGRQcm9kdWN0Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgPGRpdiBjbGFzcz1cImFkbWluLWFkZC1wcm9kdWN0c19fZm9ybSBmbGV4IGZsZXgtY29sIGdhcC0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWRtaW4tYWRkLXByb2R1Y3RzX19mb3JtX19pbnB1dFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiIGNsYXNzPVwidGV4dC1bcmdiYSgwLDAsMCwuNildXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGl0bGVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGJvcmRlciBib3JkZXItW3JnYmEoMCwwLDAsLjIpXSByb3VuZGVkLW1kIHAtMlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhZG1pbi1hZGQtcHJvZHVjdHNfX2Zvcm1fX2lucHV0XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcmljZVwiIGNsYXNzPVwidGV4dC1bcmdiYSgwLDAsMCwuNildXCI+UHJpY2U8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaWQ9XCJwcmljZVwiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicHJpY2VcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJpY2VcIlxuICAgICAgICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGJvcmRlciBib3JkZXItW3JnYmEoMCwwLDAsLjIpXSByb3VuZGVkLW1kIHAtMlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhZG1pbi1hZGQtcHJvZHVjdHNfX2Zvcm1fX2lucHV0XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJpbWFnZVwiIGNsYXNzPVwidGV4dC1bcmdiYSgwLDAsMCwuNildXCI+SW1hZ2UgVVJMPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cImltYWdlXCJcbiAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJpbWFnZVVybFwiXG4gICAgICAgICAgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1bcmdiYSgwLDAsMCwuMildIHJvdW5kZWQtbWQgcC0yXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImFkbWluLWFkZC1wcm9kdWN0c19fZm9ybV9faW5wdXRcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCIgY2xhc3M9XCJ0ZXh0LVtyZ2JhKDAsMCwwLC42KV1cIlxuICAgICAgICAgID5EZXNjcmlwdGlvbjwvbGFiZWxcbiAgICAgICAgPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGJvcmRlciBib3JkZXItW3JnYmEoMCwwLDAsLjIpXSByb3VuZGVkLW1kIHAtMlwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJhZG1pbi1hZGQtcHJvZHVjdHNfX2Zvcm1fX3N1Ym1pdFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgKGNsaWNrKT1cIm9uU3VibWl0KClcIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzPVwiYmctWyMwMDBdIHRleHQtd2hpdGUgcm91bmRlZC1tZCBweS0yIHB4LTVcIlxuICAgICAgICA+XG4gICAgICAgICAgQWRkIFByb2R1Y3RcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuPC9kaXY+XG4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZXJyb3IvZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IFNpbmdsZVByb2R1Y3RDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3NpbmdsZS1wcm9kdWN0L3NpbmdsZS1wcm9kdWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jYXJ0L2NhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IEFkbWluQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9hZG1pbi9hZG1pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnY2FydCcsIGNvbXBvbmVudDogQ2FydENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdhZG1pbicsIGNvbXBvbmVudDogQWRtaW5Db21wb25lbnQgfSxcbiAgeyBwYXRoOiAncHJvZHVjdHMnLCBjb21wb25lbnQ6IFByb2R1Y3RzQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ3Byb2R1Y3QvOmlkJywgY29tcG9uZW50OiBTaW5nbGVQcm9kdWN0Q29tcG9uZW50IH0sXG4gIHsgcGF0aDogJyoqJywgY29tcG9uZW50OiBFcnJvckNvbXBvbmVudCB9LFxuXTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Byb2R1Y3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgaW1wb3J0czogW1JvdXRlck91dGxldCwgSGVhZGVyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnRdLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2FwcC5jb21wb25lbnQuc2NzcycsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHMoKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2R1Y3RzJykpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RzJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCI8YXBwLWhlYWRlcj48L2FwcC1oZWFkZXI+XG48bWFpbiBjbGFzcz1cIm1haW5cIj5cbiAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuPC9tYWluPlxuPGFwcC1mb290ZXI+PC9hcHAtZm9vdGVyPlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJMaW5rLCBSb3V0ZXJPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcbiAgaW1wb3J0czogW1JvdXRlckxpbmtdLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuc2NzcycsXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBpc01lbnVPcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgaGFuZGxlT3BlbigpIHtcbiAgICB0aGlzLmlzTWVudU9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlQ2xvc2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0WzBdO1xuICAgIGNvbnN0IGZvdW5kTWVudSA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApIVxuICAgICAgLmNsb3Nlc3QoJy5oZWFkZXJfX21vYmlsZS1tZW51Jyk7XG5cbiAgICBpZiAoIWZvdW5kTWVudSkge1xuICAgICAgdGhpcy5pc01lbnVPcGVuZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiIsIjxoZWFkZXJcbiAgY2xhc3M9XCJoZWFkZXIgcC01IHB5LTMgbGc6cHgtMzIgYmctd2hpdGUgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGdhcC03XCJcbj5cbiAgPGRpdlxuICAgIGNsYXNzPVwiaGVhZGVyX19sb2dvIGZvbnQtZXh0cmFib2xkIHRleHQtMnhsIGxnOnRleHQtM3hsIGludGVncmFsIGZvbnQtYmxhY2sgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTVcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbW9iaWxlLWJ0biBmbGV4IGl0ZW1zLWNlbnRlciBtZDpoaWRkZW4gcHQtMVwiPlxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiaGFuZGxlT3BlbigpXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL21lbnUuc3ZnXCIgYWx0PVwiQnVyZ2VyXCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIENBUlRJRlkuQ09cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJoZWFkZXJfX25hdlwiPlxuICAgIDx1bCBjbGFzcz1cImhlYWRlcl9fbWVudSBoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTVcIj5cbiAgICAgIDxsaSBjbGFzcz1cImhlYWRlcl9fbWVudS0tLWl0ZW1cIj5cbiAgICAgICAgPGEgcm91dGVyTGluaz1cIi9cIj5Ib21lPC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImhlYWRlcl9fbWVudS0tLWl0ZW1cIj5cbiAgICAgICAgPGEgaHJlZj1cIiNuZXdhcnJpdmFsc1wiPk5ldyBBcnJpdmFsczwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJoZWFkZXJfX21lbnUtLS1pdGVtXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjdG9wc2VsbGluZ1wiPlRvcCBTZWxsaW5nPC9hPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuXG4gICAgQGlmIChpc01lbnVPcGVuZWQpIHtcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImhlYWRlcl9fbW9iaWxlLW1lbnUtLS1vdXRzaWRlIGJnLVtyZ2JhKDAsMCwwLC41KV0gZml4ZWQgdy1zY3JlZW4gaC1zY3JlZW4gdG9wLTAgbGVmdC0wIHotMTBcIlxuICAgICAgKGNsaWNrKT1cImhhbmRsZUNsb3NlKCRldmVudClcIlxuICAgID5cbiAgICAgIDx1bFxuICAgICAgICBjbGFzcz1cImhlYWRlcl9fbW9iaWxlLW1lbnUgbWQ6aGlkZGVuIGZpeGVkIGxlZnQtMCB0b3AtMCBoLVsxMDAlXSBiZy13aGl0ZSBwLTUgcHItMTAgZmxleCBmbGV4LWNvbCBnYXAtM1wiXG4gICAgICA+XG4gICAgICAgIDxsaSBjbGFzcz1cImhlYWRlcl9fbW9iaWxlLW1lbnUtLS1pdGVtXCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJoZWFkZXJfX21vYmlsZS1tZW51LS0taXRlbS1saW5rIHRleHQtc21cIiByb3V0ZXJMaW5rPVwiL1wiXG4gICAgICAgICAgICA+SG9tZTwvYVxuICAgICAgICAgID5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGVyX19tb2JpbGUtbWVudS0tLWl0ZW1cIj5cbiAgICAgICAgICA8YSBjbGFzcz1cImhlYWRlcl9fbW9iaWxlLW1lbnUtLS1pdGVtLWxpbmsgdGV4dC1zbVwiIGhyZWY9XCIjbmV3YXJyaXZhbHNcIlxuICAgICAgICAgICAgPk5ldyBBcnJpdmFsczwvYVxuICAgICAgICAgID5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGVyX19tb2JpbGUtbWVudS0tLWl0ZW1cIj5cbiAgICAgICAgICA8YSBjbGFzcz1cImhlYWRlcl9fbW9iaWxlLW1lbnUtLS1pdGVtLWxpbmsgdGV4dC1zbVwiIGhyZWY9XCIjdG9wc2VsbGluZ1wiXG4gICAgICAgICAgICA+VG9wIFNlbGxpbmc8L2FcbiAgICAgICAgICA+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgIGNsYXNzPVwiaGVhZGVyX19tb2JpbGUtbWVudS0tLWl0ZW0gcmVsYXRpdmUgdy1hdXRvIGZsZXggZ2FwLTEgaXRlbXMtY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cIlwiXG4gICAgICAgICAgICBpZD1cIlwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgcHJvZHVjdHMuLi5cIlxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LVtyZ2JhKDAsIDAsIDAsIC40KV0gYmctWyNGMEYwRjBdIHJvdW5kZWQtZnVsbCBweC01IHB5LTIgdGV4dC1zbSBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJoZWFkZXJfX21vYmlsZS0tLW1lbnUtaXRlbV9fc2VhcmNoLWJ0biBiZy1bI2YwZjBmMF0gcC0yIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvc2VhcmNoLnN2Z1wiIGFsdD1cIlNlYXJjaFwiIGNsYXNzPVwidy01XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgfVxuICA8L2Rpdj5cbiAgPGRpdlxuICAgIGNsYXNzPVwiaGVhZGVyX19zZWFyY2ggaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIHJlbGF0aXZlIHctZnVsbCBmbGV4LTFcIlxuICA+XG4gICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvc2VhcmNoLnN2Z1wiIGFsdD1cIlNlYXJjaFwiIGNsYXNzPVwiYWJzb2x1dGUgbGVmdC0zXCIgLz5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIG5hbWU9XCJcIlxuICAgICAgaWQ9XCJcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHByb2R1Y3RzLi4uXCJcbiAgICAgIGNsYXNzPVwidGV4dC1bcmdiYSgwLCAwLCAwLCAuNCldIGJnLVsjRjBGMEYwXSByb3VuZGVkLWZ1bGwgcHgtMTAgcHktMyB3LWZ1bGwgb3V0bGluZS1ub25lXCJcbiAgICAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYWN0aW9ucyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNVwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2FjdGlvblwiPlxuICAgICAgPGEgcm91dGVyTGluaz1cIi9jYXJ0XCIgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jYXJ0LnN2Z1wiIGFsdD1cIkNhcnRcIiAvPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2FjdGlvblwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL3VzZXIuc3ZnXCIgYWx0PVwiVXNlclwiIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2hlYWRlcj5cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZm9vdGVyJyxcbiAgaW1wb3J0czogW10sXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vZm9vdGVyLmNvbXBvbmVudC5zY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge1xuXG59XG4iLCI8aHIgY2xhc3M9XCJtYXgtdy1bY2FsYygxMDAlLTQwcHgpXSBsZzptYXgtdy1bY2FsYygxMDAlLTI1NnB4KV0gbS1hdXRvXCIgLz5cbjxmb290ZXJcbiAgY2xhc3M9XCJweS0zIHB4LTUgbGc6cHgtMzIgdGV4dC1bcmdiYSgwLDAsMCwuNildIHRleHQtc20gbGc6dGV4dC1iYXNlIHRleHQtY2VudGVyXCJcbj5cbiAgQ2FydGlmeSAmY29weTsgJjIwMjUgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbjwvZm9vdGVyPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyw0QkFBNEI7OztBQ0FyQyxTQUE0QixrQ0FBa0M7QUFDOUQsU0FBUyxxQkFBcUI7OztBQ0Q5QixTQUFTLGFBQUFBLGtCQUFpQjs7O0FFQTFCLFNBQVMsaUJBQWlCOztBQVFwQixJQUFPLGdCQUFQLE1BQU8sZUFBYTs7cUNBQWIsZ0JBQWE7RUFBQTs0RUFBYixnQkFBYSxXQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxPQUFBLElBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLE1BQUEsUUFBQSxHQUFBLFFBQUEsVUFBQSxnQkFBQSx3Q0FBQSxjQUFBLGdCQUFBLGdCQUFBLGFBQUEsT0FBQSxZQUFBLGFBQUEsR0FBQSxDQUFBLEdBQUEsaUJBQUEsR0FBQSxDQUFBLEdBQUEsNkJBQUEseUJBQUEsZUFBQSxtQkFBQSxHQUFBLENBQUEsR0FBQSxtQ0FBQSxZQUFBLGFBQUEsY0FBQSxZQUFBLFFBQUEsUUFBQSxVQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEseUNBQUEseUJBQUEsUUFBQSxRQUFBLEdBQUEsQ0FBQSxHQUFBLG9DQUFBLFFBQUEsUUFBQSxHQUFBLENBQUEsR0FBQSxZQUFBLGdCQUFBLFFBQUEsU0FBQSxjQUFBLFFBQUEsUUFBQSxZQUFBLFVBQUEsV0FBQSxHQUFBLENBQUEsR0FBQSxtQ0FBQSxRQUFBLG1CQUFBLFFBQUEsVUFBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLGdDQUFBLEdBQUEsQ0FBQSxHQUFBLHlDQUFBLFlBQUEsZUFBQSxXQUFBLEdBQUEsQ0FBQSxHQUFBLHlDQUFBLFdBQUEsZ0JBQUEseUJBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxxQ0FBQSxhQUFBLFNBQUEsUUFBQSxnQkFBQSxHQUFBLENBQUEsT0FBQSx5QkFBQSxPQUFBLFNBQUEsR0FBQSxVQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEsdUJBQUEsSUFBQSxLQUFBO0FBQUEsUUFBQSxLQUFBLEdBQUE7QUNSMUIsTUFBQSw0QkFBQSxHQUFBLFdBQUEsQ0FBQSxFQUdDLEdBQUEsT0FBQSxDQUFBLEVBQzhCLEdBQUEsT0FBQSxDQUFBLEVBRzFCLEdBQUEsT0FBQSxDQUFBO0FBSUcsTUFBQSxvQkFBQSxHQUFBLHdDQUFBO0FBQ0YsTUFBQSwwQkFBQTtBQUNBLE1BQUEsNEJBQUEsR0FBQSxPQUFBLENBQUE7QUFHRSxNQUFBLG9CQUFBLEdBQUEsaUpBQUE7QUFHRixNQUFBLDBCQUFBO0FBQ0EsTUFBQSw0QkFBQSxHQUFBLE9BQUEsQ0FBQSxFQUEwRCxHQUFBLFVBQUEsQ0FBQTtBQUl0RCxNQUFBLG9CQUFBLEdBQUEsWUFBQTtBQUNGLE1BQUEsMEJBQUEsRUFBUztBQUVYLE1BQUEsNEJBQUEsSUFBQSxPQUFBLENBQUEsRUFFQyxJQUFBLE9BQUEsQ0FBQSxFQUM2QyxJQUFBLE9BQUEsQ0FBQTtBQUl4QyxNQUFBLG9CQUFBLElBQUEsUUFBQTtBQUNGLE1BQUEsMEJBQUE7QUFDQSxNQUFBLDRCQUFBLElBQUEsT0FBQSxFQUFBO0FBR0UsTUFBQSxvQkFBQSxJQUFBLHdCQUFBO0FBQ0YsTUFBQSwwQkFBQSxFQUFNO0FBRVIsTUFBQSw0QkFBQSxJQUFBLE9BQUEsQ0FBQSxFQUE0QyxJQUFBLE9BQUEsQ0FBQTtBQUl4QyxNQUFBLG9CQUFBLElBQUEsVUFBQTtBQUNGLE1BQUEsMEJBQUE7QUFDQSxNQUFBLDRCQUFBLElBQUEsT0FBQSxFQUFBO0FBR0UsTUFBQSxvQkFBQSxJQUFBLHlCQUFBO0FBQ0YsTUFBQSwwQkFBQSxFQUFNO0FBRVIsTUFBQSw0QkFBQSxJQUFBLE9BQUEsQ0FBQSxFQUE0QyxJQUFBLE9BQUEsQ0FBQTtBQUl4QyxNQUFBLG9CQUFBLElBQUEsV0FBQTtBQUNGLE1BQUEsMEJBQUE7QUFDQSxNQUFBLDRCQUFBLElBQUEsT0FBQSxFQUFBO0FBR0UsTUFBQSxvQkFBQSxJQUFBLG1CQUFBO0FBQ0YsTUFBQSwwQkFBQSxFQUFNLEVBQ0Y7QUFFUixNQUFBLDRCQUFBLElBQUEsT0FBQSxFQUFBO0FBR0UsTUFBQSx1QkFBQSxJQUFBLE9BQUEsRUFBQTtBQUNGLE1BQUEsMEJBQUEsRUFBTSxFQUNGLEVBQ0Y7Ozs7O2dGRGpFSyxlQUFhLEVBQUEsV0FBQSxpQkFBQSxVQUFBLDZDQUFBLFlBQUEsRUFBQSxDQUFBO0FBQUEsR0FBQTs7Ozs7OzhEQUFiLGVBQWEsRUFBQSxTQUFBLENBQUEsRUFBQSxHQUFBLENBQUEsQ0FBQSxDQUFBO0VBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGNBQUEsc0JBQUEsS0FBQSxJQUFBLENBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGVBQUEsWUFBQSxPQUFBLFlBQUEsSUFBQSxHQUFBLDRCQUFBLE9BQUEsRUFBQSxPQUFBLHVFQUFBLHNCQUFBLEVBQUEsU0FBQSxDQUFBO0FBQUEsR0FBQTs7O0FFUjFCLFNBQVMsYUFBQUMsa0JBQWlCOztBQVFwQixJQUFPLG9CQUFQLE1BQU8sbUJBQWlCOztxQ0FBakIsb0JBQWlCO0VBQUE7NkVBQWpCLG9CQUFpQixXQUFBLENBQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxPQUFBLElBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxHQUFBLENBQUEsR0FBQSxxQkFBQSxRQUFBLGFBQUEsc0JBQUEsa0JBQUEsU0FBQSxZQUFBLGdCQUFBLFlBQUEsT0FBQSxXQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxHQUFBLENBQUEsT0FBQSxtQ0FBQSxPQUFBLGdCQUFBLEdBQUEsUUFBQSxRQUFBLEdBQUEsQ0FBQSxPQUFBLGdDQUFBLE9BQUEsYUFBQSxHQUFBLFFBQUEsUUFBQSxHQUFBLENBQUEsT0FBQSxpQ0FBQSxPQUFBLGNBQUEsR0FBQSxRQUFBLFFBQUEsR0FBQSxDQUFBLE9BQUEsaUNBQUEsT0FBQSxjQUFBLEdBQUEsUUFBQSxRQUFBLEdBQUEsQ0FBQSxPQUFBLHVDQUFBLE9BQUEscUJBQUEsR0FBQSxRQUFBLFFBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSwyQkFBQSxJQUFBLEtBQUE7QUFBQSxRQUFBLEtBQUEsR0FBQTtBQ1I5QixNQUFBLDZCQUFBLEdBQUEsT0FBQSxDQUFBLEVBQXNCLEdBQUEsT0FBQSxDQUFBLEVBR25CLEdBQUEsT0FBQSxDQUFBO0FBRUcsTUFBQSx3QkFBQSxHQUFBLE9BQUEsQ0FBQTtBQUtGLE1BQUEsMkJBQUE7QUFDQSxNQUFBLDZCQUFBLEdBQUEsT0FBQSxDQUFBO0FBQ0UsTUFBQSx3QkFBQSxHQUFBLE9BQUEsQ0FBQTtBQUtGLE1BQUEsMkJBQUE7QUFDQSxNQUFBLDZCQUFBLEdBQUEsT0FBQSxDQUFBO0FBQ0UsTUFBQSx3QkFBQSxHQUFBLE9BQUEsQ0FBQTtBQUtGLE1BQUEsMkJBQUE7QUFDQSxNQUFBLDZCQUFBLEdBQUEsT0FBQSxDQUFBO0FBQ0UsTUFBQSx3QkFBQSxHQUFBLE9BQUEsQ0FBQTtBQUtGLE1BQUEsMkJBQUE7QUFDQSxNQUFBLDZCQUFBLElBQUEsT0FBQSxDQUFBO0FBQ0UsTUFBQSx3QkFBQSxJQUFBLE9BQUEsQ0FBQTtBQUtGLE1BQUEsMkJBQUEsRUFBTSxFQUNGOzs7OztpRkQvQkssbUJBQWlCLEVBQUEsV0FBQSxxQkFBQSxVQUFBLHFEQUFBLFlBQUEsRUFBQSxDQUFBO0FBQUEsR0FBQTs7Ozs7OytEQUFqQixtQkFBaUIsRUFBQSxTQUFBLENBQUFDLEdBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQTtFQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxjQUFBLDBCQUFBLEtBQUEsSUFBQSxDQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxlQUFBLFlBQUEsT0FBQSxZQUFBLElBQUEsR0FBQSw0QkFBQSxPQUFBLEVBQUEsT0FBQSxtRkFBQSwwQkFBQSxFQUFBLFNBQUEsQ0FBQTtBQUFBLEdBQUE7OztBRVI5QixTQUFTLGFBQUFDLFlBQVcsU0FBQUMsY0FBYTs7O0FFQWpDLFNBQVMsYUFBQUMsWUFBVyxhQUFhO0FBRWpDLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsb0JBQW9COzs7OztBQVF2QixJQUFPLHVCQUFQLE1BQU8sc0JBQW9CO0VBQ3RCOztxQ0FERSx1QkFBb0I7RUFBQTs2RUFBcEIsdUJBQW9CLFdBQUEsQ0FBQSxDQUFBLGtCQUFBLENBQUEsR0FBQSxRQUFBLEVBQUEsYUFBQSxjQUFBLEdBQUEsT0FBQSxJQUFBLE1BQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLGNBQUEsR0FBQSxDQUFBLG9CQUFBLHNCQUFBLEdBQUEsWUFBQSxHQUFBLENBQUEsR0FBQSx1QkFBQSxnQkFBQSxRQUFBLFFBQUEsZ0JBQUEsa0JBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSxRQUFBLEdBQUEsT0FBQSxLQUFBLEdBQUEsQ0FBQSxHQUFBLHlCQUFBLE1BQUEsR0FBQSxDQUFBLEdBQUEsdUJBQUEsYUFBQSxZQUFBLEdBQUEsQ0FBQSxHQUFBLHVCQUFBLFFBQUEsWUFBQSxlQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEsOEJBQUEsSUFBQSxLQUFBO0FBQUEsUUFBQSxLQUFBLEdBQUE7QUNYakMsTUFBQSw2QkFBQSxHQUFBLE9BQUEsQ0FBQSxFQUEwQixHQUFBLEtBQUEsQ0FBQSxFQUlyQixHQUFBLE9BQUEsQ0FBQTtBQUdDLE1BQUEsd0JBQUEsR0FBQSxPQUFBLENBQUE7QUFBMkQsTUFBQSwyQkFBQSxFQUM5RDtBQUNELE1BQUEsNkJBQUEsR0FBQSxPQUFBLENBQUEsRUFBd0MsR0FBQSxPQUFBLENBQUEsRUFDZ0IsR0FBQSxLQUFBLENBQUE7QUFJakQsTUFBQSxxQkFBQSxDQUFBO0FBQXVCLE1BQUEsMkJBQUEsRUFDekI7QUFFSCxNQUFBLDZCQUFBLEdBQUEsT0FBQSxDQUFBO0FBQ0UsTUFBQSxxQkFBQSxDQUFBO0FBQ0YsTUFBQSwyQkFBQSxFQUFNLEVBQ0Y7OztBQWxCSixNQUFBLHdCQUFBO0FBQUEsTUFBQSx5QkFBQSxjQUFBLDhCQUFBLEdBQUEsS0FBQSxJQUFBLFlBQUEsRUFBQSxDQUFBO0FBS08sTUFBQSx3QkFBQSxDQUFBO0FBQUEsTUFBQSxvQ0FBQSxPQUFBLElBQUEsWUFBQSxPQUFBLDJCQUFBO0FBS0gsTUFBQSx3QkFBQSxDQUFBO0FBQUEsTUFBQSx5QkFBQSxjQUFBLDhCQUFBLEdBQUEsS0FBQSxJQUFBLFlBQUEsRUFBQSxDQUFBO0FBRUMsTUFBQSx3QkFBQTtBQUFBLE1BQUEsZ0NBQUEsSUFBQSxZQUFBLEtBQUE7QUFJSCxNQUFBLHdCQUFBLENBQUE7QUFBQSxNQUFBLGlDQUFBLE1BQUEsSUFBQSxZQUFBLE9BQUEsR0FBQTs7b0JEWE0sY0FBWSxZQUFBLHNCQUFBLFlBQUEsU0FBQSxxQkFBQSxZQUFBLGFBQUEsaUJBQUEsb0JBQUEsYUFBQSxpQkFBQSxjQUFBLGtCQUFBLGtCQUFBLGFBQUEsY0FBQSxnQkFBQSxnQkFBQSxrQkFBQSxpQkFBQSxhQUFBLG1CQUFBLG1CQUFBLGlCQUFFLGNBQVksaUJBQUEsZUFBQSxxQkFBQSw2QkFBQSxHQUFBLFFBQUEsQ0FBQSxvTEFBQSxFQUFBLENBQUE7OztpRkFJekIsc0JBQW9CLEVBQUEsV0FBQSx3QkFBQSxVQUFBLDZEQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTs7Ozs7OytEQUFwQixzQkFBb0IsRUFBQSxTQUFBLENBQUFDLEtBQUEsSUFBQSxFQUFBLEdBQUEsQ0FBQSxjQUFBLFlBQUEsQ0FBQSxDQUFBO0VBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGNBQUEsNkJBQUEsS0FBQSxJQUFBLENBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGVBQUEsWUFBQSxPQUFBLFlBQUEsSUFBQSxHQUFBLDRCQUFBLE9BQUEsRUFBQSxPQUFBLDhGQUFBLDZCQUFBLEVBQUEsU0FBQSxDQUFBO0FBQUEsR0FBQTs7Ozs7OztBREQ3QixJQUFBLHdCQUFBLEdBQUEsb0JBQUEsQ0FBQTs7OztBQUFrQixJQUFBLHlCQUFBLGVBQUEsVUFBQTs7O0FEQWhCLElBQU8sb0JBQVAsTUFBTyxtQkFBaUI7RUFDbkIsUUFBZ0I7RUFDaEIsV0FBc0IsQ0FBQTs7cUNBRnBCLG9CQUFpQjtFQUFBOzZFQUFqQixvQkFBaUIsV0FBQSxDQUFBLENBQUEsY0FBQSxDQUFBLEdBQUEsUUFBQSxFQUFBLE9BQUEsU0FBQSxVQUFBLFdBQUEsR0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLEdBQUEsdUJBQUEsUUFBQSxZQUFBLFFBQUEsVUFBQSxHQUFBLENBQUEsR0FBQSwrQkFBQSxZQUFBLGlCQUFBLFlBQUEsZUFBQSxhQUFBLGVBQUEsUUFBQSxVQUFBLEdBQUEsQ0FBQSxHQUFBLHVDQUFBLFNBQUEsUUFBQSxtQkFBQSxZQUFBLFdBQUEsa0JBQUEsZ0JBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSx3Q0FBQSxlQUFBLFFBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxZQUFBLFVBQUEsZ0JBQUEsUUFBQSxTQUFBLGNBQUEsUUFBQSxRQUFBLFlBQUEsVUFBQSxXQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEsMkJBQUEsSUFBQSxLQUFBO0FBQUEsUUFBQSxLQUFBLEdBQUE7QUNWOUIsTUFBQSw2QkFBQSxHQUFBLE9BQUEsQ0FBQSxFQUE2RCxHQUFBLE9BQUEsQ0FBQTtBQUl6RCxNQUFBLHFCQUFBLENBQUE7QUFDRixNQUFBLDJCQUFBO0FBQ0EsTUFBQSw2QkFBQSxHQUFBLE9BQUEsQ0FBQTtBQUdFLE1BQUEsK0JBQUEsR0FBQSxrQ0FBQSxHQUFBLEdBQUEsb0JBQUEsR0FBQSxVQUFBO0FBT0YsTUFBQSwyQkFBQTtBQUNBLE1BQUEsNkJBQUEsR0FBQSxPQUFBLENBQUEsRUFBd0UsR0FBQSxVQUFBLENBQUE7QUFJcEUsTUFBQSxxQkFBQSxHQUFBLFlBQUE7QUFDRixNQUFBLDJCQUFBLEVBQVMsRUFDTDs7O0FBbkJKLE1BQUEsd0JBQUEsQ0FBQTtBQUFBLE1BQUEsaUNBQUEsS0FBQSxJQUFBLE9BQUEsR0FBQTtBQUtBLE1BQUEsd0JBQUEsQ0FBQTtBQUFBLE1BQUEseUJBQUEsSUFBQSxRQUFBOztvQkRIUSxvQkFBb0IsR0FBQSxlQUFBLEVBQUEsQ0FBQTs7O2lGQUluQixtQkFBaUIsRUFBQSxXQUFBLHFCQUFBLFVBQUEscURBQUEsWUFBQSxHQUFBLENBQUE7QUFBQSxHQUFBOzs7Ozs7K0RBQWpCLG1CQUFpQixFQUFBLFNBQUEsQ0FBQUMsR0FBQSxHQUFBLENBQUEsb0JBQUEsQ0FBQSxDQUFBO0VBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGNBQUEsMEJBQUEsS0FBQSxJQUFBLENBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGVBQUEsWUFBQSxPQUFBLFlBQUEsSUFBQSxHQUFBLDRCQUFBLE9BQUEsRUFBQSxPQUFBLG1GQUFBLDBCQUFBLEVBQUEsU0FBQSxDQUFBO0FBQUEsR0FBQTs7OztBTkN4QixJQUFPLGdCQUFQLE1BQU8sZUFBYTtFQUN4QixvQkFBb0IsS0FBSyxNQUN2QixhQUFhLFFBQVEsVUFBVSxLQUFLLElBQUksRUFDeEMsTUFBTSxHQUFHLENBQUM7RUFDWixtQkFBbUIsS0FBSyxNQUFNLGFBQWEsUUFBUSxVQUFVLEtBQUssSUFBSSxFQUFFLE1BQ3RFLEdBQ0EsQ0FBQzs7cUNBTlEsZ0JBQWE7RUFBQTs2RUFBYixnQkFBYSxXQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLE1BQUEsYUFBQSxHQUFBLENBQUEsU0FBQSxnQkFBQSxHQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsMkJBQUEsK0JBQUEsUUFBQSxHQUFBLENBQUEsTUFBQSxZQUFBLEdBQUEsQ0FBQSxTQUFBLGVBQUEsR0FBQSxVQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEsdUJBQUEsSUFBQSxLQUFBO0FBQUEsUUFBQSxLQUFBLEdBQUE7QUNYMUIsTUFBQSx3QkFBQSxHQUFBLFVBQUEsRUFBcUIsR0FBQSxjQUFBO0FBRXJCLE1BQUEsNkJBQUEsR0FBQSxXQUFBLENBQUE7QUFDRSxNQUFBLHdCQUFBLEdBQUEsZ0JBQUEsQ0FBQTtBQUlGLE1BQUEsMkJBQUE7QUFDQSxNQUFBLHdCQUFBLEdBQUEsTUFBQSxDQUFBO0FBQ0EsTUFBQSw2QkFBQSxHQUFBLFdBQUEsQ0FBQTtBQUNFLE1BQUEsd0JBQUEsR0FBQSxnQkFBQSxDQUFBO0FBSUYsTUFBQSwyQkFBQTs7O0FBVEksTUFBQSx3QkFBQSxDQUFBO0FBQUEsTUFBQSx5QkFBQSxZQUFBLElBQUEsaUJBQUE7QUFPQSxNQUFBLHdCQUFBLENBQUE7QUFBQSxNQUFBLHlCQUFBLFlBQUEsSUFBQSxnQkFBQTs7b0JETFEsZUFBZSxtQkFBbUIsaUJBQWlCLEdBQUEsZUFBQSxFQUFBLENBQUE7OztpRkFJbEQsZUFBYSxFQUFBLFdBQUEsaUJBQUEsVUFBQSx3Q0FBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7Ozs7OzsrREFBYixlQUFhLEVBQUEsU0FBQSxDQUFBQyxHQUFBLEdBQUEsQ0FBQSxlQUFBLG1CQUFBLGlCQUFBLENBQUEsQ0FBQTtFQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxjQUFBLHNCQUFBLEtBQUEsSUFBQSxDQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxlQUFBLFlBQUEsT0FBQSxZQUFBLElBQUEsR0FBQSw0QkFBQSxPQUFBLEVBQUEsT0FBQSxrRUFBQSxzQkFBQSxFQUFBLFNBQUEsQ0FBQTtBQUFBLEdBQUE7OztBVVgxQixTQUFTLGFBQUFDLGtCQUFpQjs7QUFRcEIsSUFBTyxpQkFBUCxNQUFPLGdCQUFjOztxQ0FBZCxpQkFBYztFQUFBOzZFQUFkLGlCQUFjLFdBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxpQkFBQSxHQUFBLENBQUEsR0FBQSwwQkFBQSxZQUFBLGNBQUEsWUFBQSxXQUFBLFlBQUEsb0JBQUEsa0JBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSx3QkFBQSxJQUFBLEtBQUE7QUFBQSxRQUFBLEtBQUEsR0FBQTtBQ1IzQixNQUFBLDZCQUFBLEdBQUEsT0FBQSxDQUFBLEVBQTZCLEdBQUEsT0FBQSxDQUFBO0FBSXpCLE1BQUEscUJBQUEsR0FBQSx1QkFBQTtBQUNGLE1BQUEsMkJBQUEsRUFBTTs7Ozs7aUZER0ssZ0JBQWMsRUFBQSxXQUFBLGtCQUFBLFVBQUEsMENBQUEsWUFBQSxFQUFBLENBQUE7QUFBQSxHQUFBOzs7Ozs7K0RBQWQsZ0JBQWMsRUFBQSxTQUFBLENBQUFDLEdBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQTtFQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxjQUFBLHVCQUFBLEtBQUEsSUFBQSxDQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxlQUFBLFlBQUEsT0FBQSxZQUFBLElBQUEsR0FBQSw0QkFBQSxPQUFBLEVBQUEsT0FBQSxxRUFBQSx1QkFBQSxFQUFBLFNBQUEsQ0FBQTtBQUFBLEdBQUE7OztBRVIzQixTQUFTLGFBQUFDLGtCQUFpQjtBQUsxQixTQUFTLG1CQUFtQjtBQUM1QixTQUFTLGdCQUFBQyxxQkFBb0I7Ozs7O0FFTDdCOzs7O1NBQVMsa0JBQWtCOzs7QUFPckIsSUFBTyxpQkFBUCxNQUFPLGdCQUFjO0VBR0w7RUFGWixVQUFVO0VBRWxCLFlBQW9CLE1BQWdCO0FBQWhCLFNBQUEsT0FBQTtFQUFtQjtFQUV2QyxjQUFXO0FBQ1QsV0FBTyxLQUFLLEtBQUssSUFBZSxLQUFLLE9BQU87RUFDOUM7RUFFQSxlQUFlLElBQVU7QUFDdkIsV0FBTyxLQUFLLEtBQUssSUFBYSxHQUFHLEtBQUssT0FBTyxJQUFJLEVBQUUsRUFBRTtFQUN2RDtFQUVBLFdBQVcsU0FBZ0I7QUFDekIsV0FBTyxLQUFLLEtBQUssS0FBYyxLQUFLLFNBQVMsT0FBTztFQUN0RDs7cUNBZlcsaUJBQWMsdUJBQUEsY0FBQSxDQUFBO0VBQUE7Z0ZBQWQsaUJBQWMsU0FBZCxnQkFBYyxXQUFBLFlBRmIsT0FBTSxDQUFBOzs7O0FDTnBCOzs7O1NBQVMsY0FBQUMsbUJBQWtCOztBQU1yQixJQUFPLGNBQVAsTUFBTyxhQUFXO0VBQ2QsT0FBa0IsQ0FBQTtFQUUxQixlQUFZO0FBQ1YsV0FBTyxLQUFLO0VBQ2Q7RUFFQSxVQUFVLFNBQWdCO0FBQ3hCLFVBQU0sZ0JBQWdCLEtBQUssS0FBSyxLQUFLLENBQUMsU0FBUyxLQUFLLE9BQU8sUUFBUSxFQUFFO0FBRXJFLFFBQUksZUFBZTtBQUNqQixvQkFBYztJQUNoQixPQUFPO0FBQ0wsV0FBSyxLQUFLLEtBQUssaUNBQUssVUFBTCxFQUFjLFVBQVUsRUFBQyxFQUFFO0lBQzVDO0VBQ0Y7RUFFQSxlQUFlLFNBQWdCO0FBQzdCLFVBQU0sZUFBZSxLQUFLLEtBQUssVUFBVSxDQUFDLFNBQVMsS0FBSyxPQUFPLFFBQVEsRUFBRTtBQUV6RSxRQUFJLGVBQWUsSUFBSTtBQUNyQixXQUFLLEtBQUssT0FBTyxjQUFjLENBQUM7SUFDbEM7RUFDRjtFQUVBLFlBQVM7QUFDUCxTQUFLLE9BQU8sQ0FBQTtFQUNkOztxQ0EzQlcsY0FBVztFQUFBO2dGQUFYLGNBQVcsU0FBWCxhQUFXLFdBQUEsWUFGVixPQUFNLENBQUE7O0E7Ozs7Ozs7QUZKcEIsSUFBQSw2QkFBQSxHQUFBLE9BQUEsQ0FBQSxFQUF5RCxHQUFBLE9BQUEsQ0FBQSxFQUd0RCxHQUFBLE9BQUEsQ0FBQTtBQUlHLElBQUEsd0JBQUEsR0FBQSxPQUFBLENBQUE7QUFLRixJQUFBLDJCQUFBO0FBQ0EsSUFBQSw2QkFBQSxHQUFBLE9BQUEsQ0FBQSxFQUEyRSxHQUFBLE9BQUEsQ0FBQTtBQUl2RSxJQUFBLHFCQUFBLENBQUE7QUFDRixJQUFBLDJCQUFBO0FBQ0EsSUFBQSw2QkFBQSxHQUFBLE9BQUEsQ0FBQTtBQUdFLElBQUEscUJBQUEsQ0FBQTtBQUNGLElBQUEsMkJBQUE7QUFDQSxJQUFBLDZCQUFBLEdBQUEsT0FBQSxDQUFBO0FBR0UsSUFBQSxxQkFBQSxFQUFBO0FBQ0YsSUFBQSwyQkFBQTtBQUNBLElBQUEsd0JBQUEsSUFBQSxNQUFBLENBQUE7QUFDQSxJQUFBLDZCQUFBLElBQUEsT0FBQSxFQUFBLEVBRUMsSUFBQSxPQUFBLEVBQUEsRUFHRSxJQUFBLE9BQUEsRUFBQSxFQUdFLElBQUEsVUFBQSxFQUFBO0FBR0csSUFBQSx5QkFBQSxTQUFBLFNBQUEsaUVBQUE7QUFBQSxNQUFBLDRCQUFBLEdBQUE7QUFBQSxZQUFBLFNBQUEsNEJBQUE7QUFBQSxhQUFBLDBCQUFTLE9BQUEsa0JBQUEsQ0FBbUI7SUFBQSxDQUFBO0FBRTVCLElBQUEsd0JBQUEsSUFBQSxPQUFBLEVBQUE7QUFDRixJQUFBLDJCQUFBO0FBQ0EsSUFBQSw2QkFBQSxJQUFBLFNBQUEsRUFBQTtBQUdFLElBQUEsK0JBQUEsaUJBQUEsU0FBQSxzRUFBQSxRQUFBO0FBQUEsTUFBQSw0QkFBQSxHQUFBO0FBQUEsWUFBQSxTQUFBLDRCQUFBO0FBQUEsTUFBQSxpQ0FBQSxPQUFBLFVBQUEsTUFBQSxNQUFBLE9BQUEsV0FBQTtBQUFBLGFBQUEsMEJBQUEsTUFBQTtJQUFBLENBQUE7QUFIRixJQUFBLDJCQUFBO0FBTUEsSUFBQSw2QkFBQSxJQUFBLFVBQUEsRUFBQTtBQUVFLElBQUEseUJBQUEsU0FBQSxTQUFBLGlFQUFBO0FBQUEsTUFBQSw0QkFBQSxHQUFBO0FBQUEsWUFBQSxTQUFBLDRCQUFBO0FBQUEsYUFBQSwwQkFBUyxPQUFBLGtCQUFBLENBQW1CO0lBQUEsQ0FBQTtBQUU1QixJQUFBLHdCQUFBLElBQUEsT0FBQSxFQUFBO0FBQ0YsSUFBQSwyQkFBQSxFQUFTLEVBQ0w7QUFFUixJQUFBLDZCQUFBLElBQUEsT0FBQSxFQUFBLEVBRUMsSUFBQSxVQUFBLEVBQUE7QUFHRyxJQUFBLHlCQUFBLFNBQUEsU0FBQSxpRUFBQTtBQUFBLE1BQUEsNEJBQUEsR0FBQTtBQUFBLFlBQUEsU0FBQSw0QkFBQTtBQUFBLGFBQUEsMEJBQVMsT0FBQSxVQUFBLE9BQUEsU0FBQSxPQUFBLFFBQUEsQ0FBaUM7SUFBQSxDQUFBO0FBRTFDLElBQUEscUJBQUEsSUFBQSxlQUFBO0FBQ0YsSUFBQSwyQkFBQSxFQUFTLEVBQ0wsRUFDRixFQUNGLEVBQ0Y7Ozs7QUE5REEsSUFBQSx3QkFBQSxDQUFBO0FBQUEsSUFBQSx5QkFBQSxPQUFBLE9BQUEsUUFBQSxPQUFBLDJCQUFBLEVBQXFCLE9BQUEsT0FBQSxRQUFBLEtBQUE7QUFRckIsSUFBQSx3QkFBQSxDQUFBO0FBQUEsSUFBQSxpQ0FBQSxLQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUE7QUFLQSxJQUFBLHdCQUFBLENBQUE7QUFBQSxJQUFBLGlDQUFBLE1BQUEsT0FBQSxRQUFBLE9BQUEsR0FBQTtBQUtBLElBQUEsd0JBQUEsQ0FBQTtBQUFBLElBQUEsaUNBQUEsS0FBQSxPQUFBLFFBQUEsYUFBQSxHQUFBO0FBcUJNLElBQUEsd0JBQUEsQ0FBQTtBQUFBLElBQUEsK0JBQUEsV0FBQSxPQUFBLFFBQUE7OztBRGxDUixJQUFPLHlCQUFQLE1BQU8sd0JBQXNCO0VBRXZCO0VBQ0E7RUFDQTtFQUhWLFlBQ1UsT0FDQSxnQkFDQSxhQUF3QjtBQUZ4QixTQUFBLFFBQUE7QUFDQSxTQUFBLGlCQUFBO0FBQ0EsU0FBQSxjQUFBO0VBQ1A7RUFFSDtFQUNBLFdBQVc7RUFFWCxXQUFRO0FBQ04sVUFBTSxLQUFLLENBQUMsS0FBSyxNQUFNLFNBQVMsU0FBUyxJQUFJLElBQUk7QUFDakQsU0FBSyxlQUFlLGVBQWUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxTQUFRO0FBQ3hELFdBQUssVUFBVTtJQUNqQixDQUFDO0VBQ0g7RUFFQSxvQkFBaUI7QUFDZixTQUFLO0VBQ1A7RUFFQSxvQkFBaUI7QUFDZixRQUFJLEtBQUssV0FBVyxHQUFHO0FBQ3JCLFdBQUs7SUFDUDtFQUNGO0VBRUEsVUFBVSxTQUFrQixVQUFnQjtBQUkxQyxRQUFJLENBQUMsYUFBYSxRQUFRLE1BQU0sR0FBRztBQUNqQyxtQkFBYSxRQUFRLFFBQVEsS0FBSyxVQUFVLENBQUEsQ0FBRSxDQUFDO0lBQ2pEO0FBRUEsUUFBSSxPQUFPLEtBQUssTUFBTSxhQUFhLFFBQVEsTUFBTSxDQUFFO0FBQ25ELFFBQUksT0FBTyxpQ0FBSyxVQUFMLEVBQWMsU0FBUTtBQUNqQyxTQUFLLEtBQUssSUFBSTtBQUNkLGlCQUFhLFFBQVEsUUFBUSxLQUFLLFVBQVUsSUFBSSxDQUFDO0VBQ25EOztxQ0F2Q1cseUJBQXNCLGdDQUFBLGtCQUFBLEdBQUEsZ0NBQUEsY0FBQSxHQUFBLGdDQUFBLFdBQUEsQ0FBQTtFQUFBOzZFQUF0Qix5QkFBc0IsV0FBQSxDQUFBLENBQUEsb0JBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsU0FBQSwrQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLEdBQUEsa0JBQUEsT0FBQSxVQUFBLEdBQUEsQ0FBQSxHQUFBLHFDQUFBLFFBQUEsWUFBQSxTQUFBLFlBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSw2Q0FBQSxnQkFBQSxRQUFBLFFBQUEsZ0JBQUEsa0JBQUEsZUFBQSxjQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsZ0JBQUEsUUFBQSxHQUFBLE9BQUEsS0FBQSxHQUFBLENBQUEsR0FBQSwrQ0FBQSxjQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEscURBQUEsWUFBQSxjQUFBLFlBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSxxREFBQSxZQUFBLGFBQUEsUUFBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLDJEQUFBLHdCQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLEdBQUEsdURBQUEsUUFBQSxnQkFBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLHdEQUFBLGdCQUFBLFFBQUEsUUFBQSxnQkFBQSxRQUFBLGdCQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsZ0VBQUEsUUFBQSxnQkFBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLGdCQUFBLGdCQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsT0FBQSwwQkFBQSxPQUFBLEVBQUEsR0FBQSxDQUFBLFFBQUEsUUFBQSxZQUFBLElBQUEsR0FBQSxlQUFBLGdCQUFBLFFBQUEsa0JBQUEsR0FBQSxpQkFBQSxTQUFBLEdBQUEsQ0FBQSxPQUFBLHlCQUFBLE9BQUEsRUFBQSxHQUFBLENBQUEsR0FBQSx3REFBQSxVQUFBLGlCQUFBLEdBQUEsQ0FBQSxHQUFBLFlBQUEsZ0JBQUEsUUFBQSxTQUFBLGNBQUEsWUFBQSxHQUFBLE9BQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSxnQ0FBQSxJQUFBLEtBQUE7QUFBQSxRQUFBLEtBQUEsR0FBQTtBQ2RuQyxNQUFBLHlCQUFBLEdBQUEsdUNBQUEsSUFBQSxHQUFBLE9BQUEsQ0FBQTs7O0FBQTBDLE1BQUEseUJBQUEsUUFBQSxJQUFBLE9BQUE7O29CRFU5QixhQUFXLHVCQUFBLG1CQUFBLGlDQUFBLHlCQUFBLHdCQUFBLHVCQUFBLGlDQUFBLCtCQUFBLHVDQUFBLDhCQUFBLG9CQUFBLHlCQUFBLHNCQUFBLHVCQUFBLHVCQUFBLHFCQUFBLDhCQUFBLG1CQUFBLGlCQUFBLGlCQUFBLFlBQUEsaUJBQUEsV0FBRUMsZUFBWSxZQUFBLHNCQUFBLFlBQUEsU0FBQSxxQkFBQSxZQUFBLGFBQUEsaUJBQUEsb0JBQUEsYUFBQSxpQkFBQSxjQUFBLGtCQUFBLGtCQUFBLGFBQUEsY0FBQSxnQkFBQSxnQkFBQSxrQkFBQSxpQkFBQSxhQUFBLG1CQUFBLG1CQUFBLGVBQUEsR0FBQSxlQUFBLEVBQUEsQ0FBQTs7O2lGQUl4Qix3QkFBc0IsRUFBQSxXQUFBLDBCQUFBLFVBQUEsNERBQUEsWUFBQSxHQUFBLENBQUE7QUFBQSxHQUFBOzs7Ozs7K0RBQXRCLHdCQUFzQixFQUFBLFNBQUEsQ0FBQUMsS0FBQSxJQUFBLElBQUFDLEtBQUEseUJBQUEsb0JBQUEsR0FBQSxDQUFBLGFBQUFGLGFBQUEsQ0FBQSxDQUFBO0VBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGNBQUEsK0JBQUEsS0FBQSxJQUFBLENBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGVBQUEsWUFBQSxPQUFBLFlBQUEsSUFBQSxHQUFBLDRCQUFBLE9BQUEsRUFBQSxPQUFBLCtGQUFBLCtCQUFBLEVBQUEsU0FBQSxDQUFBO0FBQUEsR0FBQTs7O0FJZG5DLFNBQVMsZ0JBQUFHLHFCQUFvQjtBQUM3QixTQUFTLGFBQUFDLGtCQUFpQjs7O0FFRDFCLFNBQVMsYUFBQUMsWUFBVyxTQUFBQyxjQUFxQjtBQUN6QyxTQUFTLGdCQUFBQyxxQkFBb0I7QUFFN0IsU0FBUyxlQUFBQyxvQkFBbUI7QUFDNUIsU0FBUyxnQkFBQUMscUJBQW9COzs7Ozs7Ozs7QUNDM0IsSUFBQSw4QkFBQSxHQUFBLE9BQUEsQ0FBQSxFQUE0QyxHQUFBLE9BQUEsQ0FBQTtBQUl4QyxJQUFBLHlCQUFBLEdBQUEsT0FBQSxDQUFBO0FBQ0YsSUFBQSw0QkFBQTtBQUNBLElBQUEsOEJBQUEsR0FBQSxPQUFBLENBQUEsRUFBMEMsR0FBQSxPQUFBLENBQUE7QUFFdEMsSUFBQSxzQkFBQSxDQUFBO0FBQ0YsSUFBQSw0QkFBQTtBQUNBLElBQUEsOEJBQUEsR0FBQSxPQUFBLENBQUE7QUFDRSxJQUFBLHNCQUFBLENBQUE7QUFDRixJQUFBLDRCQUFBLEVBQU07QUFFUixJQUFBLDhCQUFBLEdBQUEsT0FBQSxDQUFBLEVBQTJFLEdBQUEsT0FBQSxDQUFBLEVBQ3pCLElBQUEsT0FBQSxFQUFBO0FBSzVDLElBQUEsMEJBQUEsU0FBQSxTQUFBLG1FQUFBO0FBQUEsWUFBQSxjQUFBLDZCQUFBLEdBQUEsRUFBQTtBQUFBLFlBQUEsU0FBQSw2QkFBQSxDQUFBO0FBQUEsYUFBQSwyQkFBUyxPQUFBLGVBQUEsV0FBQSxDQUF3QjtJQUFBLENBQUE7QUFKbkMsSUFBQSw0QkFBQSxFQUtFO0FBRUosSUFBQSw4QkFBQSxJQUFBLE9BQUEsRUFBQSxFQUVDLElBQUEsT0FBQSxFQUFBLEVBR0UsSUFBQSxVQUFBLEVBQUE7QUFHRyxJQUFBLDBCQUFBLFNBQUEsU0FBQSxzRUFBQTtBQUFBLFlBQUEsY0FBQSw2QkFBQSxHQUFBLEVBQUE7QUFBQSxZQUFBLFNBQUEsNkJBQUEsQ0FBQTtBQUFBLGFBQUEsMkJBQVMsT0FBQSxrQkFBQSxXQUFBLENBQTJCO0lBQUEsQ0FBQTtBQUVwQyxJQUFBLHlCQUFBLElBQUEsT0FBQSxFQUFBO0FBQ0YsSUFBQSw0QkFBQTtBQUNBLElBQUEsOEJBQUEsSUFBQSxTQUFBLEVBQUE7QUFHRSxJQUFBLGdDQUFBLGlCQUFBLFNBQUEsMkVBQUEsUUFBQTtBQUFBLFlBQUEsY0FBQSw2QkFBQSxHQUFBLEVBQUE7QUFBQSxNQUFBLGtDQUFBLFlBQUEsVUFBQSxNQUFBLE1BQUEsWUFBQSxXQUFBO0FBQUEsYUFBQSwyQkFBQSxNQUFBO0lBQUEsQ0FBQTtBQUhGLElBQUEsNEJBQUE7QUFNQSxJQUFBLDhCQUFBLElBQUEsVUFBQSxFQUFBO0FBRUUsSUFBQSwwQkFBQSxTQUFBLFNBQUEsc0VBQUE7QUFBQSxZQUFBLGNBQUEsNkJBQUEsR0FBQSxFQUFBO0FBQUEsWUFBQSxTQUFBLDZCQUFBLENBQUE7QUFBQSxhQUFBLDJCQUFTLE9BQUEsa0JBQUEsV0FBQSxDQUEyQjtJQUFBLENBQUE7QUFFcEMsSUFBQSx5QkFBQSxJQUFBLE9BQUEsRUFBQTtBQUNGLElBQUEsNEJBQUEsRUFBUyxFQUNMLEVBQ0YsRUFDRjtBQUdSLElBQUEseUJBQUEsSUFBQSxJQUFBOzs7O0FBaERTLElBQUEseUJBQUEsQ0FBQTtBQUFBLElBQUEsMEJBQUEsT0FBQSxZQUFBLE9BQUEsNEJBQUEsRUFBc0IsT0FBQSxZQUFBLEtBQUE7QUFJekIsSUFBQSx5QkFBQSxDQUFBO0FBQUEsSUFBQSxrQ0FBQSxLQUFBLFlBQUEsT0FBQSxHQUFBO0FBR0EsSUFBQSx5QkFBQSxDQUFBO0FBQUEsSUFBQSxrQ0FBQSxNQUFBLFlBQUEsUUFBQSxZQUFBLFVBQUEsR0FBQTtBQTJCSSxJQUFBLHlCQUFBLENBQUE7QUFBQSxJQUFBLGdDQUFBLFdBQUEsWUFBQSxRQUFBOzs7OztBQTNDWixJQUFBLDhCQUFBLEdBQUEsT0FBQSxDQUFBO0FBSUUsSUFBQSxnQ0FBQSxHQUFBLDRDQUFBLElBQUEsR0FBQSxNQUFBLE1BQUFDLFdBQUE7QUF1REYsSUFBQSw0QkFBQTs7OztBQXZERSxJQUFBLHlCQUFBO0FBQUEsSUFBQSwwQkFBQSxPQUFBLFNBQUE7OztBRFFJLElBQU8sd0JBQVAsTUFBTyx1QkFBcUI7RUFDdkIsWUFBdUIsQ0FBQTtFQUVoQyxpQkFBeUIsS0FBSyxNQUFNLGFBQWEsUUFBUSxNQUFNLENBQUUsRUFBRTtFQUVuRSxrQkFBa0IsU0FBZ0I7QUFDaEMsWUFBUTtBQUVSLGlCQUFhLFFBQVEsUUFBUSxLQUFLLFVBQVUsS0FBSyxTQUFTLENBQUM7RUFDN0Q7RUFFQSxrQkFBa0IsU0FBZ0I7QUFDaEMsUUFBSSxRQUFRLFdBQVcsR0FBRztBQUN4QixjQUFRO0FBRVIsbUJBQWEsUUFBUSxRQUFRLEtBQUssVUFBVSxLQUFLLFNBQVMsQ0FBQztJQUM3RDtFQUNGO0VBRUEsZUFBZSxTQUFnQjtBQUM3QixVQUFNLFFBQVEsS0FBSyxVQUFVLFFBQVEsT0FBTztBQUM1QyxTQUFLLFVBQVUsT0FBTyxPQUFPLENBQUM7QUFFOUIsaUJBQWEsUUFBUSxRQUFRLEtBQUssVUFBVSxLQUFLLFNBQVMsQ0FBQztFQUM3RDs7cUNBeEJXLHdCQUFxQjtFQUFBOzhFQUFyQix3QkFBcUIsV0FBQSxDQUFBLENBQUEsbUJBQUEsQ0FBQSxHQUFBLFFBQUEsRUFBQSxXQUFBLFlBQUEsR0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLFNBQUEseUZBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLGlCQUFBLFVBQUEsY0FBQSxPQUFBLFFBQUEsWUFBQSxTQUFBLG1CQUFBLGVBQUEsR0FBQSxDQUFBLEdBQUEsZ0JBQUEsUUFBQSxTQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsdUJBQUEsZ0JBQUEsT0FBQSxRQUFBLGdCQUFBLGtCQUFBLGFBQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxRQUFBLEdBQUEsT0FBQSxLQUFBLEdBQUEsQ0FBQSxHQUFBLHlCQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsaUNBQUEsYUFBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLGlDQUFBLGFBQUEsWUFBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLHlCQUFBLFFBQUEsWUFBQSxtQkFBQSxXQUFBLEdBQUEsQ0FBQSxHQUFBLG9DQUFBLEdBQUEsQ0FBQSxPQUFBLDBCQUFBLE9BQUEsU0FBQSxHQUFBLGtCQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxvQ0FBQSxnQkFBQSxPQUFBLGdCQUFBLFFBQUEsZ0JBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSw0Q0FBQSxRQUFBLGdCQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsZ0JBQUEsZ0JBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxPQUFBLDBCQUFBLE9BQUEsRUFBQSxHQUFBLENBQUEsUUFBQSxRQUFBLFlBQUEsSUFBQSxHQUFBLGVBQUEsZ0JBQUEsUUFBQSxrQkFBQSxHQUFBLGlCQUFBLFNBQUEsR0FBQSxDQUFBLE9BQUEseUJBQUEsT0FBQSxFQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEsK0JBQUEsSUFBQSxLQUFBO0FBQUEsUUFBQSxLQUFBLEdBQUE7QUNabEMsTUFBQSwwQkFBQSxHQUFBLHNDQUFBLEdBQUEsR0FBQSxPQUFBLENBQUE7OztBQUVHLE1BQUEsMEJBQUEsUUFBQSxJQUFBLGlCQUFBLENBQUE7O29CRE1TSCxlQUFZLGtCQUFBLGdCQUFBLHNCQUFBLGdDQUFFQyxjQUFXLHdCQUFBLG9CQUFBLGtDQUFBLDBCQUFBLHlCQUFBLHdCQUFBLGtDQUFBLGdDQUFBLHdDQUFBLCtCQUFBLHFCQUFBLDBCQUFBLHVCQUFBLHdCQUFBLHdCQUFBLHNCQUFBLCtCQUFBLG9CQUFBLGtCQUFBLGtCQUFBLGFBQUEsa0JBQUEsWUFBRUMsZUFBWSxZQUFBLHNCQUFBLFlBQUEsU0FBQSxxQkFBQSxZQUFBLGFBQUEsaUJBQUEsb0JBQUEsYUFBQSxpQkFBQSxjQUFBLGtCQUFBLGtCQUFBLGFBQUEsY0FBQSxnQkFBQSxnQkFBQSxrQkFBQSxpQkFBQSxhQUFBLG1CQUFBLG1CQUFBLGVBQUEsR0FBQSxRQUFBLENBQUEsMEpBQUEsRUFBQSxDQUFBOzs7a0ZBSXRDLHVCQUFxQixFQUFBLFdBQUEseUJBQUEsVUFBQSwrREFBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7Ozs7OztnRUFBckIsdUJBQXFCLEVBQUEsU0FBQSxDQUFBRSxNQUFBQyxLQUFBQyxLQUFBLEVBQUEsR0FBQSxDQUFBTixlQUFBQyxjQUFBQyxhQUFBLENBQUEsQ0FBQTtFQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxjQUFBLDhCQUFBLEtBQUEsSUFBQSxDQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxlQUFBLFlBQUEsT0FBQSxZQUFBLElBQUEsR0FBQSw0QkFBQSxPQUFBLEVBQUEsT0FBQSxpR0FBQSw4QkFBQSxFQUFBLFNBQUEsQ0FBQTtBQUFBLEdBQUE7Ozs7O0FGRDVCLElBQU8sZ0JBQVAsTUFBTyxlQUFhO0VBQ3hCLFlBQXVCLENBQUE7RUFFdkIsV0FBUTtBQUNOLFNBQUssWUFBWSxLQUFLLE1BQU0sYUFBYSxRQUFRLE1BQU0sQ0FBRTtFQUMzRDs7cUNBTFcsZ0JBQWE7RUFBQTs4RUFBYixnQkFBYSxXQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLEdBQUEsUUFBQSxTQUFBLFFBQUEsUUFBQSxVQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUEsWUFBQSxpQkFBQSxZQUFBLGVBQUEsYUFBQSxRQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxHQUFBLENBQUEsR0FBQSxXQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEsdUJBQUEsSUFBQSxLQUFBO0FBQUEsUUFBQSxLQUFBLEdBQUE7QUNYMUIsTUFBQSw4QkFBQSxHQUFBLE9BQUEsQ0FBQSxFQUEyQyxHQUFBLE9BQUEsQ0FBQTtBQUl2QyxNQUFBLHNCQUFBLEdBQUEsYUFBQTtBQUNGLE1BQUEsNEJBQUE7QUFDQSxNQUFBLDhCQUFBLEdBQUEsT0FBQSxDQUFBO0FBQ0UsTUFBQSx5QkFBQSxHQUFBLHFCQUFBLENBQUE7QUFDRixNQUFBLDRCQUFBLEVBQU07OztBQURlLE1BQUEseUJBQUEsQ0FBQTtBQUFBLE1BQUEsMEJBQUEsYUFBQSxJQUFBLFNBQUE7O29CREFYSyxlQUFZLGFBQUEsdUJBQUEsYUFBQSxVQUFBLHNCQUFBLGFBQUEsY0FBQSxrQkFBQSxxQkFBQSxjQUFBLGtCQUFBLGVBQUEsbUJBQUEsbUJBQUEsY0FBQSxlQUFBLGlCQUFBLGlCQUFBLG1CQUFBLGtCQUFBLGNBQUEsb0JBQUEsb0JBQUEsa0JBQUUscUJBQXFCLEdBQUEsZUFBQSxFQUFBLENBQUE7OztrRkFJbEMsZUFBYSxFQUFBLFdBQUEsaUJBQUEsVUFBQSx3Q0FBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7Ozs7OztnRUFBYixlQUFhLEVBQUEsU0FBQSxDQUFBQyxNQUFBQyxHQUFBLEdBQUEsQ0FBQUYsZUFBQSxxQkFBQSxDQUFBLENBQUE7RUFBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsY0FBQSxzQkFBQSxLQUFBLElBQUEsQ0FBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsZUFBQSxZQUFBLE9BQUEsWUFBQSxJQUFBLEdBQUEsNEJBQUEsT0FBQSxFQUFBLE9BQUEsa0VBQUEsc0JBQUEsRUFBQSxTQUFBLENBQUE7QUFBQSxHQUFBOzs7QUlYMUIsU0FBUyxhQUFBRyxtQkFBaUI7OztBRUExQixTQUFTLGFBQUFDLG1CQUFpQjtBQUMxQixTQUlFLHFCQUNBLGtCQUNLOzs7QUFTRCxJQUFPLDJCQUFQLE1BQU8sMEJBQXdCO0VBR2Y7RUFBeUI7RUFGN0M7RUFFQSxZQUFvQixJQUF5QixnQkFBOEI7QUFBdkQsU0FBQSxLQUFBO0FBQXlCLFNBQUEsaUJBQUE7QUFDM0MsU0FBSyxpQkFBaUIsS0FBSyxHQUFHLE1BQU07TUFDbEMsT0FBTyxDQUFDLElBQUksV0FBVyxRQUFRO01BQy9CLE9BQU8sQ0FBQyxHQUFHLFdBQVcsUUFBUTtNQUM5QixVQUFVLENBQUMsSUFBSSxXQUFXLFFBQVE7TUFDbEMsYUFBYSxDQUFDLElBQUksV0FBVyxRQUFRO0tBQ3RDO0VBQ0g7RUFFQSxXQUFRO0FBQ04sUUFBSSxLQUFLLGVBQWUsT0FBTztBQUM3QixXQUFLLGVBQWUsV0FBVyxLQUFLLGVBQWUsS0FBSztJQUMxRCxPQUFPO0FBQ0wsWUFBTSw0QkFBNEI7SUFDcEM7RUFDRjs7cUNBbEJXLDJCQUF3QixpQ0FBQSxlQUFBLEdBQUEsaUNBQUEsY0FBQSxDQUFBO0VBQUE7OEVBQXhCLDJCQUF3QixXQUFBLENBQUEsQ0FBQSx1QkFBQSxDQUFBLEdBQUEsT0FBQSxJQUFBLE1BQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLG9CQUFBLEdBQUEsQ0FBQSxHQUFBLDZCQUFBLFlBQUEsaUJBQUEsWUFBQSxlQUFBLGFBQUEsUUFBQSxVQUFBLEdBQUEsQ0FBQSxHQUFBLFlBQUEsV0FBQSxHQUFBLENBQUEsR0FBQSw0QkFBQSxRQUFBLFlBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxpQ0FBQSxHQUFBLENBQUEsT0FBQSxRQUFBLEdBQUEsdUJBQUEsR0FBQSxDQUFBLFFBQUEsUUFBQSxNQUFBLFFBQUEsbUJBQUEsU0FBQSxlQUFBLFNBQUEsWUFBQSxZQUFBLEdBQUEsVUFBQSxVQUFBLDJCQUFBLGNBQUEsS0FBQSxHQUFBLENBQUEsT0FBQSxTQUFBLEdBQUEsdUJBQUEsR0FBQSxDQUFBLFFBQUEsVUFBQSxNQUFBLFNBQUEsbUJBQUEsU0FBQSxlQUFBLFNBQUEsWUFBQSxZQUFBLEdBQUEsVUFBQSxVQUFBLDJCQUFBLGNBQUEsS0FBQSxHQUFBLENBQUEsT0FBQSxTQUFBLEdBQUEsdUJBQUEsR0FBQSxDQUFBLFFBQUEsUUFBQSxNQUFBLFNBQUEsbUJBQUEsWUFBQSxZQUFBLFlBQUEsR0FBQSxVQUFBLFVBQUEsMkJBQUEsY0FBQSxLQUFBLEdBQUEsQ0FBQSxPQUFBLGVBQUEsR0FBQSx1QkFBQSxHQUFBLENBQUEsTUFBQSxlQUFBLG1CQUFBLGVBQUEsWUFBQSxZQUFBLEdBQUEsVUFBQSxVQUFBLDJCQUFBLGNBQUEsS0FBQSxHQUFBLENBQUEsR0FBQSxrQ0FBQSxHQUFBLENBQUEsUUFBQSxVQUFBLEdBQUEsYUFBQSxjQUFBLGNBQUEsUUFBQSxRQUFBLEdBQUEsT0FBQSxDQUFBLEdBQUEsVUFBQSxTQUFBLGtDQUFBLElBQUEsS0FBQTtBQUFBLFFBQUEsS0FBQSxHQUFBO0FDaEJyQyxNQUFBLDhCQUFBLEdBQUEsT0FBQSxDQUFBLEVBQWdDLEdBQUEsT0FBQSxDQUFBO0FBSTVCLE1BQUEsc0JBQUEsR0FBQSxlQUFBO0FBQ0YsTUFBQSw0QkFBQTtBQUNBLE1BQUEsOEJBQUEsR0FBQSxRQUFBLENBQUE7QUFBbUMsTUFBQSwwQkFBQSxZQUFBLFNBQUEsNkRBQUE7QUFBQSxlQUFZLElBQUEsU0FBQTtNQUFVLENBQUE7QUFDdkQsTUFBQSw4QkFBQSxHQUFBLE9BQUEsQ0FBQSxFQUEwRCxHQUFBLE9BQUEsQ0FBQSxFQUNYLEdBQUEsU0FBQSxDQUFBO0FBQ0ssTUFBQSxzQkFBQSxHQUFBLE9BQUE7QUFBSyxNQUFBLDRCQUFBO0FBQ3JELE1BQUEseUJBQUEsR0FBQSxJQUFBLEVBQU0sR0FBQSxTQUFBLENBQUE7QUFTUixNQUFBLDRCQUFBO0FBQ0EsTUFBQSw4QkFBQSxJQUFBLE9BQUEsQ0FBQSxFQUE2QyxJQUFBLFNBQUEsQ0FBQTtBQUNNLE1BQUEsc0JBQUEsSUFBQSxPQUFBO0FBQUssTUFBQSw0QkFBQTtBQUN0RCxNQUFBLHlCQUFBLElBQUEsSUFBQSxFQUFNLElBQUEsU0FBQSxDQUFBO0FBU1IsTUFBQSw0QkFBQTtBQUNBLE1BQUEsOEJBQUEsSUFBQSxPQUFBLENBQUEsRUFBNkMsSUFBQSxTQUFBLENBQUE7QUFDTSxNQUFBLHNCQUFBLElBQUEsV0FBQTtBQUFTLE1BQUEsNEJBQUE7QUFDMUQsTUFBQSx5QkFBQSxJQUFBLElBQUEsRUFBTSxJQUFBLFNBQUEsRUFBQTtBQVFSLE1BQUEsNEJBQUE7QUFDQSxNQUFBLDhCQUFBLElBQUEsT0FBQSxDQUFBLEVBQTZDLElBQUEsU0FBQSxFQUFBO0FBRXhDLE1BQUEsc0JBQUEsSUFBQSxhQUFBO0FBQVcsTUFBQSw0QkFBQTtBQUVkLE1BQUEseUJBQUEsSUFBQSxJQUFBLEVBQU0sSUFBQSxZQUFBLEVBQUE7QUFPUixNQUFBLDRCQUFBO0FBRUEsTUFBQSw4QkFBQSxJQUFBLE9BQUEsRUFBQSxFQUE4QyxJQUFBLFVBQUEsRUFBQTtBQUUxQyxNQUFBLDBCQUFBLFNBQUEsU0FBQSw2REFBQTtBQUFBLGVBQVMsSUFBQSxTQUFBO01BQVUsQ0FBQTtBQUluQixNQUFBLHNCQUFBLElBQUEsZUFBQTtBQUNGLE1BQUEsNEJBQUEsRUFBUyxFQUNMLEVBQ0YsRUFDRDs7O0FBNURELE1BQUEseUJBQUEsQ0FBQTtBQUFBLE1BQUEsMEJBQUEsYUFBQSxJQUFBLGNBQUE7O29CRE1JLHFCQUFtQix3QkFBQSxvQkFBQSxrQ0FBQSwwQkFBQSx5QkFBQSx3QkFBQSxrQ0FBQSxnQ0FBQSx3Q0FBQSwrQkFBQSxxQkFBQSwwQkFBQSx1QkFBQSx3QkFBQSx3QkFBQSxzQkFBQSwrQkFBQSxvQkFBQSxrQkFBQSxrQkFBQSwwQkFBQSx3QkFBQSxxQkFBQSxtQkFBQSxpQkFBQSxHQUFBLGVBQUEsRUFBQSxDQUFBOzs7a0ZBSWxCLDBCQUF3QixFQUFBLFdBQUEsNEJBQUEsVUFBQSx1RUFBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7Ozs7OztnRUFBeEIsMEJBQXdCLEVBQUEsU0FBQSxDQUFBQyxNQUFBQyxLQUFBLHVCQUFBLEdBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUE7RUFBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsY0FBQSxpQ0FBQSxLQUFBLElBQUEsQ0FBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsZUFBQSxZQUFBLE9BQUEsWUFBQSxJQUFBLEdBQUEsNEJBQUEsT0FBQSxFQUFBLE9BQUEsNEdBQUEsaUNBQUEsRUFBQSxTQUFBLENBQUE7QUFBQSxHQUFBOzs7O0FGUC9CLElBQU8saUJBQVAsTUFBTyxnQkFBYzs7cUNBQWQsaUJBQWM7RUFBQTs4RUFBZCxpQkFBYyxXQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxRQUFBLFlBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxvQkFBQSxDQUFBLEdBQUEsVUFBQSxTQUFBLHdCQUFBLElBQUEsS0FBQTtBQUFBLFFBQUEsS0FBQSxHQUFBO0FDVDNCLE1BQUEsOEJBQUEsR0FBQSxPQUFBLENBQUEsRUFBdUMsR0FBQSxPQUFBLENBQUE7QUFFbkMsTUFBQSx5QkFBQSxHQUFBLHVCQUFBO0FBQ0YsTUFBQSw0QkFBQSxFQUFNOztvQkRFSSx3QkFBd0IsR0FBQSxlQUFBLEVBQUEsQ0FBQTs7O2tGQUl2QixnQkFBYyxFQUFBLFdBQUEsa0JBQUEsVUFBQSwwQ0FBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7Ozs7OztnRUFBZCxnQkFBYyxFQUFBLFNBQUEsQ0FBQUMsSUFBQSxHQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBO0VBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGNBQUEsdUJBQUEsS0FBQSxJQUFBLENBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGVBQUEsWUFBQSxPQUFBLFlBQUEsSUFBQSxHQUFBLDRCQUFBLE9BQUEsRUFBQSxPQUFBLHFFQUFBLHVCQUFBLEVBQUEsU0FBQSxDQUFBO0FBQUEsR0FBQTs7O0FJRHBCLElBQU0sU0FBaUI7RUFDNUIsRUFBRSxNQUFNLElBQUksV0FBVyxjQUFhO0VBQ3BDLEVBQUUsTUFBTSxRQUFRLFdBQVcsY0FBYTtFQUN4QyxFQUFFLE1BQU0sU0FBUyxXQUFXLGVBQWM7RUFDMUMsRUFBRSxNQUFNLFlBQVksV0FBVyxrQkFBaUI7RUFDaEQsRUFBRSxNQUFNLGVBQWUsV0FBVyx1QkFBc0I7RUFDeEQsRUFBRSxNQUFNLE1BQU0sV0FBVyxlQUFjOzs7O0F6QlZ6QyxTQUNFLHdCQUNBLHVCQUNLO0FBQ1AsU0FBUyx5QkFBeUI7QUFFM0IsSUFBTSxZQUErQjtFQUMxQyxXQUFXO0lBQ1QsMkJBQTJCLEVBQUUsaUJBQWlCLEtBQUksQ0FBRTtJQUNwRCxjQUFjLE1BQU07SUFDcEIsa0JBQWlCO0lBQ2pCLHVCQUF1QixnQkFBZSxDQUFFOzs7OztBMEJmNUMsU0FBUyxhQUFBQyxtQkFBaUI7QUFDMUIsU0FBUyxnQkFBQUMscUJBQW9COzs7QUVEN0IsU0FBUyxhQUFBQyxtQkFBaUI7QUFDMUIsU0FBUyxjQUFBQyxtQkFBZ0M7Ozs7O0FDMEJyQyxJQUFBLDhCQUFBLEdBQUEsT0FBQSxFQUFBO0FBRUUsSUFBQSwwQkFBQSxTQUFBLFNBQUEsNkRBQUEsUUFBQTtBQUFBLE1BQUEsNkJBQUEsR0FBQTtBQUFBLFlBQUEsU0FBQSw2QkFBQTtBQUFBLGFBQUEsMkJBQVMsT0FBQSxZQUFBLE1BQUEsQ0FBbUI7SUFBQSxDQUFBO0FBRTVCLElBQUEsOEJBQUEsR0FBQSxNQUFBLEVBQUEsRUFFQyxHQUFBLE1BQUEsRUFBQSxFQUN3QyxHQUFBLEtBQUEsRUFBQTtBQUVsQyxJQUFBLHNCQUFBLEdBQUEsTUFBQTtBQUFJLElBQUEsNEJBQUEsRUFDTjtBQUVILElBQUEsOEJBQUEsR0FBQSxNQUFBLEVBQUEsRUFBdUMsR0FBQSxLQUFBLEVBQUE7QUFFbEMsSUFBQSxzQkFBQSxHQUFBLGNBQUE7QUFBWSxJQUFBLDRCQUFBLEVBQ2Q7QUFFSCxJQUFBLDhCQUFBLEdBQUEsTUFBQSxFQUFBLEVBQXVDLEdBQUEsS0FBQSxFQUFBO0FBRWxDLElBQUEsc0JBQUEsSUFBQSxhQUFBO0FBQVcsSUFBQSw0QkFBQSxFQUNiO0FBRUgsSUFBQSw4QkFBQSxJQUFBLE1BQUEsRUFBQTtBQUdFLElBQUEseUJBQUEsSUFBQSxTQUFBLEVBQUE7QUFPQSxJQUFBLDhCQUFBLElBQUEsT0FBQSxFQUFBO0FBR0UsSUFBQSx5QkFBQSxJQUFBLE9BQUEsRUFBQTtBQUNGLElBQUEsNEJBQUEsRUFBTSxFQUNILEVBQ0Y7OztBRHhETCxJQUFPLGtCQUFQLE1BQU8saUJBQWU7RUFDaEIsZUFBd0I7RUFFeEIsYUFBVTtBQUNsQixTQUFLLGVBQWU7RUFDdEI7RUFFVSxZQUFZLE9BQVk7QUFDaEMsVUFBTSxZQUFhLE1BQU0sT0FBdUIsVUFBVSxDQUFDO0FBQzNELFVBQU0sWUFBWSxTQUNmLGNBQWMsSUFBSSxTQUFTLEVBQUUsRUFDN0IsUUFBUSxzQkFBc0I7QUFFakMsUUFBSSxDQUFDLFdBQVc7QUFDZCxXQUFLLGVBQWU7SUFDdEI7RUFDRjs7cUNBaEJXLGtCQUFlO0VBQUE7OEVBQWYsa0JBQWUsV0FBQSxDQUFBLENBQUEsWUFBQSxDQUFBLEdBQUEsT0FBQSxJQUFBLE1BQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxRQUFBLFlBQUEsWUFBQSxRQUFBLG1CQUFBLGdCQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsZ0JBQUEsa0JBQUEsWUFBQSxlQUFBLFlBQUEsY0FBQSxRQUFBLGdCQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsc0JBQUEsUUFBQSxnQkFBQSxhQUFBLE1BQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsT0FBQSx5QkFBQSxPQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSxnQkFBQSxVQUFBLFdBQUEsZ0JBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxxQkFBQSxHQUFBLENBQUEsY0FBQSxHQUFBLEdBQUEsQ0FBQSxRQUFBLGNBQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSxpQ0FBQSx1QkFBQSxTQUFBLFlBQUEsWUFBQSxTQUFBLFVBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxrQkFBQSxVQUFBLFdBQUEsZ0JBQUEsWUFBQSxVQUFBLFFBQUEsR0FBQSxDQUFBLE9BQUEsMkJBQUEsT0FBQSxVQUFBLEdBQUEsWUFBQSxRQUFBLEdBQUEsQ0FBQSxRQUFBLFFBQUEsUUFBQSxJQUFBLE1BQUEsSUFBQSxlQUFBLDBCQUFBLEdBQUEsaUJBQUEsTUFBQSxNQUFBLFFBQUEsZ0JBQUEsZ0JBQUEsU0FBQSxRQUFBLFVBQUEsY0FBQSxHQUFBLENBQUEsR0FBQSxtQkFBQSxRQUFBLGdCQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsZ0JBQUEsR0FBQSxDQUFBLGNBQUEsU0FBQSxHQUFBLFFBQUEsY0FBQSxHQUFBLENBQUEsT0FBQSx5QkFBQSxPQUFBLE1BQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxjQUFBLEdBQUEsQ0FBQSxPQUFBLHlCQUFBLE9BQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxpQ0FBQSx1QkFBQSxTQUFBLFlBQUEsWUFBQSxTQUFBLFVBQUEsUUFBQSxHQUFBLE9BQUEsR0FB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QUMsU0FBUTtBQUNuRCxVQUFJLENBQUMsYUFBYSxRQUFRLFVBQVUsR0FBRztBQUNyQyxxQkFBYSxRQUFRLFlBQVksS0FBSyxVQUFVLElBQUksQ0FBQztNQUN2RDtJQUNGLENBQUM7RUFDSDs7cUNBVFcsZUFBWSxpQ0FBQSxjQUFBLENBQUE7RUFBQTs4RUFBWixlQUFZLFdBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEsc0JBQUEsSUFBQSxLQUFBO0FBQUEsUUFBQSxLQUFBLEdBQUE7QUNaekIsTUFBQSx5QkFBQSxHQUFBLFlBQUE7QUFDQSxNQUFBLDhCQUFBLEdBQUEsUUFBQSxDQUFBO0FBQ0UsTUFBQSx5QkFBQSxHQUFBLGVBQUE7QUFDRixNQUFBLDRCQUFBO0FBQ0EsTUFBQSx5QkFBQSxHQUFBLFlBQUE7O29CRElZQyxlQUFjLGlCQUFpQixlQUFlLEdBQUEsZUFBQSxFQUFBLENBQUE7OztrRkFJN0MsY0FBWSxFQUFBLFdBQUEsZ0JBQUEsVUFBQSw0QkFBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7Ozs7OztnRUFBWixjQUFZLEVBQUEsU0FBQSxDQUFBQyxNQUFBLHVCQUFBLEdBQUEsQ0FBQUQsZUFBQSxpQkFBQSxlQUFBLENBQUEsQ0FBQTtFQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxjQUFBLHFCQUFBLEtBQUEsSUFBQSxDQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxlQUFBLFlBQUEsT0FBQSxZQUFBLElBQUEsR0FBQSw0QkFBQSxPQUFBLEVBQUEsT0FBQSxpREFBQSxxQkFBQSxFQUFBLFNBQUEsQ0FBQTtBQUFBLEdBQUE7OztBM0JSekIscUJBQXFCLGNBQWMsU0FBUyxFQUFFLE1BQU0sQ0FBQzs7RUFFbkQsUUFBUSxNQUFNLEdBQUc7Q0FBQzsiLCJuYW1lcyI6WyJDb21wb25lbnQiLCJDb21wb25lbnQiLCJpMCIsIkNvbXBvbmVudCIsIklucHV0IiwiQ29tcG9uZW50IiwiaTAiLCJpMCIsImkwIiwiQ29tcG9uZW50IiwiaTAiLCJDb21wb25lbnQiLCJDb21tb25Nb2R1bGUiLCJJbmplY3RhYmxlIiwiQ29tbW9uTW9kdWxlIiwiaTAiLCJpMSIsIkNvbW1vbk1vZHVsZSIsIkNvbXBvbmVudCIsIkNvbXBvbmVudCIsIklucHV0IiwiUm91dGVyTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJfZm9yVHJhY2swIiwiaTAiLCJpMSIsImkyIiwiQ29tbW9uTW9kdWxlIiwiaTAiLCJpMSIsIkNvbXBvbmVudCIsIkNvbXBvbmVudCIsImkwIiwiaTEiLCJpMCIsIkNvbXBvbmVudCIsIlJvdXRlck91dGxldCIsIkNvbXBvbmVudCIsIlJvdXRlckxpbmsiLCJpMCIsIkNvbXBvbmVudCIsImkwIiwiUm91dGVyT3V0bGV0IiwiaTAiXX0=