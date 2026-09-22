import actionAskContext from '../assets/icons/action-ask-context.svg'
import infoCircle from '../assets/icons/info-circle.svg'
import trendUp from '../assets/icons/trend-up.svg'
import messageSquare from '../assets/icons/message-square.svg'
import { Card } from './ui'

const marketBullets = ['[PREVAILING WAGE]', '[MINIMUM WAGE]', '[LABOR MARKET]']

const laborItems = [
  {
    label: 'Cleaning frequency',
    detail:
      'Monday through Friday (excluding college holidays); daily tasks for entrances, restrooms, hallways, labs, classrooms; weekly tasks for offices, conference rooms; periodic deep cleaning quarterly and semi-annually/annually.',
  },
  { label: 'Service Window', detail: 'Mixed' },
  { label: 'Cleanliness level', detail: 'Lorem Ipsum' },
]

export default function MarketAndLaborRow() {
  return (
    <div className="flex w-full items-stretch gap-3xl">
      <Card className="flex flex-1 flex-col items-start justify-between gap-lg p-2xl shadow-xs">
        <div className="flex w-full flex-col items-start gap-xs">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-md">
              <h3 className="text-md font-semibold text-text-primary">Local market intelligence</h3>
              <img src={infoCircle} alt="" className="size-4" />
            </div>
            <img src={actionAskContext} alt="Ask or add context" className="size-[18px]" />
          </div>
          <p className="w-full text-xs text-text-primary">
            This bid covers multiple markets. Explore local wage and labor data by geography.
          </p>
          <ul className="flex w-full flex-col gap-lg pt-lg">
            {marketBullets.map((label) => (
              <li key={label} className="flex items-start gap-md">
                <span className="mt-[7px] size-[6px] shrink-0 rounded-full bg-fg-quaternary" />
                <div className="flex flex-col gap-xxs">
                  <span className="text-sm text-text-tertiary">{label}</span>
                  <span className="flex items-center gap-xxs text-sm text-text-brand-tertiary">
                    source
                    <img src={trendUp} alt="" className="size-[18px]" />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button className="flex items-center gap-xs text-sm font-semibold text-text-brand-secondary">
          <img src={messageSquare} alt="" className="size-4" />
          Compare 6 markets in chat
        </button>
      </Card>

      <Card className="flex flex-1 flex-col items-start gap-xs p-2xl shadow-xs">
        <div className="flex w-full items-center gap-xs">
          <h3 className="flex-1 text-md font-semibold text-text-primary">Labor & staffing</h3>
          <img src={actionAskContext} alt="Ask or add context" className="size-[18px]" />
        </div>
        <p className="w-full text-xs text-text-tertiary">Crew, wage floor, and hiring exposure.</p>
        <div className="flex w-full flex-col items-start gap-lg pt-lg">
          {laborItems.map((item) => (
            <div key={item.label} className="flex w-full flex-col items-start gap-sm">
              <p className="text-sm font-semibold text-text-primary">{item.label}</p>
              <div className="flex w-full items-start gap-md">
                <span className="mt-[7px] size-[6px] shrink-0 rounded-full bg-fg-quaternary" />
                <p className="flex-1 text-sm text-text-primary">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
