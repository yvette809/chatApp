const users = [];

const addUser = ({id,name,room})=>{
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find(user=> user.room===room && user.name === name)
    if(existingUser){
        return{error: 'Username is taken'}
    }else{
        const user = {id,name,room}
        users.push(user)
        return user
    }

}

const removeUser = (id)=>{
    const index = users.findIndex(user=> user.id ===id);
    if(index!== -1){
        return users.splice(index,1)[0]
        // remove one item at the position where the index is
    }

}


const getUser = (id)=>{
    // find the user presesnt in the users array whose id is equal to the id written down
    const foundUser =users.find(user=> user.id ===id)
    return(foundUser)

}

const getUsersInRoom = (room)=>{
    const usersInRoom = users.filter(user => user.room === room)
    return usersInRoom
    
}

module.exports ={
    addUser,removeUser,getUser,getUsersInRoom
}