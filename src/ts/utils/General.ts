export function changeTitleWhenSwitchOtherTabs(){
    window.onload = function () {
      const pageTitle = document.title
      const attentionTitle = "Come Back"
      document.addEventListener('visibilitychange' , function () {
          if (document.hidden) {
              document.title = attentionTitle
          } else {
              document.title = pageTitle
          }
      })
    };
}