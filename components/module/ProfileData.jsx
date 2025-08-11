function ProfileData({ data }) {
  return (
    <div className="mt-5">
      <div className="flex items-center mb-[10px]">
        <span className="mr-[5px] text-grayy text-base">Name :</span>
        <p className="text-slategray text-xl font-medium">{data.name}</p>
      </div>

      <div className="flex items-center mb-[10px]">
        <span className="mr-[5px] text-grayy text-base">Last Name :</span>
        <p className="text-slategray text-xl font-medium">{data.lastName}</p>
      </div>

      <div className="flex items-center mb-[10px]">
        <span className="mr-[5px] text-grayy text-base">Email :</span>
        <p className="text-slategray text-xl font-medium">{data.email}</p>
      </div>
    </div>
  );
}

export default ProfileData;
