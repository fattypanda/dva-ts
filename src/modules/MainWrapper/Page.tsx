import * as React from 'react';
import { connect } from 'dva';
import { DatePicker, Button, Card } from 'antd';
import classnames from 'classnames';
const styles = require('./styles.scss');

function IndexPage({ dispatch }) {
    dispatch({ type: "example/fetch", payload: {} }).then(result => {
    })
    return (
        <div className={styles["title"]}>
            <Card title="xxxx">
                <Button type="primary">123123</Button>
            </Card>
        </div>
    );
}

const mapStateToProps = state => {
    // console.info(state.lastEffectTime)
    return {

    }
}

export default connect(mapStateToProps)(IndexPage);
