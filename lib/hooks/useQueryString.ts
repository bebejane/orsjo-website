'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useOptimistic } from 'react'

export default function useQueryString() {

  const router = useRouter()
  const pathname = usePathname()
  const [searchParams, setSearchParams] = useOptimistic<any | null>(useSearchParams() ?? null)

  const setSearchParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set(key, value)
    setSearchParams(params)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return { pathname, searchParams, setSearchParam }

}