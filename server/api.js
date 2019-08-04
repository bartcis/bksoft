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

const menus = [
  {
    main: {
      title: 'Strona Główna',
      slug: '/',
      list: menuLists.main,
    },
    about: {
      title: 'O aplikacji',
      slug: 'about',
      list: menuLists.main,
    },
    support: {
      title: 'Wesprzyj',
      slug: 'provide-support',
      list: menuLists.main,
    },
    history: {
      title: 'Historia',
      slug: 'history',
      list: menuLists.main,
    },
  },
];

module.exports = menus;
