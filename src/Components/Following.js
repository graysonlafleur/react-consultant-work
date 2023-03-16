import FollowBox from "./FollowBox";

const FollowingCtr = {
  // border: '1px solid white',
  color: 'white',
  paddingTop: '50px'
}

function Following() {
  return(
    <div style={FollowingCtr}>
        <text style={{fontSize: '18px', fontWeight: 'bold', WebkitTextStroke: '1px black'}}>FOLLOWING</text>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <FollowBox/>
          <FollowBox/>
          <FollowBox/>
          <FollowBox/>
          <FollowBox/>
          <FollowBox/>
        </div>
    </div>
  )
}

export default Following;