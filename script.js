// Define the parameter name
const paramName = 'iframe_url';

// Get the value of the parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const iframeUrl = urlParams.get(paramName);

// If the parameter is present, inject an iFrame into the page
if (iframeUrl) {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', iframeUrl);
  iframe.setAttribute('style', 'width: 100%; height: 500px;');
  document.body.appendChild(iframe);

  // Create a hover button on top of the iFrame
  const button = document.createElement('button');
  button.textContent = 'Click me';
  button.setAttribute('style', 'position: absolute; top: 10px; right: 10px; z-index: 999;');
  iframe.contentWindow.document.body.appendChild(button);
}
