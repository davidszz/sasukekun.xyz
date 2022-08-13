import { useMemo } from 'react';
import { useLanyardWs } from 'use-lanyard';

import { Card } from './components/Card';
import { Spotify } from './components/Spotify';
import { Wrapper } from './components/Wrapper';

export default function App() {
  const data = useLanyardWs('757379507358531675');

  const user = useMemo(() => data?.discord_user, [data]);
  const banner = data?.kv.banner_url ?? '/banner.gif';
  const avatar = user?.avatar
    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${
        user.avatar.startsWith('a_') ? 'gif' : 'png'
      }?size=256`
    : 'https://cdn.discordapp.com/embed/avatars/5.png';

  const playing = useMemo(() => {
    const game = data?.activities.filter((x) => x.type === 0)[0];
    if (game) {
      return {
        name: game.name,
        icon:
          game.application_id &&
          (game.assets?.large_image
            ? `https://cdn.discordapp.com/app-icons/${game.application_id}/${game.assets.large_image}`
            : `https://dcdn.dstn.to/app-icons/${game.application_id}`),
      };
    }
    return undefined;
  }, [data?.activities]);

  return (
    <Wrapper>
      {user && (
        <Card
          avatar={avatar}
          banner={banner}
          discriminator={user.discriminator}
          username={user.username}
          playing={playing}
        />
      )}
      {data?.spotify && <Spotify data={data.spotify} />}
    </Wrapper>
  );
}
