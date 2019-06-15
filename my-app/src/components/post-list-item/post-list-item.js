import React from "react";
import "./post-list-item.scss";

const PostListItem = ({ label,
                        postDate,
                        important,
                        like,
                        onDelete,
                        onToggleImportant,
                        onToggleLiked 
                      }) => {
  let classNames = "app-list-item d-flex justify-content-between";
  if (important) {
    classNames += " important";
  }
  if (like) {
    classNames += " like";
  }
  return (
    <div className={classNames}>
      <div className="app-list-item-label">  {/* onClick={onToggleLiked} */}
        <p className="item-date">{postDate}</p>
        <p>{label}</p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-star btn-sm btn"
          onClick={onToggleImportant}
          title='Важно'
        >
          <i className="fa fa-star" />
        </button>
        <button
          type="button"
          className="btn-like btn-sm btn"
          onClick={onToggleLiked}
          title='Нравится'
        >
          <i className="fa fa-heart" />
        </button>
        <button
          type="button"
          className="btn-trash btn-sm btn"
          onClick={onDelete}
          title='Удалить'
        >
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </div>
  );
};

export default PostListItem;
