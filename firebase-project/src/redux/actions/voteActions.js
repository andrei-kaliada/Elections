import firebase from 'firebase';


export const setVoteToUser = (index) => (dispatch) => {

  firebase.auth().onAuthStateChanged(function(user) {
     
    firebase.database().ref('Users').on('value',(snap)=>{
      
      const userEmail = user.providerData[0].email;
      const dataUsers = snap.val();
      Object.keys(dataUsers).map( (el) => {
        if(dataUsers[el].email.toLowerCase() === userEmail){
          firebase.database().ref('Users/' + el).set({
            ...dataUsers[el],
            votedCity:"yes"

          });
        }

      });
    });
    
  });

  setVoteToCandidate(index);


}

const setVoteToCandidate = (index) => {
  firebase.database().ref(`CityCandidates/Kiev/${index}/votes`).val((snap) => {
    
  })
  // encodeDiscussionId(index);
  decodeDiscussionId();
} 


const encodeDiscussionId = (Id) => {

  let tempEn = Id + "";
  let encryptNum = "";
  for(let i=0;i<tempEn.length();i++) {
      let a = tempEn.charAt(i);
      a += 21;
      encryptNum += a;
  }
  return encryptNum;
}

const decodeDiscussionId = (encryptText) => {

  let decodeText = "";
  for(let i=0;i<encryptText.length();i++) {
      let a = encryptText.charAt(i);
      a -= 21;
      decodeText += a;
  }
  let decodeId = parseInt(decodeText);
  return decodeId;
}