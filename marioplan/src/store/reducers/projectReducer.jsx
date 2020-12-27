const initState = {
  projects: [
    {id: '1', title: 'title 1', content: 'sadf sal ndflan af'},
    {id: '2', title: 'title 2', content: 'sdaf df as;dfan af'},
    {id: '3', title: 'title 3', content: 'fasdfnk sdfnd flan af'},
  ]
}

const projectReducer = (state = initState, _action) => {
  return state;
}

export default projectReducer;