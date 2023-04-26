import { configureStore, createSlice } from '@reduxjs/toolkit';

let askInputs = createSlice({
  name: 'askInputs',
  initialState: {
    title: '',
    content: '',
    content2: '',
    tag: '',
  },
  reducers: {
    setAskTitle(state, action) {
      state['title'] = action.payload;
    },
    setAskContent(state, action) {
      state['content'] = action.payload;
    },
    setAskContent2(state, action) {
      state['content2'] = action.payload;
    },
    // setAskTag(state, action) {
    //   state['tag'] = action.payload;
    // },
  },
});

export let { setAskTitle, setAskContent, setAskContent2, setAskTag } = askInputs.actions;

export default configureStore({
  reducer: {
    askInputs: askInputs.reducer,
  },
});
