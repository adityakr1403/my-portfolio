import React from "react";
import { useRouter } from "next/router";

const ProjectId = () => {
  const router = useRouter();
  const projectId = router.query.projectId;
  
  return (
    <>
      url : {projectId}
    </>
  );
};

export default ProjectId;
