import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
	name: attr('string'),
	phone: attr('string'),
	email: attr('string'),
	channel_sms: attr('boolean'),
	channel_email: attr('boolean')
});