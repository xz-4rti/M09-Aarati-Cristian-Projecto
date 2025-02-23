document
  .getElementById("downloadButton")
  .addEventListener("click", function () {

    const fileUrl = "";
    const fileName = "lethalcompany.kdenlive";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
