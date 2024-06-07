export const navLinks = [
    {
      label: "Home",
      route: "/",
      icon: "/assets/icons/home.png",
    },
    {
      label: "Noise No More",
      route: "/transformations/add/restore",
      icon: "/assets/icons/image.png",
    },
    {
      label: "Zoomify Pro",
      route: "/transformations/add/fill",
      icon: "/assets/icons/stars.png",
    },
    {
      label: "Text2Image",
      route: "/image-generator",
      icon: "/assets/icons/menu.png",
    },
    {
      label: "EraseMaster",
      route: "/transformations/add/remove",
      icon: "/assets/icons/scan.png",
    },
    {
      label: "ColorShift",
      route: "/transformations/add/recolor",
      icon: "/assets/icons/filter.png",
    },
   
    {
      label: "Bye-Bye Background",
      route: "/transformations/add/removeBackground",
      icon: "/assets/icons/camera.png",
    },
    {
      label: "Buy Credits",
      route: "/credits",
      icon: "/assets/icons/bag.png",
    },
    {
      label: "Profile",
      route: "/profile",
      icon: "/assets/icons/profile.png",
    },
  ];
  
  export const plans = [
    {
      _id: 1,
      name: "Free",
      icon: "/assets/icons/free-plan.png",
      price: 0,
      credits: 20,
      inclusions: [
        {
          label: "20 Free Credits",
          isIncluded: true,
        },
        {
          label: "Basic Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: false,
        },
        {
          label: "Priority Updates",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 2,
      name: "Pro Package",
      icon: "/assets/icons/free-plan.png",
      price: 40,
      credits: 120,
      inclusions: [
        {
          label: "120 Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
        {
          label: "Priority Updates",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 3,
      name: "Premium Package",
      icon: "/assets/icons/free-plan.png",
      price: 199,
      credits: 2000,
      inclusions: [
        {
          label: "2000 Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
        {
          label: "Priority Updates",
          isIncluded: true,
        },
      ],
    },
  ];
  
  export const transformationTypes = {
    restore: {
      type: "restore",
      title: "Noise No More",
      subTitle: "Refine images by removing noise and imperfections",
      config: { restore: true },
      icon: "image.png",
    },
    removeBackground: {
      type: "removeBackground",
      title: "Bye-Bye Background",
      subTitle: "Removes the background of the image using AI",
      config: { removeBackground: true },
      icon: "camera.png",
    },
    fill: {
      type: "fill",
      title: "Zoomify Pro",
      subTitle: "Enhance an image's dimensions using AI outpainting",
      config: { fillBackground: true },
      icon: "stars.png",
    },
    remove: {
      type: "remove",
      title: "EraseMaster",
      subTitle: "Identify and eliminate objects from images",
      config: {
        remove: { prompt: "", removeShadow: true, multiple: true },
      },
      icon: "scan.png",
    },
    recolor: {
      type: "recolor",
      title: "ColorShift",
      subTitle: "Identify and recolor objects from the image",
      config: {
        recolor: { prompt: "", to: "", multiple: true },
      },
      icon: "filter.png",
    },
  };
  
  export const aspectRatioOptions = {
    "1:1": {
      aspectRatio: "1:1",
      label: "Square (1:1)",
      width: 1000,
      height: 1000,
    },
    "3:4": {
      aspectRatio: "3:4",
      label: "Standard Portrait (3:4)",
      width: 1000,
      height: 1334,
    },
    "9:16": {
      aspectRatio: "9:16",
      label: "Phone Portrait (9:16)",
      width: 1000,
      height: 1778,
    },
  };
  
  export const defaultValues = {
    title: "",
    aspectRatio: "",
    color: "",
    prompt: "",
    publicId: "",
  };
  
  export const creditFee = -1;