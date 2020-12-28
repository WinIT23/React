export const createProject = (project) => {
  return (dispatch, _getState, { getFirestore }) => {
    // make async call to firebase...
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      autherFirstName: 'Vinit',
      autherLastName: 'Chauhan',
      autherId: 12333,
      createdAt: new Date()
    }).then(() => {
      // dispatch after Async action is compeleted
      dispatch({ type: 'CREATE_PROJECT', project })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err })
    })
  }
};