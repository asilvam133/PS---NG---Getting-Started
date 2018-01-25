import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductGuardService } from './product-guard.service';
import { ProductDetailComponent } from './product-detail.component';

const PRODUCT_ROUTES: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent }
];

export const PRODUCT_ROUTING = RouterModule.forChild(PRODUCT_ROUTES);
