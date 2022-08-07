import type { Spotify as SpotifyData } from 'use-lanyard';

interface Props {
  data: SpotifyData;
}

export function Spotify({ data }: Props) {
  return (
    <div className="w-full z-10 fixed bottom-0 flex items-center p-4 bg-[rgba(0,0,0,.4)] sm:rounded sm:bottom-4 sm:w-64 sm:right-4">
      <img
        className="rounded mr-4"
        src={data.album_art_url}
        alt="Song Art"
        width="48px"
        height="48px"
      />
      <div>
        <span className="text-green-400 font-bold text-sm block">Ouvindo agora ♪</span>
        <span className="text-sm">
          {data.song}
          <span className="ml-2 text-xs text-gray-400">by {data.artist}</span>
        </span>
      </div>
    </div>
  );
}
