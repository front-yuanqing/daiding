/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...



    
    let str=''
    
    var count=0
    let arr=[]

    fn()
    function fn(){
        let str=''
        for(var i=0;i<arr.length;i++){
            str+=`
            <li>
                <input type="checkbox" />
                <p onclick="edit(1)" >${arr[i]}</p>
                <a href="javascript:remove(1)">-</a>
            </li>
        `
        }

    $('.demo-box').html(str)
    
    del()
    
    }
    
    var inp=document.querySelector("#title")




document.onkeydown = function (e) { 

        e=e||window.event
        e.stopPropagation()
        var code = e.keyCode ||e.which ||e.charCode;
        if(inp.value==0) return
        if(code!==13)return
        if(code==13){
            var val=inp.value.trim()
            
            
            arr.push(val)
            $('.demo-box').html('')
            $('#todocount').html(`${arr.length}`)
            
            count++
        }
        inp.value=''
        del()
        fn()
        
        return false
    }
    del()
    function del(){
        $('li').on('click','input',function(){
            console.log($(this).next().data('id'))
            $(this).parent().remove()

            const id = $(this).data('id')
        
        })
        
    }




    
    
    
     
    



