const Message = require('../models/message');

const messageCtrl = {};

messageCtrl.getStatus = (req, res) => {
    res.json({
        status: 'Server up'
    })
};

messageCtrl.getMessages = async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
}

// messageCtrl.sendMessages = async (req, res) => {
//     // Step 1: Create Connection
//     const amqp = require('amqplib/callback_api');
//     const QONICO_URL = 'amqp://dev.qonico.com:5672/';
//     const opt = { credentials: require('amqplib').credentials.plain('qonico', 'qonico-dev-sfo2') };
  
//     amqp.connect(QONICO_URL, opt, (connError, connection) => {
//       if(connError) {
//         throw connError;
//       };
//       // Step 2: Create Channel
//       connection.createChannel((channelError, channel) => {
//         if(channelError) {
//           throw channelError;
//         }
//         // Step 3: Assert Queue
//         strQueue = 'Hello';
//         msg = JSON.stringify(req.body);
        
//         channel.assertQueue(strQueue, {
//           durable: true
//         });
  
//         // Step 4: Send message to QUEUE
//         channel.sendToQueue(strQueue, Buffer.from(msg));
        
//         // // Step 5: Close de connection and exit
//         // setTimeout(() => { 
//         //   connection.close(); 
//         //   process.exit(0) 
//         //   }, 500);
//       });
//     });
//     console.log(req.body);
//     res.json('Received');
// };
  
messageCtrl.sendMessages = async (req, res) => {
    const message = new Message (req.body);
    await message.save();
    res.json({
        'status': 'Message saved'
    });
}

module.exports = messageCtrl;