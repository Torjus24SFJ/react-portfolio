import { HeaderText } from "./components/HeaderText/HeaderText";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Experience } from "./components/Experience/Experience";
import { Layout } from "./components/Layout/Layout";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Layout>
      <main className="md:p-24 sm:p-12 p-8 grid gap-30">
        <HeaderText />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      </Layout>
    </>
  );
}

export default App;
