import Message from "./constants";

export const MsgCreator = (input) => {
  return { type: Message, input: input };
};
export default MsgCreator;
