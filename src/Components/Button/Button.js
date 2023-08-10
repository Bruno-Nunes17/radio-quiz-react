import ButtonBS from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Button({ title, variant, margin, link, onClick }) {
  return (
    <div>
      <Link className="nav-link" to={link}>
        <ButtonBS className={margin} variant={variant} onClick={onClick}>
          {title}
        </ButtonBS>
      </Link>
    </div>
  );
}

export default Button;
