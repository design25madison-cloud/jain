import actionAskContext from '../assets/icons/action-ask-context.svg'
import actionAddContextSmall from '../assets/icons/action-add-context-small.svg'
import { Card } from './ui'

export default function OpportunityCard() {
  return (
    <Card className="flex w-full flex-col items-start gap-md p-3xl shadow-xs">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-md font-semibold text-text-primary">Opportunity</h3>
        <img src={actionAskContext} alt="Ask or add context" className="size-4" />
      </div>

      <dl className="flex w-full flex-col items-start gap-md">
        <div>
          <dt className="text-sm text-text-tertiary">Scope — sites and services</dt>
          <dd className="mt-xxs text-sm font-medium text-text-primary">
            Government / State Agency Office, Routine services on Monday, Wednesday, and Friday (or Saturday). Weekly
            tasks once per week. Monthly tasks once per month. Bi-annual tasks in October and April (windows,
            rafters). Annual tasks as agreed with Facility Manager.
          </dd>
        </div>

        <div className="flex items-baseline gap-md text-sm">
          <dt className="text-text-tertiary">Area and coverage</dt>
          <dd className="font-semibold text-text-primary">10,000 sq ft across 1 building, 1 location</dd>
        </div>

        <div className="flex items-baseline gap-md text-sm">
          <dt className="text-text-tertiary">Award method</dt>
          <dd className="font-medium text-text-primary">1 evaluation criterion stated</dd>
        </div>

        <ul className="flex flex-col gap-xxs pl-[101px] text-sm text-text-quaternary">
          <li>• [CRITERION] — [WEIGHTING]</li>
          <li>• [CRITERION] — [WEIGHTING]</li>
          <li>• [CRITERION] — [WEIGHTING]</li>
        </ul>

        <div className="flex items-center gap-md text-sm">
          <dt className="text-text-tertiary">Incumbent</dt>
          <dd className="text-[#b54708]">Not extracted yet</dd>
          <img src={actionAddContextSmall} alt="Add context in chat" className="size-3" />
        </div>
      </dl>
    </Card>
  )
}
