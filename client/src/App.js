import { Route } from "react-router-dom";
import PaginaInicio from "./components/Paginadecarga/PaginaInicio";

import home from "./components/home/index";
import CreateActivity from "./components/fomularioActividades/index";
import CountryDetail from "./components/paisDetalles/index";
import ActivityCreate from "./components/crearactividades/ActivityCreate";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={PaginaInicio} />
      <Route exact path="/home" component={home} />
      <Route exact path="/activity" component={CreateActivity} />
      <Route exact path="/country/:id" component={CountryDetail} />
      <Route exact path="/ActivityCreate" component={ActivityCreate} />
    </div>
  );
}

export default App;
