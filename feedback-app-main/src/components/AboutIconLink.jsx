import { FaQuestion } from 'react-icons/fa';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AboutIconLink = () => {
  return (
    <Fragment>
      <div className="about-link">
        <Link to="/about">
          <FaQuestion size={30} />
        </Link>
      </div>
    </Fragment>
  );
};

export default AboutIconLink;
