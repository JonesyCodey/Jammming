import React from 'react';
import Track;
import ' ./TrackList.css';


class Tracklist extends React.Component {
 render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map(track => {
            return <Track track={track}
                          key={track.id} 
                          onAdd = {this.props.onAdd}
                          onRemove = {this.props.onRemove}/>
          })
        }
      </div>
    );
  }
}

export default TrackList;