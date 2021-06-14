import css from 'styled-jsx/macro';

const { className, styles} = css.resolve`
    .search-bar {
        width: 100%;
        max-width: 800px;
        flex-basis: 1;
    }
`

export const SearchBar = () => {
    return (
        <div className={`ui action input search-bar ${className}`}>
            <input type="text" placeholder="Search..." />
            <button className="ui icon button">
                <i className="search icon"></i>
            </button>
            {styles}
        </div>
    )
}

export default SearchBar