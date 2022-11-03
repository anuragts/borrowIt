import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db/client";

export default async function borrow(req: NextApiRequest, res: NextApiResponse)  {
  const { userId ,name } = req.body;
  const currentDate = new Date();
  const userIdInt = parseInt(userId);

  const borrowitem = await prisma.borroweditem.create({
    data:{
        name,
        date:currentDate,
        user:{
            connect:{
                id:userIdInt
            }
        }
    }
  })
  res.status(201).json(borrowitem);
};
