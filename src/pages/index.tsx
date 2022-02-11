import { Link } from "@/components/Link";
import { Text } from "@/components/Text";
import { Wrap } from "@/components/Wrap";

const IndexPage = () => (
  <Wrap>
    <Text kind="h1" weight="bold">zv</Text>
    <Text kind="h2">JSON based resumé</Text>
    <Text kind="h3" family="mono">From devs for devs</Text>
    <Text>Create your own resume using <a href="https://github.com/jsonresume/resume-schema/blob/master/schema.json">resume.json schema</a>.</Text>
    <Text>
      Check the sample <Link href="/ricardocasares">ricardocasares</Link>.
    </Text>
  </Wrap>
);

export default IndexPage;
