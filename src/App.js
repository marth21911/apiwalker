import './App.css';
import {BrowserRouter, 
Link, Switch, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import People from './components/People';
import {useHistory} from 'react-router-dom';
import Planets from './components/Planets';

function App() {
//info from topic form state
  const [topic, setTopic]= useState ("");
  const [id, setId]= useState("");
  //info from ID form state
 
  const history = useHistory();
  //not actually sure what this does
 

  // uses info from form, calls API and clears the form
  const onSubmitHandler = (event) =>{
    event.preventDefault ();
    // i think this selects my category and id for route
    history.push(`/${topic}/${id}`);
  }

  return (
      <div className="App">
        <h1> Hold on to your butts!</h1>
        <form onSubmit={onSubmitHandler}>
          <label> Search for:</label>
        {/* Select option = API topic */}
          <select type="select" onChange={(event)=>setTopic(event.target.value)} value={topic}>
            <option value="People">People</option>
            <option value="Planets">Planets</option>
          </select>
          {/* input number = API id */}
          <input value={id} type="number" name="id" onChange={(event)=> setId(event.target.value)}/>
          <input type="submit" placeholder='Search' />
        </form>
        <Switch>
          <Route exact path="/people/:id">
            <People/>
          </Route>
        </Switch> 
        <Switch>
          <Route exact path="/planets/:id">
            <Planets/>
          </Route>
        </Switch>         
      </div>
  );
}

export default App;
