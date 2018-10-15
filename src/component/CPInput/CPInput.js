import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Input } from 'antd';
import s from './CPInput.css';

class CPInput extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    label: PropTypes.node,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    addonBefore: PropTypes.string,
    addonAfter: PropTypes.string,
    fullWidth: PropTypes.bool,
    inline: PropTypes.bool,
    size: PropTypes.string,
    className: PropTypes.string,
    direction: PropTypes.string,
    value: PropTypes.node,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    onChange: PropTypes.func,
    ref: PropTypes.func,
  };

  static defaultProps = {
    defaultValue: '',
    placeholder: null,
    type: 'text',
    addonBefore: null,
    addonAfter: null,
    fullWidth: true,
    inline: false,
    size: 'default',
    className: '',
    prefix: '',
    suffix: '',
    value: null,
    label: '',
    direction: null,
    ref: null,
    onChange: () => {},
  };

  render() {
    const {
      defaultValue,
      size,
      label,
      placeholder,
      type,
      addonBefore,
      addonAfter,
      fullWidth,
      inline,
      onChange,
      className,
      value,
      prefix,
      suffix,
      direction,
      ref,
    } = this.props;
    return (
      <div
        className={cs('form-group', s.input, direction, { inline }, className, {
          fullWidth,
        })}
      >
        {label && <span className={s.controlLabel}>{label}</span>}

        <Input
          defaultValue={defaultValue}
          type={type}
          required="required"
          onChange={onChange}
          placeholder={placeholder}
          size={size}
          value={value}
          prefix={prefix}
          suffix={suffix}
          addonBefore={addonBefore}
          addonAfter={addonAfter}
          ref={ref}
        />
        <i className="bar" />
      </div>
    );
  }
}

export default withStyles(s)(CPInput);
