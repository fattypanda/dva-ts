import * as React from 'react';
import { connect } from 'dva';
import { DatePicker, Button, Card, List, Avatar } from 'antd';
import classnames from 'classnames';
import { Link, withRouter } from 'dva/router';
const styles = require('./styles.scss');
function IndexPage({ dispatch, children }) {
  const header = <div>header</div>
  return (
    <div className={styles["title"]}>
      <Card title="Main Wrapper">
        <Link to="/login" >Login</Link>

      </Card>
      <List header={"header"} renderItem={item => (
        <div>
          123
        </div>
      )}
        dataSource={[
          {
            title: 'Ant Design Title 1',
          },
          {
            title: 'Ant Design Title 2',
          },
          {
            title: 'Ant Design Title 3',
          },
          {
            title: 'Ant Design Title 4',
          },
        ]}></List>
      {children}
    </div>
  );
}

const mapStateToProps = state => {
  // console.info(state.lastEffectTime)
  return {

  }
}

export default withRouter(connect(mapStateToProps)(IndexPage));
