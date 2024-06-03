import { useState } from "react";
import FakeUserHook from "../hooks/getFakeUserHook";
import Error from "./utils/Error";
import Loading from "./utils/Loading";
import Profile from "./Profile";
import ImageCard from "./ImageCard";

const Card = () => {
  const [getNewFakeUser, setGetNewFakeUser] = useState(true);
  const { data, isLoading, error } = FakeUserHook(getNewFakeUser);
  if (error) return <Error message={error} />;
  return (
    <div>
      {isLoading && <Loading />}
      {data && (
        <div>
          <Profile
            user={{
              firstName: data.firstName,
              lastName: data.lastName,
              profileImage: data.profileImage,
            }}
          />
          <ImageCard
            card={{ description: data.description, image: data.image }}
            loadNext={setGetNewFakeUser}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
