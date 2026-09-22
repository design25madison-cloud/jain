import actionAskContext from '../assets/icons/action-ask-context.svg'
import helpCircle from '../assets/icons/help-circle.svg'
import plusIcon from '../assets/icons/plus.svg'

const fields: Array<
  | { label: string; kind: 'text'; detail: string }
  | { label: string; kind: 'action'; actionLabel: string }
> = [
  { label: 'Vertical fit', kind: 'text', detail: 'Mixed-use retail & office matches your core verticals.' },
  { label: 'Density & proximity', kind: 'action', actionLabel: 'Add scope context' },
  { label: 'Scope fit', kind: 'text', detail: 'Multi-site, cost-plus structure is broader than your typical scope.' },
  { label: 'Growth strategy fit', kind: 'action', actionLabel: 'Add growth strategy' },
]

export default function StrategicFitCard() {
  return (
    <div className="flex w-full flex-col items-start gap-xl rounded-xl border-2 border-brand-200 bg-white p-2xl">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-md">
          <h3 className="text-md font-semibold text-text-primary">Strategic Fit</h3>
          <span className="rounded-sm border border-[#dcd1f5] bg-[#eee9fb] px-[7px] py-xxs text-xxs font-semibold text-[#6d28d9]">
            BETA
          </span>
          <img src={helpCircle} alt="How is strategic fit calculated?" className="size-[14px]" />
        </div>
        <img src={actionAskContext} alt="Ask or add context" className="size-[18px]" />
      </div>
      <p className="text-xs text-text-tertiary">
        How this opportunity lines up with your organization — an early assessment that improves as you add context.
      </p>
      <div className="flex w-full flex-col items-start gap-lg">
        {fields.map((field) => (
          <div key={field.label} className="flex w-full flex-col items-start gap-xs">
            <p className="text-sm font-semibold text-text-secondary">{field.label}</p>
            {field.kind === 'text' ? (
              <p className="text-sm text-text-tertiary">{field.detail}</p>
            ) : (
              <button className="flex items-center gap-xs text-sm font-semibold text-text-brand-secondary">
                <img src={plusIcon} alt="" className="size-4" />
                {field.actionLabel}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
