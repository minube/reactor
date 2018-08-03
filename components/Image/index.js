import { ENV } from '../../common';
import Default from './Image';

const Loading = ENV.IS_SERVER ? require('./Image.server').default : Default;

export default Loading;
