
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default React.createClass({
    render(){
      return (
        <div className="content">
          <List>
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            <Divider />
            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
            <Divider />
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
            <Divider />
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
            <Divider />
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
          </List>
        </div>
      )
    }
})
// <List>
//   <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
//   <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
//   <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
//   <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
// </List>
