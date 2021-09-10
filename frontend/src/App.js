import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PeopleOutlineTwoTone } from "@material-ui/icons";
import PageHeader from "./components/PageHeader";
import EditUser from "./components/UpdateUser";

import Table from "./components/Table";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <PageHeader
        title="New Employee"
        subtitle="Form design with validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Switch>
        <Route exact path="/" component={Table} />
        <Route exact path="/edit/:_id" component={EditUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
