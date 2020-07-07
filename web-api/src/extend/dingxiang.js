const CaptchaSDK = require('dx-captcha-sdk')
const conf = require('../config/dingxiang')
const sdk = new CaptchaSDK(conf.appId, conf.appSecret)

const context = {
    async checkCaptchaToken(token) {
        try {
            const res = await sdk.verifyToken(token, 5 * 1000);
            return res.result;
        } catch (e) { return false }
    }
}

module.exports = {
    context
}