import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import "./App.css";
import App1 from "./App1";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
            <App1 />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;