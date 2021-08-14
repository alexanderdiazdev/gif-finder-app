import { useState } from 'react'
import AddCategory from "./components/AddCategory";

function App() {

  const [categories, setCategories] = useState(["Dragon Ball", "ramma 1/2"])

  return (
    <div className="App">
      <h1>Gif finder app</h1>
      <hr />
      <AddCategory setCategories= { setCategories} />
      <ul>
        {
          categories.map((category, i) => <li key={ i }> { category } </li>)
        }
      </ul>
    </div>
  );
}

export default App;
