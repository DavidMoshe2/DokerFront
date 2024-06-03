type Prop = {
    user: {
      profileImage: string;
      firstName: string;
      lastName: string;
    };
  };
  
  const Profile = ({ user }: Prop) => {
    return (
      <div className="flex items-center px-4 py-3">
        <img
          className="w-12 h-12 rounded-full border-2 border-blue-500 p-1 mr-3"
          src={user.profileImage}
          alt={`${user.firstName} ${user.lastName}`}
        />
  
        <h4 className="font-bold text-gray-800">
          {user.firstName} {user.lastName}
        </h4>
      </div>
    );
  };
  
  export default Profile;
  