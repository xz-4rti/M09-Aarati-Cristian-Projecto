document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    // the path to your .kdenlive file
    const fileUrl = "path/to/your/file.kdenlive";
    const fileName = "project.kdenlive";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
