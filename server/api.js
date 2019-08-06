const menuLists = {
  main: [
    {
      label: 'Start',
      link: '/',
    },
    {
      label: 'O aplikacji',
      link: '/about',
    },
    {
      label: 'Wesprzyj',
      link: '/provide-support',
    },
    {
      label: 'App Log',
      link: '/history',
    },
  ],
  test: {},
};

const mainMenu = [
  {
    main: {
      title: 'Strona Główna',
      list: menuLists.main,
    },
    about: {
      title: 'O aplikacji',
      list: menuLists.main,
    },
    support: {
      title: 'Wesprzyj',
      list: menuLists.main,
    },
    history: {
      title: 'Historia',
      list: menuLists.main,
    },
  },
];

module.exports = menus;
