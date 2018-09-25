import React from 'react';
import { render } from 'react-dom';
//Componentes
import Playlist from './playlist/componentes/playlist';
import App from './App';
//Api
import data from './api.json';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';
//import registerServiceWorker from './registerServiceWorker';

//constantes
const app = document.getElementById('root');
const body = document.getElementById('body');

render(<App />, app);
render(<Playlist data={data} />, body);