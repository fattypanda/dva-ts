import * as React from 'react';
import { connect } from 'dva';
import {DatePicker,Button} from 'antd';
const styles = require('./IndexPage.scss');

function IndexPage() {
  return (
    <div className={styles["normal"]}>
      <h1 className={styles["title"]}>Yay! Welcome to dva!</h1>
      <div className={styles["welcome"]} />
      <ul className={styles["list"]}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
      <Button type="primary">123</Button>
    </div>
  );
}


export default connect()(IndexPage);