// export const AddUser = (project) => {
    
//     return (dispatch, getState, { getFirebase, getFirestore}) => {
//         console.log('First')
//         const firestore = getFirestore();
//         firestore.collection("Users").add({
//             city:'Minsk',
//             email:'test@test.com',
//             passport:'qwerty',
//             phone:12345,
//             votedCity:"no",
//             votedMayor:"no",
//             votedPresident:"no"
//         }).then(()=>{
//             console.log('second')
//             dispatch({type:'ADD_USER'})
//         }).catch((err)=>{
//             console.log(err)
//             dispatch({type:'ADD_USER_ERROR', err})
//         })
//     }
// }