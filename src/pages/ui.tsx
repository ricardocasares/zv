import { Text } from "@/components/Text";
import { Link } from "@/components/Link";
import { Wrap } from "@/components/Wrap";

const UIPage = () => (
  <Wrap>
    <Text kind="h1">The lazy brown fox</Text>
    <Text kind="h2">Jumped over the fence</Text>
    <Text kind="h3">Can&apos;t fucking believe it</Text>
    <Text>This is a fucking smaller piece of text, some people call it paragraph. That&apos;s a goddamn strange name.</Text>
    <Text>
      <Link href="/ricardocasares">
        <a>ricardocasares</a>
      </Link>
    </Text>
  </Wrap>
);

export default UIPage;
