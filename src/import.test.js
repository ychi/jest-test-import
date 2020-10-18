


test('mocking importing', async () => {
    const caller = await import('./importing');
    jest.mock('./imported');
    const callee = require('./imported').default;
    console.log(caller);
    console.log(callee);
    //callee.mockImplementation(() => '42');
    await caller.default();
    return expect(callee).toHaveBeenCalled();
    //return expect(caller()).toEqual('42');
});