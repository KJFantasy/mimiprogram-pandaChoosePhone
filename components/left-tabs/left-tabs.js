Component({
  properties: {
    tabs: {
      type: Array,
      value: [],
    },
  },
  data: {},
  methods: {
    handleItemTap(e) {
      // console.log(e);
      const { index } = e.currentTarget.dataset;
      this.triggerEvent("itemChange", {index});
    },
  },
});
