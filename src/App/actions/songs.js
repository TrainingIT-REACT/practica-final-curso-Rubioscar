import { createAsyncAction } from 'redux-promise-middleware-actions';

export const getAlbumSongs = createAsyncAction('SONGS', async (id) => {
  const res = await fetch('/songs')
  var canciones = await res.json();
  console.log(id);
  return canciones.filter(song => 
      song.album_id === id
  );
});