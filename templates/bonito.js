
document.addEventListener("DOMContentLoaded", function () {
  const iconView = document.querySelector("#iconView");
  const xIcon = document.querySelector("#xIcon");
  const containerList = document.querySelector(".container-navigation");
  const navigation = document.querySelector(".navigation");

  if (iconView && xIcon && containerList && navigation) {
    iconView.addEventListener("click", () => {
      xIcon.style.display = "block";
      iconView.style.display = "none";
      containerList.style.display = "block";
      navigation.style.display = "block";
    });

    xIcon.addEventListener("click", () => {
      xIcon.style.display = "none";
      iconView.style.display = "block";
      containerList.style.display = "none";
      navigation.style.display = "none";
    });
  }

  
  const iconAbout = document.querySelector(".fa-users-line");
  const iconVideo = document.querySelector(".fa-video");
  const divAbout = document.getElementById("info-creators");
  const iconDescription = document.querySelector(".fa-address-card");
  let tooltip;

  
  function createTooltip(element, text) {
    if (!element) return; 

    element.addEventListener("mouseenter", (event) => {
      if (tooltip) tooltip.remove(); 

      tooltip = document.createElement("div");
      tooltip.classList.add("custom-tooltip");
      tooltip.innerText = text;
      document.body.appendChild(tooltip);

      let rect = event.target.getBoundingClientRect();
      tooltip.style.left = `${rect.left + window.scrollX}px`;
      tooltip.style.top = `${rect.top + window.scrollY - 30}px`;
    });

    element.addEventListener("mouseleave", () => {
      if (tooltip) tooltip.remove();
    });
  }

  createTooltip(iconAbout, "Conoce a los creadores");
  createTooltip(iconVideo, "Información sobre el video");
  createTooltip(iconDescription, "Porque Lety?");
  
  if (iconAbout && divAbout) {
    iconAbout.addEventListener("click", () => {
      divAbout.style.display = "inline-block";
      setTimeout(() => {
        divAbout.style.display = "none";
      }, 6000);
    });
  }
});
