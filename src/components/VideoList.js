import React from 'react'

import VideoItem from './VideoItem';
import { Grid } from '@material-ui/core';
const VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideos = videos.map(( video, id ) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} /> )

    return (
        <Grid>
            {listOfVideos}
        </Grid>
        

    )
   
    }

export default VideoList;