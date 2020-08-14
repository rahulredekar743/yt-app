import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtubeapi';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async (term) => {
        // console.log(term)
        const response = await youtube('/search', {
            params: {
                q: term
            }
        });

        // console.log(response.data.items);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };


    onVideoSelect = (video) => {
        // console.log('From the App!', video)
        this.setState({selectedVideo: video});
    };

    render() {
        return (
            <div className={`ui container`}>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className={`ui grid`}>
                    <div className={`ui row`}>
                        <div className={`eleven wide column`}>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className={`five wide column`}>
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;