const singleTestShort = `
  query($id: String!) {
    singleTestShort(id: $id) {
      nameShort
      id
      theme
    }
  }
`;

export default singleTestShort;
