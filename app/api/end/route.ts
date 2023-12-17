import {create} from "@/utils/data";
import {NextApiRequest, NextApiResponse} from "next";

export async function POST(req: Request, res: NextApiResponse) {
    const {Nickname, PhoneNumber, Score} = await req.json();

    console.log("After Request: ", {Nickname, PhoneNumber, Score});

    await create({
        Nickname: Nickname,
        Score: Score,
        PhoneNumber: PhoneNumber,
    });

    return Response.json({ status: 204});
}