import React, { Component } from 'react';
import SearchResults from '../SearchResults/SearchResults'
import './App.css';
import Spotify from '../../util/Spotify';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';

  class App extends Component {
     constructor(props) {
      super(props);

      this.state = {
      "searchResults": [],
      "playlistName": "New Playlist",
      "playlistTracks": [],
    }

      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);

  }
  


  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (!tracks.find(trackIndex => trackIndex.id === track.id)) {
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
    }

   removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let newTracks = tracks.filter(trackIndex => trackIndex.id !== track.id);
    this.setState({playlistTracks: newTracks});

  }

  updatePlaylistName(name) {
        this.setState({ playlistName: name });
    }

  savePlaylist() {
    let trackUri = this.state.playlistTracks.map(track => {return track.uri});
    Spotify.savePlaylist(this.state.playlistName,trackUri);
    this.setState({
      playlistTracks: [],
      playlistName: 'New Playlist'
    })
  }

  search(searchTerm){
      Spotify.search(searchTerm).then(tracks => this.setState({searchResults: tracks}) );
    }

  render() {

    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      <SearchBar onSearch={this.search} connected={this.state.connected}/>
      <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults}/>
      <Playlist onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onSave={this.savePlaylist}/>
      </div>
      </div>
    </div>
    );
  }
}

export default App;
