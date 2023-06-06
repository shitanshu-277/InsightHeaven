import React from 'react'
const Newsitem =(props)=>{
    let {title,description,imgUrl,url,author,date,source}=props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span></div>
  <img src={!imgUrl?"https://img.etimg.com/thumb/msid-100115950,width-1070,height-580,imgsize-95792,overlay-economictimes/photo.jpg":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toUTCString()}</small></p>
    <a href={url} target='_blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }

export default Newsitem
