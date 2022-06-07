import { Helmet } from 'react-helmet';

import { Wrapper } from './Wrapper';

import { Paragraph } from '../components/common/Paragraph';
import { SmallTitle } from '../components/common/SmallTitle';
import { Title } from '../components/common/Title';
import { ExternalLink } from '../components/icons/ExternalLink';

export default function Contact() {
  return (
    <Wrapper forceMaxWidth>
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <Title>Contact me</Title>

      <Paragraph>
        You can contact me on my{' '}
        <a href="https://discord.com/users/757379507358531675" target="_blank" rel="noreferrer">
          Discord <ExternalLink />
        </a>
        .
      </Paragraph>

      <br />

      <SmallTitle>Want to hire me?</SmallTitle>

      <Paragraph>
        I&#39;m free to be hired and do my best for your project and/or company!
        <br />
        You can also contact me by sending an email to:{' '}
        <a href="mailto: davidkunschventurini@gmail.com">
          davidkunschventurini@gmail.com <ExternalLink />
        </a>
      </Paragraph>

      <Paragraph>
        <a href="https://instagram.com/david.kns" target="_blank" rel="noreferrer">
          Instagram <ExternalLink />
        </a>
        <br />
        <a href="https://twitter.com/sasukinsz" target="_blank" rel="noreferrer">
          Twitter <ExternalLink />
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/david-kunsch-5a0202201/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin <ExternalLink />
        </a>
      </Paragraph>

      <img src="/static/images/sasuke-fighting.gif" alt="Sasuke Fighting" />
    </Wrapper>
  );
}
