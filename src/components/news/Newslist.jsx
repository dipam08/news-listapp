import React, { Component } from 'react'

export default class Newslist extends Component {
  render() {
    let {title,description,imgUrl,newsUrl, author, date}=this.props;
    return (
      <div className='col-sm-4'>
        <div className="card " style={{width: "18rem"}} >
          <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">by {author} at {new Date(date).toUTCString()}</small></p>
              <a href={newsUrl}  target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
