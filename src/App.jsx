import "./App.css";
import DeleteAllUser from "./components/DeleteAllUser";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <Navbar />
      <UserDetails />
      <DeleteAllUser/>
    </>
  );
}

export default App;
