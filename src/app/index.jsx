import { GlobalStyle, Layout } from "../styles/common";
import Router from "../router";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <div className="appWrapper">
          <Router />
        </div>
      </Layout>
    </>
  );
};

export default App;
