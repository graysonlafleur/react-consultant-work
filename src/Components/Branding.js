import logo from '../logo.png'

const BrandCtr = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  // border: '1px solid white'
}

function Branding () {
  return (
    <div style={BrandCtr}>
      <img src={logo} alt="truffle logo" width="50" height="50"></img>
      <h1>truffle</h1>
    </div>
  )
}

export default Branding