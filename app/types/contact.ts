export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface Content {
  hero: {
    title: {
      main: string;
      highlight: string;
    };
    subtitle: string;
  };
  form: {
    labels: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    submitButton: {
      idle: string;
      loading: string;
    };
    messages: {
      success: string;
      error: string;
    };
  };
  contact: {
    title: string;
    address: {
      title: string;
      content: string[];
    };
    email: {
      title: string;
      value: string;
    };
    phone: {
      title: string;
      value: string;
    };
  };
  map: {
    title: string;
    imageSrc: string;
    imageAlt: string;
  };
} 