export const styledColors: ITypes = {
  base: {
    body: '#f1f4fb',
    background: 'white',
    backgroundTwo: '#91e182',
    border: 'transparent',
    borderTwo: 'white',
    mainText: '#141414',
    secondaryText: 'grey',
    residualText: '#c2c2c2',
    link: '#1f7470',
    hoverState: '#5fba68',
    shadow: '#d0d0d0',
  },
  graves: {
    body: 'pink',
    background: 'red',
    backgroundTwo: 'red',
    border: 'red',
    borderTwo: 'green',
    mainText: 'yellow',
    secondaryText: 'grey',
    residualText: 'black',
    link: 'orange',
    hoverState: 'grey',
    shadow: 'black',
  },
};

interface ITypes {
  base: {
    body: string;
    background: string;
    backgroundTwo: string;
    border: string;
    borderTwo: string;
    mainText: string;
    secondaryText: string;
    residualText: string;
    link: string;
    hoverState: string;
    shadow: string;
  };
  graves: {
    body: string;
    background: string;
    backgroundTwo: string;
    border: string;
    borderTwo: string;
    mainText: string;
    secondaryText: string;
    residualText: string;
    link: string;
    hoverState: string;
    shadow: string;
  };
}
