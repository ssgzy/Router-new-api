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
import { Gauge, Shuffle, Waypoints } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

interface HeroCapabilityCardsProps {
  className?: string
}

/**
 * Hero right column: a trio of "live operations" capability cards that replace
 * the previous curl request/response demo. The angle is deliberately
 * operational/runtime (routing · failover · metering) so it complements rather
 * than repeats the strategic Core Value grid below. Cards gently float via the
 * `cr-float` keyframes (disabled under prefers-reduced-motion).
 */
export function HeroCapabilityCards({ className }: HeroCapabilityCardsProps) {
  const { t } = useTranslation()

  const cards = [
    {
      icon: <Waypoints className='size-5' strokeWidth={1.5} />,
      title: t('Real-time Smart Routing'),
      desc: t(
        'Auto-selects the best channel by latency and cost, forwarding every request in milliseconds.'
      ),
      iconClass:
        'from-blue-500/20 to-cyan-500/10 text-blue-600 dark:text-blue-400',
    },
    {
      icon: <Shuffle className='size-5' strokeWidth={1.5} />,
      title: t('Automatic Failover'),
      desc: t(
        'Switches to a healthy backup channel the instant an upstream fails — calls keep flowing.'
      ),
      iconClass:
        'from-violet-500/20 to-purple-500/10 text-violet-600 dark:text-violet-400',
    },
    {
      icon: <Gauge className='size-5' strokeWidth={1.5} />,
      title: t('Live Usage Metering'),
      desc: t(
        'Tokens and spend for every call are metered live, keeping quotas and budgets in clear view.'
      ),
      iconClass:
        'from-cyan-500/20 to-blue-500/10 text-cyan-600 dark:text-cyan-400',
    },
  ]

  return (
    <div className={cn('w-full max-w-md', className)}>
      {/* Live operations header — sets the runtime/operational framing */}
      <div className='mb-4 flex items-center gap-2 px-1'>
        <span className='relative flex size-2'>
          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
          <span className='relative inline-flex size-2 rounded-full bg-emerald-500' />
        </span>
        <span className='text-muted-foreground/70 text-[11px] font-semibold tracking-[0.15em] uppercase'>
          {t('Live Operations')}
        </span>
      </div>

      <div className='space-y-4'>
        {cards.map((c, i) => (
          // Outer element carries the float animation; inner card handles hover
          // (separate transforms so they don't conflict).
          <div
            key={c.title}
            className='cr-float'
            style={{ animationDelay: `${i * -2}s` }}
          >
            <div className='group border-border/50 bg-background/70 hover:border-border relative flex items-start gap-4 rounded-2xl border p-5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-14px_rgba(0,0,0,0.28)] dark:bg-white/[0.045] dark:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.55)]'>
              <div
                className={cn(
                  'flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br',
                  c.iconClass
                )}
              >
                {c.icon}
              </div>
              <div className='min-w-0'>
                <h3 className='text-sm font-semibold'>{c.title}</h3>
                <p className='text-muted-foreground mt-1 text-[13px] leading-relaxed'>
                  {c.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
