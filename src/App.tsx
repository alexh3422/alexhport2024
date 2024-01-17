import { PageHeader } from "./layouts/PageHeader";
import { PageIntro } from "./layouts/PageIntro";
import { PageProjects } from "./layouts/PageProjects";
import { PageAbout } from "./layouts/PageAbout";
import { PageContact } from "./layouts/PageContact";

import "./App.css";

function App() {
  return (
    <>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <PageIntro />
        <PageProjects />
        <PageAbout />
        <PageContact />
      </div>
    </>
  );
}

export default App;
