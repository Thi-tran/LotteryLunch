import firebase from '../firebase/configuration'; 

export const addUser = (name, email, note) => {
    const itemsRef = firebase.database().ref('items');
    const item = {
        name, 
        email,
        note
    }
    itemsRef.push(item);
}

export const getData = () => {
    const listOfUser = [];
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
        snapshot.forEach((childSnapshot)=> {
            listOfUser.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        })
    });
    return listOfUser;
}

export const getUserData = (id) => {
    let user = {};
    const itemsRef = firebase.database().ref(`items/${id}`);
    itemsRef.on('value', (snapshot) => {
        user = snapshot.val();
    })
    console.log(user);
    return (user);
}