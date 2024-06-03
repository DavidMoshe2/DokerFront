// import FakeUserHook from "../hooks/getFakeUserHook";

// import Error from "./utils/Error";
// import Loading from "./utils/Loading";
// import { useState } from "react";

// const UserCard = () => {
//   const [getNewFakeUser, setGetNewFakeUser] = useState(true);
//   const { data, isLoading, error } = FakeUserHook(getNewFakeUser);

//   if (error) return <Error message={error} />;
//   return (
//     <div>
//       {isLoading && <Loading />}
//       {!isLoading && data && (
//         <div className="bg-white shadow-md rounded-lg overflow-hidden m-auto">
//           <div className="relative">
//             <img
//               className="w-full h-48 object-cover"
//               src={data.avatar}
//               alt="User Avatar"
//             />
//             <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white">
//               <h2 className="text-lg font-semibold">{data.username}</h2>
//             </div>
//           </div>
//           <div className="p-4">
//             <p className="text-sm">{data.email}</p>
//             <p className="text-sm text-gray-600 mb-2">
//               Birthdate: {new Date(data.birthdate).toLocaleDateString()}
//             </p>
//             <div className="flex justify-end">
//               <button
//                 className="text-blue-500 hover:text-blue-700"
//                 onClick={() => setGetNewFakeUser(!getNewFakeUser)}
//               >
//                 Skip
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserCard;
