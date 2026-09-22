import jainLogo from '../assets/icons/jain-logo.svg'
import homeIcon from '../assets/icons/home.svg'
import chevronRight from '../assets/icons/chevron-right.svg'
import chevronDown from '../assets/icons/chevron-down.svg'

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4xl bg-[#233038] border-b border-[#b8b8b8] px-xl py-md">
      <div className="flex items-center gap-4xl">
        <div className="flex items-center gap-[3px]">
          <img src={jainLogo} alt="" className="size-[17px]" />
          <p className="font-display text-[23px] font-light leading-[23px] text-accent-500">Jain</p>
        </div>
        <nav className="flex items-center gap-xs">
          <img src={homeIcon} alt="Home" className="size-4" />
          <img src={chevronRight} alt="" className="size-4 opacity-55" />
          <span className="text-sm font-semibold text-text-white">Santana Row</span>
        </nav>
      </div>
      <div className="flex items-center gap-md">
        <button className="rounded-sm border border-border-brand bg-[rgba(46,83,90,0.2)] px-md py-[3px] text-xs font-medium text-text-white">
          Planned Companies
        </button>
        <button className="flex items-center gap-md rounded-full border border-brand-800 bg-brand-900 px-md py-xs">
          <span className="flex size-[18px] items-center justify-center rounded-full bg-[#b7b2ca] text-[7px] font-semibold tracking-[0.14px] text-text-white">
            JD
          </span>
          <span className="text-sm font-semibold text-text-white">Jane Doe</span>
          <img src={chevronDown} alt="" className="h-[9px] w-3" />
        </button>
      </div>
    </header>
  )
}
