const isMobileView = () => {
    // this commented for testing mobile view
    if(typeof window != "undefined"){
        return window.innerWidth < 768;
    }
    // return false;
};

export default isMobileView();