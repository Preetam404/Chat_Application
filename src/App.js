import "./App.css";
import Homepage from "./pages/Homepage"; // Use lowercase 'pages', file is Homepage.js
import { Route } from "react-router-dom";
import Chatpage from "./pages/Chatpage"; // Use lowercase 'pages', file is ChatPage.js

function App() {
  return (
    <div className="App">
      <Route path="/home" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;