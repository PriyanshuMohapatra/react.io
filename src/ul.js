import React from "react";

function List(props) {
  const b = props.a;

  function mul() {
    return (
      <>
        <p>{b} * 1 = {b * 1}</p>
        <p>{b} * 2 = {b * 2}</p>
        <p>{b} * 3 = {b * 3}</p>
        <p>{b} * 4 = {b * 4}</p>
        <p>{b} * 5 = {b * 5}</p>
        <p>{b} * 6 = {b * 6}</p>
        <p>{b} * 7 = {b * 7}</p>
        <p>{b} * 8 = {b * 8}</p>
        <p>{b} * 9 = {b * 9}</p>
        <p>{b} * 10 = {b * 10}</p>
      </>
    );
  }

  return (
    <div>
      {mul()}
    </div>
  );
}

export default List;
