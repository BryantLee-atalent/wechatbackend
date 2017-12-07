import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: '后台管理',
    main: [
      {
        state: 'accountmanage',
        name: '账号管理',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'indexmanage',
        name: '首页管理',
        type: 'link',
        icon: 'ti-view-grid'
      },
      {
        state: 'smallformmanage',
        name: '分榜单管理',
        type: 'link',
        icon: 'ti-view-grid'
      },
      {
        state: 'formmanage',
        name: '榜单管理',
        type: 'link',
        icon: 'ti-view-grid'
      },
      {
        state: 'mechanism',
        name: ' 机构管理',
        type: 'link',
        icon: 'ti-view-grid'
      },
      {
        state: 'signupmanage',
        name: '报名审核',
        type: 'link',
        icon: 'ti-view-grid'
      },
      {
        state: 'selectionmanage',
        name: '评选结果',
        type: 'link',
        icon: 'ti-view-grid'
      }
    ],
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
