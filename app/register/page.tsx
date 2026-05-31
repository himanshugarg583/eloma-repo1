'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Demo: registered (no backend)')
    }, 800)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <section className="w-full max-w-md bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Register</h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <label className="flex flex-col text-sm">
            <span className="mb-1 text-slate-600">Full name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border rounded px-3 py-2"
            />
          </label>

          <label className="flex flex-col text-sm">
            <span className="mb-1 text-slate-600">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded px-3 py-2"
            />
          </label>

          <label className="flex flex-col text-sm">
            <span className="mb-1 text-slate-600">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border rounded px-3 py-2"
            />
          </label>

          <div className="flex items-center justify-between gap-4 mt-2">
            <button
              type="submit"
              className="flex-1 bg-forest text-white rounded px-4 py-2 hover:opacity-95"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
            <Link href="/login" className="text-sm text-forest underline">
              Back to Login
            </Link>
          </div>
        </form>

        {/* <p className="mt-4 text-sm text-slate-500">This is a demo registration page — no backend integration.</p> */}
      </section>
    </main>
  )
}
