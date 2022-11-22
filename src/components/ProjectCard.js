import { Col } from "react-bootstrap";

export const ProjectCards = ({ title, description, imgUrl, link }) => {
  return (
    
    <Col size={12} sm={6} md={4}>
      
      <div className="proj-imgbx"> 
        
        <img src={imgUrl} />
        <div className="proj-txtx">
        
          <h4>{title}</h4>
          <span>{description}</span>
          <a style={{textDecoration: 'none'}} href={link}><p style={{ color: '#000' }} >View on Git</p></a>
        </div>
       
        
      </div>
    </Col>
  );
};
