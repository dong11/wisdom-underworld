import type { RouteObject } from 'react-router-dom';

// 扩展 Route 定义
export interface RouteProps extends RouteObject {
  meta?: {
    auth?: boolean
  }
  children?: RouteProps[]
}