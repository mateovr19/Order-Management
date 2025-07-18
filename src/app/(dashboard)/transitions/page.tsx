export const dynamic = 'force-dynamic';
import { prisma } from '@/libs/prisma'
import TransitionsPageClient from './TransitionsPageClient'

export default async function TransitionsPage() {
  const masterList = await prisma.master.findMany()
  const transactionList = await prisma.transaction.findMany({
    include: {
      responsible: {
        select: {
          email: true,
        },
      },
    },
  })

  const masters = masterList.map((m) => ({
    id: m.id,
    name: m.name,
    balance: m.balance,
  }))

  const transitions = transactionList.map((t) => ({
    id: t.id,
    date: t.date.toISOString(),
    type: t.type,
    quantity: t.quantity,
    name: t.responsible.email,
    masterId: t.masterId,
  }))

  return <TransitionsPageClient masters={masters} transitions={transitions} />
}
