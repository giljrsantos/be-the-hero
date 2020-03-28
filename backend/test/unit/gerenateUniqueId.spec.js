const gerenateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('Should generate an unique ID', () => {

        const id = gerenateUniqueId();
        expect(id).toHaveLength(8);
    });
});