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

  render() {

    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      <SearchBar />
      <div className="App-playlist">
      <SearchResults searchResults = {this.state.searchResults}/>
      <Playlist onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
      </div>
      </div>
    </div>
    );
  }
}

export default App;
