class Drag {
    constructor(dom){
        this.dom = dom
        this.parentDom = dom.parentNode
        this.isDrag = false
        this.defaultX = 0
        this.defaultY = 0
        this.init()
    }
    init(){
        this.bind()
    }
    bind(){
        // 绑定事件
        this.dom.addEventListener('click',(e)=>{
            if(!this.isDrag){
                this.isDrag = true
                this.dom.style.boxShadow = '10px 10px 10px #c1c1c1'
                this.defaultX = e.x
                this.defaultY = e.y
            }else{
                this.isDrag = false
                this.dom.style.boxShadow = 'none'
            }
        })
        this.parentDom.addEventListener('mousemove',(e)=>{
            if(this.isDrag){
                let currentLeft = this.dom.offsetLeft+e.x - this.defaultX
                let currentTop = this.dom.offsetTop+ e.y - this.defaultY
                if(currentLeft<0){
                    currentLeft = 0
                }
                if(currentLeft>this.parentDom.offsetWidth - this.dom.offsetWidth){
                    currentLeft = this.parentDom.offsetWidth - this.dom.offsetWidth
                }
                if(currentTop<0){
                    currentTop = 0
                }
                if(currentTop>this.parentDom.offsetHeight - this.dom.offsetHeight){
                    currentTop = this.parentDom.offsetHeight - this.dom.offsetHeight
                }
                this.dom.style.left = currentLeft+'px'
                this.dom.style.top =currentTop+'px'
                this.defaultX = e.x
                this.defaultY = e.y
            }
        })
    }
}