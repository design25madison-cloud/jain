import closeIcon from '../assets/icons/close.svg'
import attachIcon from '../assets/icons/attach.svg'
import sendIcon from '../assets/icons/send.svg'

export default function AssistantSidebar() {
  return (
    <aside className="flex h-full w-[317px] shrink-0 flex-col items-start border-l border-border-secondary bg-white">
      <div className="flex w-full items-center justify-between px-xl py-lg">
        <p className="text-sm font-semibold text-text-primary">New Chat</p>
        <button aria-label="Close">
          <img src={closeIcon} alt="" className="h-5 w-3" />
        </button>
      </div>

      <div className="flex w-full flex-1 flex-col items-start justify-end gap-xl overflow-y-auto px-xl pb-xl">
        <div className="flex w-full flex-col items-start gap-xs">
          <p className="text-xs font-semibold text-text-quaternary">Jain</p>
          <p className="text-sm font-semibold text-text-primary">Strategic Fit</p>
          <p className="text-sm text-text-secondary">
            What contract sizes do you normally bid, and which services are outside what you offer?
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-xs">
          <p className="text-xs font-semibold text-text-quaternary">You</p>
          <div className="w-full rounded-md border border-border-secondary bg-bg-secondary px-lg py-md">
            <p className="text-sm text-text-primary">
              We top out around 250,000 sq ft, and we don't do bio-hazard or laundry.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-xs">
          <p className="text-xs font-semibold text-text-quaternary">Jain</p>
          <p className="text-sm font-semibold text-text-primary">Strategic Fit</p>
          <p className="text-sm text-text-secondary">Got it — noted. This reads like something that holds beyond this bid.</p>
          <div className="flex items-start gap-xl pt-xs text-xs font-semibold text-text-brand-secondary">
            <button>Just to this bid</button>
            <button>Across your organization</button>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-start p-xl">
        <div className="flex w-full flex-col items-start gap-3xl rounded-md border border-border-secondary p-lg">
          <p className="text-sm text-text-quaternary">Ask or find anything from your space</p>
          <div className="flex w-full items-center justify-between">
            <button aria-label="Attach">
              <img src={attachIcon} alt="" className="size-4" />
            </button>
            <button aria-label="Send" className="flex size-7 items-center justify-center rounded-full bg-bg-tertiary">
              <img src={sendIcon} alt="" className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
