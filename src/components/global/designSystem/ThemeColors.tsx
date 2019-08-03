export const styledColors: ITypes = {
  base: {
    body: '#f6f6f6',
    background: 'white',
    backgroundTwo: 'blue',
    border: '#1f7470',
    borderTwo: '#1f7470',
    mainText: '#141414',
    secondaryText: 'grey',
    residualText: '#c2c2c2',
    link: '#5fba68',
    hoverState: '#1f7470',
    shadow: '',
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
