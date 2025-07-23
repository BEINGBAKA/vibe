//import { useQuery } from "@tanstack/react-query";
//import { useTRPC } from "@/trpc/client";
//import { prisma } from "@/lib/db";
//fetch from a server component(trps allow us to leverage server components)
import { trpc, getQueryClient } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./client";
import { Suspense } from "react";
const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.createAI.queryOptions({ text: "Ishika" })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading..</p>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  );
};
export default Page;
