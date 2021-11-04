import type { FunctionComponent as FC } from "react";
import type { GetStaticPaths, InferGetStaticPropsType as InferProps } from "next";
//
import type { JSONResume } from "@/types";
import { fetcher } from "@/lib/fetcher";
import { list } from "@/css/lists";
import { Seo } from "@/components/Seo";
import { Text } from "@/components/Text";
import { Grid } from "@/components/Grid";
import { Wrap } from "@/components/Wrap";
import { Stack } from "@/components/Stack";
import { Image } from "@/components/Image";

export const getStaticProps = async ({ params: { repo } }) => {
  const [user, branch = "main"] = repo as string[];
  const zv = await fetcher<JSONResume>(`/${user}/zv/${branch}/zv.json`);

  return { props: { zv }, revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { repo: ["ricardocasares"] } }],
    fallback: "blocking",
  };
};

const User: FC<InferProps<typeof getStaticProps>> = ({ zv }) => (
  <Wrap gap="4">
    <Seo title={[zv.basics.name, zv.basics.label].join(' - ')} description={zv.basics.summary} />
    <Stack as="section" css={{ alignItems: "center" }} gap="2">

      <Image
        priority
        alt={zv.basics.name}
        src={zv.basics.image}
        width={250}
        height={250}
      />

      <Text as="h1" kind="h1">
        {zv.basics.name}
      </Text>
      <Text as="h2" kind="h2">
        {zv.basics.label}
      </Text>
      <Text as="h3" kind="h3">
        {zv.basics.summary}
      </Text>
    </Stack>

    <Stack as="section" gap="2">
      <Text as="h3" kind="h3">
        Skills
      </Text>

      <Grid>
        {zv.skills.map(({ name, level, keywords }) => (
          <Stack key={name.concat(level)} gap="1">
            <Text as="h4" kind="h4">
              {name}
            </Text>
            <Text as="h5" kind="h5">
              {level}
            </Text>
            <Text kind="p">{keywords.join(", ")}</Text>
          </Stack>
        ))}
      </Grid>
    </Stack>

    <Stack as="section" gap="3">
      <Text as="h3" kind="h3">
        Work experience
      </Text>

      <Stack gap="3">
        {zv.work.map((job, id) => (
          <Stack key={job.name.concat(String(id))} gap="2">
            <Stack>
              <Text as="h4" kind="h4">
                {job.position}
              </Text>
              <Text as="h5" kind="h5">
                {job.name}
              </Text>
            </Stack>

            <Text weight="bold">{job.summary}</Text>

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
  </Wrap>
);

export default User;
