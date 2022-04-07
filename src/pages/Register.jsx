import React from 'react';



class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                console.log(user);
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
                else {
                    console.log('Unable to register user exists');

                }
            })
    }

    render() {
        return (
            <div class="p-10 w-full md:w-96 md:max-w-full mx-auto">
                <div class="p-6 border border-gray-300 sm:rounded-md">
                    <form>
                        <label class="block mb-6">
                            <span class="text-gray-100">Your name</span>
                            <input
                                type="text"
                                name="name"
                                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                placeholder="John Doe"
                                onChange={this.onNameChange}
                            />
                        </label>
                        <label class="block mb-6">
                            <span class="text-gray-100">Email address</span>
                            <input
                                name="email"
                                type="email"
                                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                placeholder="johndoe@example.com"
                                required
                                onChange={this.onEmailChange}
                            />
                        </label>
                        <label class="block mb-6">
                            <span class="text-gray-100">Password</span>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                htmlFor='password'
                                required
                                onChange={this.onPasswordChange}
                            />
                        </label>

                        <div class="mb-6">
                            <button
                                type="submit"
                                onClick={this.onSubmitSignIn}
                                class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                            >
                                Register
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        );
    }
}

export default Register;