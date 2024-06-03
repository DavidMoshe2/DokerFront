import { useState, useEffect } from "react";

import getFakeUser from "../service/getFakeUser";
import { fakeUserType } from "../types/fakeUserType";

const FakeUserHook = (getNewFakeUser: boolean) => {
  const [data, setData] = useState<fakeUserType | undefined>(undefined);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await getFakeUser();
        if (!response) throw new Error("error in fetch posts data");
        setData(response);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setIsLoading(false);
    }
    fetchData();
  }, [getNewFakeUser]);

  return { data, error, isLoading };
};
export default FakeUserHook;
