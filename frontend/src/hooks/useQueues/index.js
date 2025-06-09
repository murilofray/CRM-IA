import api from "../../services/api";

const useQueues = () => {
	const findAll = async () => {
        try {
            const { data } = await api.get("/queue");
            return Array.isArray(data) ? data : [];
        } catch (err) {
            return [];
        }
    }

	return { findAll };
};

export default useQueues;
