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
import { Link } from '@tanstack/react-router'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useSystemConfig } from '@/hooks/use-system-config'
import { Skeleton } from '@/components/ui/skeleton'

type AuthLayoutProps = {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { t } = useTranslation()
  const { systemName, logo, loading } = useSystemConfig()

  const brandMark = () =>
    loading ? (
      <div className='flex items-center gap-2.5'>
        <Skeleton className='size-8 rounded-full' />
        <Skeleton className='h-5 w-24' />
      </div>
    ) : (
      <Link
        to='/'
        className='flex items-center gap-2.5 transition-opacity hover:opacity-80'
      >
        <img
          src={logo}
          alt={t('Logo')}
          className='size-8 rounded-full object-cover'
        />
        <span className='text-lg font-semibold tracking-tight'>
          {systemName}
        </span>
      </Link>
    )

  const highlights = [
    t('Unified entry to every model provider'),
    t('Full-stack observability and risk control'),
    t('Intelligent routing with automatic failover'),
  ]

  return (
    <div className='grid min-h-svh lg:grid-cols-2'>
      {/* Left: brand panel (desktop only) */}
      <div className='border-border/40 relative hidden overflow-hidden border-r lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16'>
        {/* Soft brand gradient (matches the home hero) */}
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 -z-10 opacity-35 dark:opacity-[0.18]'
          style={{
            background: [
              'radial-gradient(ellipse 60% 50% at 25% 20%, oklch(0.72 0.18 250 / 85%) 0%, transparent 70%)',
              'radial-gradient(ellipse 50% 45% at 75% 25%, oklch(0.65 0.15 200 / 65%) 0%, transparent 70%)',
              'radial-gradient(ellipse 45% 40% at 40% 85%, oklch(0.70 0.12 280 / 45%) 0%, transparent 70%)',
            ].join(', '),
          }}
        />
        {/* Grid pattern */}
        <div
          aria-hidden
          className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_40%_40%,black_20%,transparent_100%)] bg-[size:4rem_4rem] opacity-[0.1]'
        />

        {brandMark()}

        <div className='max-w-md'>
          <p className='text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase'>
            {t('Unified AI Gateway')}
          </p>
          <h2 className='text-3xl leading-tight font-bold tracking-tight xl:text-4xl'>
            {t('Unified API Gateway for a vast range of AI models')}
          </h2>
          <ul className='mt-8 space-y-3.5'>
            {highlights.map((item) => (
              <li
                key={item}
                className='text-muted-foreground flex items-center gap-3 text-sm'
              >
                <span className='flex size-5 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400'>
                  <Check className='size-3' strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div aria-hidden />
      </div>

      {/* Right: form column */}
      <div className='flex items-center justify-center px-4 py-10 sm:px-8'>
        <div className='w-full max-w-[420px] space-y-6'>
          {/* Mobile brand header (left panel is hidden on small screens) */}
          <div className='lg:hidden'>{brandMark()}</div>
          {children}
        </div>
      </div>
    </div>
  )
}
