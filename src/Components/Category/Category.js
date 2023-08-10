import Card from "react-bootstrap/Card";

import "./index.css"

function Category({children, img}) {
  return (
    <div>
      <Card className="category">
        <Card.Img src={`https://source.unsplash.com/random/680x480?${img}`} alt="Card image" />
        <Card.Body>
        {children}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Category;
