var config = {};

config.couchdb = {};
config.twilio = {};

config.couchdb.url = 'https://couchserver';
config.couchdb.port = 443;
config.couchdb.username = 'mbaldassaro';
config.couchdb.password = 'babybee1';

config.twilio.sid = 'AC4406781adae109570e3e260c87a546da';
config.twilio.key = '7ea0080108ed7847b5b57fe14a97dceb';
config.twilio.smsWebhook = 'https://nodeserver/vote/sms';
config.twilio.voiceWebhook = 'https://nodeserver/vote/voice';
config.disableTwilioSigCheck = false;

module.exports = config;