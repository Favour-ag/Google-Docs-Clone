import { useEffect } from "react";
import "./App.css";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth } from "./config/firebase";
import { TextEditor } from "./components/text-editor";

const App = () => {
  useEffect(() => {
    signInAnonymously(auth);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(`User Siged in:`, user.uid);
      }
    });
  }, []);
  return (
    <div className="App">
      <header>
        <h1>Google Docs Clone</h1>
      </header>
      <TextEditor />
    </div>
  );
};

export default App;
