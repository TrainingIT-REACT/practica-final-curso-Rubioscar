import { createAsyncAction } from 'redux-promise-middleware-actions';

export const getAlbumSongs = createAsyncAction('SONGS', async (id) => {
  const res = await fetch('/songs')
  const canciones = await res.json();
  return canciones.filter(item => item.album_id === id);
});

export const getTrendsSongs = createAsyncAction('TRENDS_SONGS', async () => {
  const res = await fetch('/songs')
  const canciones = await res.json();
  return canciones.filter(item => item.id % 5 === 0);
});

export const getSong = createAsyncAction('SONG', async (id) => {
  const res = await fetch('/songs')
  const canciones = await res.json();
  return canciones.find(song => song.id === id);
})