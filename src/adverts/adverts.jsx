import React, { PureComponent } from 'react';
import createRequest from 'core/create-request';
import { fetchAdvert, createAdvert } from 'core/api-config';
import { deleteAdvert } from 'core/api-config';
import classNames from 'classnames/class-names';
import Article from 'adverts/article';
import Map from 'adverts/map';

class Adverts extends PureComponent {
  state = {
    popupOpenedId: null,
    isLoading: true,
    adverts: [],
    onDeleteID: null
  };

  componentDidMount() {
    createRequest(fetchAdvert).then((response) => {
      if (response.status === 'OK') {
        setTimeout(() => {
          this.setState({ isLoading: false, adverts: response.data });
        }, 2000);
      }
    });
  }

  onDelete = (id) => {
    const newid = id;
    const modal = document.querySelector('.modal');
    modal.classList.remove('hidden');
    this.setState({ onDeleteID: newid });
  };

  onRejectButtonClick = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('hidden');
  };

  onAgreeButtonClick = () => {
    const success = document.querySelector('.success');
    const modal = document.querySelector('.modal');
    const id = this.state.onDeleteID;
    createRequest(deleteAdvert, { id }).then((response) => {
      if (response.status === 'OK') {
        modal.classList.add('hidden');
        success.classList.remove('hidden');
        setTimeout(() => {
          success.classList.add('hidden');

          location.reload();
        }, 1000);
      }
    });
  };

  addAdvert = (advert) => {
    this.setState({ isLoading: true });
    createRequest(createAdvert, null, { advert }).then(({ status, data }) => {
      if (status === 'OK') {
        this.setState(({ adverts }) => ({
          isLoading: false,
          adverts: adverts.concat(data)
        }));
      }
    });
  };

  openPopup = (id) => {
    this.setState({ popupOpenedId: id });
  };

  closePopup = () => {
    this.setState({ popupOpenedId: null });
  };

  render() {
    const { popupOpenedId, isLoading, adverts } = this.state;
    console.log(this.props);
    return (
      <div>
        <header className="header">
          <h1 className="header__title">Сервис аренды жилья в Новосибирске</h1>
        </header>
        <section className={classNames('map', { overlay: isLoading })} id="map">
          <Map openPopup={this.openPopup} adverts={adverts} />
          {popupOpenedId && (
            <Article
              adv={this.state.adverts.find(data => data.id === popupOpenedId)}
              closePopup={this.closePopup}
              onDelete={this.onDelete}
            />
          )}
        </section>
        <div className="modal hidden">
          <p className="modal__text">Вы уверены, что хотите удалить объявление?</p>
          <button
            type="button"
            className="modal__button button modal__button--agree"
            onClick={this.onAgreeButtonClick}
          >
            Да, удалить
          </button>
          <button type="button" className="modal__button button" onClick={this.onRejectButtonClick}>
            Нет, я передумал
          </button>
        </div>
        <div className="success hidden">
          <p className="success__message">Ваше объявление успешно удалено!</p>
        </div>
      </div>
    );
  }
}

export default Adverts;
