type SectionHeadingProps = {
  headingText: string;
  classname?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ headingText, classname = '' }) => {
  return (
    <div className={`relative w-fit block  ${classname}`}>
      <h1 className={`text-5xl font-bold font-kanit text-royalBlue`}>{headingText}</h1>
      <span className="absolute -bottom-4 left-0 w-1/3 h-1 bg-orangyRed"></span>
    </div>
  );
};

export default SectionHeading;
