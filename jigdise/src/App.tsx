import React from 'react';
import createClient from "./components/Game";
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const Client = createClient();
  return (
    <div>
      <Client />
    </div>
  );
}

export default App;