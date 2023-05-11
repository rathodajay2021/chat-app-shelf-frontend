import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JoinRoom } from "Components/JoinRoom";
import { ChatRoom } from "Components/ChatRoom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JoinRoom />} />
        <Route path="/chat-room" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
