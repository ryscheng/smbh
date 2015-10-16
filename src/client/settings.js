import React from "react";
import { 
  Card, CardHeader, CardTitle, CardActions, CardText,
  FlatButton
} from "material-ui"

export const Settings = React.createClass({
  render() {
    return (
      <div>
        <Card>
          <CardTitle 
            title="Authentication"
            subtitle="Log into your accounts" />
          <CardActions>
            <FlatButton label="Google" linkButton={true} href="https://www.google.com" />
            <FlatButton label="Facebook" linkButton={true} href="https://www.facebook.com" />

          </CardActions>
        </Card>
      </div>
    );
  }
});
