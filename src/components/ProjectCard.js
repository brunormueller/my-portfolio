import { Col } from "react-bootstrap";

export const ProjectCards = ({ title, description, imgUrl, link }) => {
  return (
    
    <Col size={12} sm={6} md={4}>
      
      <div className="proj-imgbx"> 
        
        <img src={imgUrl} className="h-40" />
        <div className="proj-txtx">
        
          <h4>{title}</h4>
          <span>{description}</span>
          
        </div>
       
        
      </div>
      <a  style={{textDecoration: 'none'}} href={link}><p className="text-zinc-200 hover:text-zinc-400">View on Git</p></a>
    </Col>
  );
};
