const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kuladi03:jwgGoAIAH78Qkiqt@cluster0.h9nvrj9.mongodb.net/');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));