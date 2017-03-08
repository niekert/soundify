import React, { PureComponent } from 'react';
import queryString from 'query-string';

class AuthCallback extends PureComponent {
  componentDidMount () {
    const { location, opener } = window;
    const query = queryString.parse(location.search);
    console.log(query);

    if(opener && query.code) {
      console.log('hello', opener);
      opener.postMessage('SCConnect', {
        authToken: query.code
      }, '*');

      // Maybe wait until confirmed
      // setTimeout(() => window.close(), 1000);
    }
  }

  render () {
    console.log(this.props);
    return (
      <div>
        Closing now
      </div>
    );
  }
}

export default AuthCallback;
