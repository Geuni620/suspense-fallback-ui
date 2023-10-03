import { QueryClient } from '@tanstack/react-query';

export const createQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      cacheTime: 0,
      suspense: true,
    },
  },
});