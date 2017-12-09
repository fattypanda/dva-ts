import * as React from 'react'
import { connect } from 'dva'
import { DatePicker, Button, Card, List, Avatar, Icon } from 'antd'
import classnames from 'classnames'
import { Link, withRouter } from 'dva/router'
import { LAYOUT_NAMESPACE } from 'configs/ConstConfig'
import WithCommonProps from 'domainComponents/WithCommonProps'
const styles = require("./styles.less")

interface Props {

}

interface State {

}


const mapStateToProps = state => {
  return {
  }
}

@withRouter
@WithCommonProps
@connect(mapStateToProps)
class IndexPage extends React.Component<any, any>{
  constructor(props) {
    super(props)
  }
  render() {

    const { dispatch, children, theme } = this.props;
    const pageClasses = classnames({
      [styles["page"]]: true,
      [styles[theme]]: true
    })

    return (
      <div className={pageClasses}>
        {children}
        <Button type="primary">test</Button>
      </div>
    );
  }
}




export default IndexPage