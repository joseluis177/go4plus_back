import './app/database';
import app from './app/app';

// - Server init listen
app.listen(app.get('port'), () => {
    console.log('Server on PORT: ', app.get('port'));
});