interface IParams {
  conversationId: string;
}

const ConversationId = async ({ params }: { params: IParams }) => {
  return (
    <div>
      <h1>Conversation ID:</h1>
      <p>{params.conversationId}</p>
    </div>
  );
};

export default ConversationId;
