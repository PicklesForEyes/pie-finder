$(document).ready(() => {

  $('#submit').on('click', (e) => {
    e.preventDefault();
    var userAnswers = [];
    for(var i = 0; i < 9; i++) {
      userAnswers.push($(`#answer${i + 1}`).val())
    }

    console.log(`userAnswers ${userAnswers}`)

    $.ajax({
      url: '/api/pies',
      method: 'GET',
      success: (data) => {
        $.each(data, (pie, values) => {
          var totalDiff = 0;
          console.log(`values ${JSON.stringify(values)}`)
          for(var i = 0; i < values.score.length; i++) {
            var diff = userAnswers[i] - values.score[i];
            if(diff < 0) {
              diff *= -1
            }
            console.log(`diffs ${diff}`)
            totalDiff += diff;
            console.log(`totalDiff ${totalDiff}`)
          }
          values.diff = totalDiff;
          console.log(`values.diff ${values.diff}`)
        })

        data.sort((a, b) => {
          return a.diff - b.diff;
        })
        console.log(data)
        $('#quiz-result-display').css('display', 'block');
        $('#pie-quiz').fadeOut();
        $('#quiz-result-name').text(data[0].type)
        $('#quiz-result-image').attr('src', data[0].image)
      }
    })
  })

  $('#add-pie').on('click', (e) => {
    e.preventDefault();

    var pie = $('#pie-name').val().trim();
    var image = $('#pie-image').val().trim();
        
    $.post('/api/pies', {type: pie, image: image}, (data) => {
      console.log(data)
    })
      $('#pie-name').val('')
      $('#pie-image').val('')
  })


  $('#open-modal').on('click', (e) => {
    e.preventDefault()
    $('#quiz-result-display').css('display', 'block')
  })

})