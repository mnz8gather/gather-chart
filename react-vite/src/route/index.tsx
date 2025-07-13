import { HomePage } from '@/pages';
import { AppLayout } from './layout';
import { NotFound } from '@/pages/404';
import { GraphPage } from '@/pages/echarts.Graph';
import { MapScatter } from '@/pages/MaptalksWithECharts.ScatterMap';
import type { CustomRouteObject } from './interface';

export const routeConfig: CustomRouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        label: '首页',
      },
      {
        path: 'echarts-graph',
        element: <GraphPage />,
        label: 'Echarts 关系图',
      },
      {
        path: 'maptalks-echarts-scatter',
        element: <MapScatter />,
        label: 'Maptalks 和 Echarts 散点图',
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
