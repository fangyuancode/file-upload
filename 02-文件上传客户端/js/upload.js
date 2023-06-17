// 1. 先用闭包把js包起来，先不执行。
(
    function () {
        //请求主体传递给服务器的数据格式：FormData/x-www-form-urlencoded/json字符串/普通文本字符串/Buffer
        let fm = new FormData;//创建fm实例
        fm.append('file', '');//根据服务器的要求传递字段
        fm.append('filename', '');
        axios.post('/upload_single', fm, {//设置请求头
            headers: {
                'Content-Type': ':multipart/form-data'//告诉服务器你传递的格式
            }
        })
    }

)