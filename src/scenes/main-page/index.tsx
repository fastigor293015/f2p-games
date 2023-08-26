import Container from "@/components/container";
import Layout from "@/components/layout";
import Select from "@/components/select";
import { Button } from "@/components/ui/button";

const MainPage = () => {
  return (
    <Layout>
      <Container>
        <Select />
        <Button>Click me</Button>
        <Select />
        <Button>Click me</Button>
        <Select />
        <Button>Click me</Button>
        <Select />
        <Button>Click me</Button>
        <Select />
        <Button>Click me</Button>
        <Select />
        <Button>Click me</Button>
      </Container>
    </Layout>
  );
}

export default MainPage;
