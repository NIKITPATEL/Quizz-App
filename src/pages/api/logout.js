import { withIronSessionApiRoute } from "iron-session/next";
import { withSessionRoute } from "@/lib/session";

export default withSessionRoute(async (req, res) => {
    req.session.destroy();
    return res.status(200).json({ ok: true });
});


// export default withIronSessionApiRoute(
//   function logoutRoute(req, res, session) {
//     req.session.destroy();
//     res.send({ ok: true });
//   },
//   {
//     cookieName: "myapp_cookiename",
//     password: "complex_password_at_least_32_characters_long",
//     // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
//     cookieOptions: {
//       secure: process.env.NODE_ENV === "production",
//     },
//   },
// );