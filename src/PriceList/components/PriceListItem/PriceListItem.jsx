/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'react-pure-render/component';

// Render embedded HTML as React nodes, avoiding dangerouslySetInnerHTML
/** @TODO make sure user data is parsed for dangerous HTML server-side */
import ReactHtmlParser from 'react-html-parser';

class PriceListItem extends PureComponent {
  render() {
    const { title, description } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div>
              <h4 className="list-group-item-heading">{title}</h4>
            </div>
            <div>{ReactHtmlParser(description)}</div>
          </div>
        </div>
      </div>
    );
  }
}

PriceListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

// Keep Storybook from losing reference to component name on static compile
PriceListItem.displayName = 'PriceListItem';

export default PriceListItem;
