interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="search-bar mb-8">
      <input
        type="text"
        placeholder="🔍 Buscar libro por título..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          search-bar__input
          w-full px-5 py-3
          rounded-full
          border border-gray-300
          shadow-sm
          focus:outline-none
          focus:ring-2 focus:ring-indigo-500
        "
      />
    </div>
  );
};