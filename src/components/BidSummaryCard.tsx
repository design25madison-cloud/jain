import chevronDown from '../assets/icons/chevron-down-small.svg'
import uploadIcon from '../assets/icons/upload.svg'
import downloadIcon from '../assets/icons/download.svg'
import { Definition } from './ui'

export default function BidSummaryCard() {
  return (
    <section className="w-full border-b border-border-secondary bg-bg-primary px-3xl pb-3xl pt-3xl shadow-[0px_1px_0.75px_rgba(0,0,0,0.1)]">
      <div className="flex w-full items-start justify-between rounded-2xl bg-white px-4xl py-xl">
        <div className="flex flex-1 flex-col items-start gap-xl">
          <div className="flex w-full flex-col items-start gap-md">
            <p className="text-xs font-semibold text-text-brand-tertiary">Bid X-Ray</p>
            <div className="flex items-center gap-xl">
              <h1 className="font-display text-display-sm font-semibold text-text-primary">Santana Row</h1>
              <button className="flex items-center gap-xs rounded-full border border-border-primary bg-bg-primary px-[10px] py-xxs text-sm font-semibold text-text-secondary shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
                v.1
                <img src={chevronDown} alt="" className="size-4" />
              </button>
            </div>
          </div>

          <div className="flex w-full items-start gap-4xl">
            <div className="w-[120px]">
              <Definition term="Address" description="—" />
            </div>
            <div className="max-w-[460px] flex-1">
              <Definition term="Facility Type" description="Mixed-use retail, dining, office, and residential village / lifestyle center" />
            </div>
            <div className="w-[262px]">
              <Definition term="Submission Deadline" description="09/12/2025" />
            </div>
          </div>

          <div className="flex w-full items-start gap-lg rounded-xl border border-border-secondary bg-white p-[18px]">
            <div className="flex-1">
              <Definition term="Submission contact" description="Anthony Perez" />
            </div>
            <div className="flex-1">
              <Definition term="Title" description="Senior Manager of Operations" />
            </div>
            <div className="flex-1">
              <Definition term="Email" description="aperez@federalrealty.com" />
            </div>
          </div>

          <div className="flex items-center gap-lg">
            <button className="flex w-[175px] items-center justify-center gap-xs rounded-md border-2 border-fg-white bg-bg-brand-solid px-[10px] py-sm text-sm font-semibold text-text-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
              <img src={uploadIcon} alt="" className="size-4" />
              Upload Document
            </button>
            <button className="flex w-[175px] items-center justify-center gap-sm rounded-lg border border-border-primary bg-bg-primary px-[13px] py-sm text-sm font-semibold text-text-secondary shadow-[0px_1px_0.75px_rgba(0,0,0,0.1)]">
              <img src={downloadIcon} alt="" className="size-4" />
              Create Powerpoint
            </button>
            <button className="flex w-[175px] items-center justify-center gap-sm rounded-lg border border-border-primary bg-bg-primary px-[13px] py-sm text-sm font-semibold text-text-secondary shadow-[0px_1px_0.75px_rgba(0,0,0,0.1)]">
              <img src={downloadIcon} alt="" className="size-4" />
              Export PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
