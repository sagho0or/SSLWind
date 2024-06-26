import isMobileView from "@/app/utils/isMobileView";

const defaultSidebarStatus = () => {
  if (isMobileView){
      return false
  }else {
      return true
  }
}

export default defaultSidebarStatus();