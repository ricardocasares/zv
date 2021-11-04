import { Link } from "@/components/Link";
import { Text } from "@/components/Text";
import { Wrap } from "@/components/Wrap";

const IndexPage = () => (
  <Wrap>
    <Text kind="h1" weight="bold">zv</Text>
    <Text kind="h2">JSON based resumé</Text>
    <Text kind="h3" family="mono">From devs for devs</Text>
    <Text>This is a fucking smaller piece of text, some people call it paragraph. That&apos;s a goddamn strange name.</Text>
    <Text>
      Check the sample <Link href="/ricardocasares">ricardocasares</Link>.
    </Text>
  </Wrap>
);

export default IndexPage;
