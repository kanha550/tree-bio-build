import { Prismaclient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {prisma: Prismaclient}

export const db = globalForPrisma.prisma || new Prismaclient()

if(process.env.NODE_ENV !== "production") globalForPrisma.prisma = db