"use client";

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { wrapper } from '@/store/store';

type Props = {
  children: ReactNode;
  initialProps?: any;
};

const ReduxProvider: React.FC<Props> = ({ children, initialProps }) => {
  const { store } = wrapper.useWrappedStore(initialProps);

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
