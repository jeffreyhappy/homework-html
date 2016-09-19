
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import '../App.css'

export default React.createClass({
    render(){
      // console.log("style = " +require('util').inspect(styleee));
      const {todayList} = this.props;
      if (todayList == undefined || todayList == []) {
        return (
          <div className="content">
            还没有人定
          </div>
        )
      }
      // console.log("style = " +require('util').inspect(todayList));
      var formatList = todayList.map(function(current,index,array) {
          return (
                  <div key={current.name}>
                    <ListItem innerDivStyle={{textAlign:'left'}} primaryText={current.name} leftIcon={<ContentInbox />} />
                    <Divider />
                  </div>
                )
      })

      return (
        <div className="content">
          <List>
              {formatList}
          </List>
        </div>
      )
    }
})
// <ListItem innerDivStyle={{textAlign:'left'}} primaryText="Inbox" leftIcon={<ContentInbox />} />
// <Divider />
// <ListItem innerDivStyle={{textAlign:'left'}} primaryText="Starred" leftIcon={<ActionGrade />} />
// <Divider />
// <ListItem innerDivStyle={{textAlign:'left'}} primaryText="Sent mail" leftIcon={<ContentSend />} />
// <Divider />
// <ListItem innerDivStyle={{textAlign:'left'}} primaryText="Drafts" leftIcon={<ContentDrafts />} />
// <Divider />
// <ListItem innerDivStyle={{textAlign:'left'}} primaryText="Inbox" leftIcon={<ContentInbox />} />
