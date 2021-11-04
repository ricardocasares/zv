import { Text } from "@/components/Text";
import { Link } from "@/components/Link";
import { Stack } from "@/components/Stack";

const IndexPage = () => (
  <Stack pad={{ "@initial": 2, "@sm": 3 }} gap="2">
    <Text kind="h1">The lazy brown fox</Text>
    <Text kind="h2">Jumped over the fence</Text>
    <Text kind="h3">Can&apos;t fucking believe it</Text>
    <Text>This is a fucking smaller piece of text, some people call it paragraph. That&apos;s a goddamn strange name.</Text>
    <Text>
      <Link href="/ricardocasares">
        <a>ricardocasares</a>
      </Link>
    </Text>
  </Stack>
);

export default IndexPage;
