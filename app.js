Vue.createApp({
    data() {
      return {
        result:0,
        message:'',

      }
    },
    methods: {
        add(num){
            this.result = this.result+num;
        }
    },
    watch:{
        result(){
            const that = this;
            if(this.result > 0 && this.result <= 37) this.message = 'Not there yet';
            if(this.result > 37) this.message = 'Too much!';

            setTimeout(() => { 
                that.result = 0;
                that.message ='';
            },5000);
        }, 

    }
  }).mount('#assignment');