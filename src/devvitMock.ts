const mockDevvit = {
    addMenuItem: (config: any) => {
      console.log('Mock Menu Item:', config.label);
    },
    addTrigger: (config: any) => {
      console.log('Mock Trigger:', config.event);
    },
    addCustomPostType: (config: any) => {
      console.log('Mock Custom Post Type:', config.name);
    },
    configure: (config: any) => {
      console.log('Mock Configuration:', config);
    },
  };
  
  export default mockDevvit;
