import type { ReactNode } from 'react'
import infoCircle from '../assets/icons/info-circle.svg'
import chevronDownSection from '../assets/icons/chevron-down-section.svg'

export function Card({ className = '', children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`rounded-2xl border border-border-secondary bg-white ${className}`}>{children}</div>
  )
}

export function Definition({ term, description }: { term: string; description: ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-xxs">
      <span className="text-xs font-semibold text-text-tertiary">{term}</span>
      <span className="text-sm text-text-primary">{description}</span>
    </div>
  )
}

export function Dot({ className = 'bg-text-quaternary' }: { className?: string }) {
  return (
    <span className="flex h-[13px] w-[6px] items-start justify-center pt-[7px]">
      <span className={`size-[6px] rounded-full ${className}`} />
    </span>
  )
}

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-md text-sm text-text-secondary">
      <Dot />
      <span className="flex-1">{children}</span>
    </li>
  )
}

export function CollapsibleSectionHeader({ title }: { title: string }) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-lg">
        <img src={infoCircle} alt="" className="size-4" />
        <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
      </div>
      <img src={chevronDownSection} alt="" className="size-6" />
    </div>
  )
}
