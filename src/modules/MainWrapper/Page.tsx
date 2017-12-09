import * as React from 'react';
import { connect } from 'dva';
import { DatePicker, Button, Card, List, Avatar, Icon } from 'antd';
import classnames from 'classnames';
import { Link, withRouter } from 'dva/router';
const styles = require('./styles.scss');
function IndexPage({ dispatch, children }) {
  const header = <div>header</div>
  return (
    <div className={styles["title"]}>
      {children}
      <Button type="primary" icon="close">default</Button>
    </div>
  );
}

const mapStateToProps = state => {
  // console.info(state.lastEffectTime)
  return {

  }
}

export default withRouter(connect(mapStateToProps)(IndexPage));
