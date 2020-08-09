const amqp = require('amqplib/callback_api');
const graylog2 = require('graylog2');

const logger = new graylog2.graylog({
    servers: [{ 'host': 'graylog', port: 12201 }]
  });

const QONICO_URL = 'amqp://rabbit1';
const opt = { credentials: require('amqplib').credentials.plain('admin', 'admin') };

amqp.connect(QONICO_URL, opt, (connError, connection) => {
    if(connError) {
    throw connError;
    };
    // Step 2: Create Channel
    connection.createChannel((channelError, channel) => {
        if(channelError) {
            throw channelError;
        }
        // Step 3: Assert Queue
        strQueue = 'Hello';
        
        channel.assertQueue(strQueue, {
            durable: true
        });

        // Step 4: Consume message
        console.log('Waiting for messages from RabbitMQ....');
        channel.consume(strQueue, message => {
            console.log(message.content.toString());
            logger.log(message.content.toString());
            console.log('Message sent to Graylog')
            },{
            noAck: false
            }
        )
    });
});

