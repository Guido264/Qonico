const amqp = require('amqplib/callback_api');
  // const QONICO_URL = 'amqp://dev.qonico.com:5672/';
  // const opt = { credentials: require('amqplib').credentials.plain('qonico', 'qonico-dev-sfo2') };

  const QONICO_URL = 'amqp://localhost:5672';
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
        console.log(message.content.toString())
        },{
          noAck: false
        }
      )
    });
  });

  console.log('el letra');