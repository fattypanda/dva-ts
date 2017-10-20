import * as React from 'react';
import { connect } from 'dva';
import { DatePicker, Button, Card } from 'antd';
const styles = require('./styles.scss');

function IndexPage({ dispatch }) {
    dispatch({ type: "example/fetch", payload: {} }).then(result => {
    })
    return (
        <div className={styles["title"]}>
            <Button type="primary">123123</Button>
            <Card title="xxxx"> 123</Card>
        </div>
    );
}


export default connect()(IndexPage);
