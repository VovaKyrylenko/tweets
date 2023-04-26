import { useEffect, useMemo, useState, useRef } from "react";
import React from "react";
import UsersList from "../components/UsersList/UsersList";
import { getUsers } from "../utils/backend";
import { LoadMoreButton } from "../components/LoadMore/LoadMore.styled";
import { RingLoader } from "react-spinners";
import MainButton from "../components/MainButton/MainButton";
import { useLocation } from "react-router-dom";

export const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const newUsers = await getUsers(page);
        setUsers((prevUsers) => [...prevUsers, ...newUsers]);
        setIsLoading(false);
      } catch (error) {
        console.log("error:", error.message);
      }
    };
    fetchUsers();
  }, [page]);

  const hasMorePages = useMemo(() => {
    const totalUsers = 20;
    const selectedUsers = users.length;
    return totalUsers > selectedUsers;
  }, [users]);
  const handlePage = () => {
    setPage((prev) => prev + 1);
  };
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? `/`);
  return (
    <>
      <MainButton to={backLinkHref.current} />
      <UsersList users={users} />
      {hasMorePages && users.length !== 0 && (
        <LoadMoreButton onClick={handlePage}>
          {!isLoading ? "Load more" : "..."}
        </LoadMoreButton>
      )}
      {users.length === 0 && (
        <RingLoader
          color={"#333"}
          loading={true}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </>
  );
};
