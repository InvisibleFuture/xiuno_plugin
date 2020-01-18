var kaomoji = {
    element: null,
    div: null,
    list: [
        '_(┐「ε:)_', '⚆_⚆', '(ÒωÓױ)呃！！！！', ' ʅ(‾◡◝)ʃ ', '。(;￢д￢)', 'ಸ_ಸ', '(ಥ_ಥ)',
        '(☆ω☆)', '乁( ◔ ౪◔)「', 'ʕ•̫͡•ʔ', '(ÒܫÓױ)', '(ÒωÓױ)', '(;´༎ຶД༎ຶ`)', '(ﾟﾛ ﾟﾉ)ﾉ', '(⺣◡⺣)',
        '(⇀‸↼‶)', '₍₍ (̨̡ ‾᷄ᗣ‾᷅ )̧̢ ₎₎', '_(´ཀ`」 ∠)_', '〣( ºΔº )〣', '( ˶ˇωˇ˶ )', '๐·°(৹˃̵﹏˂̵৹)°·๐',

        '⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄.', '(=ﾟωﾟ)ﾉ', ' (╭￣3￣)╭♡', '(/≥▽≤/)', '≖‿≖✧', '눈_눈', ',,Ծ‸Ծ,,',
        '（/TДT)/', 'ʅ（´◔౪◔）ʃ ', '(*￣∇￣*)', ' (*ﾟ▽ﾟ*) ', ' (｡･ω･)ﾉﾞ ', '(≡ω≡．)',
        '(｀･ω･´)', ' (´･ω･｀)', '(●´ω｀●)φ', '(╯‵□′)╯︵┻━┻ ', '(╬▔皿▔)', '(ノ｀Д´)ノ',
        'Σ( ° △ °|||)︴', '∑(っ °Д °;)っ', '(°□°；)', '╮(╯▽╰)╭ ', 'ㄟ( ▔, ▔ )ㄏ', '╮(╯_╰)╭ ',
        ' (→_→)', '(￣o￣) . z Z', 'o(￣ヘ￣*o)', '￣ε ￣', '￣ 3￣', '⊙ω⊙', '⊙﹏⊙', '⊙△⊙',
        '⊙▽⊙', '￣ˍ￣', '￣︿￣', '￣ω￣', '￣﹏￣', '￣△￣', '￣▽￣', '＞ˍ＜', '＞ω＜',
        '＞▽＜', '╯ 3╰', '╯ω╰', '╯﹏╰', '(｡・`ω´･)', '(σ｀・д･)σ', '(oﾟωﾟo)', '(￣、￣)',
        '(*￣△￣*)', '(￣□￣)', '(￣～￣；)', '(￣ε￣；)', '゜・(PД`q｡)・゜・', 'ヾ (o ° ω ° O ) ノ゙',
        ' ~ ( ゜- ゜)つロ 乾杯~ ', '(ノへ￣、)', 'o(*≧▽≦)ツ┏━┓拍桌狂笑', ' *★,°*:.☆\(￣▽￣)/$:*.°★*',
        '滚来滚去……~(～o￣▽￣)～o 。。。滚来滚去……o～(＿△＿o～) ~。。。',
    ],
    show: function () {
        if (!this.element) {
            this.element = document.createElement("div")
            this.element.style = "z-index:3;background:rgba(0,0,0,0); position:fixed; top:0; bottom:0; left:0; right:0; display:none; align-items:flex-end; transition: all .75s cubic-bezier(.645, .045, 0, 1);"
            this.element.onclick = () => { this.show() }

            this.div = document.createElement("div")
            this.div.style = "color:#555; position: relative; left: 0; bottom:-90%; display:flex; flex-direction:column; padding:32px 15px 20px; text-align:center; background:#ffffff; height:90%; width:100%; max-width:480px; margin:0 auto; border-radius:20px 20px 0 0; transition: all .75s cubic-bezier(.645, .045, 0, 1);"
            this.div.innerHTML = "<h3 style='font-size:20px'>(。・`ω´・) 颜文字</h3><p>welcome to text world :)</p>"
            this.div.onclick = (e) => { e.stopPropagation() }
            this.element.appendChild(this.div)

            let ul = document.createElement("ul")
            ul.id = "kaomojilist"
            ul.style = "display:flex; flex-wrap:wrap; justify-content:center; list-style:none; margin:0; padding:0; overflow-y:scroll;"
            this.div.appendChild(ul)

            this.list.forEach(item => {
                let li = document.createElement("li")
                li.style = "background:#e9fdff; border-radius:5px; padding: 5px 8px; font-size: 11px; margin: 4px;"
                li.innerText = item
                li.onclick = () => {
                    let tc = document.getElementById("message")
                    let tclen = tc.value.length; tc.focus()
                    if (typeof document.selection != "undefined") {
                        document.selection.createRange().text = item
                    } else {
                        tc.value = tc.value.substr(0, tc.selectionStart) + item + tc.value.substring(tc.selectionStart, tclen);
                    }
                    this.show()
                }
                ul.appendChild(li)
            })
            document.body.appendChild(this.element)
        }
        if (this.element.style.display == "none") {
            this.element.style.display = "flex"
            this.div.offsetWidth
            this.element.style.background = "rgba(0,0,0,.6)"
            this.div.style.bottom = "0px"
        } else {
            setTimeout(() => { this.element.style.display = "none" }, 450)
            this.element.style.background = "rgba(0,0,0,0)"
            this.div.style.bottom = "-90%"
        }
    }
}

function button() {
    this.element = document.createElement("button")
    this.element.type = "button"
    this.element.style = "border:none; border-radius:5px; color:#868e96; margin-left:12px; line-height: 1.5; padding: 3px 7px"
    this.element.innerText = "⊙ω⊙颜文字"
    this.element.onclick = () => { kaomoji.show() }
    return this.element
}


if (document.getElementById("submit")) {
    var style = document.createElement("style")
    style.type = "text/css"
    style.appendChild(document.createTextNode(`
        #kaomojilist::-webkit-scrollbar { width : 10px; height: 1px; }
        #kaomojilist::-webkit-scrollbar-thumb { border-radius:10px; background-color: skyblue; background-image: -webkit-linear-gradient( 45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent ); }
        #kaomojilist::-webkit-scrollbar-track { box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#ededed; border-radius:10px; }`
    ))
    document.head.appendChild(style)

    var submit = document.getElementById("submit")
    submit.parentNode.insertBefore(new button(), submit.nextSibling)
}