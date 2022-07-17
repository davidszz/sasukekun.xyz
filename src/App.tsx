import { useLanyardWs } from 'use-lanyard';

import { Card } from './components/Card';
import { Credits } from './components/Credits';
import { Wrapper } from './components/Wrapper';

export default function App() {
  const data = useLanyardWs('757379507358531675');

  return (
    <Wrapper>
      {data && (
        <Card
          avatar={data.discord_user.avatar}
          bannerUrl={data.kv.banner_url}
          userId={data.discord_user.id.toString()}
          discriminator={data.discord_user.discriminator}
          username={data.discord_user.username}
          status={data.discord_status}
        />
      )}
      <Credits />
    </Wrapper>
  );
}
