import { ENV } from '../../common';
import Default from './Link';

const Loading = ENV.IS_SERVER ? require('./Link.server').default : Default;

export default Loading;
