import { PageHeader } from "./layouts/PageHeader";
import { PageIntro } from "./layouts/PageIntro";

import "./App.css";

function App() {
  return (
    <>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <PageIntro />
      </div>
    </>
  );
}

export default App;
