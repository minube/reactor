import { bool, func, node, shape, string } from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import fetch from './modules/fetch';

class BoardingPass extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    endpoint: string,
    headers: shape({}),
    loading: node,
    method: string,
    onError: func,
    onResponse: func,
    parameters: shape({}),
    reload: bool,
    secure: bool,
    service: string,
  };

  static defaultProps = {
    endpoint: undefined,
    headers: {},
    loading: <View />,
    method: 'GET',
    onError() {},
    onResponse() {},
    parameters: {},
    reload: false,
    secure: false,
    service: undefined,
  };

  state = {
    busy: true,
    unmount: false,
  };

  componentDidMount() {
    this._fetch(this.props);
  }

  componentWillReceiveProps({ reload, ...props }) {
    if (reload) this._fetch(props);
  }

  componentWillUnmount() {
    this.state.unmount = true;
  }

  _fetch = ({
    endpoint, headers, method, onError, onResponse, parameters, secure, service,
  }) => {
    if (!service) return;
    this.setState({ busy: true, unmount: false });
    fetch({
      endpoint, headers, method, secure, service, ...parameters,
    })
      .then(onResponse)
      .catch(onError)
      .finally(() => !this.state.unmount && this.setState({ busy: false }));
  }

  render() {
    const { props: { children, loading }, state: { busy } } = this;

    return busy ? loading : children;
  }
}

export default BoardingPass;
