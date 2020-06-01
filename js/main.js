$(document).ready(function(){
  $('#toggle-info1').on('click', function(){
    $('#info1').toggle();
  });
  $('#toggle-info2').on('click', function(){
    $('#info2').toggle();
  });
  $('#toggle-info3').on('click', function(){
    $('#info3').toggle();
  });
});

if(document.querySelectorAll('.anchors').length !== 0){
  new window.Draggable.Sortable(document.querySelectorAll('.anchors'), { draggable: 'p', delay: 200 })
.on('drag:start', () => console.log('drag:start'))
.on('drag:move',  () => console.log('drag:move'))
.on('drag:stop',  () => console.log('drag:stop'));
}

$(document).on('input', '#year-range', function() {
  let value = $(this).val();
  $('#ground #Vector_43').attr('transform', 'scale(' + (1 + value/200) + ')');
});