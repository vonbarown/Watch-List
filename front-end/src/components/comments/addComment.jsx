import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadComments } from '../../store/actions/showsActions'

class AddComment extends React.Component {
    state = {
        comment_body: ''
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.comment_body !== prevState.comment_body) {
    //         this.loadUserComments()
    //     }
    // }

    handleInput = e => this.setState({ comment_body: e.target.value })

    loadUserComments = async () => {
        try {
            const { data: { comments } } = await axios.get(`/api/comments/show/${this.props.video_id}`)
            this.props.loadComments(comments);
        } catch (error) {

        }
    }

    AddComment = async e => {
        e.preventDefault()
        const commentObj = {
            comment_body: this.state.comment_body,
            user_id: this.props.user_id,
            show_id: this.props.video_id
        }
        try {
            const { data: comments } = await axios.post(`/api/comments`, commentObj)
            console.log(comments);

        } catch (error) {

        }
        this.loadUserComments()
    }

    // handleClick = () => {
    //     this.AddComment()
    // }

    render() {
        console.log('user id', this.props.video_id);

        return (
            <form onSubmit={this.AddComment}>
                <input type="text" onChange={this.handleInput} />
                <button>Add</button>
            </form>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loadComments: data => dispatch(loadComments(data)),
    }
}


export default connect(null, mapDispatchToProps)(AddComment)