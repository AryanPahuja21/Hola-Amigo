import Sidebar from "../_components/sidebar/Sidebar";
import getConversations from "../actions/getConversations";
import ConversationList from "./_components/ConversationList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  return (
    <Sidebar>
      <ConversationList initialItems={conversations!} />
      <main className="h-full">{children}</main>
    </Sidebar>
  );
}
