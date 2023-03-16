import ContentItem from "./ContentItem";

function ContentBox() {
  return(
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <ContentItem/>
        <ContentItem/>
        <ContentItem/>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <ContentItem/>
        <ContentItem/>
        <ContentItem/>
      </div>
    </div>
  )
}

export default ContentBox;