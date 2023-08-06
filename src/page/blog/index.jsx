import { Suspense, lazy } from "react";
import { Banner } from "../../component/banner";
// import { ViewsBlog } from "../../views/blog";
const ViewsBlog = lazy(() => import("../../views/blog"));

export const Blogs = () => {
  return (
    <>
      <Banner />
      <Suspense fallback={<div>...Loading</div>}>
        <ViewsBlog />
      </Suspense>
    </>
  );
};
