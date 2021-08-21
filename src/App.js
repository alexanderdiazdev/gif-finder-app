import { useState } from 'react'
import AddCategory from "./components/AddCategory";
import GifCollection from './components/GifCollection';

function App() {

  const [categories, setCategories] = useState(["Dragon Ball"])

  return (
    <div className="App">
      <h1>Gif finder app</h1>
      <hr />
      <AddCategory setCategories= { setCategories } />
      <ul>
        {
          categories.map((category, i) => 
            <GifCollection key={ i } category= { category } />
          )
        }
      </ul>
    </div>
  );
}

export default App;
