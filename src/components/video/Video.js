import React from "react";

function Video(props){
  return(
    <div>
      {props.videoItem.snippet.channelTitle}
    </div>
  )
}

export default Video;