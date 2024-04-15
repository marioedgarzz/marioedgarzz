const showOnScroll = (sectionId, setIsVisible) => {
  const handleScroll = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      const { top } = section.getBoundingClientRect();
      setIsVisible(top - window.innerHeight <= -200);
    }
  };
  window.addEventListener('scroll', handleScroll);
}

export default showOnScroll
