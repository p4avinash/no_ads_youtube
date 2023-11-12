document.addEventListener("readystatechange", (event) => {
  if (document.readyState == "complete") {
    console.log("working")
    if (document.querySelector(".ytp-error-content-wrap-reason") != null) {
      console.log("need to reload")
      window.location.reload()
    } else {
      console.log("no reload needed")
    }
  }
})
