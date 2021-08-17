// const MessageReducer = (state = { data: "" }, action) => {
//   // state = { data: "" };
//   switch (action.type) {
//     case "ADD":
//       alert(typeof state);
//       state.data = action.input;
//       return state.data;
//     default:
//       return state.data;
//   }
// };
const MessageReducer = (state, action) => {
  state = {
    data: `# Welcome to my React Markdown Previewer!\n## Example of a sub-header\n\nHeres some code, \`<div></div>\`, between 2 backtick characters.\n\n\`\`\n// this is multi-line code:\n\nfunction add(num){\n\n return num+1;\n\n}\n\`\`\n\nthis **text is bold** wow!\n\nYou can also add [Links](https://www.github.com/yagi91)\n\n>Bloc Quotes are handy\n\n- And of course there are lists.\n\n- list item2.`,
  };
  switch (action.type) {
    case "ADD":
      state.data = action.input;
      return state.data;
    default:
      return state.data;
  }
};

export default MessageReducer;
