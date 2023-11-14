export const mixinconfig = {
    methods: {
        showName() {
            alert(this.name);
          }
    },
    //挂载完毕就执行
    mounted() {
        console.log('mounted');
    },
}


export const shareData = {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
}