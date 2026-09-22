import { useState } from 'react'
import severityChevron from '../assets/icons/severity-chevron.svg'
import rowChevron from '../assets/icons/row-chevron-up.svg'
import sourceFile from '../assets/icons/source-file.svg'

type Severity = 'High' | 'Medium' | 'Low'

type Finding = {
  id: string
  severity: Severity
  title: string
  sourceCount: number
  detail?: string
  sources?: string[]
  defaultOpen?: boolean
}

const findings: Finding[] = [
  {
    id: 'geo-mismatch',
    severity: 'High',
    title: 'Geographic Mismatch - Facility in California; Bidder Has No California Operations',
    sourceCount: 1,
  },
  {
    id: 'ca-labor-law',
    severity: 'High',
    title: "California Labor Law Complexity Exceeds Bidder's Experience",
    sourceCount: 1,
  },
  {
    id: 'gym-towel',
    severity: 'High',
    title: 'Gym Towel/Laundry Service - Service Not Offered by Bidder',
    sourceCount: 1,
  },
  {
    id: 'bio-hazard',
    severity: 'High',
    title: 'Bio-Hazard Remediation Required - Excluded Service',
    sourceCount: 2,
  },
  {
    id: 'exhibits-missing',
    severity: 'High',
    title: 'Exhibit One (Master Contract) and Exhibit 2 (Pricing/Property Form) Not Included',
    sourceCount: 3,
    defaultOpen: true,
    detail:
      'Insurance limits, indemnity terms, and all property-specific data (square footage, site count, wage ranges, existing equipment list) are contained in Exhibit One and Exhibit 2 — neither of which is included in this RFP package. A complete and accurate bid cannot be submitted without reviewing these documents. Bidders must request them immediately.',
    sources: [
      'Santana-Row---Full-Janitorial-RFP p.2',
      'Santana-Row---Full-Janitorial-RFP p.3',
      'Santana-Row---Full-Janitorial-RFP p.4',
    ],
  },
  {
    id: 'power-sweeping-truck',
    severity: 'Medium',
    title: 'Parking Lot Power Sweeping Requires Dedicated Sweeper Truck',
    sourceCount: 1,
  },
  {
    id: 'aerial-lift',
    severity: 'Medium',
    title: 'Aerial Lift Required for Quarterly High Dusting (up to 25 ft)',
    sourceCount: 2,
  },
  {
    id: 'cost-plus-escalation',
    severity: 'Medium',
    title: 'Cost-Plus Contract with Owner-Controlled Annual Escalation - Margin Risk',
    sourceCount: 1,
  },
  {
    id: 'self-performance',
    severity: 'Medium',
    title: 'Self-Performance Requirement - Subcontracting Needs Prior Written Approval',
    sourceCount: 1,
  },
  {
    id: 'owner-modify-scope',
    severity: 'Medium',
    title: 'Owner May Modify Scope or Specifications at Any Time',
    sourceCount: 1,
  },
  {
    id: 'broad-liability',
    severity: 'Medium',
    title: 'Broad Liability Exposure - Contractor Financially Responsible for Third-Party Vendor Damage',
    sourceCount: 1,
  },
  {
    id: 'tight-timeline',
    severity: 'Medium',
    title: 'Tight Submission-to-Start Timeline - 50 Days from Bid Close to Mobilization',
    sourceCount: 1,
    defaultOpen: true,
    detail:
      'Bid deadline is 9/12/25 and projected start date is 11/1/25 — approximately 50 days. For a complex multi-building, multi-service-line, 7-day/week operation in a new geography (California), this is an aggressive mobilization timeline including hiring, background checks, equipment procurement, uniform ordering, and training.',
    sources: ['Santana-Row---Full-Janitorial-RFP p.3'],
  },
  {
    id: 'org-fit-vertical',
    severity: 'Medium',
    title: 'Organizational fit: atypical vertical',
    sourceCount: 1,
  },
  {
    id: 'org-fit-cert-gap',
    severity: 'Medium',
    title: 'Organizational fit: cert gap',
    sourceCount: 2,
  },
  {
    id: 'seasonal-labor',
    severity: 'Low',
    title: 'Seasonal Labor Variability - Owner-Directed Staffing Adjustments',
    sourceCount: 1,
    defaultOpen: true,
    detail:
      'Section VI.4 allows Owner to request additional staffing during peak periods and to vary daily hours with Owner approval throughout the season. This creates ongoing scheduling and budget variability that must be factored into cost-plus pricing and labor planning.',
    sources: ['Santana-Row---Full-Janitorial-RFP p.5'],
  },
  {
    id: 'supplier-selection',
    severity: 'Low',
    title: 'Owner Controls Supplier Selection for Cleaning Products',
    sourceCount: 1,
  },
  {
    id: 'power-sweeping-credit',
    severity: 'Low',
    title: 'Power Sweeping Credit Mechanism for Missed Service Days',
    sourceCount: 1,
  },
]

