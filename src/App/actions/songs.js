import { createAsyncAction } from 'redux-promise-middleware-actions';

export const getAlbumSongs = createAsyncAction('SONGS', async (id) => {
  const res = await fetch('/songs')
  const canciones = await res.json();
  return canciones.filter(item => item.album_id === id);
});