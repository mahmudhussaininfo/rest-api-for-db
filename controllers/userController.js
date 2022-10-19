
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');


// /**
//  *  @desc get all user data
//  *  @name GET /api/v1/user/
//  *  @access public
//  */

const getAllUser = (req, res) => {

    //get data from json db
    const user = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    //send data
    res.status(200).json(user);

}

// /**
//  *  @desc Create User data
//  *  @name post /api/v1/user/
//  *  @access public
//  */

const createUser = (req, res) => {

    //get data from json db
    const user = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    //get body data
    const { name, skill } = req.body;

    //validation
    if ( !name || !skill ) {
        res.status(400).json({
            message: "Name & Skill not found"
        });
    } else {

        user.push(req.body);
        writeFileSync(path.join(__dirname, '..db/users.json'), JSON.stringify(user));
        res.status(201).json({
            message: "user successfully done"
        });

    }

}


//export
module.exports = {

    getAllUser,
    createUser

}