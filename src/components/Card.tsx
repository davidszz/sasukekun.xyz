import {
  DiscordLogo,
  GameController,
  InstagramLogo,
  PinterestLogo,
  SpotifyLogo,
  TwitterLogo,
} from 'phosphor-react';
import { animated, useSpring } from 'react-spring';

function SocialLink({ href, IconComponent }: { href: string; IconComponent: typeof TwitterLogo }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-2 rounded-full hover:text-black hover:bg-[rgba(255,0,0,.2)] transition-colors"
    >
      <IconComponent size={26} weight="light" />
    </a>
  );
}

interface Props {
  username: string;
  discriminator: string;
  avatar: string;
  banner: string;
  listening?: boolean;
  playing?: {
    name: string;
    icon?: string;
  };
}

export function Card({ username, discriminator, avatar, banner, listening, playing }: Props) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 2, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }: { clientX: number; clientY: number }) =>
        set(
          window.innerWidth >= 640
            ? { xys: [-(y - window.innerHeight / 2) / 35, (x - window.innerWidth / 2) / 35, 1] }
            : { xys: [0, 0, 1] }
        )
      }
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        // eslint-disable-next-line react/prop-types
        transform: props.xys.to((x, y) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`),
      }}
      className="flex flex-col z-10 w-full h-full mb-1 sm:mb-0 sm:w-96 sm:h-auto mx-auto"
    >
      <div
        className="bg-center bg-no-repeat bg-cover h-48 sm:rounded shadow-gray-800"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      />
      <div className="z-10 relative">
        <div className="mx-auto flex justify-center items-center relative -mt-14">
          <img
            src={avatar}
            alt="Avatar"
            width="128px"
            height="128px"
            className="rounded-full shadow-md z-20"
          />
          {listening && (
            <div className="absolute rounded-full h-24 w-24 bg-green-500 animate-ping" />
          )}
        </div>
      </div>
      <div className="p-4 pt-16 -mt-14 w-full h-full sm:h-auto sm:rounded drop-shadow-md backdrop-blur-lg bg-[rgba(0,0,0,.4)]">
        <div className="flex items-center justify-center leading-relaxed">
          <strong className="text-xl text-white font-sans text-center">{username}</strong>
          <span className="text-lg text-gray-300 ml-1">#{discriminator}</span>
        </div>
        <div className="flex items-center flex-wrap justify-around mt-8 text-white gap-4 sm:gap-0">
          <SocialLink href="https://instagram.com/david.kns" IconComponent={InstagramLogo} />
          <SocialLink href="https://pinterest.com/sasukinsz" IconComponent={PinterestLogo} />
          <SocialLink
            href="https://discord.com/users/757379507358531675"
            IconComponent={DiscordLogo}
          />
          <SocialLink href="https://twitter.com/sasukinsz" IconComponent={TwitterLogo} />
          <SocialLink
            href="https://open.spotify.com/user/316n2inp34e7p6s4lvk5r2rhlhxa?si=b65279ae0a784830"
            IconComponent={SpotifyLogo}
          />
        </div>
      </div>
      {playing && (
        <div className="p-4 mt-1 w-full sm:h-auto sm:rounded drop-shadow-md backdrop-blur-lg bg-[rgba(0,0,0,.4)] flex items-center gap-2 flex-nowrap overflow-hidden">
          {playing.icon ? (
            <img
              src={playing.icon}
              alt="Playing icon"
              width="22px"
              height="22px"
              className="rounded"
            />
          ) : (
            <GameController weight="light" size={18} />
          )}
          <span
            title={`Jogando: ${playing.name}`}
            className="text-ellipsis whitespace-nowrap overflow-hidden text-sm font-semibold"
          >
            {playing.name}
          </span>
        </div>
      )}
    </animated.div>
  );
}
