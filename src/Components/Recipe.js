import React from 'React';
function Recipe(props) {
  return (
    <div>
      <img src={props.imgUrl}></img>
      <div>{props.title}</div>
    </div>
  );
}
export default Recipe;