import React from "react";
import { GridContainer } from "./UsersList.styled";
import Card from "../Card/Card";

const UsersList = ({ users }) => {
  return (
    <>
      <GridContainer>
        {users.map(({ folowers, avatar, tweets, id }) => {
          console.log("folowers:", folowers);
          return (
            <Card
              folowers={folowers}
              imageURL={avatar}
              tweets={tweets}
              key={id}
              id={id}
            />
          );
        })}
      </GridContainer>
    </>
  );
};

export default UsersList;
