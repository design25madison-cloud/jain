import { CollapsibleSectionHeader } from './ui'

function MetricTile({
  label,
  value,
  unit,
  caption,
}: {
  label: string
  value: string
  unit?: string
  caption?: string
}) {
  return (
    <div className="flex flex-1 flex-col items-start gap-md self-stretch rounded-xl border border-border-tertiary bg-white p-2xl shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)]">
      <p className="text-sm font-medium text-text-tertiary">{label}</p>
      <p className="font-display text-display-sm font-semibold text-text-primary">
        {value}
        {unit ? <span className="ml-1 font-body text-xl font-medium text-text-quaternary">{unit}</span> : null}
      </p>
      {caption ? <p className="text-sm text-text-tertiary">{caption}</p> : null}
    </div>
  )
}

export default function KeyMetrics() {
  return (
    <div className="flex w-full flex-col items-start gap-xl">
      <div className="flex w-full items-stretch gap-xl">
        <MetricTile label="Total square footage" value="612,000" unit="sf" caption="Across 6 locations" />
        <MetricTile label="Term" value="5" unit="years" caption="3 yr + 2×1" />
        <div className="flex flex-1 flex-col items-start gap-md self-stretch rounded-xl border border-border-tertiary bg-white p-2xl shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)]">
          <p className="text-sm font-medium text-text-tertiary">Payment Terms</p>
          <p className="text-xl font-semibold text-text-primary">Monthly billing cycle</p>
        </div>
        <MetricTile label="Termination" value="30" unit="days" />
      </div>
      <CollapsibleSectionHeader title="Opportunity overview" />
    </div>
  )
}
