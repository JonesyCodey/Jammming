import React, { Component } from 'react';
import SearchResults from '../SearchResults/SearchResults'
import logo from './logo.svg';
import './App.css';
import Spotify from ' ./util/Spotify';

class App extends Component {
      constructor (props) {
      super (props);
      this.state = {
      "searchResults": [],
      "playListName": "Despacito",
      "playlistTracks": []
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
    if (index !== -1) { 
        this.state.playlistTracks.splice(index, 1);
        this.setState({ playlistTracks: this.state.playlistTracks, });
    }
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
      <SearchBar onSearch ={this.search}/>
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
