'use client'
import { useState } from 'react';

export default function LyricsForm() {
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [lyrics, setLyrics] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/lyrics?song=${song}&artist=${artist}`);
      const data = await response.json();
      setLyrics(data.lyrics);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="song">
          Song
        </label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="text"
          name="song"
          id="song"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="artist">
          Artist
        </label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="text"
          name="artist"
          id="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Lyrics
      </button>
      {lyrics && (
        <div className="my-8">
          <h2 className="text-xl font-bold mb-4">Lyrics</h2>
          <pre className="bg-[#2A95D9]/10 p-4">{lyrics}</pre>
        </div>
      )}
    </form>
  );
}
