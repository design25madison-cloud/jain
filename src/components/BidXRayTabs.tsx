import { useState } from 'react'
import RiskFindings from './RiskFindings'

const tabs = ['Spaces & Floor Breakdown', 'RFP Risk Review', 'Other Information from RFP']

export default function BidXRayTabs() {
  const [active, setActive] = useState(0)

  return (
    <div className="flex w-full flex-col items-start pt-4xl">
      <div className="flex h-8 w-full items-start gap-lg border-b border-border-secondary">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`flex h-8 items-center justify-center gap-xs px-xxs pb-lg text-md font-semibold ${
              active === i ? 'border-b-2 border-fg-brand-primary-alt text-text-brand-secondary' : 'text-text-quaternary'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-full pt-3xl">
        <RiskFindings />
      </div>
    </div>
  )
}
