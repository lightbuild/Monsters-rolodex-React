import './seach-box.style.css'

const SeachBox = ({className, placeholder, onChangeHanlder}) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHanlder}
  />
)


export default SeachBox;

