export const dynamic = 'force-dynamic';
import { prisma } from '@/libs/prisma';
import UserPageClient from './UserPageClient';

async function loadUsers() {
  return await prisma.user.findMany();
}

const page = async () => {
  const users = await loadUsers().then(users =>
    users.map(user => ({
      ...user,
      createdDate: user.createdAt.toISOString(),
    }))
  );
  return <UserPageClient users={users} />;
};

export default page;
