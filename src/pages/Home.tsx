import Tooltip from '@tippyjs/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { BIRTH_DATE } from '../utils/constants';
import { Wrapper } from './Wrapper';

import { Paragraph } from '../components/common/Paragraph';
import { SmallTitle } from '../components/common/SmallTitle';
import { Title } from '../components/common/Title';
import { ExternalLink } from '../components/icons/ExternalLink';

const YEAR_MS = 31556926000;

export default function Home() {
  const [birthDayCountdown, setBirthDayCountdown] = useState(() => {
    const birthTime = BIRTH_DATE.getTime() % YEAR_MS;
    const nowTime = Date.now() % YEAR_MS;

    return nowTime > birthTime ? birthTime + YEAR_MS - nowTime : birthTime - nowTime;
  });

  const myAge = useMemo(() => Math.floor((Date.now() - BIRTH_DATE.getTime()) / YEAR_MS), []);

  const formatAgeCountdown = useCallback(() => {
    if (YEAR_MS - birthDayCountdown <= 86400000) {
      return 'Happy Birthday Sasuke! 🎉';
    }

    let seconds = Math.floor(birthDayCountdown / 1000);

    const days = Math.floor(seconds / 86400);
    seconds %= 86400;

    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, [birthDayCountdown]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBirthDayCountdown((state) => (state - 1000 <= 0 ? YEAR_MS : state - 1000));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper forceMaxWidth>
      <Title>Hi there 🍃</Title>

      <Paragraph>
        Hi, I&#39;m David, better known as <strong>&quot;Sasuke&quot;</strong> on my social media
        and by my friends.
      </Paragraph>

      <Paragraph>
        I am{' '}
        <Tooltip content={formatAgeCountdown()} theme="custom-tooltip" arrow>
          <strong>{myAge}</strong>
        </Tooltip>{' '}
        years old and a technology enthusiast, always looking learn as much as possible with new
        features and new technologies.
      </Paragraph>

      <Paragraph>
        In my free time I really like listening to songs from my{' '}
        <a
          href="https://open.spotify.com/playlist/2yiMhCp4BBh5mYJ73zo4LK?si=7c60f54944504d0f"
          target="_blank"
          rel="noreferrer"
        >
          playlist <ExternalLink />
        </a>{' '}
        and playing games like Valorant, Lol and others...
      </Paragraph>

      <br />

      <SmallTitle>How I started programming</SmallTitle>

      <Paragraph>
        I started programming at the end of <strong>2015</strong> with <span>C#</span>, I was
        developing plugins for the oxide website (currently{' '}
        <a href="https://umod.org" target="blank">
          uMod <ExternalLink />
        </a>
        ), but at the end of 2016 I stopped programming and only came back in 2018.
      </Paragraph>

      <Paragraph>
        In <strong>2019</strong> I started my journey with <span>Javascript</span> using the{' '}
        <strong>Node.js</strong> engine, I initially made bots for Discord, a while later at the end
        of 2019 I started making websites using React.
      </Paragraph>

      <br />

      <SmallTitle>Why this name?</SmallTitle>

      <Paragraph>
        <strong>Sasuke</strong> is the name of a character from a Japanese anime called{' '}
        <strong>&quot;Naruto&quot;</strong> for those who don&#39;t know.
      </Paragraph>

      <Paragraph>
        I chose that name because since I was a child I&#39;ve always liked this character too much,
        and I thought it could be a good nickname ¯\_(ツ)_/¯.
      </Paragraph>
    </Wrapper>
  );
}
