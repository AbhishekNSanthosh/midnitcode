"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Quote() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://wa.me/917907247909?text=Hello%2C%20MidnitCode%20Innovations')
  }, [router])

  return (
    <div>Redirecting...</div>
  )
}
