import Link from 'next/link';
import Image from 'next/image';
import { FunctionComponent as FC } from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType as InferProps } from 'next';
//---
import type { ZV } from '@/types';
import { fetcher } from '@/lib/fetcher';
import { text } from '@/css/text';

export const getStaticProps: GetStaticProps = async ({ params: { user } }) => {
  const zv = await fetcher<ZV>(`/${user}/zv/main/zv.json`);
  const avatar = `https://github.com/${user}.png`;

  return { props: { zv, user, avatar }, revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { user: 'ricardocasares' } }],
    fallback: 'blocking'
  };
};

const User: FC<InferProps<typeof getStaticProps>> = ({ zv, user, avatar }) => (
  <>
    <h1 className={text({ size: 8, weight: "normal" })}>{user}</h1>
    <Image src={avatar} width={150} height={150} />
    <pre>
      {JSON.stringify(zv, null, 1)}
    </pre>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
);

export default User;
