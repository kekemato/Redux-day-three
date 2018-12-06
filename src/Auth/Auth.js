import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import Forms from './Forms'
import { auth, googleProvider } from '../firebaseConfig'

class Auth extends React.Component {
    state = {
        email: "",
        password: "",
        isUserLoggedIn: false
    }

    componentDidMount() {
        auth.onAuthStateChanged(
            user => {
                if (user) {
                    this.setState({ isUserLoggedIn: true })
                } else {
                    this.setState({ isUserLoggedIn: false })
                }
            }
        )
    }

    handleLoginChange = event => this.setState({ email: event.target.value })
    handlePasswordChange = event => this.setState({ password: event.target.value })

    handleLogInClick = () => {
        auth.signInWithEmailAndPassword(this.state.login, this.state.password)
            .catch(error => {
                alert('Something is wrong!')
                console.log(error)
            })
    }

    handleLogInWithGoogleClick = () => {
        auth.signInWithPopup(googleProvider)
    }

    onLogOutClickHandler = () => auth.signOut()

    render() {
        return (
            this.state.isUserLoggedIn ?
                <div>
                    <FloatingActionButton
                        secondary={true}
                        style={{
                            position: "fixed",
                            top: 20,
                            right: 70,
                            zIndex: 999,
                            color: "white"
                        }
                        }
                        onClick={this.onLogOutClickHandler}
                    >
                        Log Out
                    </FloatingActionButton>
                    {this.props.children}
                </div>
                :
                <Forms
                    email={this.state.email}
                    password={this.state.password}
                    handleLoginChange={this.handleLoginChange}
                    handlePasswordChange={this.handlePasswordChange}
                    handleLogInClick={this.handleLogInClick}
                    handleLogInWithGoogleClick={this.handleLogInWithGoogleClick}
                />
        )
    }
}

export default Auth