<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      // timeData: [
      //   "00:00-01:00",
      //   "02:00-12:00",
      //   "12:00-14:00",
      //   "14:01-15:00",
      //   "15:01-17:00",
      //   "17:00-18:00"
      // ]
      timeData: [
        "01:00-03:00",
        "03:00-05:00",
        "12:00-14:00",
        "17:00-18:00",
        "17:00-19:00",
        "17:00-21:00"
      ]
    };
  },
  created() {
    // console.log(this.joinTime(this.timeData));
    // alert(11);
    const a = [
      "01:00-03:00",
      "03:00-05:00",
      "12:00-14:00",
      "17:00-18:00",
      "17:00-19:00",
      "17:00-21:00"
    ];
    // const a = [
    //   "01:00-03:00",
    //   "03:00-05:00",
    //   "04:00-14:00",
    //   "12:00-16:00",
    //   "17:00-18:00"
    // ];
    let j = a.length - 1;
    for (let i = 0; i < j; ) {
      const { start, end } = a[i].match(/(?<start>.*)\-(?<end>.*)/).groups;
      const { start2, end2 } = a[i + 1].match(
        /(?<start2>.*)\-(?<end2>.*)/
      ).groups;
      if (!(start2 > end || start2 < start)) {
        a[i] = `${start}-${end2}`;
        a.splice(i + 1, 1);
        j--;
      } else {
        i++;
      }
    }
    console.log(a);
  },
  methods: {
    // joinTime(data) {
    //   var result = [];
    //   let tempArr = data.slice(0);
    //   console.log(tempArr);
    //   while (tempArr.length) {
    //     let current = tempArr.shift();
    //     if (!tempArr.length) break;
    //     let joinItem = tempArr.find(
    //       time => current.slice(-5) === time.slice(0, 5)
    //     );
    //     if (joinItem) {
    //       result.push(`${current.slice(0, 5)}-${joinItem.slice(-5)}`);
    //       tempArr.shift();
    //     } else {
    //       result.push(current);
    //     }
    //   }
    //   return result;
    // }
  }
};
</script>

<style>
</style>