import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {	
		let response = {
			data: payload.map(element => {
				return{ 
					id: element.id,
					type: 'contact',
					attributes: element
				}
			})
		};
		return response;
    },
    serialize: function(record, options) {
    	return record.attributes();
    }
});