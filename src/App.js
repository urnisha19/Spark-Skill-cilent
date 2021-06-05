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
import PrivateRoute from './Components/LogInPage/PrivateRoute/PrivateRoute';

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
        {/* admin private routes */}
        <PrivateRoute path="/admin/addCourse">
          <AddCourse></AddCourse>
        </PrivateRoute>
        <PrivateRoute path="/admin/enrolledList">
          <TotalEnrolledList></TotalEnrolledList>
        </PrivateRoute>
        <PrivateRoute path="/admin/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        {/*  */}
        {/* student private routes */}
        <PrivateRoute path="/student/addReview">
          <AddReview></AddReview>
        </PrivateRoute>
        <PrivateRoute path="/student/myEnrollment">
          <MyEnrollment></MyEnrollment>
        </PrivateRoute>
        {/* student private routes */}
        <Route path="/enroll">
          <CourseDetailsEnroll></CourseDetailsEnroll>
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
