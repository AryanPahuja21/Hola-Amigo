import Sidebar from "../_components/sidebar/Sidebar";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import ConversationList from "./_components/ConversationList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <ConversationList users={users} initialItems={conversations} />
      <main className="h-full">{children}</main>
    </Sidebar>
  );
}
