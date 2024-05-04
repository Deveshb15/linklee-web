import Links from "@helpers/links";

export default async function handler(req, res) {
    try {
        if (req.method === "POST" || req.method === "PUT" || req.method === "GET") {
            const { id, data } = req?.body;
            const updated = await Links.updateLink(id, data);

            res.send({
                data: {
                    updated: updated ? true : false,
                    updatedData: updated,
                },
            });
        }
    } catch (error) {
        res.send({ error: error.message });
    }
}