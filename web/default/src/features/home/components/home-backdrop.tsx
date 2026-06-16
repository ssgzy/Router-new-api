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

/**
 * Full-page soft brand wash for the marketing home page.
 *
 * Rendered as the first child of the PublicLayout root (which is `relative`),
 * `absolute inset-0 -z-10` paints it over the layout's solid `bg-background`
 * but behind every section (sections are `relative z-10`) and the header.
 * It spans the full document height, so the section-aligned radial glows
 * defined in `.cr-home-wash` give the page a continuous, gently rhythmic
 * gradient — no flat white lower half. Colors are low-chroma/low-alpha so
 * text contrast (WCAG) is preserved; a dark-mode variant lives in index.css.
 */
export function HomeBackdrop() {
  return (
    <div aria-hidden className='cr-home-wash pointer-events-none absolute inset-0 -z-10' />
  )
}
