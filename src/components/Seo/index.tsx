import Head from "next/head";
import type { FunctionComponent as FC } from "react";

export type Seo = {
  title: string;
  description: string;
};

export const Seo: FC<Seo> = ({ title, description }) => <Head>
  <title>{title}</title>
  <meta name="robots" content="index, follow" />
  <meta name="description" content={description} />
</Head>;