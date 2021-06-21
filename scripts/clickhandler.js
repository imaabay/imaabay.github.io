AFRAME.registerComponent('clickhandler', {
    schema:{
      modelId: {default: "#bottle-model"},
      videoId: {default: "#promotional"}
    },

    init: function() {
        console.log('In');
        this.targetElement = document.querySelector(this.data.modelId);
        console.log(this.el);
        var v = document.querySelector(this.data.videoId);
        console.log(v);
        this.el.addEventListener("click", (e) => {
            //e.preventDefault();
            //console.log('In Listener');
            //alert('Clicked');
            v.play();
        });		
}});