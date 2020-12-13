import firebase from 'firebase';


export const setVoteToUser = (index, city) => dispatch => {

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

  console.log(index);

  setVoteToCandidate(index, city);

}

const setVoteToCandidate = (index, city)  => {

  let dataGoverment;
  let valueVotes;

 firebase.database().ref(`MayorCandidates/${city}/${index}`).on('value',(snap) => {
  dataGoverment = snap.val();
  let vote = snap.val().votes;
    decodeDiscussionId(vote);

    valueVotes = encodeDiscussionId();
   
 
  })

  firebase.database().ref(`MayorCandidates/${city}/${index}`).set({
    ...dataGoverment,
    votes:valueVotes
  })

 
} 


let codeArr = [];

const encodeDiscussionId = () => {

let newVote = 1 ;
  let encryptNum = "";
  for(let i=0;i<codeArr.length;i++) {
      let a = String.fromCharCode(codeArr[i] + newVote) ;
      encryptNum += a;
  }
  codeArr.length = 0;
  return encryptNum;
}

const decodeDiscussionId = (encryptText) => {

  let decodeText = 0;
  for(let i=0;i<encryptText.length;i++) {
      let a = encryptText.charCodeAt(i);
      codeArr.push(encryptText.charCodeAt(i));
      a -= 21;
      decodeText += a;
  }

  return decodeText;
}