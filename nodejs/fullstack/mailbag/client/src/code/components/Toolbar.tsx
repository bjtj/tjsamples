import React from "react";
import Button from "@material-ui/core/Button";
import NewContactIcon from "@material-ui/icons/ContactMail";
import NewMessageIcon from "@material-ui/icons/Email";

const Toolbar = ({ state }) => (
  <div>
    <Button
      variant="contained"
      color="primary"
      size="small"
      style={{ marginRight: 10 }}
      onClick={() => state.showComposeMessage("new")}
    >
      <NewMessageIcon style={{ marginRight: 10 }} />
      New Message
    </Button>
    <Button
      variant="contained"
      color="primary"
      size="small"
      style={{ marginRight: 10 }}
      onClick={state.showAddContact}
    >
      <NewContactIcon style={{ marginRight: 10 }} />
      New Contact
    </Button>
  </div>
);

export default Toolbar;
