import React ,{Component,PropTypes} from 'react';
import {VisibilityFilters} from '../actions/TodoAction.js'



class Footer extends Component{
  renderFilterItem(filter ,name){
    if (filter === this.props.filter) {
      return name;
    }
    return (
      <a href="#" onClick={ e=>{
          e.preventDefault();
          this.props.onFilterChange(filter);
      }}> {name} </a>
    )
  }

  render(){
    return (
      <div     className="marginTop20">
        显示:
        {this.renderFilterItem(VisibilityFilters.SHOW_ALL,'所有')}
        {','}
        {this.renderFilterItem(VisibilityFilters.SHOW_COMPLETE,'已完成')}
        {','}
        {this.renderFilterItem(VisibilityFilters.SHOW_ACTIVE,'活动中')}
      </div>
    )
  }
}

Footer.propTypes={
  onFilterChange:PropTypes.func.isRequired,
  filter:PropTypes.oneOf([
    VisibilityFilters.SHOW_ALL,VisibilityFilters.SHOW_COMPLETE,VisibilityFilters.SHOW_ACTIVE
  ]).isRequired
}

export default Footer;
