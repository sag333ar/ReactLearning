import './Card.css'
import classNames from 'classnames';

const Card = ({ children, className }) => {
  return <div className={classNames('card', className)}>{children}</div>;
};

export default Card;
