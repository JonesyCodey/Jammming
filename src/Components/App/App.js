import React, { Component } from 'react';
import SearchResults from '../SearchResults/SearchResults'
import logo from './logo.svg';
import './App.css';

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

  }
  
  addTrack (track) {
    if (this.state.playlist.indexOf(track) === -1) {
        this.setState({playlist: this.state.playlist.concat(track)});
    }
    }


  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (this.state.playlistTracks.indexOf(track) === -1) {
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

  updatePlaylistName(name){
        this.setState({ playlistName: name });
    }

  savePlaylist (){
    let trackURIs = [];
        this.state.playlistTracks.forEach(track => {
        if (track.uri){
        trackURIs.push(track.uri)
      }
    });
    if (trackURIs.length>0){ // will not save an empty playlist
      Spotify.savePlaylist(this.state.playlistName, trackURIs);
      this.setState({ playlistName: 'New Playlist', playlistTracks: [], });
    }else{
      alert("Playlist is empty.");
    }
    }



  render() {

    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      <SearchBar />
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
