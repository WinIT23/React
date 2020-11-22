import React from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {

  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 29 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name} </div>
        <div>Age: {ninja.age} </div>
        <div>Belt: {ninja.belt} </div>
        <div>ID: {ninja.id} </div>
        <button onClick={() => { deleteNinja(ninja.id) }} >Delete Ninja</button>
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