import * as React from 'react';
import { connect } from 'dva';
import { DatePicker, Button, Card } from 'antd';
import classnames from 'classnames';
const styles = require('./styles.scss');

function IndexPage({ dispatch }) {
    return (
        <div className={styles["title"]}>
            this is Login
        </div>
    );
}

const mapStateToProps = state => {
    // console.info(state.lastEffectTime)
    return {

    }
}

export default connect(mapStateToProps)(IndexPage);
