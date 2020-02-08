import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchUser } from '../store/actions/userActions'
import UsersComponent from '../components/users/Users'

class UsersContainer extends React.Component {


    componentDidMount() {
        this.loadUsers()
    }

    loadUsers = async () => {
        try {
            const { data: { users } } = await axios.get('/api/users/')
            this.props.fetchUser(users)
        } catch (error) {
            console.log('usersAll error', error);

        }
    }

    render() {
        return (
            <div className='users-container'>
                <UsersComponent />
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersReducer.users
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: data => dispatch(fetchUser(data)),
    }
}

export default connect(null, mapDispatchToProps)(UsersContainer)