import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Adverts from 'adverts/adverts';
import MyAdvert from 'myadvert/myadvert';

function Root() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink
            activeClassName="button--invisible"
            className="header__button header__button--main"
            to="/"
            exact
            title="На главную"
          >
            {' '}
            &lArr; На главную
          </NavLink>
          <NavLink
            activeClassName="button--invisible"
            className="header__button header__button--new"
            to="/new"
            exact
          >
            Подать объявление &rArr;
          </NavLink>
        </header>

        <Route exact path="/" component={Adverts} />
        <Route path="/new" component={MyAdvert} />
      </div>
    </BrowserRouter>
  );
}

export default Root;
