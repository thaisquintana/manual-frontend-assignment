'use client'

import { PropsWithChildren } from 'react'
import { queryClient } from '@/api'
import GlobalStyles from '@/styles/global'
import { QueryClientProvider } from 'react-query'
export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      {children}
    </QueryClientProvider>
  )
}
