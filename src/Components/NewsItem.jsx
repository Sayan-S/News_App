
import image from '../assets/newBlank.jpg'

const NewsItem = ({title, description, src, url}) => {
  let space = String.fromCharCode(32);
  return ( 
    // className="text-center"
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{maxWidth: "345px" }}>
      <img src={src?src:image} style={{height:"200px" , width:"328px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title=='[Removed]'?"News removed":(title.slice(0,25))}</h5>
        <p className="card-text">
          {description=='[Removed]'?"The news has been removed due to voileting some guidelines":(description?(description.slice(0,55)).padEnd(55, " ."):"The news has just been uploaded. Loading, please wait...")}
          

        </p>
        <a href={url} className="btn btn-primary"  target='_blank'>
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
