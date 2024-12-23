$(function () {
  $(".ajaxForm").submit(function (e) {
    e.preventDefault();
    var href = $(this).attr("action");
    $.ajax({
      type: "POST",
      dataType: "json",
      url: href,
      data: $(this).serialize(),
      success: function (response) {
        if (response.status == "success") {
          alert("Данные успешно отправлены");
          $(".ajaxForm")[0].reset();
        } else {
          alert("Произошла ошибка при отправке данных: " + response.message);
        }
      },
    });
  });
});
