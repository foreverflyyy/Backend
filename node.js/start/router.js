import Router from "express";

const router = new Router();

router.post("/posts", async (req, res) => {
    try {
        console.log("everything good!");
    } catch(err) {
        console.log(err);
    }
})

router.get("/posts/:id");

export default router;