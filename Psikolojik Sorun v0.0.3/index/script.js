$(document).ready(
    function(){
        control();
        $('#color-mode-control').change(function() {
            var mode = $('#color-mode-control').prop('checked');
            if(localStorage.getItem("color-mode")){
                let color_mode = localStorage.removeItem('color-mode');
                localStorage.setItem('color-mode',mode);
            }
            localStorage.setItem("color-mode", mode);
            control();
        });
        function control(){
            if(localStorage.getItem("color-mode")){
                var mode = localStorage.getItem("color-mode");
                if(mode == 'true'){
                    $('#color-mode-black').show();
                    $('#color-mode-white').hide();

                    $('#color-mode-css').attr('href','style.css');

                }else{
                    $('#color-mode-black').hide();
                    $('#color-mode-white').show();

                    $('#color-mode-css').attr('href','light.css');
                }
            }
        }
})
