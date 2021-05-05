var item = {"color": "grey", resQuantity: 1, reqQuantity: 1};

const updateColor = require('./updateColor');

test('verifies that colour is green if res and req', () => {
    expect((updateColor(item).colour).toBe("green"));
});