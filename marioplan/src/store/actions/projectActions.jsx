export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to firebase...
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const autherID = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      autherFirstName: profile.firstName,
      autherLastName: profile.lastName,
      autherId: autherID,
      createdAt: new Date()
    }).then(() => {
      // dispatch after Async action is compeleted
      dispatch({ type: 'CREATE_PROJECT', project })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err })
    })
  }
};