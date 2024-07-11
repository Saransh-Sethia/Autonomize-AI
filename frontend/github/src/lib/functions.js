import config from "../config";

export const handleLoginWithGithub = () => {
	window.open(`${config.endpoint}/api/auth/github`, "_self");
};