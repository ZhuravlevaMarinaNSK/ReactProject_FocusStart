import React, { PureComponent } from 'react';
import createRequest from 'core/create-request';
import { fetchAdvert, createAdvert } from 'core/api-config';
import classNames from 'classnames/class-names';
import Article from 'adverts/article';
import Map from 'adverts/map';

class Adverts extends PureComponent {
  state = {
    popupOpenedId: null,
    isLoading: true,
    adverts: []
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
              onMarkerDelete={this.props.onMarkerDelete}
            />
          )}
        </section>
      </div>
    );
  }
}

export default Adverts;
