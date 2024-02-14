import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms: Platform[];
}

export default function usePlatforms() {
  return useData<Platform>('/platforms/lists/parents');
}
