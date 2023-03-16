import searchlogo from '../search.png'

const SearchCtr = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // border: '1px solid white'
}

const TextBox = {
  width: '500px',
  border: '1px solid #F357A0',
  height: '40px',
  borderRadius: '25px',
  outline: 'none',
  backgroundColor: 'rgba(90, 90, 90, .5)',
  color: 'white'
}

const SearchIcon = {
  //put inside the search bar
}

function SearchBar() {

  return (
    <div style={SearchCtr}>
      <img src={searchlogo} alt='search logo' height='15px' width='15px' style={SearchIcon} />
      <input type="text" placeholder='Search' style={TextBox}/>
    </div>
  )
}

export default SearchBar