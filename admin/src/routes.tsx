import React from 'react';
import { IconList, IconGift, IconStorage } from '@arco-design/web-react/icon';

export const defaultRoute = 'welcome';

export const routes = [
  {
    name: 'menu.welcome',
    key: 'welcome',
    icon: <IconGift />,
    componentPath: 'welcome',
  },
  {
    name: 'menu.list',
    key: 'list',
    icon: <IconList />,
    children: [
      {
        name: 'menu.list.searchTable',
        key: 'list/search-table',
        componentPath: 'search-table',
      },
    ],
  },
  {
    name: 'menu.categories',
    key: 'categories',
    icon: <IconStorage />,
    componentPath: 'categories',
  },
  {
    name: '标签管理',
    key: 'tags',
    icon: <IconStorage />,
    componentPath: 'tags',
  },
];
