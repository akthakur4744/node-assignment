const User = require('../models/user');
const UserRole = require('../models/user_role');


/**Method used to register User */

const Register = (userData) => {
    return new Promise((resolve, reject) => {
        User.find({}).then(users => {
            /** If user doesnot exists create user with admin role otherwise create user with user role */

            if (users && users.length > 0) {
                findOrCreateUserRole({ role: 'user' }, { role: 'user' }).then(userRole => {
                    return createUser(userData, userRole._id);
                }).then(user => resolve(user)).catch(err => {
                    reject(err);
                });
            } else {
                UserRole.create({ role: 'admin' }).then(userRole => {
                    return createUser(userData, userRole._id);
                }).then(user => resolve(user)).catch(err => {
                    reject(err);
                });
            }
        })
    });
}

/**Method used check existing user role and create if it doesnot exist */

const findOrCreateUserRole = (param, entity) => {
    return new Promise((resolve, reject) => {
        UserRole.find(param).then(role => {
            if (role && role.length > 0) {
                return role;
            }
            else {
                return UserRole.create(entity);
            }
        }).then(role => {
            resolve(role);
        }).catch(err => { reject(err) });
    });
}

/**Method to create a user */
const createUser = (userData, userRoleId) => {
    return User.create({ ...userData, role: userRoleId })
}

module.exports = { Register };