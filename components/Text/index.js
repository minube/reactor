import { ENV } from '../../common';
import Default from './Text';

const Loading = ENV.IS_SERVER ? require('./Text.server').default : Default;

export default Loading;
