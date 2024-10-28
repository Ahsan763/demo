type StatProps = {
  label: string;
  count: number;
};
const MatchStats: React.FC<StatProps> = ({ label, count }) => {
  return (
    <div className="text-center">
      <p className="text-orangyRed text-sm font-bold mb-1.5">{label}</p>
      <p className="text-royalBlue text-3xl font-bold font-kanit">{count}</p>
    </div>
  );
};
export default MatchStats