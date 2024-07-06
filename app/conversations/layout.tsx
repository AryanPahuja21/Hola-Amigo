import Sidebar from "../_components/sidebar/Sidebar";
import ConversationList from "./_components/ConversationList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar>
      <ConversationList />
      <main className="h-full">{children}</main>
    </Sidebar>
  );
}
