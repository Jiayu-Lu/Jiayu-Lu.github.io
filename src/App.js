import {Route} from 'react-router-dom';
import './App.css';

import Index from './pages/index/index';
import ToDoList from './pages/toDoList/toDoList';
import GithubSearch from './pages/githubSearch/githubSearch';
import Project from './pages/project/project';
import Contact from './pages/contact/contact';

function App() {
  return (
    <div>
        <Route exact path="/" component={Index} />
        <Route path="/toDoList" component={ToDoList} />
        <Route path="/githubSearch" component={GithubSearch} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
