/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
// eslint-disable-next-line jsx-a11y/click-events-have-key-events
import React from 'react';

export default class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      photots: [],
      active: 0
    }

    this.handleIndexClick = this.handleIndexClick.bind(this);
  }
  
  static getDerivedStateFromProps({media}) {
    let photos = ['http://placecorgi.com/600/600'];

    if (media.length) {
      photos = media.map(({large}) => large);
    }

    return { photos }
  }

  handleIndexClick (event) {
    this.setState({
      // coerction to number with +
      active: +event.target.dataset.index
    })
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div>
        <img src={photos[active]} alt='animal'/>
        <div>
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? 'active' : ''}
              alt='animal thumbnail'
            />
          ))}
        </div>
      </div>
    )
  }
}
