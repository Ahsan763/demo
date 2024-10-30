"use client";

import { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import MatchStats from './MatchStats';

interface MatchCardProps {
  title: string;
  status: string;
  dateInfo: string;
  stats: { label: string; count: number }[];
}

const MatchCard: React.FC<MatchCardProps> = ({ title, status, dateInfo, stats }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleAccordion = () => setAccordionOpen((prev) => !prev);
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };
  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="bg-[#f3f4f6] pt-8 pb-6 px-7 rounded-md border border-lightgray">
      <div className="flex items-center gap-x-3 mb-4">
        <button
          className={`bg-transparent flex items-center text-royalBlue ${isAccordionOpen ? "rotate-180" : ""}`}
          onClick={toggleAccordion}
        >
          <FaChevronDown className="text-sm" />
        </button>
        <div className="flex items-center justify-between w-full flex-wrap">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-xl font-kanit font-bold text-royalBlue flex items-center gap-x-2">
              {title}
              <CiHeart className="text-xl cursor-pointer" />
            </h3>
            <div className="flex items-center gap-x-2">
              <button className="bg-orangyRed text-white px-4 py-2 rounded">View</button>
              <div className="dropdown relative" ref={dropdownRef}>
                <button
                  className="bg-orangyRed flex items-center text-white px-4 py-2 rounded gap-x-2"
                  onClick={toggleDropdown}
                >
                  Options
                  <FaChevronDown className="text-sm" />
                </button>
                {isDropdownOpen && (
                  <ul className="absolute top-[calc(100%+5px)] right-0 bg-orangyRed text-white w-full text-center rounded">
                    {["Option 1", "Option 2", "Option 3", "Option 4"].map((option, index) => (
                      <li key={index} className="p-2 cursor-pointer hover:text-royalBlue">
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3 mb-4 w-full">
            <span className="text-royalBlue text-xs p-2 border border-lightgray rounded-md bg-white font-semibold">
              {status}
            </span>
            <span className="text-royalBlue">{dateInfo}</span>
          </div>
        </div>
      </div>
      {isAccordionOpen && (
        <div className="bg-white p-4 rounded-md flex justify-between border border-lightgray">
          {stats.map((stat, index) => (
            <MatchStats key={index} label={stat.label} count={stat.count} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MatchCard;
