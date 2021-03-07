import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    
    select: [],
    nun: [
      {
          
        name: "Drake",
        price: 25,
        img:
          "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/22/fb/36/22fb36e7-386d-4ba8-0577-9975577f7c19/21UMGIM18577.rgb.jpg/300x300bb.webp",
        active: false,
      },
      {
        
        name: "change-of-scenery-ii",
        price: 30,
        img:
          "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/b1/e6/33/b1e633cf-57ee-0d47-7d65-4365e41eca2d/886449048410.jpg/300x300bb.webp",
        active: false,
      },
      {
        
        name: "youre-welcome",
        price: 45,
        img:
          "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/cd/52/05/cd520524-378f-2036-4eee-53d9a863311a/075679838162.jpg/300x300bb.webp",
        active: false,
      },
      {
        
        name: "When You See Yourself",
        price: 35,
        img:
          "https://is3-ssl.mzstatic.com/image/thumb/Video114/v4/ed/d6/8c/edd68c85-7ae7-c601-f479-56575a8bf961/Job07da2b08-a59a-4f21-bfb3-babcee9b80a6-109603343-PreviewImage_PreviewImageIntermediate_preview_image_nonvideo_vfcs108015037-Time1614197854706.png/300x300bb.webp",
        active: false,
      },
      {
        
        name: "NIRATIAS",
        price: 40,
        img:
          "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/0c/ee/55/0cee5518-58db-4ca9-ea14-38de5459ddfd/886448648000.jpg/300x300bb.webp",
        active: false,
      },
      {
        
        name: "Poster Girl",
        price: 50,
        img:
          "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/0c/99/5e/0c995e45-c27b-60a8-b24b-fb7f23f67ac1/886449023707.jpg/300x300bb.webp",
        active: false,
      },
      {
        
        name: " Mis Manos",
        price: 45,
        img:
          "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/6e/6d/00/6e6d00ce-9c1a-689c-24c4-80634a20ac52/886449097258.jpg/300x300bb.webp",
        active: false,
      },
      {
        
        name: "Coming 2 America ",
        price: 39,
        img:
          "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/64/ca/d5/64cad5cb-a963-0eee-39df-1a2f6cb1cc65/21UMGIM16384.rgb.jpg/300x300bb.webp",
        active: false,
      },
    ],
    s: [],
    data: [{}],
    Total: 0,
  },
  getters: {
    T: (state) => {
      return state.Total;
    },
    Menu: (state) => {
      return state.nun;
    },
    Order: (state) => (value, index) => {
      return state.select.push({
        name: state.nun[index].name,
        price: state.nun[index].price,
        value: value,
        Total: value * state.nun[index].price,
      });
    },
    ShowSelect: (state) => {
      return state.select;
    },
  },
  mutations: {
    //Clearสินค้า
    Clear: (state) => {
      for (let i = 0; i <= state.select.length; i++) {
        state.Total = 0;
        state.select = [];
      }
    },
    //รวมราคา
    Submit: (state) => {
      state.Total = 0;
      for (let i = 0; i <= state.select.length; i++) {
        state.Total = state.Total + state.select[i].Total;
      }
    },
  },
  actions: {},
  modules: {},
});