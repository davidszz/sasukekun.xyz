import { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import useSWR from 'swr';

import { Wrapper } from './Wrapper';

import { Paragraph } from '../components/common/Paragraph';
import { RepoCard } from '../components/common/RepoCard';
import { RepoCardSkeleton } from '../components/common/RepoCardSkeleton';
import { RepoList } from '../components/common/RepoList';
import { Title } from '../components/common/Title';

interface GithubRepo {
  id: number;
  name: string;
  description?: string;
  owner: {
    login: string;
  };
  fork: boolean;
  html_url: string;
  forks_count: 0;
  watchers_count: number;
  stargazers_count: number;
  created_at: string;
}

export default function Repositories() {
  const { data: repos } = useSWR<GithubRepo[]>('repos:davidszz', async () => {
    const response = await fetch('https://api.github.com/users/davidszz/repos');
    return response.json();
  });

  const myRepos = useMemo(
    () => repos?.filter((x) => x.owner.login === 'davidszz' && !x.fork && x.owner.login !== x.name),
    [repos]
  );

  return (
    <Wrapper>
      <Helmet>
        <title>Repositories</title>
      </Helmet>

      <Title>My Github Repositories 🪐</Title>

      <Paragraph>Here you can see some of my projects on github that I keep public.</Paragraph>

      {repos ? (
        <RepoList>
          {myRepos &&
            myRepos.map((x) => (
              <RepoCard
                key={x.id}
                name={x.name}
                url={x.html_url}
                description={x.description}
                createdAt={new Date(x.created_at).toDateString()}
                forks={x.forks_count}
                stars={x.stargazers_count}
                watchers={x.watchers_count}
              />
            ))}
        </RepoList>
      ) : (
        <RepoList>
          <RepoCardSkeleton />
          <RepoCardSkeleton />
          <RepoCardSkeleton />
        </RepoList>
      )}
    </Wrapper>
  );
}
