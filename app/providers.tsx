"use client"

import { clientEnv } from "@/env/client"
import { ThemeProvider } from "next-themes"
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ReactNode } from "react"


export function Providers( { children }: { children: ReactNode } ) {
  return (

    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>

  )
}