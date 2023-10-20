import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error) {
    this.setState({ hasError: true });
    console.error("Error: ",error);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong...</div>; // Zeige hier eine benutzerdefinierte Fehlermeldung
    }
    return this.props.children;
  }
}

export default ErrorBoundary;