const severityStyles: Record<Severity, { badge: string; badgeText: string; borderLeft: string; countBg: string; countText: string }> = {
  High: {
    badge: 'border-red-300 bg-bg-error-primary',
    badgeText: 'text-red-600',
    borderLeft: 'border-l-[3px] border-border-error',
    countBg: 'bg-bg-error-primary',
    countText: 'text-red-600',
  },
  Medium: {
    badge: 'border-amber-400 bg-amber-50',
    badgeText: 'text-amber-700',
    borderLeft: 'border-l-[3px] border-amber-400',
    countBg: 'bg-amber-50',
    countText: 'text-amber-700',
  },
  Low: {
    badge: 'border-border-secondary bg-bg-secondary',
    badgeText: 'text-text-secondary',
    borderLeft: 'border-l-[3px] border-border-secondary',
    countBg: 'bg-bg-tertiary',
    countText: 'text-text-tertiary',
  },
}

function FindingRow({ finding, isFirst, isLast }: { finding: Finding; isFirst: boolean; isLast: boolean }) {
  const [open, setOpen] = useState(Boolean(finding.defaultOpen))
  const styles = severityStyles[finding.severity]

  return (
    <div
      className={`w-full border-b border-r border-border-secondary bg-white ${isFirst ? 'rounded-t-xl border-t' : ''} ${
        isLast ? 'rounded-b-xl' : ''
      }`}
    >
      <div className="flex w-full items-center gap-lg px-2xl py-xl">
        <span
          className={`flex h-6 w-20 shrink-0 items-center justify-between rounded-sm border pl-md pr-sm py-xxs text-xs font-medium ${styles.badge} ${styles.badgeText}`}
        >
          {finding.severity}
          <img src={severityChevron} alt="" className="size-4" />
        </span>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex flex-1 items-center gap-md text-left text-sm font-semibold text-text-primary"
        >
          {finding.title}
        </button>
        <div className="flex shrink-0 items-center gap-lg">
          <span className="rounded-full border border-border-secondary bg-bg-secondary px-md py-xxs text-xs font-medium text-text-secondary">
            {finding.sourceCount} {finding.sourceCount === 1 ? 'source' : 'sources'}
          </span>
          <button onClick={() => setOpen((v) => !v)} aria-label={open ? 'Collapse' : 'Expand'}>
            <img src={rowChevron} alt="" className={`size-4 transition-transform ${open ? '' : 'rotate-180'}`} />
          </button>
        </div>
      </div>
      {open && finding.detail ? (
        <div className="flex w-full flex-col items-start px-2xl pb-2xl">
          <p className="max-w-[799px] py-lg text-sm text-text-tertiary">{finding.detail}</p>
          <p className="text-xs font-semibold text-text-quaternary">Sources:</p>
          <div className="flex flex-wrap gap-sm pt-md">
            {finding.sources?.map((source) => (
              <span
                key={source}
                className="flex items-center gap-xs rounded-md border border-brand-200 bg-bg-brand-primary py-xxs pl-sm pr-md text-xs font-medium text-text-brand-tertiary"
              >
                <img src={sourceFile} alt="" className="size-[14px]" />
                {source}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function SeverityGroup({ severity, items }: { severity: Severity; items: Finding[] }) {
  const styles = severityStyles[severity]
  return (
    <div className="flex w-full flex-col items-start">
      <div className="flex items-center gap-sm">
        <p className={`text-xs font-semibold ${styles.countText}`}>{severity} Severity</p>
        <span className={`rounded-xl px-md py-xxs text-xs font-semibold ${styles.countBg} ${styles.countText}`}>
          {items.length}
        </span>
      </div>
      <div className="w-full pt-lg">
        <div className={`flex w-full flex-col items-start rounded-xl bg-bg-primary shadow-[0px_1px_1px_rgba(16,24,40,0.04)] ${styles.borderLeft}`}>
          {items.map((finding, i) => (
            <FindingRow key={finding.id} finding={finding} isFirst={i === 0} isLast={i === items.length - 1} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function RiskFindings() {
  const bySeverity = (severity: Severity) => findings.filter((f) => f.severity === severity)
  return (
    <div className="flex w-full flex-col items-start gap-3xl">
      <SeverityGroup severity="High" items={bySeverity('High')} />
      <SeverityGroup severity="Medium" items={bySeverity('Medium')} />
      <SeverityGroup severity="Low" items={bySeverity('Low')} />
    </div>
  )
}
