import React from 'react';
import MatchCard from './MatchCard';

const MatchesSection: React.FC = () => {
  const matchData = [
    {
      title: "2025 - Late Vacancy Management 2024",
      status: "ASSESSMENT PERIOD",
      dateInfo: "Closes in 8 days - Thursday, October 31st 2024, 10:59 pm",
      stats: [
        { label: "Pending Approval", count: 1315 },
        { label: "Registration Approved", count: 1315 },
        { label: "Not Eligible", count: 1315 },
        { label: "Total Candidates", count: 1315 },
      ],
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-orangyRed uppercase text-sm font-semibold mb-2">2 Matches</h2>
      <h1 className="text-royalBlue text-3xl font-bold font-kanit mb-5">My matches</h1>
      {matchData.map((match, index) => (
        <MatchCard
          key={index}
          title={match.title}
          status={match.status}
          dateInfo={match.dateInfo}
          stats={match.stats}
        />
      ))}
    </section>
  );
};

export default MatchesSection;
