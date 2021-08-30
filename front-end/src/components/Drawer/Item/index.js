import React from "react";

import { Label, Button, IconSelected } from "./styles";

function Item({ label, active, navigatePage, icon: Icon }) {
  return (
    <Button active={active} fullWidth onClick={navigatePage}>
      <IconSelected active={active}>
        <Icon style={{ height: "20px", width: "20px" }} />
      </IconSelected>
      <Label active={active}>{label}</Label>
    </Button>
  );
}

export default Item;
