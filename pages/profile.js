import { useRouter } from "next/router";
import ProfilePage from "../components/templates/ProfilePage";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function Profile() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/signin");
  }, [status]);

  return (
    <div>
      <ProfilePage />
    </div>
  );
}

export default Profile;
