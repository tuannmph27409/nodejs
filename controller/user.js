import axios from "axios";


export const getAll = async (req, res) => {
    try {
        const { data: users } = await axios.get(
            `${process.env.API_URL}`
        );
        if (users.lenght === 0) {
            res.status(404).json({
                message: "No users found",
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
export const get = async (req, res) => {
    try {
        const { data: users } = await axios.get(
            `${process.env.API_URL}/${req.params.id}`
        );
        if (!users) {
            res.status(404).json({
                message: "No users found",
            });
        }
        return res.status(200).json({
            message: "User found",
            data: users,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error Server",
        });
    }
};
export const create = async (req, res) => {
    try {
        const { data: users } = await axios.post(
            `${process.env.API_URL}`,
            req.body
        );
        if (!users) {
            res.status(400).json({
                message: 'No users created',
            });
        }
        return res.status(201).json({
            message: 'User created',
            data: users,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error Server",
        });
    }
};
export const remove = async (req, res) => {
    try {
        await axios.delete(
            `${process.env.API_URL}/${req.params.id}`
            );
        return res.status(200).json({
            message: " User Delete",
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
export const update = async (req, res) => {
    try {
        const { data: users } = await axios.patch(
            `${process.env.API_URL}/${req.params.id}`,
            req.body
        );
        if (!users) {
            res.status(404).json({
                message: " No User",
            });
        }
        return res.status(200).json({
            message: 'User update',
            data: users,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const put = async (req, res) => {
    try {
        const { data: users } = await axios.put(
            `${process.env.API_URL}/${req.params.id}`,
            req.body
        );
        console.log(data);
        if (!users) {
            res.status(404).json({
                message: " No User",
            });
        }
        return res.status(200).json({
            message: 'User update',
            data: users,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

