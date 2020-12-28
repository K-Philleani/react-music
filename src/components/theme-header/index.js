import React, { memo } from 'react';
import { HeaderWrapper } from './style'
import PropTypes from 'prop-types'

const ThemeHeader = memo((props) => {
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{props.title}</h3>
        <div className="keyword">
          {
            props.keywords.map((item) => {
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="#">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});

ThemeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}
ThemeHeader.defaultProps = {
  keywords: []
}

export default ThemeHeader;