import React, { useState, Fragment, useEffect } from "react";
import { Comment, Tooltip, Avatar, Skeleton } from "antd";

const Bankendcomments = [
  {
    userFullName: "Ruben Batista",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "17/7/2020 5:45 PM",
  },
];

const UserComments = ({ taskId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch_comments();
  }, [taskId]);

  function fetch_comments() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setComments(Bankendcomments);
    }, 3000);
  }

  return (
    <Fragment>
      {loading ? (
        <Skeleton avatar paragraph={{ rows: 2 }} />
      ) : (
        <>
          {comments.map((item, index) => (
            <Comment
              key={index}
              author={<label>{item.userFullName}</label>}
              content={<p>{item.description}</p>}
              datetime={<span>{item.date}</span>}
              avatar={
                <Avatar>
                  {item.userFullName.charAt(0) +
                    item.userFullName.charAt(item.userFullName.length)}
                </Avatar>
              }
            />
          ))}
        </>
      )}
    </Fragment>
  );
};

export default UserComments;
