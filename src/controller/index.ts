import { ShowController } from './ShowsController';
// dentro do index.ts, fazer importações e ativar o Express e Cors.
import app from './app';
import BandController from './BandController';
import UserController from './UserController';



const userController = new UserController()
const bandController = new BandController()
const showsController = new ShowController()

// requisições usuários
app.post('/signup', userController.signup)
app.post('/login',userController.login)

// requisições bandas
app.post('/band',bandController.createBand)
app.get('/getbandbyid/:id', bandController.getBandById)

// requisições shows
app.post('/addshow', showsController.scheduleShow)
app.get('/getshowsbyday/:week_day', showsController.getShowByDay)