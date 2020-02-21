import { createAsyncAction } from 'redux-promise-middleware-actions';

export const getAlbums = createAsyncAction('ALBUMS', async () => {
  const res = await fetch('/albums')
  return await res.json();
});

export const getAlbum = createAsyncAction('ALBUM', async (id) => {
  const res = await fetch('/albums')
  const albunes = await res.json();
  return albunes.find(album => album.id === id);
})