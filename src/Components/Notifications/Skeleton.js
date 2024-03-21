import React from "react";
import "../../Style/Skeleton.css";
function Skeleton() {
  return (
    <div className="skeletonsection d-flex w-100 align-items-center">
      <div className="skeleton">
        <div className="s-img"></div>
        <div className="s-line first"></div>
        <div className="s-line second"></div>
        <div className="s-line third"></div>
      </div>
      <div className="skeleton">
        <div className="s-img"></div>
        <div className="s-line first"></div>
        <div className="s-line second"></div>
        <div className="s-line third"></div>
      </div>
      <div className="skeleton">
        <div className="s-img"></div>
        <div className="s-line first"></div>
        <div className="s-line second"></div>
        <div className="s-line third"></div>
      </div>
    </div>
  );
}

export default Skeleton;
