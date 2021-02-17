import { BrowserRouter as Router, Route} from 'react-router-dom'
import clientForm from './components/clientForm'

function App(props) {
  return (
    <Router>
      <Route component={clientForm} />
    </Router>
  );
}

export default App;
