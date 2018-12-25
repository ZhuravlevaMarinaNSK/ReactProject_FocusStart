import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class LocationSearchInput extends React.Component {
  coords = [];

  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  getCoords(coords) {
    this.coords = coords;
    const { onChange } = this.props;
    const { address } = this.state;
    onChange('address', coords);
    onChange('addressText', address);
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.getCoords(latLng))

      .catch(error => console.error('Error', error));
  };

  render() {
    const { address } = this.state;
    return (
      <PlacesAutocomplete value={address} onChange={this.handleChange} onSelect={this.handleSelect}>
        {({
 getInputProps, suggestions, getSuggestionItemProps, loading 
}) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Начните вводить адрес ...',
                className: 'location-search-input'
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;
