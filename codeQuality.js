// level {1/2/3}
// level 3

const getUsers = (users) => {
    return users.map((item,i)=>({...item,id:i}))
}

