import { Link } from "@/components/Link";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";

const IndexPage = () => (
  <Stack pad={{ "@initial": 2, "@sm": 3 }} gap="2">
    <Text kind="h1" weight="bold">zv</Text>
    <Text kind="h2">JSON based resumé</Text>
    <Text kind="h3" family="mono">From devs for devs</Text>
    <Text>This is a fucking smaller piece of text, some people call it paragraph. That&apos;s a goddamn strange name.</Text>
    <Text>
      Check the sample <Link href="/ricardocasares">ricardocasares</Link>.
    </Text>
  </Stack>
);

export default IndexPage;
