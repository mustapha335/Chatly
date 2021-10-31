import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="38585446-ad20-4384-bbd6-99dc02518e35"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
