import * as React from 'react';
import { connect } from 'dva';
import { DatePicker, Button, Card } from 'antd';
import classnames from 'classnames';
import { Link, withRouter } from 'dva/router';
const styles = require('./styles.scss');

function IndexPage({ dispatch, children }) {

    return (
        <div className={styles["title"]}>
            <Card title="Main Wrapper">
                <Link to="/login" >Login</Link>
            </Card>
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
