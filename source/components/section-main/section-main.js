module.exports = (function(){
  const projectBtn = $('#projectBtn'),
        buildBtn = $('#buildBtn'),
        projectSection = $('#section-project'),
        buildSection = $('#section-building'),
        projectMore = $('.project-more'),
        buildMore = $('.build-more'),
        btnResize = $('.sections-wrap__btn');
        projectBtnBack = $('#projectBtnBack'),
        buildBtnBack = $('#buildBtnBack');
  
  function showMore(more) {    
    $(more).removeClass('hidden');    
  }  
  function back(more) {
    $(more).addClass('hidden');
  }       
  $(projectBtn).click($.proxy(showMore, null, projectMore));
  $(buildBtn).click($.proxy(showMore, null, buildMore));

  $(projectBtnBack).click($.proxy(back, null, projectMore));
  $(buildBtnBack).click($.proxy(back, null, buildMore));
})();