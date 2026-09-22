import type { ReactNode } from 'react'
import actionAskContext from '../assets/icons/action-ask-context.svg'
import checkIcon from '../assets/icons/check.svg'
import { Card } from './ui'

type Step = {
  date: string
  dateColor: string
  label: ReactNode
  labelColor: string
  marker: 'done' | 'due' | 'next'
  leftConnector: 'brand' | 'neutral' | 'none'
  rightConnector: 'brand' | 'neutral' | 'none'
  align?: 'start' | 'center' | 'end'
}

const steps: Step[] = [
  {
    date: 'Aug 8',
    dateColor: 'text-text-primary',
    label: 'RFP Issued',
    labelColor: 'text-text-tertiary',
    marker: 'done',
    leftConnector: 'none',
    rightConnector: 'brand',
    align: 'start',
  },
  {
    date: 'Aug 18–29',
    dateColor: 'text-text-primary',
    label:
      "Pre-proposal site meetings are strongly recommended and must be scheduled with the Property's designee. Available August 18–29, 2025.",
    labelColor: 'text-text-tertiary',
    marker: 'done',
    leftConnector: 'brand',
    rightConnector: 'brand',
    align: 'center',
  },
  {
    date: 'Sep 3',
    dateColor: 'text-text-primary',
    label: (
      <>
        <p>
          Optional site visits: Monday, August 31, 2026 at 9:00 AM CST and Tuesday, September 1, 2026 at 1:00 PM CST.
        </p>
        <p className="mt-xs">
          Must call Abigail Coffman (731-423-5725) or Cindy Gruenert (731-423-5739) at least 2 business days in
          advance to schedule.
        </p>
      </>
    ),
    labelColor: 'text-text-tertiary',
    marker: 'done',
    leftConnector: 'brand',
    rightConnector: 'brand',
    align: 'center',
  },
  {
    date: 'Sep 5',
    dateColor: 'text-text-brand-secondary',
    label: 'Owner Responses to Questions',
    labelColor: 'text-text-brand-secondary',
    marker: 'done',
    leftConnector: 'brand',
    rightConnector: 'neutral',
    align: 'center',
  },
  {
    date: 'Sep 12',
    dateColor: 'text-text-error-primary',
    label: 'RFP Submission Deadline',
    labelColor: 'text-text-error-primary',
    marker: 'due',
    leftConnector: 'neutral',
    rightConnector: 'neutral',
    align: 'center',
  },
  {
    date: 'Nov 1',
    dateColor: 'text-text-quaternary',
    label: 'Projected Contractor Start Date',
    labelColor: 'text-text-quaternary',
    marker: 'next',
    leftConnector: 'neutral',
    rightConnector: 'none',
    align: 'end',
  },
]

function Connector({ variant }: { variant: 'brand' | 'neutral' | 'none' }) {
  if (variant === 'none') return <div className="h-[2px] flex-1" />
  return <div className={`h-[2px] flex-1 ${variant === 'brand' ? 'bg-bg-brand-solid' : 'bg-neutral-200'}`} />
}

function Marker({ variant }: { variant: Step['marker'] }) {
  if (variant === 'done') {
    return (
      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-bg-brand-solid">
        <img src={checkIcon} alt="" className="size-[14px]" />
      </div>
    )
  }
  if (variant === 'due') {
    return (
      <div className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-bg-error-solid bg-bg-error-primary">
        <span className="size-2 rounded-full bg-bg-error-solid" />
      </div>
    )
  }
  return (
    <div className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-neutral-200 bg-bg-tertiary">
      <span className="size-2 rounded-full bg-fg-quaternary" />
    </div>
  )
}

export default function ProcurementTimeline() {
  return (
    <Card className="flex w-full flex-col items-start gap-xs p-2xl shadow-xs">
      <div className="flex w-full items-center gap-lg">
        <h3 className="flex-1 text-lg font-semibold text-text-primary">Procurement timeline</h3>
        <img src={actionAskContext} alt="Ask or add context" className="size-4" />
      </div>
      <p className="w-full text-sm text-text-tertiary">
        Owner responses issued September 5. Submission due September 12.
      </p>
      <div className="flex w-full items-start justify-center pb-xs pt-xl">
        {steps.map((step) => (
          <div
            key={step.date}
            className={`flex flex-1 flex-col gap-md self-stretch ${
              step.align === 'end' ? 'items-end' : step.align === 'center' ? 'items-center' : 'items-start'
            }`}
          >
            <p className={`text-sm font-semibold whitespace-nowrap ${step.dateColor}`}>{step.date}</p>
            <div className="flex w-full items-center">
              <Connector variant={step.leftConnector} />
              <Marker variant={step.marker} />
              <Connector variant={step.rightConnector} />
            </div>
            <div
              className={`w-full px-md text-xs ${step.labelColor} ${
                step.align === 'end' ? 'text-right' : step.align === 'center' ? 'text-center' : 'text-left'
              }`}
            >
              {step.label}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
