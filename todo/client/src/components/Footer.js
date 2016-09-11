import React ,{Component,PropTypes} from 'React';

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
      <div>
        显示:
        {this.renderFilterItem('SHOW_ALL','所有')}
        {','}
        {this.renderFilterItem('SHOW_COMPLETE','已完成')}
        {','}
        {this.renderFilterItem('SHOW_ACTIVIE','活动总')}
      </div>
    )
  }
}

Footer.propTypes={
  onFilterChange:PropTypes.func.isRequired,
  filter:PropTypes.oneOf([
    'SHOW_ALL',"SHOW_COMPLETE","SHOW_ACTIVIE"
  ]).isRequired
}

export default Footer;
