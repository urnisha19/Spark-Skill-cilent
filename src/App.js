import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/HomePage/Home/Home';
import AddCourse from './Components/Dashboard/AdminPage/AddCourse/AddCourse';
import CourseDetails from './Components/HomePage/Courses/CourseDetails';
import Login from './Components/LogInPage/Login';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/admin/addCourse">
          <AddCourse></AddCourse>
        </Route>
        <Route path="/student/enroll">
         <CourseDetails></CourseDetails>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
