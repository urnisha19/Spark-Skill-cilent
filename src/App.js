import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/HomePage/Home/Home';
import AddCourse from './Components/Dashboard/AdminPage/AddCourse/AddCourse';
import Login from './Components/LogInPage/Login';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import MyEnrollment from './Components/Dashboard/StudentPage/MyEnrollment/MyEnrollment';
import TotalEnrolledList from './Components/Dashboard/AdminPage/TotalEnrolled/TotalEnrolledList';
import MakeAdmin from './Components/Dashboard/AdminPage/MakeAdmin/MakeAdmin';
import AddReview from './Components/Dashboard/StudentPage/AddReview/AddReview';
import CourseDetailsEnroll from './Components/HomePage/Courses/CourseDetailsEnroll';
import ContactUs from './Components/Contactus/Contactus';

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
        <Route path="/admin/enrolledList">
       <TotalEnrolledList></TotalEnrolledList>
        </Route>
        <Route path="/admin/makeAdmin">
       <MakeAdmin></MakeAdmin>
        </Route>

        <Route path="/enroll">
        <CourseDetailsEnroll></CourseDetailsEnroll>
        </Route>
        
        <Route path="/student/addReview">
        <AddReview></AddReview>
        </Route>
        <Route path="/student/myEnrollment">
        <MyEnrollment></MyEnrollment>
        </Route>

        <Route path="/contactUs">
       <ContactUs></ContactUs>
        </Route>

        <Route path="/login">
        <Login></Login>
        </Route>

        <Route path="*">
            <NotFoundPage></NotFoundPage>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
