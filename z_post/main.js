/*表情添加*/
function showEmoji(ele){
  var the_face=$(ele).closest('.face_top').next()
  if(the_face.hasClass('emoji_section')){
    $(ele).removeClass("to_show");
    the_face.removeClass('emoji_section').find('ul').remove()
  }else{
    $(ele).addClass("to_show").siblings().removeClass("to_show")
    the_face.find('ul').remove()
    the_face.removeClass('face_section emoji_section').addClass('emoji_section').append(show_emojis())
  }
}
function showFace(ele){
  var the_face=$(ele).closest('.face_top').next()
    if(the_face.hasClass('face_section')){
      $(ele).removeClass("to_show");
      the_face.removeClass('face_section').find('ul').remove()
    }else{
      $(ele).addClass("to_show").siblings().removeClass("to_show")
      the_face.find('ul').remove()
      the_face.removeClass('face_section emoji_section').addClass('face_section').append(show_faces())
    }
}
function show_emojis(){
    var faceList = [" (๑• . •๑) ", " ˋ( ° ▽、° ) ", " (^人^) ", " _(:3」∠)_ ", " →_→ ", " ←_← ", " (*^．^*) ", " ٩(๑`^´๑)۶ ", " ╮(╯_╰)╭ ",
                            " ヾ(′▽｀*)ゝ ", " o(≧v≦)o~~ ", " ↖(^ω^)↗ ", " ヽ( ^∀^)ﾉ ", " ‵(*∩_∩*)′ ", " (/≧▽≦)/~ ", " ㄟ( ▔, ▔ )ㄏ ", 
                            " ~(￣▽￣~) ", " (~￣▽￣)~ ", " /(ㄒoㄒ)/~~ ", " (*/ω＼*) ", " ≧▽≦蛤蛤蛤 ", " (°ー°〃) ", " ヾ(￣▽￣) ", 
                            " (╯°Д°）╯︵ ", " (☆ω☆) ", " \@_\@ ", " (*´艸`)、 ", " QAQ ", " (⊙o⊙) ", " (×_×)昏倒 ", " ( ˘•㉨•˘ ) ", 
                            " ヾ(´(ｴ)｀ﾉﾞ ", " ฅ( ̳• ◡ • ̳)ฅ ", " ⊙﹏⊙‖∣ ", " (｡•ˇ‸ˇ•｡) ", " ╭(╯^╰)╮ ", " ( •̀∀•́ ) ", " o(&gt;﹏&lt;)o ", 
                            " (ˉ▽￣～) 切~~ ", " ⊙ω⊙ ", " =。=b ", " =3333= ", " (ง •̀_•́)ง ", " &lt;(＿　＿)&gt; ", " o(￣ヘ￣o＃) ", " ヽ(￣д￣;)ノ ", 
                            " ヽ(=^･ω･^=)丿 ", " ( ^_^ )/~~拜 ", " Orz ", " ♪(^∇^*) ", " (ฅ´ω`ฅ)留爪 ", " ( ´◔ ‸◔') ", " (*^．^*) ", " p(^_^)q ", 
                            " ┗( T﹏T )┛ ", " (ˉ▽ˉ；) ", " Õ_Õ ", " 눈_눈 ", " o(一︿一+)o ", " (〃￣︶￣)人(￣︶￣〃) "]
            
            var reply_display_emoji ='';
            var emoji_li='';
            var len_emoji=faceList.length;
            for (var i=0; i<len_emoji; i++) {
                emoji_li += "<li  onclick=\"addEmoji(this, '"+faceList[i]+"');\">"+faceList[i]+ "</li>";
            }
            reply_display_emoji ='<ul>'+emoji_li+'</ul>';
            return reply_display_emoji
}
function addFace(item, imgUlr) {
    var $write_reply=$(item).closest('.add_icons').parent();
    var img_str = "<img src='"+imgUlr+"'></img>";
    $write_reply.find('.in_write').append(img_str).focus()
    $write_reply.find('.add_icons').removeClass('face_section').find('ul').remove()
    $write_reply.find('.face_top li').removeClass()
    placeCaretAtEnd($write_reply.find('.in_write').get(0));
}
function addEmoji(item, str) {
    var $write_reply=$(item).closest('.add_icons').parent();
    $write_reply.find('.in_write').append(str).focus()
    $write_reply.find('.add_icons').removeClass('emoji_section').find('ul').remove()
    $write_reply.find('.face_top li').removeClass('to_show')
    placeCaretAtEnd($write_reply.find('.in_write').get(0));
}

