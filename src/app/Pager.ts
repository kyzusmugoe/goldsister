
export default (menus: menuObj[]) => {
    menus.map((item: menuObj, index: number) => {

        const menu = document.querySelector(item.menu) ? document.querySelector(item.menu) : null
        let _t: HTMLElement;

        document.querySelectorAll(item.btn).forEach(btn => {
            btn.addEventListener("click", (event: Event) => {
                _t = btn as HTMLElement
                //關閉所有menu以及按鈕
                menus.map((MO: menuObj) => {
                    const _m = document.querySelector(MO.menu) as HTMLElement
                    const _b = document.querySelector(MO.btn) as HTMLElement
                    if (_m) {
                        _m.classList.remove('on')

                        if (_b) {
                            if (_t != _b) {
                                _b.classList.remove('on')
                            } else {
                                _t.classList.toggle('on')
                            }
                        }
                    }
                })

                //group
                let gbtn: HTMLElement | undefined
                item.group.map((btnName: string) => {
                    if (document.querySelector(btnName)) {
                        gbtn = document.querySelector(btnName) as HTMLElement
                    } else {
                        //console.log("group:open 找不到" + btnName)
                    }
                })

                if (gbtn != undefined) {
                    if (_t == gbtn) {
                        if (!gbtn.classList.contains("on")) {

                            console.log("off")
                            menu?.classList.remove('on')
                            menu?.classList.add('off')
                            _t.classList.remove('on')
                            _t.classList.add('off')

                            //group
                            item.group.map((btnName: string) => {
                                const btn: HTMLElement = document.querySelector(btnName) as HTMLElement
                                if (btn) {
                                    btn.classList.remove("on")
                                    btn.classList.add("off")
                                } else {
                                    console.log("group:close 找不到" + btnName)
                                }
                            })
                            return
                        }
                    }

                    gbtn.classList.add('on')
                    gbtn.classList.remove('off')
                    menu?.classList.add('on')
                    menu?.classList.remove('off')
                } else {
                    if (_t.classList.contains('on')) {
                        menu?.classList.add('on')
                        menu?.classList.remove('off')
                    } else {
                        menu?.classList.remove('on')
                        menu?.classList.add('off')
                    }
                }
            })
        })


        if (menu) {
            menu.querySelector(".close")?.addEventListener("click", (event: Event) => {
                menu.classList.remove('on')
                menu.classList.add('off')
                _t.classList.remove('on')
                _t.classList.add('off')

                //group
                item.group.map((btnName: string) => {
                    const btn: HTMLElement = document.querySelector(btnName) as HTMLElement
                    if (btn) {
                        btn.classList.remove("on")
                        btn.classList.add("off")
                    } else {
                        console.log("group:close 找不到" + btnName)
                    }
                })
            })
            
            //item.menu == ".mobile" &&
                menu.addEventListener("click", (event: Event) => {
                    //console.log(event.target == menu)
                    if (event.target == menu) {
                        //menu.classList.contains("on") &&
                            menu.classList.remove('on')
                        //menu.classList.contains("off") &&
                            menu.classList.add('off')
                        _t?.classList.remove('on')
                        
                        /*const _m: HTMLElement = event.target as HTMLElement;
                        if (_m.classList.contains("mobile")) {
                            _m.classList.remove('on')
                            _m.classList.add('off')
                            _t.classList.remove('on')
                        }*/
                    }
                })
        }
    })

}




