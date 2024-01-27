import React from "react";

const NewsItem =(props)=> {
 
    let {title,description,newsUrl,imageUrl,author,date,source} = props;
    return (
      <div>
        <div className="card h-100" >
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
            <span style={{zIndex:"1",left:"90%"}} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">{source}</span>
            </h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );

}

export default NewsItem;
