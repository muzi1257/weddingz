import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import Paper from '@material-ui/core/Paper';
import {
  grey,
  green,
  blue,
  blueGrey,
  yellow,
  cyan,
  red,
} from '@material-ui/core/colors';

class InfoBox extends React.Component {
  render() {
    const { color, title, value, Icon } = this.props;
    const styles = {
      content: {
        padding: '10px 14px',
        marginLeft: 90,
        height: 80,
      },
      number: {
        display: 'block',
        fontWeight: 400,
        fontSize: 20,
        color: red[1000],
      },
      text: {
        fontSize: 24,
        fontWeight: 300,
        color: red[1000],
        '& .appear-item': {
          display: 'none',
        },
        '&:hover .appear-item': {
          display: 'block',
        },
      },
      iconSpan: {
        float: 'left',
        height: 90,
        width: 90,
        textAlign: 'center',
        backgroundColor: color,
      },
      icon: {
        height: 48,
        width: 48,
        marginTop: 20,
        maxWidth: '100%',
      },
    };

    return (
      <Paper>
        <span style={styles.iconSpan}>
          <div style={{ color: 'white' }}>
            <Icon style={styles.icon} />
          </div>
        </span>
        <div style={styles.content}>
          <span style={styles.text}>{title}</span>
          <div style={styles.number}>
            <CountUp end={value} separator="," duration={2} />
          </div>
        </div>
      </Paper>
    );
  }
}

InfoBox.propTypes = {
  Icon: PropTypes.any, // eslint-disable-line
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
};

export default InfoBox;
