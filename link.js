$(function() {
  $(document).on('click', 'a', function() {
    chrome.tabs.create({url: this.href});
  })
})
