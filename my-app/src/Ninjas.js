import React from "react";

const Ninjas = ({ ninjas }) => {

  // -------------- using if condition ----------------
  // const ninjaList = ninjas.map(ninja => {
  //   if(ninja.age > 29) {
  //     return (
  //       <div className="ninja" key={ninja.id}>
  //         <div>Name: {ninja.name} </div>
  //         <div>Age: {ninja.age} </div>
  //         <div>Belt: {ninja.belt} </div>
  //       </div>
  //     )
  //   } else {
  //     return null 
  //   }
  // })

  // -------------- using if condition ----------------
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 29 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name} </div>
        <div>Age: {ninja.age} </div>
        <div>Belt: {ninja.belt} </div>
      </div>
    ) : null
  })
  return (
    <div className="ninja-list">
      {ninjaList}
    </div>
  );
}

export default Ninjas;