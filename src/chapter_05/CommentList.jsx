import React from "react";
import Comment from "./Comment";

const comments =[
    {
        name: "유재석",
        comment: "런닝맨",
    },
    {
        name: "하정우",
        comment: "수리남",
    },
    {
        name: "황정민",
        comment: "수리남",
    },
    {
        name: "유연석",
        comment: "수리남",
    },
];

function CommentList(props){
    return(
        <div>
           {comments.map((comment)=>{
            return(
                <Comment name={comment.name} comment={comment.comment} />
            );
           })}
        </div>
    );
}

export default CommentList;