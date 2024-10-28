import AdminOverview from "@/components/AdminOverview";
import MatchesSection from "@/components/MatchesSection";
import SearchInput from "@/components/SearchInput";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <main className="py-16">
      <div className="container">
        <p className="text-base mb-5 text-royalBlue">Your admin dashboard</p>
        <SectionHeading headingText="Overview" classname="mb-12" />
        <SearchInput type="search" placeholder="Search Everything" classname="mb-11" />
        <AdminOverview />
        <MatchesSection />
      </div>
    </main>
  );
}
