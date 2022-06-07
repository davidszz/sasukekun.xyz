import { Helmet } from 'react-helmet';

import { Wrapper } from './Wrapper';

import { Paragraph } from '../components/common/Paragraph';
import { Technologie } from '../components/common/Technologie';
import { Title } from '../components/common/Title';
import { NextJS } from '../components/icons/NextJS';
import { React } from '../components/icons/React';
import { TailwindCSS } from '../components/icons/TailwindCSS';
import { Typescript } from '../components/icons/Typescript';
import { ViteJS } from '../components/icons/ViteJS';

export default function WhatIUse() {
  return (
    <Wrapper>
      <Helmet>
        <title>What I Use</title>
      </Helmet>

      <Title>Technologies</Title>
      <Paragraph>
        These are the technologies that I use the most in my projects and also what I use them for.
      </Paragraph>

      <Technologie
        title="Typescript"
        icon={<Typescript />}
        href="https://www.typescriptlang.org"
        iconColor="#007acc"
        tags={['typing', 'performance']}
        description="I use this framework on large projects to facilitate group work"
      />

      <Technologie
        title="React"
        icon={<React />}
        href="https://reactjs.org"
        iconColor="#20232a"
        tags={['interfaces', 'web']}
        description="I use this library to create high quality user interfaces"
      />

      <Technologie
        title="Next.JS"
        icon={<NextJS />}
        href="https://nextjs.org"
        iconColor="#ffffff"
        tags={['web', 'server-side-rendering']}
        description="Simply amazing, one of the best current frameworks to deal with creating web pages"
      />

      <Technologie
        title="Vite"
        icon={<ViteJS />}
        href="https://vitejs.dev"
        iconColor="#5468ff"
        tags={['tool', 'hmr']}
        description="It helps a lot in creating new projects, a fast and efficient building tool"
      />

      <Technologie
        title="Tailwind CSS"
        icon={<TailwindCSS />}
        href="https://tailwindcss.com"
        iconColor="#32fff5"
        tags={['styles', 'css']}
        description="I use it a lot when creating small projects that need a modern and flexible design"
      />
    </Wrapper>
  );
}
