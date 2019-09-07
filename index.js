const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://timetable:DV334m06AcUMhm6@planlekcyj-wtqbw.mongodb.net/timetable?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
const Timetable = mongoose.model('timetables', {
    id: String,
    content: Object
});

const app = express();

app.use(express.static(`${__dirname}/dist`));
app.use(bodyParser.json());

app.post('/timetable', (req, res) => {
    let id = Math.random().toString(36).substr(2, 5);

    new Timetable({
        content: req.body,
        id
    }).save();
    res.send(id);
});

app.get('/timetables/:id', async (req, res) => {
    const query = await Timetable.findOne({ id: req.params.id });
    res.send(query.content);
})

app.listen(80);