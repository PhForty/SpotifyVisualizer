let client = new JSO({
	providerID: "spotify",
	client_id: "d090fe1487f94720af528c41f2ef60ea",
	redirect_uri: "C:\Users\Philipp Fortmann\Documents\GitHub\SpotifyVisualizer\index.html",
	authorization: "https://accounts.spotify.com/authorize",
	scopes: { request: ["playlist-read-private", "user-top-read"]}
})
//notwendige Scopes: playlist-read-private, user-top-read
//vielleicht notwendig: playlist-read-collaborative

client.callback();