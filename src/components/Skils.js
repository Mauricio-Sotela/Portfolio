import React from "react";

export default function Skill(props) {
  const items = props.data.card.map((item) => {
    return (
      <div className="card" key={item.id}>
        <div className="card_icon">{<i className={item.icon}></i>}</div>
        <strong className="card_title">{item.title}</strong>
        <p className="card_description">{item.description}</p>
        <strong className="card_technologies_title">{item.technology}</strong>
        <p className="card_technologies">
          {item.technologies_items.map((item) => {
            return <li>{item}</li>;
          })}
        </p>
        <strong className="card_tools_title">{item.tools}</strong>
        <p className="card_tools">
          {item.tools_items.map((item) => {
            return <li>{item}</li>;
          })}
        </p>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="card_container">{items}</div>
    </React.Fragment>
  );
}
