import {
  DiscordLogo,
  InstagramLogo,
  PinterestLogo,
  SpotifyLogo,
  TwitterLogo,
} from 'phosphor-react';
import { animated, useSpring } from 'react-spring';

interface Props {
  userId: string;
  bannerUrl?: string;
  avatar?: string;
  username: string;
  discriminator: string;
}

export function Card({ userId, username, discriminator, avatar, bannerUrl }: Props) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 2, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }: { clientX: number; clientY: number }) =>
        set({ xys: [-(y - window.innerHeight / 2) / 35, (x - window.innerWidth / 2) / 35, 1] })
      }
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        // eslint-disable-next-line react/prop-types
        transform: props.xys.to((x, y) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`),
      }}
      className="flex flex-col z-10 w-[calc(100vw-16px)] sm:w-96 mx-auto"
    >
      <div
        className="bg-center bg-no-repeat bg-cover h-48 rounded shadow-gray-800"
        style={{
          backgroundImage: `url(${
            bannerUrl ??
            'https://i.pinimg.com/originals/d4/0d/57/d40d57c9adde851e8f82f7443c73be56.gif'
          })`,
        }}
      />
      <div className="z-10">
        <img
          src={
            avatar
              ? `https://cdn.discordapp.com/avatars/${userId}/${avatar}.${
                  avatar.startsWith('a_') ? 'gif' : 'webp'
                }?size=256`
              : 'https://github.com/davidszz.png'
          }
          alt="Avatar"
          width="128px"
          height="128px"
          className="mx-auto rounded-full -mt-14 shadow-md"
        />
      </div>
      <div className="p-4 pt-16 -mt-14 w-full rounded drop-shadow-md backdrop-blur-lg bg-[rgba(0,0,0,.4)]">
        <div className="flex items-center justify-center leading-relaxed">
          <strong className="text-xl text-white font-sans text-center">{username}</strong>
          <span className="text-lg text-gray-300 ml-1">#{discriminator}</span>
        </div>
        <div className="flex items-center justify-around mt-8 text-white">
          <a
            href="https://instagram.com/david.kns"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:text-black hover:bg-[rgba(255,0,0,.2)] transition-colors"
          >
            <InstagramLogo size={26} weight="light" />
          </a>
          <a
            href="https://pinterest.com/sasukinsz"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:text-black hover:bg-[rgba(255,0,0,.2)] transition-colors"
          >
            <PinterestLogo size={26} weight="light" />
          </a>
          <a
            href="https://discord.com/users/757379507358531675"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:text-black hover:bg-[rgba(255,0,0,.2)] transition-colors"
          >
            <DiscordLogo size={26} weight="light" />
          </a>
          <a
            href="https://twitter.com/sasukinsz"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:text-black hover:bg-[rgba(255,0,0,.2)] transition-colors"
          >
            <TwitterLogo size={26} weight="light" />
          </a>
          <a
            href="https://open.spotify.com/user/316n2inp34e7p6s4lvk5r2rhlhxa?si=b65279ae0a784830"
            target="_blank"
            className="p-2 rounded-full hover:text-black hover:bg-[rgba(255,0,0,.2)] transition-colors"
            rel="noreferrer"
          >
            <SpotifyLogo size={26} weight="light" />
          </a>
        </div>
      </div>
    </animated.div>
  );
}
