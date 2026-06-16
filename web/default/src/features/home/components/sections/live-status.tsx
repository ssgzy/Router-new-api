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
import { useTranslation } from 'react-i18next'
import { AnimateInView } from '@/components/animate-in-view'

// Static example data (no live public stats endpoint on the public home page).
// Names use real models/providers; copy clearly marks this as a sample view.
const RANKINGS = [
  { name: 'gpt-5.5', calls: 18420, share: 28 },
  { name: 'claude-opus-4-8', calls: 14210, share: 22 },
  { name: 'gemini-3-pro', calls: 11380, share: 18 },
  { name: 'deepseek-v4', calls: 9240, share: 14 },
  { name: 'qwen3-max', calls: 6130, share: 9 },
] as const

type RouteState = 'ok' | 'watch' | 'down'
const PROVIDERS: {
  name: string
  state: RouteState
  uptime: string
  latency: string
}[] = [
  { name: 'OpenAI', state: 'ok', uptime: '99.9%', latency: '420ms' },
  { name: 'Anthropic', state: 'ok', uptime: '99.8%', latency: '510ms' },
  { name: 'Google', state: 'watch', uptime: '99.2%', latency: '680ms' },
  { name: 'DeepSeek', state: 'ok', uptime: '99.5%', latency: '390ms' },
  { name: 'Alibaba', state: 'ok', uptime: '99.6%', latency: '450ms' },
]

const STATE_DOT: Record<RouteState, string> = {
  ok: 'bg-emerald-500',
  watch: 'bg-amber-500',
  down: 'bg-rose-500',
}

export function LiveStatus() {
  const { t } = useTranslation()
  const maxShare = RANKINGS[0].share
  const stateLabel: Record<RouteState, string> = {
    ok: t('Operational'),
    watch: t('Monitoring'),
    down: t('Outage'),
  }

  return (
    <section className='relative z-10 px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-16 max-w-2xl'>
          <div className='mb-3 flex flex-wrap items-center gap-3'>
            <p className='text-muted-foreground text-xs font-medium tracking-widest uppercase'>
              {t('Live Data')}
            </p>
            <span className='border-border/50 bg-muted/40 text-muted-foreground rounded-full border px-2.5 py-0.5 text-[10px] font-medium'>
              {t('Sample data')}
            </span>
          </div>
          <h2 className='text-2xl leading-tight font-bold tracking-tight md:text-3xl'>
            {t('Model rankings and route health')}
          </h2>
          <p className='text-muted-foreground mt-4 text-sm leading-relaxed md:text-base'>
            {t(
              'Sample view — once your gateway serves real traffic, this section shows call-driven model rankings and provider route health.'
            )}
          </p>
        </AnimateInView>

        <div className='grid gap-4 md:grid-cols-2 md:gap-5'>
          {/* Left: model rankings */}
          <AnimateInView
            animation='fade-up'
            className='cr-card rounded-3xl p-7 md:p-8'
          >
            <h3 className='mb-6 text-sm font-semibold'>
              {t('Model Rankings')}
            </h3>
            <div className='space-y-5'>
              {RANKINGS.map((m, i) => (
                <div key={m.name}>
                  <div className='mb-1.5 flex items-center justify-between gap-3 text-sm'>
                    <span className='flex min-w-0 items-center gap-2'>
                      <span className='text-muted-foreground w-4 text-xs tabular-nums'>
                        {i + 1}
                      </span>
                      <span className='truncate font-medium'>{m.name}</span>
                    </span>
                    <span className='text-muted-foreground shrink-0 text-xs tabular-nums'>
                      {m.calls.toLocaleString()} {t('Calls')} · {m.share}%
                    </span>
                  </div>
                  <div className='bg-muted h-1.5 w-full overflow-hidden rounded-full'>
                    <div
                      className='bg-primary h-full rounded-full'
                      style={{ width: `${(m.share / maxShare) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </AnimateInView>

          {/* Right: provider route status */}
          <AnimateInView
            animation='fade-up'
            delay={100}
            className='cr-card rounded-3xl p-7 md:p-8'
          >
            <h3 className='mb-6 text-sm font-semibold'>
              {t('Provider Route Status')}
            </h3>
            <div className='divide-border/40 divide-y'>
              {PROVIDERS.map((p) => (
                <div
                  key={p.name}
                  className='flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0'
                >
                  <span className='flex items-center gap-2.5'>
                    <span
                      className={`size-2 shrink-0 rounded-full ${STATE_DOT[p.state]}`}
                    />
                    <span className='text-sm font-medium'>{p.name}</span>
                    <span className='text-muted-foreground text-xs'>
                      {stateLabel[p.state]}
                    </span>
                  </span>
                  <span className='text-muted-foreground shrink-0 text-xs tabular-nums'>
                    {t('Uptime')} {p.uptime} · {p.latency}
                  </span>
                </div>
              ))}
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}
