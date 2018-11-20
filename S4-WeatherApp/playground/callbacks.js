let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Heinz'
    };
    setTimeout(()=>{
        callback(user);
    }, 3000)
};

getUser(27, (userObject)=>{
    console.log(userObject);
});



