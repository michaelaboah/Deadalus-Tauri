export const structure_list = (channel_count: number) => {
  const scaffold = [];
  for (let index = 0; index < channel_count; index++) {
    scaffold.push({ channel: null, input_device: null, input_description: null, note: null });
  }
  return scaffold;
};
