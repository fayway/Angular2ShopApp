import {Component}                  from '@angular/core';
import {HomePage}                   from './pages/HomePage';
import {ProductDetailPage}          from './pages/ProductDetailPage';
import {ComingSoonPage}             from './pages/ComingSoonPage';
import {NavBarContainer}            from './containers/NavBarContainer';
import {SideBarContainer}           from './containers/SideBarContainer';
import {FooterContainer}            from './containers/FooterContainer';
import {ProductService}             from './services/ProductService';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        useAsDefault: true
    },
    {
        path: '/product/:code',
        name: 'ProductDetail',
        component: ProductDetailPage
    },
    {
        path: '/comingsoon',
        name: 'ComingSoon',
        component: ComingSoonPage
    }
])

@Component({
    selector: 'app',
    template: `
        <navbar-container></navbar-container>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <sidebar-container></sidebar-container>
                </div>
                <div class="col-md-9">
                    <router-outlet></router-outlet>
                </div>
            </div>
        </div>
        <footer-container></footer-container>
    `,
    directives: [
        ROUTER_DIRECTIVES,
        NavBarContainer,
        SideBarContainer,
        FooterContainer
    ],
    providers: [
        ROUTER_PROVIDERS,
        ProductService
    ]
})
export class AppComponent {}
