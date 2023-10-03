import Canvas from "./canvas"
import Home from "./pages/home"
import Customiser from "./pages/Customiser"

const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home/>
      <Canvas/>
      <Customiser/>
    </main>
  )
}

export default App