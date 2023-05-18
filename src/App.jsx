import Header from "./components/Header";
import MainScreen from "./MainScreen";
import ContextProvider from "./ContextProvider";
import "./App.css";

function App() {
  return (
    <main className="bg-slate-300 h-screen w-screen">
      <ContextProvider>
        <Header />
        <MainScreen />
      </ContextProvider>
    </main>
  );
}

export default App;
