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
import {
  AzureAI,
  Claude,
  Cohere,
  DeepSeek,
  Gemini,
  Grok,
  Hunyuan,
  Midjourney,
  Minimax,
  Moonshot,
  OpenAI,
  Qwen,
  Spark,
  Suno,
  Volcengine,
  Wenxin,
  Xinference,
  Zhipu,
} from '@lobehub/icons'
import { useTranslation } from 'react-i18next'
import { AnimateInView } from '@/components/animate-in-view'

// Reuses the same @lobehub/icons set as web/classic's provider wall.
const PROVIDERS = [
  OpenAI,
  Claude.Color,
  Gemini.Color,
  DeepSeek.Color,
  Qwen.Color,
  Grok,
  Moonshot,
  Zhipu.Color,
  Minimax.Color,
  Hunyuan.Color,
  Spark.Color,
  Wenxin.Color,
  Volcengine.Color,
  Cohere.Color,
  Midjourney,
  Suno,
  AzureAI.Color,
  Xinference.Color,
]

export function ProviderWall() {
  const { t } = useTranslation()

  return (
    <section className='relative z-10 px-6 py-16 md:py-20'>
      <div className='mx-auto max-w-5xl'>
        <AnimateInView className='mb-8 text-center md:mb-10'>
          <p className='text-muted-foreground/80 text-lg font-light md:text-xl'>
            {t('Supported Model Providers')}
          </p>
        </AnimateInView>
        <AnimateInView
          animation='fade-up'
          delay={100}
          className='flex flex-wrap items-center justify-center gap-x-6 gap-y-5 sm:gap-x-8 md:gap-x-10'
        >
          {PROVIDERS.map((Icon, i) => (
            <div
              key={i}
              className='flex size-9 items-center justify-center opacity-70 transition-opacity duration-300 hover:opacity-100 md:size-11'
            >
              <Icon size={40} />
            </div>
          ))}
          <div className='text-muted-foreground flex items-center text-xl font-bold md:text-2xl'>
            30+
          </div>
        </AnimateInView>
      </div>
    </section>
  )
}
