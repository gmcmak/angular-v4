import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./_includes/header/header.component";
import {FooterComponent} from "./_includes/footer/footer.component";
import {SubMenuComponent} from "./_includes/sub_menu/submenu.component";
import {HomeComponent} from "./components/home/home.component";
import {MenuComponent} from "./components/menu/menu.component";
import {SubmenuComponent} from "./components/submenu/submenu.component";
import {ProductComponent} from "./components/product/product.component";
import {CartComponent} from "./components/cart/cart.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {OrdersComponent} from "./components/orders/orders.component";
import {PageNotFoundComponent} from "./components/404/404.component";


const routes: Routes = [

    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'Home'
        }
    },

    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'menu/:id',
        component: SubmenuComponent
    },
    {
        path: 'submenu',
        component: SubmenuComponent
    },

    {
        path:'menu/product/:id',
        component:ProductComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },

    {
        path: 'orders',
        component: OrdersComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: '**',
        component:PageNotFoundComponent
    }
];

export const PageComponents = [HeaderComponent, FooterComponent, SubMenuComponent, HomeComponent, MenuComponent, SubmenuComponent, CartComponent, LoginComponent, RegisterComponent, SettingsComponent, OrdersComponent, PageNotFoundComponent, ProductComponent];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {

}

