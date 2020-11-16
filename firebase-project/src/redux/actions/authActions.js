import React from "react";

export const signUp = (data) => async (
  
  dispathc,
  getState,
  { getFirebase, getFirestore }
) => {
  
  const firebase = getFirebase();
  const firestore = getFirestore();

  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    console.log(res.user.uid);

    let docRef = firestore.enablePersistence().collection("CityCandidates").doc("1");

    docRef.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
    
  //   await firestore.collection('users').doc(res.user.uid).set({
  //     name:data.name
      
  //   }).then(function() {
      
  //     console.log("Document successfully written!");
  // })
  } catch (error) {}
};
