const apiBaseUrl = 'http://0.0.0.0:8080';

export function request(options) {
  options.url = apiBaseUrl + options.url;
  return wx.request(options)
};