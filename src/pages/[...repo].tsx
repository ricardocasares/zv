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
import { list } from "@/css/lists";

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
  <Stack as="main" pad={{ "@initial": 2, "@sm": 3 }} gap="3">
    <Stack as="section" css={{ textAlign: "center" }} gap="2">
      <Image
        alt={zv.basics.name}
        className={rounded()}
        src={zv.basics.image}
        width={150}
        height={260}
        objectFit="cover"
      />
      <Text as="h1" kind="h1">{zv.basics.name}</Text>
      <Text as="h2" kind="h2">{zv.basics.label}</Text>
      <Text as="h3" kind="h3">
        {zv.basics.summary}
      </Text>
    </Stack>

    <Stack as="section" gap="2">
      <Text as="h3" kind="h3">Skills</Text>
      <Grid>
        {zv.skills.map(({ name, level, keywords }) => (
          <Stack key={name.concat(level)} gap="1">
            <Text as="h4" kind="h4">{name}</Text>
            <Text as="h5" kind="h5">{level}</Text>
            <Text kind="p">{keywords.join(", ")}</Text>
          </Stack>
        ))}
      </Grid>
    </Stack>

    <Stack as="section" gap="2">
      <Text as="h3" kind="h3">Work experience</Text>

      <Stack gap="3">
        {zv.work.map((job, id) => (
          <Stack key={job.name.concat(String(id))} gap="2">
            <Stack>
              <Text as="h4" kind="h4">{job.position}</Text>
              <Text as="h5" kind="h5">{job.name}</Text>
            </Stack>

            <Text weight="thin">{job.summary}</Text>

            {!!job.highlights.length && (
              <Stack as="ul" className={list({ unstyled: true })} gap="1">
                {job.highlights.map((h) => (
                  <Text as="li" key={h}>
                    {h}
                  </Text>
                ))}
              </Stack>
            )}
          </Stack>
        ))}
      </Stack>
    </Stack>

    <Text>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </Text>
  </Stack>
);

export default User;
