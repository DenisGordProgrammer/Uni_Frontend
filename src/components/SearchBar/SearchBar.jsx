import "./SearchBar.scss"
const SearchBar = ({ value, onChange  }) => {
    return (
        <div className="search-container">
            <input
                id="search"
                type="text"
                placeholder="Пошук..."
                value={value}
                onChange={(e) => onChange (e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
