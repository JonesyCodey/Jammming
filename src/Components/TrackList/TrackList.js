import React from 'react';
import Track;
import ' ./TrackList.css';


class Tracklist extends React.Component {
	render (){
		return (
			<div className="TrackList">
    		{this.props.tracks.map(<Track key={track.id} />)}
			</div>
				);
	}
}

export default TrackList;