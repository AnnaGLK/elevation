// Spot-Check-1
const Family = function () {

  const members = []

  const birth = function (name) {

    members.push(name);
    console.log(members);
  }

  return birth;
}

const giveBirth  = Family()

giveBirth("john")
giveBirth("jane")
giveBirth("josh")
giveBirth("jona")


// Spot-Check-2
const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }

    return {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide
}
}
const m = mathOperations();
m.add(13, 29)
m.mult(1.75, 24)
m.mult(7, m.div(36, 6))
console.log(m.add(13, 29))
console.log(m.mult(1.75, 24))
console.log(m.mult(7, m.div(36, 6)))


// Spot-Check-3
const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.addUser('Nala')
usersModule.addUser('Newton')
usersModule.listUsers()



