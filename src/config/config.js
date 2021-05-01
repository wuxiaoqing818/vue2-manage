let baseUrl;
let configUrl = "https://www.baidu.com"
if (process.env.NODE_ENV == 'development') {
    baseUrl = 'https://dev.com';
} else if (process.env.NODE_ENV == 'debug') {
    baseUrl = '';
} else if (process.env.NODE_ENV == 'production') {
    baseUrl = 'https://pro.com';
}
let config={
    baseUrl,
    configUrl
};
export default config;