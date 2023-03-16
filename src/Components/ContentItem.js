import thumbnail from '../thumbnail.jpg'
import { useState } from 'react'

function ContentItem() {

  const [hover, isHover] = useState(false)

  const ContentItemCtr = {
    height: '190px',
    width: '230px',
    margin: '5px',
    backgroundColor: '#1F1F1F',
    border: hover ? '2px #F357A0 solid' : '2px solid transparent',
    WebkitUserSelect: 'none', /* Safari */
    userSelect: 'none', /* Standard syntax */
  }

  return(
    <div style={ContentItemCtr} onMouseOver={() => isHover(true)} onMouseLeave={() => isHover(false)}>
      <img src={thumbnail} width='230px' height='129px' alt='thumbnail'/>
    </div>
  )
}

export default ContentItem;