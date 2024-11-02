import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const components = {
  // 여기에 커스텀 컴포넌트를 추가할 수 있습니다.
};

export const MDXContent = ({ children }: { children: React.ReactNode }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};