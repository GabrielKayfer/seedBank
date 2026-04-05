import { getRouteByPath } from "./router/routes";
import { useLocationState } from "./router/useLocationState";

function App() {
  const { pathname } = useLocationState();
  const route = getRouteByPath(pathname);
  const Layout = route.layout;
  const Page = route.component;

  return (
    <Layout>
      <Page />
    </Layout>
  );
}

export default App;
