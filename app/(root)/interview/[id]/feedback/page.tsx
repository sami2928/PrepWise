import { getCurrentUser } from "@/lib/actions/auth.action";
import { getFeedbackByInterviewId, getInterviewsByInterviewId } from "@/lib/actions/general.action";
import { redirect } from "next/navigation";

const page = async ({ params }: RouteParams) => {
  const { id } = params;
  const user = await getCurrentUser();
  const interview = await getInterviewsByInterviewId(id);

  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  })
  
  return <div>page</div>;
};

export default page;
