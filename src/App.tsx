import Header from './components/Header'
import BidSummaryCard from './components/BidSummaryCard'
import KeyMetrics from './components/KeyMetrics'
import OpportunityCard from './components/OpportunityCard'
import ProcurementTimeline from './components/ProcurementTimeline'
import ComplianceCard from './components/ComplianceCard'
import CostToBidCard from './components/CostToBidCard'
import MarketAndLaborRow from './components/MarketAndLaborRow'
import StrategicFitCard from './components/StrategicFitCard'
import BidXRayTabs from './components/BidXRayTabs'
import AssistantSidebar from './components/AssistantSidebar'

export default function App() {
  return (
    <div className="flex h-screen flex-col bg-bg-secondary">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <BidSummaryCard />
          <div className="flex flex-col items-start gap-3xl px-[48px] pb-4xl pt-xl">
            <KeyMetrics />
            <OpportunityCard />
            <ProcurementTimeline />
            <div className="flex w-full items-start gap-3xl">
              <div className="flex-[1.79_0_0]">
                <ComplianceCard />
              </div>
              <div className="flex-1">
                <CostToBidCard />
              </div>
            </div>
            <MarketAndLaborRow />
            <StrategicFitCard />
            <BidXRayTabs />
          </div>
        </main>
        <AssistantSidebar />
      </div>
    </div>
  )
}
