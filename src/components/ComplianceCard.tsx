import actionAskContext from '../assets/icons/action-ask-context.svg'
import { Card } from './ui'

const insuranceBonding = [
  "Workers' Compensation as required by Arkansas law; Employers Liability $1,000,000",
  'General Liability (including products liability): $500,000 per person injury/death; $1,000,000 per occurrence (2+ persons); $500,000 property damage per accident',
  'Unemployment insurance and all other insurance required by Arkansas law',
  'Vehicle Liability Insurance: $500,000 per occurrence minimum',
  'Certificate of Insurance naming Board of Trustees of Black River Technical College as certificate holder',
  'Performance Bond: equal to one-half of annual guarantee payment, required within 10 working days of Letter of Intent if requested by College (not required with proposal; College reserves right to request)',
]

const certifications = [
  'Illegal Immigrant Certification (Act 157 of 2007) — online certification at ark.org prior to award',
  'Equal Employment Opportunity Policy (Act 2157/215 of 2005) — must be submitted with proposal',
  "Contract and Grant Disclosure and Certification Form (Governor's Executive Order 98-04) — required for contracts >$25,000",
  'W-9 / Taxpayer Identification Number',
  'Criminal background checks for all employees — performed by Arkansas State Police, not more than 72 hours old at contract start',
  'Certified statement that pricing was arrived at without conflict of interest',
  'Certification that proposer is not debarred or declared ineligible',
]

function RequirementGroup({ title, count, items }: { title: string; count: string; items: string[] }) {
  return (
    <div className="flex w-full flex-col items-start gap-[10px]">
      <div className="flex w-full items-start justify-between">
        <p className="pt-px text-sm text-text-tertiary">{title}</p>
        <p className="text-sm font-medium text-text-primary">{count}</p>
      </div>
      <ul className="w-full list-disc space-y-xs border-t border-border-secondary pt-sm pl-[19.5px] text-[13px] leading-[17.875px] text-text-secondary">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function ComplianceCard() {
  return (
    <Card className="flex h-full w-full flex-col items-start gap-lg p-xl shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
      <div className="flex w-full items-center gap-sm">
        <h3 className="text-md font-semibold text-text-primary">Compliance</h3>
        <img src={actionAskContext} alt="Ask or add context" className="size-4" />
      </div>
      <div className="flex w-full flex-col items-start gap-[10px]">
        <RequirementGroup title="Insurance & bonding" count="6 requirements" items={insuranceBonding} />
        <RequirementGroup title="Certifications" count="7 certifications" items={certifications} />
      </div>
    </Card>
  )
}
