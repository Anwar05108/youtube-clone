import React from 'react';

import { Grid } from '@material-ui/core';
import { SearchBar, VideoList, VideoDetail } from './components'
import youtube from './api/youtube';


class App extends React.Component{

    state = {
        videos: [],
        selectedVideo: null,
    }
    
    onVideoSelect = (video) =>{
        this.setState({ selectedVideo: video });
    }


    handleSubmit = async (searchTerm) => {


        const response = await youtube.get('search', {
        params: {
            part: 'snippet',
            maxResult: 5,
            key: 'AIzaSyBT8lJsiLfZv-GHdef9coqJoLcrty5EcHk',
            q: searchTerm,
        }
    });

    console.log(response.data.items);
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });

    }
    render(){

        const { selectedVideo, videos } = this.state;
        return(
            <h1>
                <Grid justify="center" container spacing={10}>
                    <Grid item xs={12}>
                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                {/* search bar */}
                                <SearchBar onFormSubmit={this.handleSubmit}/>
                            </Grid>
                            <Grid item xs={8}>
                                {/* video details */}
                                <VideoDetail videos={ selectedVideo} />
                            </Grid>
                            <Grid item xs={4}>
                                {/* video list */}
                                <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/> 
                            </Grid>
                            
                        </Grid>

                    </Grid>
                </Grid>
            
            </h1>
        )
    }
}

export default App;