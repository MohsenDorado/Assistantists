import { clerkMiddleware,  } from "@clerk/nextjs/server";

// const isDashboardRoute= createRouteMatcher(["/dashboard(.*"]);

    

// export default clerkMiddleware((auth,req)=>{
//     if (isDashboardRoute(req))auth().protect();

// });
 export default clerkMiddleware()


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};