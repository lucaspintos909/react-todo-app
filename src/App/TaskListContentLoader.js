import React from "react";
import ContentLoader from "react-content-loader";

const TaskListContentLoader = (props) => {
  return (
    <div className="content_loader">
      <ContentLoader
        speed={2}
        width={400}
        height={260}
        viewBox="0 0 400 260"
        backgroundColor="#8EDBFC"
        foregroundColor="#e1f5fe"
        {...props}
      >
        <rect x="0" y="0" rx="4" ry="4" width="400" height="50" />
        <rect x="0" y="60" rx="4" ry="4" width="400" height="50" />
        <rect x="0" y="120" rx="4" ry="4" width="400" height="50" />
        <rect x="0" y="180" rx="4" ry="4" width="400" height="50" />
      </ContentLoader>
    </div>
  );
};

export { TaskListContentLoader };
