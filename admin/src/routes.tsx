import React from 'react';
import { IconList, IconGift, IconStorage,IconTags, IconHeart, IconUser } from '@arco-design/web-react/icon';

export const defaultRoute = 'welcome';

export const routes = [
  {
    name: 'menu.welcome',
    key: 'welcome',
    icon: <IconGift />,
    componentPath: 'welcome',
  },
  // {
  //   name: 'menu.list',
  //   key: 'list',
  //   icon: <IconList />,
  //   children: [
  //     {
  //       name: 'menu.list.searchTable',
  //       key: 'list/search-table',
  //       componentPath: 'search-table',
  //     },
  //   ],
  // },
  {
    name: 'menu.categories',
    key: 'categories',
    icon: <IconStorage />,
    componentPath: 'categories',
  },
  {
    name: '标签管理',
    key: 'tags',
    icon: <IconTags />,
    componentPath: 'tags',
  },
  {
    name: '关于管理',
    key: 'about',
    icon: <IconHeart />,
    componentPath: 'about',
  },
  {
    name: '用户管理',
    key: 'user',
    icon: <IconUser />,
    componentPath: 'user',
  },
];
