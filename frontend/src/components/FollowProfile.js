import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const FollowProfile = ({ userProfile }) => {
	const { authUser } = useAuthContext();

	const isOwnProfile = authUser?.username === userProfile.login;

	const handleFollowProfile = async () => {
		try {
			const res = await fetch(`/api/users/follow/${userProfile.login}`, {
				method: "POST",
				credentials: "include",
			});
			const data = await res.json();

			if (data.error) throw new Error(data.error);
			toast.success(data.message);
		} catch (error) {
			toast.error(error.message);
		}
	};

	if (!authUser || isOwnProfile) return null;

	return (
		<button
			className='p-2 text-xs w-full font-medium rounded-md bg-glass border border-blue-400 flex items-center gap-2'
			onClick={handleFollowProfile}
		>
			<FaHeart size={16} /> Follow Profile
		</button>
	);
};
export default FollowProfile;