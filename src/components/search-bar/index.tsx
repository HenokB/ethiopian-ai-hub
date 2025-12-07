type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({
  value,
  onChange,
}: SearchBarProps) => {
  return (
    <div className="w-full py-2">
      <form className="w-full flex items-center">
        <div className="relative w-full max-w-2xl mx-auto">
          <input
            name="searchbar"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            id="voice-search"
            className="border border-[#d2d2d7] rounded-2xl focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 block w-full px-6 py-4 bg-white text-[#1d1d1f] placeholder:text-[#86868b] text-base transition-all duration-200 outline-none shadow-sm"
            placeholder="Search by authors, datasets, models papers..."
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-[#86868b]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
