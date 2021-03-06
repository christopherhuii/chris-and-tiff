import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SectionWrapper = ({ className, children, ...props }) => (
  <section className={['section-wrapper', className].join(' ').trim()} {...props}>
    {children}
  </section>
);

SectionWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string
};

SectionWrapper.defaultProps = {
  className: ''
};

export default SectionWrapper;
