type SearchInputProps = {
  type: string;
  placeholder?: string;
  classname?: string;
};
const SearchInput: React.FC<SearchInputProps> = ({ type = 'text', placeholder = '', classname = '' }) => {
  return (
    <input type={type} placeholder={placeholder} className={`py-3.5 px-4 border border-lightgray w-full rounded-md outline-none focus:outline-royalBlue placeholder:text-lightgray text-royalBlue text-base ${classname}`} />
  )
}

export default SearchInput