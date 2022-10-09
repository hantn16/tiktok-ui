import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';

function HeadOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
}
HeadOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeadOnly;
