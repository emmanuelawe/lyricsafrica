import { getLyrics } from '../../lib/lyricsScraper';

export default async function handler(req, res) {
  const { song, artist } = req.query;

  if (!song || !artist) {
    return res.status(400).json({ error: 'Missing song or artist parameter' });
  }

  try {
    const lyrics = await getLyrics(song, artist);
    return res.status(200).json({ lyrics });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to get lyrics' });
  }
}
