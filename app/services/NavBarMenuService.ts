import {Injectable} from '@angular/core';
import MenuItems    from '../mocks/NavBarMenuItems';

@Injectable()
export class NavBarMenuService {
    getMenuItems() {
        return Promise.resolve(MenuItems);
    }
}
