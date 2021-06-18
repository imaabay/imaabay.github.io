AFRAME.registerComponent('clickhandler', {
    schema:{
      modelId: {default: "#bottle-model"},
      videoId: {default: "#promotional"}
    },

    init: function() {
        console.log('In');
        //console.log(this.targetElement)
        this.targetElement = document.querySelector(this.data.modelId);
        //console.log(btn);
        var v = document.querySelector(this.data.videoId);
        console.log(v);
        this.targetElement.addEventListener('click', () => {
            //console.log('In Listener')
            alert('Clicked');
            v.play();
        });		
}});