const express = require('express');
const router = express.Router();

router.post('/foodData',(req,res) => {
    try {
        // console.log(global.food_delivery);
        res.send([global.food_delivery,global.food_category]);
    } catch (error) {
        console.log(error.message);
        res.send('Server Error');
    }
})

module.exports = router;