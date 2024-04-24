
import { RouterModule } from "@angular/router";
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ProductListComponent} from "./products/product-list/product-list.component";
import {ShoeAtom} from "./components/atoms/shoe-atom";
import {PopularProductCard} from "./components/atoms/popular-product-card";
import {SuperQualityComponent} from "./components/sections/super-quality.component";
import {SubscribeComponent} from "./components/sections/subscribe.component";
import {SpecialOfferComponent} from "./components/sections/special-offer.component";
import {ServicesComponent} from "./components/sections/services.component";
import {PopularProductsComponent} from "./components/sections/popular-products.component";
import {NavComponent} from "./components/sections/nav.component";
import {FooterComponent} from "./components/sections/footer.component";
import {CuustomerReviewsComponent} from "./components/sections/cuustomer-reviews.component";
import {HeroComponent} from "./components/sections/hero.component";
import {ServiceCard} from "./components/atoms/service-card";
import {ReviewCard} from "./components/atoms/review-card";
import {ButtonAtom} from "./components/atoms/button-atom";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    ProductListComponent,
    SuperQualityComponent,
    SubscribeComponent,
    SpecialOfferComponent,
    ServicesComponent,
    PopularProductsComponent,
    NavComponent,
    HeroComponent,
    FooterComponent,
    CuustomerReviewsComponent,
    ShoeAtom,
    ServiceCard,
    ReviewCard,
    PopularProductCard,
    ButtonAtom
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-adidas-vercel';

}
