import { Routes } from '@angular/router';
import {ProductListComponent} from "./products/product-list/product-list.component";
import {SuperQualityComponent} from "./components/sections/super-quality.component";
import {SubscribeComponent} from "./components/sections/subscribe.component";
import {PopularProductsComponent} from "./components/sections/popular-products.component";
import {PopularProductCard} from "./components/atoms/popular-product-card";
import {NavComponent} from "./components/sections/nav.component";
import {HeroComponent} from "./components/sections/hero.component";
import {FooterComponent} from "./components/sections/footer.component";
import {CuustomerReviewsComponent} from "./components/sections/cuustomer-reviews.component";
import {ShoeAtom} from "./components/atoms/shoe-atom";
import {ServiceCard} from "./components/atoms/service-card";
import {ReviewCard} from "./components/atoms/review-card";
import {ButtonAtom} from "./components/atoms/button-atom";

export const routes: Routes = [
  {
    title: 'products-list',
    path: 'products-list',
    loadComponent: () => import('./products/product-list/product-list.component').then(m => m.ProductListComponent),
    children: [
      { path: 'super-quality', component: SuperQualityComponent },
      { path: 'subscribe', component: SubscribeComponent },
      { path: 'popular-products', component: PopularProductsComponent},
      { path: 'nav-card', component: NavComponent },
      { path: 'subscribe', component: SubscribeComponent },

      { path: 'popular-products', component: PopularProductsComponent},
      { path: 'hero', component: HeroComponent },
      { path: 'footer', component: FooterComponent},
      { path: 'custom-review', component: CuustomerReviewsComponent },
      { path: 'shoe-atom', component: ShoeAtom },
      { path: 'service-card', component: ServiceCard},
      { path: 'review-card', component: ReviewCard },
      { path: 'popular-product-card', component: PopularProductCard },
      { path: 'button-atom', component: ButtonAtom}
    ]
  },
  {
    title: 'product-detail',
    path: '/product-detail',
    loadComponent: () => import('./products/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },


  { path: '**', redirectTo:'' },

]
