import actionAskContext from '../assets/icons/action-ask-context.svg'
import actionAddContextSmall from '../assets/icons/action-add-context-small.svg'
import infoCircle from '../assets/icons/info-circle.svg'
import { Card, Bullet } from './ui'

function RiskGauge({ level }: { level: 'Low' | 'Medium' | 'High' }) {
  const levels: Array<'Low' | 'Medium' | 'High'> = ['Low', 'Medium', 'High']
  return (
    <div className="flex h-[51.125px] w-full items-start gap-xs pt-[14px]">
      {levels.map((l) =>
        l === level ? (
          <div
            key={l}
            className="flex h-full flex-1 flex-col items-center justify-center border-[1.5px] border-amber-700 bg-amber-50 py-md"
          >
            <span className="text-xs font-semibold text-amber-700">{l}</span>
          </div>
        ) : (
          <div key={l} className="flex h-full flex-1 flex-col items-center justify-center rounded-sm bg-bg-secondary py-md">
            <span className="text-xs font-semibold text-text-tertiary">{l}</span>
          </div>
        ),
      )}
    </div>
  )
}

export default function CostToBidCard() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-3xl">
      <Card className="flex w-full flex-1 flex-col items-start gap-xs p-2xl shadow-xs">
        <div className="flex w-full items-center gap-xs">
          <h3 className="flex-1 text-md font-semibold text-text-primary">Cost to bid</h3>
          <img src={actionAskContext} alt="Ask or add context" className="size-[18px]" />
        </div>
        <RiskGauge level="Medium" />
        <p className="w-[285px] pt-[10px] text-xs text-text-secondary">
          Multi-site, new-geography proposal with a tight mobilization window.
        </p>
      </Card>

      <Card className="flex w-full flex-1 flex-col items-start gap-lg p-2xl shadow-xs">
        <div className="flex items-center gap-md">
          <h3 className="text-sm font-semibold text-text-primary">Non-labor cost drivers</h3>
          <img src={infoCircle} alt="" className="size-4" />
          <img src={actionAskContext} alt="Ask or add context" className="size-4" />
        </div>
        <div className="flex w-full flex-col items-start gap-lg">
          <div className="flex w-full flex-col items-start gap-sm">
            <p className="text-sm font-semibold text-text-primary">Supplies</p>
            <ul className="flex w-full flex-col gap-sm">
              <Bullet>
                Clearly split: Fermilab furnishes bulk/infrastructure items; contractor furnishes all cleaning
                chemicals, most consumables, and equipment.
              </Bullet>
              <Bullet>Contractor-supplied items shall not be separately reimbursed unless specifically authorized in writing.</Bullet>
            </ul>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="text-sm text-text-tertiary">Equipment</span>
            <div className="flex flex-col items-start gap-xxs">
              <span className="text-sm text-amber-700">Missing</span>
              <img src={actionAddContextSmall} alt="Add context in chat" className="size-3" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
