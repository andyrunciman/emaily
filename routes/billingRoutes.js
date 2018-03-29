const requireLogin = require('../middlewares/requireLogin');
const keys = require('../config/keys');
const stripe = require('stripe')(
    keys.stripeSecretKey
);

//express does not parse post body's by default...
module.exports = app => {

    app.post('/api/stripe', requireLogin, async (req, res) => {
        try {
            const charge = await stripe.charges.create({
                amount: 100,
                currency: 'usd',
                description: '$5 for 5 credits',
                source: req.body.id
            });
        }
        catch (error) {
            res.send(error)
        }
        //req.user is added by passport - it points back to the model
        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    });
};