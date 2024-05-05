const myToast = $('#liveToast')
const myModal = $('#exampleModal')

$("#form-collapse").on('show.bs.collapse' , event => {
  $("#arrow_down").toggleClass("rotate180");
  $("#banner-form-container").toggleClass("w-50");

  if($('#gallery-collapse').hasClass('show'))
  {  
    $('#gallery-collapse').collapse('hide');
  }
});

$("#form-collapse").on('hide.bs.collapse' , event => {
  $("#arrow_down").toggleClass("rotate180");
  $("#banner-form-container").toggleClass("w-50");
});

$("#gallery-collapse").on('show.bs.collapse' , event =>{
  $("#arrow_down2").toggleClass("rotate180");
  $("#banner-files-container").toggleClass("w-50");

  if($('#form-collapse').hasClass('show'))
  {  
    $('#form-collapse').collapse('hide');
  }
});

$("#gallery-collapse").on('hide.bs.collapse' , event =>{
  $("#arrow_down2").toggleClass("rotate180");
  $("#banner-files-container").toggleClass("w-50");
});


function SelectCheck(iId){
  if($("#Check" + iId).prop("checked") == true)
  {
    $("#Check" + iId).prop("checked", false);
    $("#fm-item-label" + iId).css("opacity", "");
  }
  else
  {
    $("#Check" + iId).prop("checked", true);
    $("#fm-item-label" + iId).css("opacity", "1");
  }
}

function readyStateChanged() {
  if(document.readyState == 'interactive' || document.readyState == 'complete')
  {
    $("#loading-div").css("display", "none");
    $("#complete-div").css("display", "block");
  }
  else
  {
    $("#complete-div").css("display", "none");
    $("#loading-div").css("display", "block");
  }
}

$(document).on('readystatechange', readyStateChanged); 


$('#submit-banners').on('click', () => {
  $.ajax({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      url: "/savebanners",
      type: "POST",
      data: {
          'banner_alto': $('#banner_alto').val(),
          'banner_basso': $('#banner_basso').val(),
        },
      success: function(response) {
        var $response = $(response);

        $('#banner_alto').val($response[0].data.bannerUp);
        $('#banner_basso').val($response[0].data.bannerDown);


        $('#toast-text').html($response[0].message);
        myToast.toast('show');
      },
      error: function(xhr) {
        $('#toast-text').html('C\'è stato un errore');
        myToast.toast('show');
      }
  });
});

$('#upload-meme').on('click', () => {
  var formData = new FormData();

  formData.append('image', $('#up-meme').prop('files')[0]);

  $.ajax({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      url: "/savememe",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function(response) {
        var $response = $(response);

        const myToast = $('#liveToast')
        const myModal = $('#exampleModal')
        
        myModal.modal('hide');
        $('#toast-text').html($response[0].message);
        myToast.toast('show');

        var imageToAppend = $(".file-item:first").clone();

        imageToAppend.find(".fm-img").attr("src", $response[0].path);
        imageToAppend.find(".custom-control-input").attr("id", "Check" + $response[0].id);

        if($response[0].path.indexOf("mp4") > 0 || $response[0].path.indexOf("mov") > 0|| $response[0].path.indexOf("avi") > 0)
        {
          imageToAppend.find(".fm-img").attr("id", "Video " + $response[0].id);
          imageToAppend.find(".custom-control-label").html("Video " + $response[0].id);
        }
        else
        {
          imageToAppend.find(".fm-img").attr("id", "Image " + $response[0].id);
          imageToAppend.find(".custom-control-label").html("Image " + $response[0].id);
        }

        imageToAppend.find(".file-item-name").attr("href", "javascript:SelectCheck(" + $response[0].id + ");");

        $(".file-item:last").after(imageToAppend);
      },
      error: function(xhr) {
        $('#toast-text').html('C\'è stato un errore');
        myToast.toast('show');
      }
  });
});

$('#delete-btn').on('click', () => {
  var aImages = [];
  $('.custom-control-input:checkbox:checked').each(function() {
    aImages.push(($(this).parent().parent().find('.fm-img').attr('src')));
  });

  var jsonImages = JSON.stringify(aImages); // Convert aImages to JSON

  console.log(jsonImages);
  
  $.ajax({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      url: "/deletememe",
      type: "POST",
      dataType : 'json',
      data: {
        'images': jsonImages,
      },
      success: function(response) {
        var $response = $(response);

        $('.custom-control-input:checkbox:checked').each(function() {
          ($(this).parent().parent().remove());
        });
      
        $('#toast-text').html($response[0].message);
        myToast.toast('show');
      },
      error: function(xhr) {
        $('#toast-text').html('C\'è stato un errore');
        myToast.toast('show');
      }
  });

});
