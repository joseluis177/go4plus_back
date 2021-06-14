import './database';
import app from './app';

// - Server init listen
app.listen(app.get('port'), () => {
    console.log('Server on PORT: ', app.get('port'));
});