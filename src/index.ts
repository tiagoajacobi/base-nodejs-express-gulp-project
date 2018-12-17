import * as compression from 'compression'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as methodOverride from 'method-override'
import * as logger from 'winston'
import { SERVER_PORT } from './env'

const app = express();

app.use(compression());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

app.listen(SERVER_PORT, () => {
	logger.log('Server Port:', SERVER_PORT);
});