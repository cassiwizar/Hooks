import React from 'react';

const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
  state = {
    user: null,
  };

  login = (name) => {
    this.setState({ user: { name } });
  };

  logout = () => {
    this.setState({ user: null });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          user: this.state.user,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContext;