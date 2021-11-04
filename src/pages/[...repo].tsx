import Image from "next/image";
import { FunctionComponent as FC } from "react";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType as InferProps,
} from "next";
//---
import type { ZV } from "@/types";
import { fetcher } from "@/lib/fetcher";
import { css } from "@/css";
import { Text } from "@/components/Text";
import { Link } from "@/components/Link";
import { Grid } from "@/components/Grid";
import { Stack } from "@/components/Stack";

export const getStaticProps = async ({ params: { repo } }) => {
  const [user, branch = "main"] = repo as string[];
  const zv = await fetcher<ZV>(`/${user}/zv/${branch}/zv.json`);
  const avatar = `${process.env.GH_URL}/${user}.png`;

  return { props: { zv, avatar }, revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { repo: ["ricardocasares"] } }],
    fallback: "blocking",
  };
};

const rounded = css({ borderRadius: "$2", textAlign: "center" });

const User: FC<InferProps<typeof getStaticProps>> = ({ zv, avatar }) => (
  <Stack pad={{ "@initial": 2, "@sm": 3 }} gap="3">
    <Stack css={{ textAlign: "center" }} gap="2">
      <Image
        alt={zv.basics.name}
        className={rounded()}
        src={avatar}
        width={150}
        height={260}
        objectFit="cover"
      />
      <Text kind="h1">{zv.basics.name}</Text>
      <Text kind="h2">{zv.basics.label}</Text>
      <Text kind="h3" weight="normal">
        {zv.basics.summary}
      </Text>
    </Stack>

    <Stack>
      <Text kind="h2">Skills</Text>
      <Grid>
        {zv.skills.map(({ name, level, keywords }) => (
          <Stack key={name} gap="1">
            <Text kind="h3">{name}</Text>
            <Text kind="p">{level}</Text>
            <Text kind="p">{keywords.join(", ")}</Text>
          </Stack>
        ))}
      </Grid>
    </Stack>

    <Stack>
      <Text kind="h2">Work experience</Text>
      <Grid>
        {zv.work.map((job) => (
          <Stack key={job.name} gap="1">
            <Text kind="h3">{job.position}</Text>
            <Text kind="h3">{job.name}</Text>
            <Text kind="p">{job.summary}</Text>
          </Stack>
        ))}
      </Grid>
    </Stack>

    <Text>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </Text>
  </Stack>
);

export default User;
