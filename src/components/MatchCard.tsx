import React from 'react';
import MatchStats from './MatchStats';

interface MatchCardProps {
  title: string;
  status: string;
  dateInfo: string;
  stats: { label: string; count: number }[];
}

const MatchCard: React.FC<MatchCardProps> = ({ title, status, dateInfo, stats }) => {
  return (
    <div className="bg-[#f3f4f6] pt-8 pb-6 px-7 rounded-md border border-lightgray">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-kanit font-bold text-royalBlue">{title}</h3>
        <div className="space-x-3">
          <button className="bg-orangyRed text-white px-4 py-2 rounded">View</button>
          <button className="bg-orangyRed text-white px-4 py-2 rounded">Options</button>
        </div>
      </div>
      <div className="flex items-center gap-x-3 mb-4">
        <span className="text-royalBlue text-xs p-2 border border-lightgray rounded-md bg-white  font-semibold">{status}</span>
        <span className="text-royalBlue">{dateInfo}</span>
      </div>
      <div className="bg-white p-4 rounded-md flex justify-between border border-lightgray">
        {stats.map((stat, index) => (
          <MatchStats key={index} label={stat.label} count={stat.count} />
        ))}
      </div>
    </div>
  );
};

export default MatchCard;
