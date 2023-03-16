import { useState } from 'react'

function NavItem(props) {
  const [hover, isHover] = useState(false)

  const FollowBoxCtr = {
    backgroundColor: 'rgba(31, 31, 31, .5)',
    color: hover ? '#F357A0' : ((props.cur===props.name) ? '#F357A0' : 'white'),
    margin: '5px',
    paddingLeft: '5px',
    paddingRight: '5px',
    border: hover ? '2px #F357A0 solid' : ((props.cur===props.name) ? '2px #F357A0 solid' : '2px solid transparent'),
    borderRadius: '2px',
    webkitUserSelect: 'none', /* Safari */
    userSelect: 'none', /* Standard syntax */
    fontSize: '13px'
  }

  return(
    <div onMouseOver={() => isHover(true)} onMouseLeave={() => isHover(false)} onClick={() => props.changeTab(props.name)}>
      <text style={FollowBoxCtr}>{props.name}</text>
    </div>
  )
}

export default NavItem;