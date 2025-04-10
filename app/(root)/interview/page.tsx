import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();
  const workflowId = process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID;

  return (
    <Agent
  userName={user?.name!}
  userId={user?.id ?? ""}
  type="generate"
  workflowId={process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!}
/>

  );
};


export default Page;