import { Hero, Projects } from './components';
import { getContents } from './fetchProjects';

getContents();

const App = () => {
  return (
    <main>
      <h3>App component</h3>
      <Hero />
      <Projects />
    </main>
  );
};
export default App;
