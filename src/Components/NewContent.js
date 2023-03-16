import ContentBox from "./ContentBox";
import ContentNavBar from "./ContentNavBar";

const NewContentCtr = {
  paddingTop: '50px',
}

function NewContent() {
  return(
    <div style={NewContentCtr}>
      <text style={{fontSize: '18px', fontWeight: 'bold', WebkitTextStroke: '1px black', color: 'white'}}>NEW CONTENT</text>
      <ContentNavBar/>
      <ContentBox/>
    </div>
  )
}

export default NewContent;