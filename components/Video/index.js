import { ENV } from '../../common';
import Default from './Video';

const Loading = ENV.IS_NATIVE ? require('./Video.native').default : Default;

export default Loading;
