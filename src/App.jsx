import './App.css';
import InfoCard from './components/InfoCard'
import CardTable from './components/CardTable'

const App = () => {

  return (
    <div className="App">

      <h1> Houston Coffee Shops ☕️ </h1>

      <h2> Some of my favorite local coffeeshops around Houston!</h2>

      <CardTable />
      
    </div>
  )
}

export default App