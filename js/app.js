$(document).ready(function () {

  let url = "https://newsapi.org/v2/top-headlines?country=us&category=music&apiKey=6fd7d4acec454b16a2fa8a1d82a8ddd7";

  $.ajax({
    url: url,
    method: "GET",
    dataType: "JSON",

    beforeSend: function () {
      $(".progress").show();
    },

    complete: function () {
      $(".progress").hide();
    },

    success: function (newsdata) {
      let output = "";
      let latestNews = newsdata.articles;
      for (var i in latestNews) {
        output += `
          <div class="col l4 m6 s12">
          <div class="card medium hoverable grey">
            <div class="card-image">
              <img src="${latestNews[i].urlToImage}" class="responsive-img" alt="${latestNews[i].title}">
            </div>
            <div class="card-content text-dark">
              <h6 class="truncate"><b   title="${latestNews[i].title}">${latestNews[i].title}</b></h6>
              <p><b>News source</b>: ${latestNews[i].description} </p>
            </div>
           </div>
          </div>
        `;
      }

      if (output !== "") {
        $("#newsResults").html(output);
      }

    },

    error: function () {
      let errorMsg = `<div class="errorMsg center">Some error occured</div>`;
      $("#newsResults").html(errorMsg);
    }
  })

});