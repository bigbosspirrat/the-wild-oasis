import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const {
    data: todayActivity,
    isLoading: isLoadingActivity,
    error,
  } = useQuery({
    queryKey: ["today-activity"],
    queryFn: getStaysTodayActivity,
  });

  return { todayActivity, isLoadingActivity, error };
}
