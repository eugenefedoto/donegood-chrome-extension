$(function () {
    var imgSrc = chrome.extension.getURL('visit-donegood.jpg');
    
    $('body').append(`<div id="myModal" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <p style="text-align: center;"><a href="http://donegood.co/"><strong>Visit DoneGood.co</strong></a></p>
        <img width="100px" height="100px" style="display: block;
  margin-left: auto;
  margin-right: auto;" src="${imgSrc}">
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->`
);
    
    $('#myModal').modal();
});