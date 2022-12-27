const hidePlayAndPause = (playB) => {
    console.log(playB)
    playB.attr('data-play', 'play')
    playB.addClass('opacity-0')
    playB.removeClass('opacity-70')
  }
  const showPlayAndPause = (playB) => {
    playB.attr('data-play', 'pause')
    playB.removeClass('opacity-0')
    playB.addClass('opacity-70')
  }

  const onscrollVideo = () => {
    console.log($(this).scrollTop())

    $('video').each(function (index, element) {
      // element == this
      // console.log(element)
      // console.log($(element).offset().top)
      console.log($(element).hasClass('play'))
      if ($(element).hasClass('play')) {
        console.log('stop')
        $('#seeker').css('width', '0px')
        $(element).trigger('pause')
        const playButton = $(element).siblings('.play')
        showPlayAndPause(playButton)
      }
      // if ($(this).scrollTop() >= $(element).offset().top) {
      //   $(element).trigger('play')
      //   const playButton=$(element).siblings(".play")
      //   hidePlayAndPause(playButton)
      // }
    })
  }
  $('.video-show').scroll(() => {
    console.log($(this).scrollTop())

    $('video').each(function (index, element) {
      // element == this
      // console.log(element)
      // console.log($(element).offset().top)
      console.log($(element).hasClass('play'))
      if ($(element).hasClass('play')) {
        console.log('stop')
        $('#seeker').css('width', '0px')
        $(element).trigger('pause')
        const playButton = $(element).siblings('.play')
        $(element).toggleClass('play')
        showPlayAndPause(playButton)
      }
    })
  })

  document.querySelectorAll('.play').forEach((pb) => {
    pb.onclick = (e) => {
      const position = $(window).scrollTop()
      let playVideo
      const video = $(pb).attr('data-target')
      const videoStatus = $(pb).attr('data-play')
      const playB = $(pb)
      vid = document.getElementById(`${video}`)
      vid.ontimeupdate = function () {
        var percentage = (vid.currentTime / vid.duration) * 100
        $('#seeker').css('width', percentage + '%')
      }
      if (videoStatus == 'pause') {
        $(`#${video}`).trigger('play')
        $(`#${video}`).toggleClass('play')
        hidePlayAndPause(playB)
      } else {
        $(`#${video}`).toggleClass('play')
        $(`#${video}`).trigger('pause')
        showPlayAndPause(playB)
      }
    }
  })