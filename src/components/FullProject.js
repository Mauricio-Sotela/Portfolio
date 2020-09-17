import React from "react";
import Avatar from "@material-ui/core/Avatar";
function FullProject(props) {
  const {
    logo,
    project__name,
    description,
    site__img,
    client__img,
    client__name,
    client__profession,
    client__testimony,
    company__name,
    url,
    color1,
    color2,
    color3,
  } = props.project;
  return (
    <div className="fullProject">
      <div
        className="fullProject__info"
        style={{
          background: `linear-gradient(to right,${color1} -50%,${color2}  )`,
        }}
      >
        <div className="container">
          <div className="left">
            {logo === "" ? (
              <svg height="10%" width="50%">
                <text x="0" y="40" fill="red" fontSize="4rem" fontWeight="bold">
                  JMSP
                </text>
                Sorry, your browser does not support inline SVG.
              </svg>
            ) : (
              <img alt="img" src={logo} />
            )}

            <h2>{project__name}</h2>
            <div className="line"></div>
            <p>{description}</p>
            <button>
              <a href={url} target="blank">
                Go to the page
              </a>
            </button>
          </div>
          <div className="right">
            <div className="img__container">
              <a href={site__img} target="blank">
                <img alt="img" src={site__img} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fullProject__comment"
        style={{
          background: `${color3} `,
        }}
      >
        <div className="container">
          <Avatar className="avatar" alt="avatar_img" src={client__img} />
          <div className="client">
            <p className="testimony">{client__testimony}</p>
            <p>
              <span>{client__name}</span>
              <span> {` / ${client__profession}`}</span>
            </p>
            <p>
              <strong>{company__name}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullProject;
