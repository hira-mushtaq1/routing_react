import React from "react";
import { useNavigate } from "react-router-dom";
function Service() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Service</h1>
      <p>
        The React blog is the official source for the updates from the React
        team. Anything important, including release notes or deprecation
        notices, will be posted there first. You can also follow the @reactjs
        account on Twitter, but you won’t miss anything essential if you only
        read the blog. Not every React release deserves its own blog post, but
        you can find a detailed changelog for every release in the CHANGELOG.md
        file in the React repository, as well as on the Releases page. Versioned
        Documentation This documentation always reflects the latest stable
        version of React. Since React 16, you can find older versions of the
        documentation on a separate page. Note that documentation for past
        versions is snapshotted at the time of the release, and isn’t being
        continuously updated. Something Missing? If something is missing in the
        documentation or if you found some part confusing, please file an issue
        for the documentation repository with your suggestions for improvement,
        or tweet at the @reactjs account. We love hearing from you!
      </p>
      <div className="btnn">
        <button onClick={() => navigate("/")}>Go to Home</button>
        <button onClick={() => navigate("/contact")}>Go to Contact</button>
      </div>
    </>
  );
}

export default Service;
