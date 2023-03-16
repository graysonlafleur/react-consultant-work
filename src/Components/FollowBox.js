import lupo from '../drlupo.jpg'
import youtubelogo from '../youtubelogo.png'
import { useState } from 'react'

function FollowBox() {
  const [hover, isHover] = useState(false)

const FollowBoxCtr = {
  height: '140px',
  width: '110px',
  backgroundColor: 'rgba(31, 31, 31, .5)',
  color: 'white',
  margin: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  border: hover ? '2px #F357A0 solid' : '2px solid transparent',
  borderRadius: '2px',
  WebkitUserSelect: 'none', /* Safari */
  userSelect: 'none', /* Standard syntax */
}

const ProfPic = {
  display: 'flex',
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: '1',
}

const LiveCtr = {
  display: 'flex',
  borderRadius: '25px',
  width: '60px',
  height: '19px',
  backgroundColor: '#E4251C',
  opacity: '1',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '12px'
}

  return(
    <div style={FollowBoxCtr} onMouseOver={() => isHover(true)} onMouseLeave={() => isHover(false)} onClick={() => window.location.href = 'https://youtube.com'}>
      <img src={lupo} alt='profile' style={ProfPic} />
      <text>DrLupo</text>
      <div style={LiveCtr}>
        <img src={youtubelogo} alt='youtube profile' height='10' width='13'/>
        <text>LIVE</text>
      </div>
    </div>
  )
}

// one issue could be that it may be hard to determine which platform
// a creater streams on. Only affects offline status.

export default FollowBox;