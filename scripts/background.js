chrome.runtime.onInstalled.addListener(async () => {
  chrome.contextMenus.create({
    id: "all",
    title: "No Ads Youtube - p4avinash",
    type: "normal",
    contexts: ["all"],
  })
})

chrome.contextMenus.onClicked.addListener((info) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url
    if (url.includes("youtube.com")) {
      let selectedUrl = info.linkUrl
      let videoId = selectedUrl.split("?v=")[1]
      let customURL = `https://www.youtube-nocookie.com/embed/${videoId}?playlist=${videoId}&autoplay=1&iv_load_policy=3&loop=1&start=`

      if (selectedUrl.includes("youtube.com/shorts")) {
        chrome.tabs.create({ url: selectedUrl })
      } else {
        chrome.tabs.create({ url: customURL })
      }
    }
  })
})
