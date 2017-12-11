const clientId ='8c9bb95371fb4365a1def16346a19e81';
const redirectUri = 'http://localhost:3000/'
const accessToken= '';

const Spotify = {
	getAccessTocken () {
		if (accessToken) {
		return accessToken;
	}
	    const newAccessToken = window.location.href.match(/access_token=([^&]*)/);
    	const newExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

    	if(newAccessToken && newExpiresIn){
      	accessToken = newAccessToken[1];
     	const expiresIn = Number(newExpiresIn[1]);
      	window.setTimeout(() => accessToken = '', expiresIn * 1000);
      	window.history.pushState('Access Token', null, '/');
    } 	else {
		window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
	}
	},


search (term) {
	return fetch (`https://api.spotify.com/v1/search?type=track&q=${term}`, {
		headers: {Authorization: `Bearer ${accessToken}`}
	})
	.then(response => response.json())
	.then(jsonResponse => {
		return jsonResponse.tracks.items.map(track => {
			return {
				id: track.id,
            	name: track.name,
            	artist: track.artists[0].name,
            	album: track.album.name,
            	uri: track.uri
			}
		})
	})
}

savePlaylist(playlistName, trackUriArray) {
	if (!listName || !trackUriList){
      return;
    }
	} 
    const accessToken = Spotift.getAccessToken();
    const headers = {'Authorization': `Bearer ${accessToken}`}
    const userId = '';

     return fetch(`https://api.spotify.com/v1/me`, {headers: headers}).then(response => {
     	return response.json();
     }).then(jsonResponse => {
     	userId = jsonResponse.id;
     	return fetch (`https://api.spotify.com/v1/users/${userId}/playlists`, {
      headers: headers,
      method: 'POST',
      body: JSON.stringify({name: playlistName})
    }).then(response => response.json()
    ).then (jsonResponse =>{
    	const playlistId = jsonResponse.id;
    	return fetch (`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({uris: trackUris})
      })
    })
   })
};

export default Spotify;