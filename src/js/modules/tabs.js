const tabs = (headerSelector, tabSelector, contentSelector, active, displayView = 'block') => {
    const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent(){
        content.forEach(item => {
            item.style.display = 'none';
        })
        
        tabs.forEach(tab => {
            tab.classList.remove(active)
        })
    }

    function showTabContent(i = 0){
        content[i].style.display = displayView;
        tabs[i].classList.add(active)
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if(target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))){
            tabs.forEach((item, i) => {
                if(target == item || target.parentNode == item){
                    hideTabContent();
                    showTabContent(i)
                }
            })
        }
    })
}

export default tabs;