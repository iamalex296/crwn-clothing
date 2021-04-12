import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({title, imageUrl, id, size, linkUrl}) => (
      <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
    ))} {/* ასევე ეს შეგვეძლო ჩაგვეწერა ჩასპრედვით უფრო მოკლედ შემდეგნაირად: 
    {this.state.sections.map(({id, ...otherProps}) => (
      <MenuItem key={id} {...otherProps} />
    ))}*/}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory);