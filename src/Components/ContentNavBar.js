import NavItem from "./NavItem";
import { useState } from 'react'

const ContentNavBarCtr = {
  display: 'flex',
}

function ContentNavBar() {
  const [curTab, changeTab] = useState('ALL')

  let newContentNames = ['MRBEAST', 'LUDWIG', 'VALKYRAE', 'LILYPICHU', 'DRLUPO', 'STANZ', 'QTCINDERELLA']
  let navItems = []

  newContentNames.forEach(name => {
    navItems.push(<NavItem name={name} cur={curTab} changeTab={changeTab}/>)
  })

  return(
    <div style={ContentNavBarCtr}>
       <NavItem name='ALL' cur={curTab} changeTab={changeTab}/>
       {navItems}
    </div>
  )
}

export default ContentNavBar;