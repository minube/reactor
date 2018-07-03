import {
  bool, func, node, shape, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import fetch from './modules/fetch';

class BoardingPass extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    enabled: bool,
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
    enabled: true,
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
  };

  componentDidMount() {
    this.doFetch(this.props);
  }

  componentWillReceiveProps({ reload, ...props }) {
    if (reload) this.doFetch(props);
  }

  doFetch = ({
    enabled, endpoint, headers, method, onError, onResponse, parameters, secure, service,
  }) => {
    if (!enabled || !service) return;
    this.setState({ busy: true });
    fetch({
      endpoint, headers, method, secure, service, ...parameters,
    })
      .then(onResponse)
      .catch(onError)
      .finally(() => this.setState({ busy: false }));
  }

  render() {
    const { props: { children, enabled, loading }, state: { busy } } = this;

    return busy && enabled ? loading : children;
  }
}

export default BoardingPass;
