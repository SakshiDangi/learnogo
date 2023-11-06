const User = require('../models/user')


const test = (req, res) => {
    res.json('test is working')
}

const signupUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;
    //  check if name is entered 
        if(!name) {
            return res.json({
                error: 'name is required'
            })
        };
        // check if password is good 
        if(!password || password.length < 6){
            return res.json({
                error: 'Password is atleast 6 character long'
            })
        };
        //  check email 
        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: "Email is already registered"
            })
        }

        const user = await User.create({
            name, email, password
        })
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    test,
    signupUser
}