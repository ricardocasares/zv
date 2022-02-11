import { Link } from "@/components/Link";
import { Text } from "@/components/Text";
import { Wrap } from "@/components/Wrap";

const IndexPage = () => (
  <Wrap>
    <Text kind="h1" weight="bold">zv</Text>
    <Text kind="h2">JSON based resumé</Text>
    <Text kind="h3" family="mono">From devs for devs</Text>
    <Text>Write your own resume using <a href="https://github.com/jsonresume/resume-schema/blob/master/schema.json">resume.json schema</a> and GitHub.</Text>
    <Text>Create a new repo called <code>zv</code> and add your <code>zv.json</code> based on the schema.</Text>
    <Text>
      Check the sample <Link href="/ricardocasares">ricardocasares</Link>. Make sure you check the <Link href="https://github.com/ricardocasares/zv">source code</Link>.
    </Text>
  </Wrap>
);

export default IndexPage;
