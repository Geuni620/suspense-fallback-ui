'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createQueryClient } from 'lib/query/queryClient';
import { useState } from 'react';

interface QueryContextProps {
  children: React.ReactNode;
}

const QueryContext: React.FC<QueryContextProps> = ({ children }) => {
  const [queryClient] = useState(createQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default QueryContext;
