const mockFirebase = {
  initializeApp: jest.fn(() => {
    console.log("mocked initializer");
  })
};

module.exports = mockFirebase;