function placeCaretAtEnd(el) {
      el.focus();
      if (typeof window.getSelection != "undefined"
              && typeof document.createRange != "undefined") {
          var range = document.createRange();
          range.selectNodeContents(el);
          range.collapse(false);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
      } else if (typeof document.body.createTextRange != "undefined") {
          var textRange = document.body.createTextRange();
          textRange.moveToElementText(el);
          textRange.collapse(false);
          textRange.select();
      }
} 

//这是增加回复输入框的调用按钮触发
function showReply(ele){
  var toReply=null
  if ($(ele).closest('.more_reply_right').length>0) {
      toReply="回复 @"+$(ele).closest('.more_reply_right').find('.user_reply_name').html()+"："
  }else{
    toReply=''
  }
  var replyDiv="<div class='write_reply'>"+
                      "<div>"+
                          "<div id='write_container' class='in_write' contenteditable='true'>"+toReply+"</div>"+
                      "</div>"+
                      "<div id='face_top' class='face_top'>"+
                          "<ul id='face_btn' class='clr'>"+
                              "<li onclick='showEmoji(this)'>(・ω・)颜文字</li>"+
                              "<li onclick='showFace(this)'><img  src='/static/image/face_01.png'></li>"+
                          "</ul>"+
                          "<div class='f2'><span onclick='cancelReply(this)' style='margin-right:10px;'>取消</span><span class='ie2' onclick='send_comment(this)'>发送</span></div>"+
                      "</div>"+
                      "<div id='add_icons' class='add_icons'></div>"+
                    "</div>"
  if ($(ele).parents().find('.write_reply').length>0) {
    if ($(ele).closest('.user_reply_time').siblings('.write_reply').length>0) {
      $(ele).parents().find('.write_reply').detach()
    }else{
      $(ele).parents().find('.write_reply').detach()
      $(replyDiv).insertAfter($(ele).closest('.user_reply_time'))
    }
  }else{
      $(replyDiv).insertAfter($(ele).closest('.user_reply_time'))
  
   placeCaretAtEnd($(ele).closest('.reply_right').find('.in_write').get(0));
  }
  $('[contenteditable]').each(function() {
    // 干掉IE http之类地址自动加链接
    try {
        document.execCommand("AutoUrlDetect", false, false);
    } catch (e) {}
    
    $(this).on('paste', function(e) {
        e.preventDefault();
        var text = null;
    
        if(window.clipboardData && clipboardData.setData) {
            // IE
            text = window.clipboardData.getData('text');
        } else {
            text = (e.originalEvent || e).clipboardData.getData('text/plain') || prompt('在这里输入文本');
        }
        if (document.body.createTextRange) {    
            if (document.selection) {
                textRange = document.selection.createRange();
            } else if (window.getSelection) {
                sel = window.getSelection();
                var range = sel.getRangeAt(0);
                
                // 创建临时元素，使得TextRange可以移动到正确的位置
                var tempEl = document.createElement("span");
                tempEl.innerHTML = "&#FEFF;";
                range.deleteContents();
                range.insertNode(tempEl);
                textRange = document.body.createTextRange();
                textRange.moveToElementText(tempEl);
                tempEl.parentNode.removeChild(tempEl);
            }
            textRange.text = text;
            textRange.collapse(false);
            textRange.select();
        } else {
            // Chrome之类浏览器
            document.execCommand("insertText", false, text);
        }
    });
    // 去除Crtl+b/Ctrl+i/Ctrl+u等快捷键
    $(this).on('keydown', function(e) {
        // e.metaKey for mac
        if (e.ctrlKey || e.metaKey) {
            switch(e.keyCode){
                case 66: //ctrl+B or ctrl+b
                case 98: 
                case 73: //ctrl+I or ctrl+i
                case 105: 
                case 85: //ctrl+U or ctrl+u
                case 117: {
                    e.preventDefault();    
                    break;
                }
            }
        }    
    });
});
}
function cancelReply(ele){
    $(ele).closest('.write_reply').detach()
}
