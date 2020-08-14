import React from 'react';
import VideoItem from './VideoItem';

// const VideoList = (props) => {
//     return (
//         <div>{props.videos.length}</div>
//     );
// };

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((item) => {
        return <VideoItem key={item.id.videoId} onVideoSelect={onVideoSelect} video={item}/>
    });

    return (
        <div>
            {/*<div>{videos.length}</div>*/}
            <div className={`ui relaxed divided list`}>{renderedList}</div>
        </div>
    );
};

export default VideoList;