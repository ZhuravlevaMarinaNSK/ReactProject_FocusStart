import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Adverts from 'adverts/adverts';
import MyAdvert from 'myadvert/myadvert';

function Root() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link className={`header__button ${window.location.pathname === '/' ? '' : ''}`} to="/">
            Главная
          </Link>
          <Link
            className={`header__button header__button--new ${
              window.location.pathname === '/new' ? '' : ''
            }`}
            to="/new"
          >
            Подать объявление
          </Link>
        </header>

        <Route exact path="/" component={Adverts} />
        <Route path="/new" component={MyAdvert} />
      </div>
    </BrowserRouter>
  );
}

export default Root;