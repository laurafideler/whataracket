import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <div> here is a change</div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App)
