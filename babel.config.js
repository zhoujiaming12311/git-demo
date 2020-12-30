// babel-preset-env
// 根据你支持的环境自动决定适合你的Babel插件,以支持不同版本ECMA规范
const presets = [
    ["@babel/env",{
        targets:{
            edge:"17",
            firefox:"60",
            chrome:"67",
            safari:"11.1"
        }
    }]
];
module.exports={presets};