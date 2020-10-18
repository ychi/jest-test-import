


test('mocking importing', async () => {
    const caller = await import('./importing');
    jest.mock('./imported');
    const callee = require('./imported').default;
    await caller.default();
    return expect(callee).toHaveBeenCalled();
});