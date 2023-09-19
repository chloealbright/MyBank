// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import {
  ChakraProvider,

} from '@chakra-ui/react'
import {theme} from '../app/components/styles'
// Supports weights 300-800
import '@fontsource-variable/merriweather-sans' //or 300
// Supports weights 300-700
import '@fontsource-variable/quicksand'
// Supports weights 300-800
import '@fontsource/open-sans'

export function ThemeProviders({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}