import React from "react";
import { List, ListItem } from "./StatisticsList.styled";
import numeral from "numeral";

const StatisticsList = ({ tweets, folowers }) => {
  return (
    <List>
      <ListItem>{numeral(tweets).format("0, 0")} tweets</ListItem>
      <ListItem>{numeral(folowers).format("0, 0")} folowers</ListItem>
    </List>
  );
};

export default StatisticsList;
