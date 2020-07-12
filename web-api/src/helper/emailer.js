const nodemailer = require('nodemailer');

const mailer = {};

const transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: think.config('email').acc || '961595030@qq.com',
        pass: think.config('email').psw
    }
});

mailer.send = async function (opt) {
    if(!opt){
        return;
    }
    let mailOptions = {
        from: opt.from || think.config('email').acc || '961595030@qq.com', // 发送者
        to: opt.to, // 接受者,可以同时发送多个,以逗号隔开
        subject: opt.title || '邮件', // 标题
        html: opt.content,
        attachments: opt.attachments || []
    };

    return new Promise((res, rej)=>{
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                rej(err);
            }else{
                res(info);
            }
        });
    });
}

module.exports = mailer;