import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';

import UsequeryComp from './UsequeryComp';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div style={{ color: 'blue' }}>query가 돈다~!</div>}>
        <UsequeryComp />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
