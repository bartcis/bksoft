const singleTestShort = `
  query($id: String!) {
    singleTestShort(id: $id) {
      nameFull
      id
      theme
    }
  }
`;

export default singleTestShort;
