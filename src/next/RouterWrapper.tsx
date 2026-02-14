import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

type RouterWrapperProps = {
  initialPath?: string;
  children: React.ReactNode;
};

export const RouterWrapper = ({ initialPath = '/', children }: RouterWrapperProps) => {
  const isServer = typeof window === 'undefined';
  const Router = (isServer ? MemoryRouter : BrowserRouter) as React.ComponentType<any>;
  const routerProps = isServer ? { initialEntries: [initialPath] } : {};
  return <Router {...routerProps}>{children}</Router>;
};
