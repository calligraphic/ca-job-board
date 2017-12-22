import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'react-pure-render/component';

// Render embedded HTML as React nodes, avoiding dangerouslySetInnerHTML
/** @TODO make sure user data is parsed for dangerous HTML server-side */
import ReactHtmlParser from 'react-html-parser';

class JobPosting extends PureComponent {
  render() {
    const { title, description } = this.props;

    return (
      <li>
        <div className="row">
          <div>
            <h4 className="list-group-item-heading">{title}</h4>
          </div>
          <div>{ReactHtmlParser(description)}</div>
        </div>
      </li>
    );
  }
}

JobPosting.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default JobPosting;
