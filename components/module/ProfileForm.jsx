function ProfileForm({
  name,
  lastName,
  passsword,
  setName,
  setLastName,
  setPassword,
  handleSubmit,
}) {
  return (
    <>
      <div className="mt-5">
        <div className="flex flex-col mb-5">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="lastName">Last Name :</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="passsword">Password :</label>
          <input
            type="password"
            id="passsword"
            value={passsword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

export default ProfileForm;
