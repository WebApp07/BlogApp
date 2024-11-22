import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/*Image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover " />
      </div>
      {/*Details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          An element with position relative is positioned relative to its normal
          position
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Setting the top, right, bottom, and left properties of a
          relatively-positioned element will cause it to be adjusted away from
          its normal position. Other content will not be adjusted to fit into
          any gap left by the element.
        </p>
        <Link to="/" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
