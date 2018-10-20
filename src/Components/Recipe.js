import React from 'react';
const Recipe = (props) => {
  return (
    <li class='container'>
      <h2 class='item-a'>{props.title}</h2>
      <a href={props.srcUrl}><img class='item-b'src={props.imgUrl}></img></a>
    </li>
  );
}
export default Recipe;