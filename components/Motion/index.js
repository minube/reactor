import { ENV } from '../../common';
import Default from './Motion';

const Loading = ENV.IS_SERVER ? require('./Motion.server').default : Default;

export default Loading;
