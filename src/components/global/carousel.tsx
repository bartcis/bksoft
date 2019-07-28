import React from 'react';
import { Photo } from '@frontendmasters/pet';

interface IState {
  photos: string[];
  active: number;
}

interface IProps {
  media: Array<Photo>;
}

export default class Carousel extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      photos: [],
      active: 0,
    };

    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  public static getDerivedStateFromProps({ media }: IProps) {
    let photos = ['http://placecorgi.com/600/600'];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  public handleIndexClick(event: React.MouseEvent<HTMLElement>) {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index,
      });
    }
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div>
        <img src={photos[active]} alt="animal" />
        <div>
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
