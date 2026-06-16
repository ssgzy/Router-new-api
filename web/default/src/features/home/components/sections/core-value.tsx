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
import { Activity, Code2, Network, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AnimateInView } from '@/components/animate-in-view'

interface CoreValueProps {
  className?: string
}

export function CoreValue(_props: CoreValueProps) {
  const { t } = useTranslation()

  const cards = [
    {
      icon: <Network className='size-5' strokeWidth={1.5} />,
      title: t('Unified Entry, Instant Connectivity'),
      desc: t(
        'Connect every model provider through a single domain and key, with intelligent failover that keeps your business running.'
      ),
    },
    {
      icon: <Activity className='size-5' strokeWidth={1.5} />,
      title: t('Full-stack Observability & Risk Control'),
      desc: t(
        'Monitor calls, error rates and cost in real time; configure rate limits, alerts and security policies in one click.'
      ),
    },
    {
      icon: <TrendingUp className='size-5' strokeWidth={1.5} />,
      title: t('On-demand Scaling & Cost Optimization'),
      desc: t(
        'Multi-channel quotas, smart routing and batch scheduling to flexibly control cost and concurrency.'
      ),
    },
    {
      icon: <Code2 className='size-5' strokeWidth={1.5} />,
      title: t('Developer-friendly Experience'),
      desc: t(
        'OpenAI-compatible protocol with SDKs, examples and a web playground for fast iteration.'
      ),
    },
  ]

  return (
    <section className='relative z-10 px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-16 max-w-2xl'>
          <p className='text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase'>
            {t('Core Value')}
          </p>
          <h2 className='text-2xl leading-tight font-bold tracking-tight md:text-3xl'>
            {t('Stable large-model access for teams, faster AI innovation')}
          </h2>
          <p className='text-muted-foreground mt-4 text-sm leading-relaxed md:text-base'>
            {t(
              'From access control and cost visibility to global scheduling, Code Router delivers end-to-end AI infrastructure for enterprises.'
            )}
          </p>
        </AnimateInView>

        <div className='grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4'>
          {cards.map((c, i) => (
            <AnimateInView
              key={c.title}
              delay={i * 100}
              animation='scale-in'
              className={`cr-card flex flex-col rounded-3xl p-7 md:p-8${
                i === 0 ? ' cr-card-strong' : ''
              }`}
            >
              <div className='cr-card-icon mb-5 flex size-12 items-center justify-center rounded-2xl text-blue-600 dark:text-blue-400'>
                {c.icon}
              </div>
              <h3 className='mb-2 text-sm font-semibold'>{c.title}</h3>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                {c.desc}
              </p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
