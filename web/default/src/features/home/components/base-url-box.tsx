/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { useEffect, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useStatus } from '@/hooks/use-status'
import { copyToClipboard } from '@/lib/copy-to-clipboard'

// Rotating endpoint segments (mirrors web/classic's API_ENDPOINTS subset).
const ENDPOINTS = [
  '/v1/chat/completions',
  '/v1/responses',
  '/v1/messages',
  '/v1/embeddings',
  '/v1/images/generations',
] as const

export function BaseUrlBox() {
  const { t } = useTranslation()
  const { status } = useStatus()

  // Dynamic: prefer the backend-configured server address, else the current origin.
  const serverAddress = (
    (status?.server_address as string | undefined) ||
    (typeof window !== 'undefined' ? window.location.origin : '')
  ).replace(/\/$/, '')

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const [idx, setIdx] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (reduceMotion) return
    const timer = setInterval(
      () => setIdx((prev) => (prev + 1) % ENDPOINTS.length),
      3000
    )
    return () => clearInterval(timer)
  }, [reduceMotion])

  const endpoint = ENDPOINTS[idx]
  const fullUrl = `${serverAddress}${endpoint}`

  const handleCopy = async () => {
    const ok = await copyToClipboard(fullUrl)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <div
      className='landing-animate-fade-up mt-7 w-full max-w-xl opacity-0'
      style={{ animationDelay: '210ms' }}
    >
      <p className='text-muted-foreground/60 mb-2 text-xs leading-relaxed'>
        {t('Unified multi-model access — just point your base URL here:')}
      </p>
      <div className='border-border/50 bg-muted/20 flex items-center gap-2 rounded-full border py-1.5 pr-1.5 pl-4 backdrop-blur-xs'>
        <code className='min-w-0 flex-1 truncate font-mono text-sm'>
          <span className='text-foreground/90'>{serverAddress}</span>
          <span className='text-muted-foreground/70'>{endpoint}</span>
        </code>
        <button
          type='button'
          onClick={handleCopy}
          aria-label={t('Copy base URL')}
          className='bg-foreground text-background hover:bg-foreground/90 inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors'
        >
          {copied ? <Check className='size-4' /> : <Copy className='size-4' />}
        </button>
      </div>
    </div>
  )
}
