import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/navBar'
import './App.css';
import UsersContainer from './containers/usersContainer';
import { Home } from './components/Home/Home';
import UserPage from './components/UserPage/UserPage';
import showsContainer from './containers/showsContainer';
import { About } from './components/About/About';
import AddShowForm from './components/AddShowForm/AddShowForm';
import ShowInfoPage from './components/ShowInfoPage/ShowInfoPage';
import AuthContainer from './containers/authContainer'
import axios from 'axios'
import { logOut } from './store/actions/userActions';
import { connect } from 'react-redux'
class App extends React.Component {


  logoutUser = async () => {
    try {
      await axios.get('/api/auth/logout')
      this.props.logOut(null)
      this.props.history.push('/')
    } catch (error) {
      console.log('error', error);
    }
  }

  renderAuthContainer = (routeProps) => <AuthContainer {...routeProps} />


  render() {
    return (
      <div className="App">
        <Navbar logoutUser={this.logoutUser}
        />



        <Switch>
          <Route path='/login' render={this.renderAuthContainer} />
          <Route path='/signup' render={this.renderAuthContainer} />
          <Route exact path='/users' component={UsersContainer} />
          <Route exact path='/users/:id' component={UserPage} />
          <Route exact path='/addShow' component={AddShowForm} />
          <Route exact path='/shows' component={showsContainer} />
          <Route exact path='/shows/:id/user/:userId' component={ShowInfoPage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersReducer.users
//     }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: data => dispatch(logOut(data)),
  }
}

export default connect(null, mapDispatchToProps)(App)
