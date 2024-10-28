import MatchStats from './MatchStats';
const AdminOverview: React.FC = () => {
  return (
    <section className='mb-11'>
      <h2 className="text-orangyRed uppercase text-sm font-semibold mb-2">At a Glance</h2>
      <h1 className="text-royalBlue text-3xl font-bold font-kanit mb-5">Admin overview</h1>
      <div className="bg-white border border-lightgray rounded-md p-6">
        <h3 className="text-royalBlue text-2xl font-kanit font-semibold mb-6">Current match stats</h3>
        <div className="flex justify-between">
          <MatchStats label="Pending Approval" count={1315} />
          <MatchStats label="Registration Approved" count={1315} />
          <MatchStats label="Not Eligible" count={1315} />
          <MatchStats label="Total Candidates" count={1315} />
        </div>
      </div>
    </section>
  );
};
export default AdminOverview;
