import {Injectable} from '@angular/core';
import MenuItems    from '../mocks/SideMenuItems';

@Injectable()
export class SideBarMenuService {
    getMenuItems() {
        return Promise.resolve(MenuItems);
    }
}
